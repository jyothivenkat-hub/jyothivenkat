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
async function loadSubstackArticles() {
    const grid = document.getElementById('articles-grid');
    if (!grid) return;

    const FEED_URL = 'https://api.allorigins.win/raw?url=' + encodeURIComponent('https://jyothiwrites.substack.com/feed');

    try {
        const response = await fetch(FEED_URL);
        if (!response.ok) throw new Error('Feed fetch failed');

        const xmlText = await response.text();
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
