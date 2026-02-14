// Mobile menu toggle
const mobileToggle = document.querySelector('.nav-mobile-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
        mobileToggle.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            mobileToggle.classList.remove('active');
        });
    });
}

// Navbar background on scroll
const nav = document.querySelector('.nav');
if (nav) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            nav.style.boxShadow = '0 1px 8px rgba(0,0,0,0.06)';
        } else {
            nav.style.boxShadow = 'none';
        }
    });
}

// Simple scroll animation for stat cards
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animate elements on scroll
function animateOnScroll(elements) {
    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        observer.observe(el);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.stat-card, .article-card, .project-card, .timeline-item');
    animateOnScroll(animateElements);
});

// --- Substack RSS Feed (Writing page) ---
async function fetchFeed(substackUrl) {
    // Try multiple CORS proxies in order of reliability
    const proxies = [
        (url) => `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`,
        (url) => `https://corsproxy.io/?${encodeURIComponent(url)}`,
        (url) => `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(url)}`,
    ];

    for (const makeUrl of proxies) {
        try {
            const proxyUrl = makeUrl(substackUrl);
            const response = await fetch(proxyUrl);
            if (!response.ok) continue;

            const data = await response.json().catch(() => null);
            // allorigins returns { contents: "..." }, others return raw text
            const xmlText = data?.contents || await response.text();

            if (xmlText && xmlText.includes('<item>')) return xmlText;
        } catch (e) {
            continue;
        }
    }

    // Last resort: try raw fetch (works if Substack adds CORS headers in future)
    try {
        const response = await fetch(substackUrl);
        if (response.ok) return await response.text();
    } catch (e) {}

    throw new Error('All feed proxies failed');
}

// Categorize an article by keyword matching on title + description
function categorizeArticle(title, description) {
    const text = (title + ' ' + description).toLowerCase();

    // AI & Building keywords
    const aiKeywords = ['ai ', 'ai-', 'claude', 'agent', 'llm', 'builder', 'maker', 'prototype', 'build', 'ship', 'game', 'cursor', 'gemini', 'slop', 'cowork', '0→1', '0->1'];
    // Leadership keywords
    const leadershipKeywords = ['ceo', 'leadership', 'leader', 'ruthless', 'lessons', 'trust', 'high stakes', 'executive', 'c-suite'];
    // Research & Strategy keywords
    const researchKeywords = ['research', 'ux', 'metric', 'accuracy', 'calibration', 'bias', 'training', 'blind spot', 'methodology', 'framework'];

    const aiScore = aiKeywords.filter(k => text.includes(k)).length;
    const leadershipScore = leadershipKeywords.filter(k => text.includes(k)).length;
    const researchScore = researchKeywords.filter(k => text.includes(k)).length;

    // Pick the highest scoring category
    if (aiScore >= leadershipScore && aiScore >= researchScore && aiScore > 0) return 'ai';
    if (leadershipScore >= researchScore && leadershipScore > 0) return 'leadership';
    if (researchScore > 0) return 'research';
    return 'ai'; // default bucket
}

function createArticleLink(title, link, formattedDate) {
    const item = document.createElement('a');
    item.href = link;
    item.target = '_blank';
    item.rel = 'noopener noreferrer';
    item.className = 'article-link';
    item.innerHTML = `
        <span class="article-link-title">${title}</span>
        <span class="article-link-date">${formattedDate}</span>
    `;
    return item;
}

function parseArticle(item) {
    const title = item.querySelector('title')?.textContent || '';
    const link = item.querySelector('link')?.textContent || '#';
    const rawDesc = item.querySelector('description')?.textContent || '';
    const pubDate = item.querySelector('pubDate')?.textContent || '';

    // Strip HTML tags and truncate description
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = rawDesc;
    let description = tempDiv.textContent.trim();
    if (description.length > 160) {
        description = description.substring(0, 157) + '...';
    }

    // Format date
    const date = new Date(pubDate);
    const formattedDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const category = categorizeArticle(title, description);

    return { title, link, description, formattedDate, category };
}

function renderGroupedArticles(container, articles) {
    const categories = [
        { key: 'leadership', label: 'Leadership & The CEO Office' },
        { key: 'ai', label: 'AI & The Researcher-Maker' },
        { key: 'research', label: 'Research & Product Strategy' },
    ];

    container.innerHTML = '';

    categories.forEach(cat => {
        const catArticles = articles.filter(a => a.category === cat.key);
        if (catArticles.length === 0) return;

        const column = document.createElement('div');
        column.className = 'articles-column';

        const header = document.createElement('h2');
        header.className = 'articles-column-title';
        header.textContent = cat.label;
        column.appendChild(header);

        const list = document.createElement('div');
        list.className = 'articles-list';

        catArticles.forEach(article => {
            list.appendChild(createArticleLink(article.title, article.link, article.formattedDate));
        });

        column.appendChild(list);
        container.appendChild(column);
    });

    // Animate columns
    animateOnScroll(container.querySelectorAll('.articles-column'));
}

async function loadSubstackArticles() {
    const container = document.getElementById('articles-container');
    if (!container) return;

    try {
        const xmlText = await fetchFeed('https://jyothiwrites.substack.com/feed');
        const parser = new DOMParser();
        const xml = parser.parseFromString(xmlText, 'text/xml');
        const items = xml.querySelectorAll('item');

        if (items.length === 0) throw new Error('No articles found');

        const articles = Array.from(items).map(parseArticle);
        renderGroupedArticles(container, articles);

    } catch (error) {
        console.error('RSS feed error:', error);
        container.innerHTML = `
            <div class="articles-error">
                <p>Unable to load articles right now.</p>
                <a href="https://jyothiwrites.substack.com" target="_blank" class="btn btn-primary">Read on Substack</a>
            </div>
        `;
    }
}

// Load articles if on Writing page
document.addEventListener('DOMContentLoaded', loadSubstackArticles);
