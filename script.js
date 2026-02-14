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

async function loadSubstackArticles() {
    const grid = document.getElementById('articles-grid');
    if (!grid) return;

    try {
        const xmlText = await fetchFeed('https://jyothiwrites.substack.com/feed');
        const parser = new DOMParser();
        const xml = parser.parseFromString(xmlText, 'text/xml');
        const items = xml.querySelectorAll('item');

        if (items.length === 0) throw new Error('No articles found');

        grid.innerHTML = '';

        items.forEach(item => {
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

            const card = document.createElement('a');
            card.href = link;
            card.target = '_blank';
            card.rel = 'noopener noreferrer';
            card.className = 'article-card';
            card.innerHTML = `
                <span class="article-source">Substack</span>
                <h3>${title}</h3>
                <p>${description}</p>
                <span class="article-date">${formattedDate}</span>
            `;

            grid.appendChild(card);
        });

        // Re-run scroll animations on the new cards
        animateOnScroll(grid.querySelectorAll('.article-card'));

    } catch (error) {
        console.error('RSS feed error:', error);
        grid.innerHTML = `
            <div class="articles-error">
                <p>Unable to load articles right now.</p>
                <a href="https://jyothiwrites.substack.com" target="_blank" class="btn btn-primary">Read on Substack</a>
            </div>
        `;
    }
}

// Load articles if on Writing page
document.addEventListener('DOMContentLoaded', loadSubstackArticles);
