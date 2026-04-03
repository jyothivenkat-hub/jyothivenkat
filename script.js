// ============================================
// jyothivenkat.com — Script
// ============================================

// --- Data ---

const projects = [
    {
        title: 'AI-Native Research Architecture',
        category: 'Infrastructure',
        description: 'A first-principles architecture for AI-native research teams that turns human meaning into scalable systems.',
        featured: true,
        url: 'https://jv-airesearch.vercel.app/',
        image: 'https://picsum.photos/seed/ai-arch/1200/800',
    },
    {
        title: 'The Researcher-Maker Thesis',
        category: 'Thought Leadership',
        description: 'A new paradigm where researchers don\'t just report — they build the solutions they discover.',
        featured: false,
        url: 'https://jyothiwrites.substack.com/p/the-researcher-maker-build-0-1-products',
        image: 'https://picsum.photos/seed/thesis/800/600',
    },
    {
        title: 'AI News Agent',
        category: 'Agents',
        description: 'A build log of an autonomous agent that synthesizes global news into strategic briefs.',
        featured: false,
        url: 'https://jyothiwrites.substack.com/p/build-an-ai-news-agent-in-3-steps',
        image: 'https://picsum.photos/seed/agent/800/600',
    },
    {
        title: 'IdeaForge',
        category: 'Product',
        description: 'From insights to ideas: A proprietary system for validated product innovation. Inspired by Andrej Karpathy\'s work.',
        featured: false,
        url: 'https://llm-knowledge-base-nine.vercel.app/',
        image: 'https://picsum.photos/seed/forge/800/600',
    },
    {
        title: 'Missastroglow',
        category: 'Apps',
        description: 'AI Astro App. Still in the works.',
        featured: false,
        url: '',
        image: 'https://picsum.photos/seed/astro/800/600',
    },
    {
        title: 'Nature Walk App',
        category: 'Apps',
        description: 'A UX study in presence and environmental awareness.',
        featured: false,
        url: 'https://maps-3-d-exploration.vercel.app/',
        image: 'https://picsum.photos/seed/nature/800/600',
    },
    {
        title: 'Starcatch Game',
        category: 'Games',
        description: 'A fast prototype that turns AI-assisted development into a playable 0 to 1 game experience.',
        featured: false,
        url: 'https://starcatch-game.vercel.app/',
        image: 'https://picsum.photos/seed/starcatch/800/600',
    },
];

const articles = [
    {
        title: "The CEO's Office: 8 Ruthless Lessons on High Stakes Leadership",
        date: "2026-03-15",
        description: "What I learned operating from the CEO office at a global crypto exchange — and why most leaders never get this close to the fire.",
        url: "https://jyothiwrites.substack.com/p/the-ceos-office-8-ruthless-lessons",
        category: "Leadership & The CEO Office",
        thumbnail: "https://picsum.photos/seed/ceo-office/800/600",
    },
    {
        title: "The Researcher-Maker: Build 0→1 Products with AI",
        date: "2026-03-10",
        description: "Why the next generation of researchers must learn to ship code, not just decks.",
        url: "https://jyothiwrites.substack.com/p/the-researcher-maker-build-0-1-products",
        category: "AI & The Researcher-Maker",
        thumbnail: "https://picsum.photos/seed/maker/800/600",
    },
    {
        title: "Build an AI News Agent in 3 Steps",
        date: "2026-02-28",
        description: "Automating morning research for $0 with Python and Claude. A technical build log.",
        url: "https://jyothiwrites.substack.com/p/build-an-ai-news-agent-in-3-steps",
        category: "AI & The Researcher-Maker",
        thumbnail: "https://picsum.photos/seed/news-agent/800/600",
    },
    {
        title: "Why Most UX Research Fails to Influence the C-Suite",
        date: "2026-02-15",
        description: "What executives actually want from research teams — and what keeps most researchers from delivering it.",
        url: "https://medium.com/@JyothiVenkat23/why-most-ux-research-fails-to-influence-the-c-suite-89294926fa34",
        category: "Leadership & The CEO Office",
        thumbnail: "https://picsum.photos/seed/csuite/800/600",
    },
    {
        title: "Why 'Research Slop' is a Distraction",
        date: "2026-02-01",
        description: "Stop policing AI output. Start delivering functional artifacts that drive decisions.",
        url: "https://jyothiwrites.substack.com/p/why-research-slop-is-a-distraction",
        category: "Research & Product Strategy",
        thumbnail: "https://picsum.photos/seed/slop/800/600",
    },
    {
        title: "Is Claude Cowork a 10x Multiplier or Just Expensive?",
        date: "2026-01-20",
        description: "Stress-testing AI productivity tools for real ROI in research workflows.",
        url: "https://jyothiwrites.substack.com/p/is-claude-cowork-a-10x-multiplier",
        category: "AI & The Researcher-Maker",
        thumbnail: "https://picsum.photos/seed/claude-cowork/800/600",
    },
    {
        title: "Framework: How to Choose a UX Research Methodology",
        date: "2026-01-05",
        description: "A decision framework for qual, quant, and mixed-methods research.",
        url: "https://medium.com/@JyothiVenkat23/framework-how-to-choose-a-ux-research-methodology-b42f7194e94a",
        category: "Research & Product Strategy",
        thumbnail: "https://picsum.photos/seed/framework/800/600",
    },
];

const editorPicks = articles.slice(0, 3);

// --- Mobile Menu ---

document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.nav-mobile-toggle');
    const menu = document.getElementById('mobile-menu');

    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            menu.classList.toggle('active');
            toggle.setAttribute('aria-expanded', menu.classList.contains('active'));
        });

        menu.querySelectorAll('.mobile-link').forEach(link => {
            link.addEventListener('click', () => menu.classList.remove('active'));
        });
    }

    // --- Scroll Animations ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // --- Page-specific init ---
    initWorkPage();
    initWritingPage();
});

// --- Work Page ---

function initWorkPage() {
    const filtersContainer = document.getElementById('work-filters');
    const gridContainer = document.getElementById('work-grid');
    if (!filtersContainer || !gridContainer) return;

    const categories = ['All', ...new Set(projects.map(p => p.category))];
    let activeCategory = 'All';

    function renderFilters() {
        filtersContainer.innerHTML = '';
        categories.forEach(cat => {
            const btn = document.createElement('button');
            btn.className = `pill-btn${cat === activeCategory ? ' active' : ''}`;
            btn.textContent = cat;
            btn.addEventListener('click', () => {
                activeCategory = cat;
                renderFilters();
                renderProjects();
            });
            filtersContainer.appendChild(btn);
        });
    }

    function renderProjects() {
        const filtered = activeCategory === 'All'
            ? projects
            : projects.filter(p => p.category === activeCategory);

        gridContainer.innerHTML = '';

        filtered.forEach((project, i) => {
            const isFeatured = project.featured && activeCategory === 'All';
            const isLive = Boolean(project.url);
            const card = document.createElement(isLive ? 'a' : 'article');
            if (isLive) {
                card.href = project.url;
                card.target = project.url.startsWith('http') ? '_blank' : '';
                card.rel = 'noopener';
            }
            card.className = `project-card${isFeatured ? ' featured' : ''}`;
            if (!isLive) {
                card.classList.add('project-card-disabled');
            }
            card.style.animationDelay = `${i * 0.05}s`;

            card.innerHTML = `
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}" referrerpolicy="no-referrer" loading="lazy">
                    <div class="hover-overlay">
                        <div class="hover-circle">
                            ${isLive
                                ? '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>'
                                : '<span class="project-status-label">In Progress</span>'}
                        </div>
                    </div>
                </div>
                <div class="project-meta">
                    <div class="category">${project.category}</div>
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                </div>
            `;

            gridContainer.appendChild(card);
        });
    }

    renderFilters();
    renderProjects();
}

// --- Writing Page ---

function initWritingPage() {
    const picksContainer = document.getElementById('picks-container');
    const filtersContainer = document.getElementById('writing-filters');
    const listContainer = document.getElementById('articles-list');
    const searchInput = document.getElementById('article-search');

    if (!filtersContainer || !listContainer) return;

    const categoryNames = ['All', 'Leadership & The CEO Office', 'AI & The Researcher-Maker', 'Research & Product Strategy'];
    let activeCategory = 'All';
    let searchQuery = '';

    // Editor's Picks
    if (picksContainer) {
        editorPicks.forEach(art => {
            const card = document.createElement('a');
            card.href = art.url;
            card.target = '_blank';
            card.rel = 'noopener';
            card.className = 'pick-card';
            card.innerHTML = `
                <div class="image-wrapper">
                    <img src="${art.thumbnail}" alt="${art.title}" referrerpolicy="no-referrer" loading="lazy">
                </div>
                <div class="category">${art.category}</div>
                <h3>${art.title}</h3>
                <p>${art.description}</p>
            `;
            picksContainer.appendChild(card);
        });
    }

    function renderFilters() {
        filtersContainer.innerHTML = '';
        categoryNames.forEach(cat => {
            const btn = document.createElement('button');
            btn.className = `pill-btn${cat === activeCategory ? ' active' : ''}`;
            btn.textContent = cat;
            btn.addEventListener('click', () => {
                activeCategory = cat;
                renderFilters();
                renderArticles();
            });
            filtersContainer.appendChild(btn);
        });
    }

    function renderArticles() {
        let filtered = activeCategory === 'All'
            ? articles
            : articles.filter(a => a.category === activeCategory);

        if (searchQuery) {
            const q = searchQuery.toLowerCase();
            filtered = filtered.filter(a =>
                a.title.toLowerCase().includes(q) || a.description.toLowerCase().includes(q)
            );
        }

        listContainer.innerHTML = '';

        filtered.forEach(art => {
            const date = new Date(art.date);
            const formatted = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

            const row = document.createElement('a');
            row.href = art.url;
            row.target = '_blank';
            row.rel = 'noopener';
            row.className = 'article-row';
            row.innerHTML = `
                <div class="date">${formatted}</div>
                <div>
                    <h3>${art.title}</h3>
                    <div class="description">${art.description}</div>
                </div>
                <div class="read-link">
                    <span>Read Article <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></span>
                </div>
            `;
            listContainer.appendChild(row);
        });
    }

    // Search
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value;
            renderArticles();
        });
    }

    renderFilters();
    renderArticles();
}
