// ============================================
// jyothivenkat.com — Script
// ============================================

// --- Data ---

const projects = [
    {
        title: 'The Research Maker Thesis',
        category: 'Thought Leadership',
        description: 'A four-part sequence on going from research to shipped prototypes.',
        featured: true,
        articleUrl: 'https://substack.com/home/post/p-186362849',
        extraLinks: [
            { label: 'Step 1', url: 'https://substack.com/home/post/p-186893274' },
            { label: 'Step 2', url: 'https://substack.com/home/post/p-187695339' },
            { label: 'Step 3', url: 'https://substack.com/home/post/p-188414492' },
        ],
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Outdoor_Kindle_reader_(Unsplash).jpg',
    },
    {
        title: 'AI Native Research Architecture',
        category: 'Infrastructure',
        description: 'A first-principles system for AI native research teams.',
        featured: false,
        liveUrl: 'https://jv-airesearch.vercel.app/',
        articleUrl: 'https://jyothiwrites.substack.com/p/the-ai-native-researcher-how-to-build',
        extraLinks: [
            { label: '7 Levels', url: 'https://jyothiwrites.substack.com/p/the-7-levels-of-ai-augmented-research' },
        ],
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Modern_architecture.jpg',
    },
    {
        title: 'AI News Agent',
        category: 'Agents',
        description: 'A daily digest agent for tracking and synthesizing signal.',
        featured: false,
        repoUrl: 'https://github.com/jyothivenkat-hub/ai-news-agent',
        articleUrl: 'https://jyothiwrites.substack.com/p/build-an-ai-news-agent-in-3-steps',
        image: 'https://picsum.photos/seed/agent/800/600',
    },
    {
        title: 'LLM to Wiki',
        category: 'Infrastructure',
        description: 'A living wiki with search, Q&A, and knowledge capture.',
        featured: false,
        liveUrl: 'https://llm-knowledge-base-nine.vercel.app/',
        repoUrl: 'https://github.com/jyothivenkat-hub/llm-knowledge-base',
        articleUrl: 'https://jyothiwrites.substack.com/p/i-built-a-system-that-turns-research',
        image: 'AdobeStock_623238309.jpeg',
    },
    {
        title: 'Noveaire',
        category: 'Product',
        description: 'A content intelligence platform for creators, built around analytics, AI experiments, and content generation.',
        featured: false,
        liveUrl: 'https://noveaire-cloud.vercel.app/',
        repoUrl: 'https://github.com/jyothivenkat-hub/noveaire-cloud',
        image: 'https://picsum.photos/seed/noveaire/800/600',
    },
    {
        title: 'Autoresearch',
        category: 'Agents',
        description: 'A Karpathy-inspired workflow for automated research loops.',
        featured: false,
        repoUrl: 'https://github.com/jyothivenkat-hub/autoresearch',
        articleUrl: 'https://jyothiwrites.substack.com/p/karpathys-autoresearch-set-up-in',
        image: 'AdobeStock_1958090578.jpeg',
    },
    {
        title: 'Missastroglow',
        category: 'Apps',
        description: 'An AI astrology app built around guidance and conversation.',
        featured: false,
        liveUrl: 'https://misastroglowai.vercel.app/',
        image: 'https://picsum.photos/seed/astro/800/600',
    },
    {
        title: 'Nature Walk App',
        category: 'Apps',
        description: 'A UX study in presence, place, and environmental awareness.',
        featured: false,
        liveUrl: 'https://maps-3-d-exploration.vercel.app/',
        articleUrl: 'https://jyothiwrites.substack.com/p/i-built-a-jaw-dropping-360-nature',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Light_in_a_Redwood_Grove_(16088169345).jpg',
    },
    {
        title: 'Starcatch Game',
        category: 'Games',
        description: 'A fast 0-to-1 game prototype built with AI-assisted development.',
        featured: false,
        liveUrl: 'https://starcatch-game.vercel.app/',
        repoUrl: 'https://github.com/jyothivenkat-hub/Starcatch_Game',
        articleUrl: 'https://jyothiwrites.substack.com/p/the-researcher-maker-build-0-1-products',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Stars_in_the_night_sky_(Unsplash).jpg',
    },
];

const fallbackArticles = [
    {
        title: "LLMs Are Not Brains, and Here Is What Is Actually Missing for AGI",
        date: "2026-04-08",
        description: "A long-form essay on what large language models can do, what they cannot, and the concrete capabilities still missing for AGI.",
        url: "https://jyothiwrites.substack.com/p/llms-are-not-brains-and-here-is-what",
        category: "AI Systems & AGI",
        thumbnail: "https://substackcdn.com/image/fetch/$s_!N5-H!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb95aa379-5e24-4388-bfe0-d9e74d8959ef_2816x1536.png",
    },
    {
        title: "I Built a System That Turns Research Into a Living Wiki, Knowledge Graph, and Product Ideas",
        date: "2026-04-05",
        description: "A practical walkthrough for turning research into a reusable knowledge base, graph, and idea engine in five steps.",
        url: "https://jyothiwrites.substack.com/p/i-built-a-system-that-turns-research",
        category: "Research Systems",
        thumbnail: "https://substackcdn.com/image/fetch/$s_!1rrB!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7edd8004-5eef-4a01-97a1-c2b858eaefed_2772x1546.png",
    },
    {
        title: "OpenClaw: I Set Up a 24/7 AI Assistant on a Mac Mini: Here is How in 5 Steps",
        date: "2026-03-29",
        description: "A hands-on setup guide for running a persistent AI assistant on local hardware and turning it into an always-on operator.",
        url: "https://jyothiwrites.substack.com/p/openclaw-i-set-up-a-247-ai-assistant",
        category: "AI Build Guides",
        thumbnail: "https://substackcdn.com/image/fetch/$s_!dubF!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb68c035e-af4f-4d68-8b05-64feb07fc878_2778x1536.png",
    },
    {
        title: "Stop Arguing About AI and Give It 60 Minutes of Your Craft",
        date: "2026-03-25",
        description: "A blunt argument for moving past AI discourse and using focused practice time to see where the tools actually help.",
        url: "https://jyothiwrites.substack.com/p/stop-arguing-about-ai-and-give-it",
        category: "AI Commentary",
        thumbnail: "https://substack-post-media.s3.amazonaws.com/public/images/548f0ca1-f376-43a4-8d0b-272f74323b23_2760x1504.png",
    },
    {
        title: "AI in Practice: The Review Mar 14 - 20th 2026",
        date: "2026-03-22",
        description: "A weekly review of AI tools and workflows tested for UX research, design, product, and engineering work.",
        url: "https://jyothiwrites.substack.com/p/ai-in-practice-the-review-mar-14",
        category: "AI Tool Reviews",
        thumbnail: "https://substack-post-media.s3.amazonaws.com/public/images/fed725c2-e915-4a4e-a549-53e83506d5df_2816x1536.png",
    },
    {
        title: "The 7 Levels of AI Augmented Research",
        date: "2026-03-17",
        description: "A framework for understanding where research teams are today and what it takes to evolve toward AI-augmented practice.",
        url: "https://jyothiwrites.substack.com/p/the-7-levels-of-ai-augmented-research",
        category: "Research Systems",
        thumbnail: "https://substackcdn.com/image/fetch/$s_!lFjO!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F516a8f9c-f008-49b2-be8c-b4a4f530e304_2816x1536.png",
    },
    {
        title: "Karpathy's autoresearch: Set Up in 3 Steps",
        date: "2026-03-14",
        description: "What autoresearch is, how it works, and how to get it running quickly with practical use cases to try.",
        url: "https://jyothiwrites.substack.com/p/karpathys-autoresearch-set-up-in",
        category: "AI Build Guides",
        thumbnail: "https://substack-post-media.s3.amazonaws.com/public/images/5f6b3008-1842-4a86-8a6a-cecef286b096_2752x1536.png",
    },
    {
        title: "I Built a Jaw Dropping 360° Nature App with Google AI Studio + Claude + Codex (Steal My 5-Step Blueprint)",
        date: "2026-03-12",
        description: "A build breakdown of the 360° nature app, including workflow, tools, and the five-step blueprint behind it.",
        url: "https://jyothiwrites.substack.com/p/i-built-a-jaw-dropping-360-nature",
        category: "AI Build Guides",
        thumbnail: "https://substack-post-media.s3.amazonaws.com/public/images/b80af2d2-38af-4688-b708-5709b4bef315_2516x1537.png",
    },
];

const SUBSTACK_FEED_URL = 'https://jyothiwrites.substack.com/feed';
const SUBSTACK_FEED_SOURCES = [
    '/api/substack-feed',
    `https://api.allorigins.win/raw?url=${encodeURIComponent(SUBSTACK_FEED_URL)}`,
    `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(SUBSTACK_FEED_URL)}`,
];
const ARTICLES_PREVIEW_LIMIT = 8;

function decodeHtmlEntities(value) {
    const textarea = document.createElement('textarea');
    textarea.innerHTML = value;
    return textarea.value;
}

function stripHtml(value) {
    return value.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

function normalizeText(value) {
    if (!value) return '';
    return stripHtml(decodeHtmlEntities(value)).trim();
}

function inferArticleCategory(title, description) {
    const haystack = `${title} ${description}`.toLowerCase();

    if (haystack.includes('agi') || haystack.includes('llm') || haystack.includes('brains')) {
        return 'AI Systems & AGI';
    }
    if (haystack.includes('review') || haystack.includes('tools tested') || haystack.includes('weekly')) {
        return 'AI Tool Reviews';
    }
    if (haystack.includes('research') || haystack.includes('wiki') || haystack.includes('knowledge graph')) {
        return 'Research Systems';
    }
    if (
        haystack.includes('build') ||
        haystack.includes('set up') ||
        haystack.includes('blueprint') ||
        haystack.includes('app') ||
        haystack.includes('assistant')
    ) {
        return 'AI Build Guides';
    }

    return 'AI Commentary';
}

function getCategoryNames(items) {
    return ['All', ...new Set(items.map(article => article.category))];
}

function normalizeDate(value) {
    const parsed = new Date(value);
    if (Number.isNaN(parsed.getTime())) {
        return '';
    }
    return parsed.toISOString().slice(0, 10);
}

function createArticleCard(article) {
    const card = document.createElement('a');
    card.href = article.url;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
    card.className = 'pick-card';

    const imageWrapper = document.createElement('div');
    imageWrapper.className = 'image-wrapper';
    const image = document.createElement('img');
    image.src = article.thumbnail;
    image.alt = article.title;
    image.referrerPolicy = 'no-referrer';
    image.loading = 'lazy';
    imageWrapper.appendChild(image);

    const category = document.createElement('div');
    category.className = 'category';
    category.textContent = article.category;

    const heading = document.createElement('h3');
    heading.textContent = article.title;

    const description = document.createElement('p');
    description.textContent = article.description;

    card.append(imageWrapper, category, heading, description);
    return card;
}

function createArticleRow(article) {
    const row = document.createElement('a');
    row.href = article.url;
    row.target = '_blank';
    row.rel = 'noopener noreferrer';
    row.className = 'article-row';

    const dateElement = document.createElement('div');
    dateElement.className = 'date';
    dateElement.textContent = new Date(article.date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    });

    const content = document.createElement('div');
    const heading = document.createElement('h3');
    heading.textContent = article.title;
    const description = document.createElement('div');
    description.className = 'description';
    description.textContent = article.description;
    content.append(heading, description);

    const readLink = document.createElement('div');
    readLink.className = 'read-link';
    const readText = document.createElement('span');
    readText.innerHTML = 'Read Article <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>';
    readLink.appendChild(readText);

    row.append(dateElement, content, readLink);
    return row;
}

function parseSubstackFeedXml(xmlText) {
    const xml = new DOMParser().parseFromString(xmlText, 'text/xml');
    const items = Array.from(xml.querySelectorAll('item'));

    return items.map(item => {
        const title = normalizeText(item.querySelector('title')?.textContent || '');
        const description = normalizeText(item.querySelector('description')?.textContent || '');
        const url = item.querySelector('link')?.textContent?.trim() || '';
        const date = item.querySelector('pubDate')?.textContent || '';
        const thumbnail = item.querySelector('enclosure')?.getAttribute('url') || 'https://picsum.photos/seed/writing/800/600';

        return {
            title,
            description,
            url,
            date: normalizeDate(date),
            category: inferArticleCategory(title, description),
            thumbnail,
        };
    }).filter(article => article.title && article.url && article.date);
}

function parseSubstackFeedJson(payload) {
    if (!payload?.items?.length) return [];

    return payload.items.map(item => {
        const title = normalizeText(item.title || '');
        const description = normalizeText(item.description || item.contentSnippet || '');
        const thumbnail = item.thumbnail || item.enclosure?.link || 'https://picsum.photos/seed/writing/800/600';
        const url = item.url || item.link || '';

        return {
            title,
            description,
            url,
            date: normalizeDate(item.pubDate || item.isoDate || ''),
            category: inferArticleCategory(title, description),
            thumbnail,
        };
    }).filter(article => article.title && article.url && article.date);
}

async function fetchLatestSubstackArticles() {
    for (const source of SUBSTACK_FEED_SOURCES) {
        try {
            const response = await fetch(source);
            if (!response.ok) {
                continue;
            }

            if (source === '/api/substack-feed' || source.includes('rss2json.com')) {
                const payload = await response.json();
                const parsed = parseSubstackFeedJson(payload);
                if (parsed.length) return parsed;
                continue;
            }

            const text = await response.text();
            const parsed = parseSubstackFeedXml(text);
            if (parsed.length) return parsed;
        } catch (error) {
            // Try the next source. The page still has a local fallback list.
        }
    }

    return [];
}

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
    const topGridContainer = document.getElementById('work-top-grid');
    const filtersContainer = document.getElementById('work-filters');
    const gridContainer = document.getElementById('work-grid');
    if (!filtersContainer || !gridContainer || !topGridContainer) return;

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

    function createProjectCard(project, i, isFeatured) {
        const primaryUrl = project.liveUrl || project.repoUrl || project.articleUrl || '';
        const hasPrimaryUrl = Boolean(primaryUrl);
        const card = document.createElement('article');
        card.className = `project-card${isFeatured ? ' featured' : ''}${project.editorial ? ' project-card-editorial' : ''}`;
        if (!hasPrimaryUrl) {
            card.classList.add('project-card-disabled');
        }
        card.style.animationDelay = `${i * 0.05}s`;

        const linkItems = [
            project.liveUrl ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-link">Live</a>` : '',
            project.repoUrl ? `<a href="${project.repoUrl}" target="_blank" rel="noopener noreferrer" class="project-link">GitHub</a>` : '',
            project.articleUrl ? `<a href="${project.articleUrl}" target="_blank" rel="noopener noreferrer" class="project-link">Article</a>` : '',
            ...(project.extraLinks || []).map(link =>
                `<a href="${link.url}" target="_blank" rel="noopener noreferrer" class="project-link">${link.label}</a>`
            ),
        ].filter(Boolean).join('<span class="project-link-divider" aria-hidden="true">/</span>');

        if (project.editorial) {
            card.innerHTML = `
                <div class="project-editorial-panel">
                    <div class="project-editorial-grid" aria-hidden="true"></div>
                    <div class="project-editorial-accent" aria-hidden="true"></div>
                    <div class="project-meta">
                        <div class="category">${project.category}</div>
                        <h3>${hasPrimaryUrl
                            ? `<a href="${primaryUrl}" target="_blank" rel="noopener noreferrer" class="project-title-link">${project.title}</a>`
                            : project.title}</h3>
                        <p>${project.description}</p>
                        ${linkItems ? `<div class="project-links">${linkItems}</div>` : ''}
                    </div>
                </div>
            `;
            return card;
        }

        card.innerHTML = `
            <a class="project-image-link" href="${primaryUrl || '#'}" ${hasPrimaryUrl ? 'target="_blank" rel="noopener noreferrer"' : 'aria-disabled="true" tabindex="-1"'}>
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}" referrerpolicy="no-referrer" loading="lazy">
                    <div class="hover-overlay">
                        <div class="hover-circle">
                            ${hasPrimaryUrl
                            ? '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>'
                            : '<span class="project-status-label">In Progress</span>'}
                        </div>
                    </div>
                </div>
            </a>
            <div class="project-meta">
                <div class="category">${project.category}</div>
                <h3>${hasPrimaryUrl
                    ? `<a href="${primaryUrl}" target="_blank" rel="noopener noreferrer" class="project-title-link">${project.title}</a>`
                    : project.title}</h3>
                <p>${project.description}</p>
                ${linkItems ? `<div class="project-links">${linkItems}</div>` : ''}
            </div>
        `;

        return card;
    }

    function renderProjects() {
        const filtered = activeCategory === 'All'
            ? projects
            : projects.filter(p => p.category === activeCategory);

        const topProjects = activeCategory === 'All'
            ? filtered.slice(0, 2)
            : [];
        const remainingProjects = activeCategory === 'All'
            ? filtered.slice(2)
            : filtered;

        topGridContainer.innerHTML = '';
        if (activeCategory === 'All') {
            topProjects.forEach((project, i) => {
                const isFeatured = i === 0;
                topGridContainer.appendChild(createProjectCard(project, i, isFeatured));
            });
            topGridContainer.parentElement.hidden = false;
        } else {
            topGridContainer.parentElement.hidden = true;
        }

        gridContainer.innerHTML = '';

        remainingProjects.forEach((project, i) => {
            const isFeatured = activeCategory !== 'All' && project.featured;
            gridContainer.appendChild(createProjectCard(project, i, isFeatured));
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
    const seeAllButton = document.getElementById('see-all-articles');
    const searchInput = document.getElementById('article-search');

    if (!filtersContainer || !listContainer) return;

    let currentArticles = [...fallbackArticles];
    let activeCategory = 'All';
    let searchQuery = '';
    let showAllArticles = false;

    function renderFilters() {
        filtersContainer.innerHTML = '';
        getCategoryNames(currentArticles).forEach(cat => {
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
            ? currentArticles
            : currentArticles.filter(a => a.category === activeCategory);

        if (searchQuery) {
            const q = searchQuery.toLowerCase();
            filtered = filtered.filter(a =>
                a.title.toLowerCase().includes(q) || a.description.toLowerCase().includes(q)
            );
        }

        listContainer.innerHTML = '';

        const shouldLimitResults = !showAllArticles && !searchQuery && activeCategory === 'All';
        const visibleArticles = shouldLimitResults
            ? filtered.slice(0, ARTICLES_PREVIEW_LIMIT)
            : filtered;

        visibleArticles.forEach(art => {
            listContainer.appendChild(createArticleRow(art));
        });

        if (!seeAllButton) return;

        const hasExpandableArchive = !searchQuery && activeCategory === 'All' && filtered.length > ARTICLES_PREVIEW_LIMIT;
        seeAllButton.hidden = !hasExpandableArchive;
        seeAllButton.setAttribute('aria-expanded', showAllArticles ? 'true' : 'false');
        seeAllButton.textContent = showAllArticles
            ? 'Show fewer articles'
            : `See all articles (${filtered.length})`;
    }

    function renderPicks() {
        if (!picksContainer) return;
        picksContainer.innerHTML = '';
        currentArticles.slice(0, 3).forEach(article => {
            picksContainer.appendChild(createArticleCard(article));
        });
    }

    // Search
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value;
            renderArticles();
        });
    }

    if (seeAllButton) {
        seeAllButton.addEventListener('click', () => {
            showAllArticles = !showAllArticles;
            renderArticles();
        });
    }

    renderPicks();
    renderFilters();
    renderArticles();

    fetchLatestSubstackArticles().then((latestArticles) => {
        if (!latestArticles.length) return;

        currentArticles = latestArticles;
        if (activeCategory !== 'All' && !currentArticles.some(article => article.category === activeCategory)) {
            activeCategory = 'All';
        }
        renderPicks();
        renderFilters();
        renderArticles();
    });
}
