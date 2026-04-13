const SUBSTACK_FEED_URL = 'https://jyothiwrites.substack.com/feed';

function decodeHtmlEntities(value) {
    return value
        .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
        .replace(/&#8217;/g, "'")
        .replace(/&#8211;/g, '-')
        .replace(/&#8220;/g, '"')
        .replace(/&#8221;/g, '"')
        .replace(/&#8230;/g, '...')
        .replace(/&#183;/g, '·')
        .replace(/&#8594;/g, '->')
        .replace(/&#9888;&#65039;/g, 'Warning')
        .replace(/&amp;/g, '&')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>');
}

function stripHtml(value) {
    return value.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

function normalizeText(value) {
    if (!value) return '';
    return stripHtml(decodeHtmlEntities(value));
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

function normalizeDate(value) {
    const parsed = new Date(value);
    if (Number.isNaN(parsed.getTime())) {
        return '';
    }
    return parsed.toISOString().slice(0, 10);
}

function parseTag(block, tagName) {
    const match = block.match(new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)</${tagName}>`, 'i'));
    return match ? match[1].trim() : '';
}

function parseAttribute(tag, attributeName) {
    const match = tag.match(new RegExp(`${attributeName}="([^"]+)"`, 'i'));
    return match ? match[1] : '';
}

function parseItems(xmlText) {
    const itemBlocks = xmlText.match(/<item>([\s\S]*?)<\/item>/gi) || [];

    return itemBlocks.map((block) => {
        const enclosureTag = block.match(/<enclosure[^>]*>/i)?.[0] || '';
        const title = normalizeText(parseTag(block, 'title'));
        const description = normalizeText(parseTag(block, 'description'));
        const url = normalizeText(parseTag(block, 'link'));
        const date = normalizeDate(parseTag(block, 'pubDate'));
        const thumbnail = parseAttribute(enclosureTag, 'url');

        return {
            title,
            description,
            url,
            date,
            category: inferArticleCategory(title, description),
            thumbnail,
        };
    }).filter((item) => item.title && item.url && item.date);
}

module.exports = async function handler(req, res) {
    try {
        const response = await fetch(SUBSTACK_FEED_URL, {
            headers: {
                'User-Agent': 'Mozilla/5.0',
                'Accept': 'application/rss+xml, application/xml;q=0.9, text/xml;q=0.8',
            },
        });

        if (!response.ok) {
            return res.status(502).json({ error: 'Failed to fetch Substack feed.' });
        }

        const xmlText = await response.text();
        const items = parseItems(xmlText);

        res.setHeader('Cache-Control', 'public, max-age=0, s-maxage=300, stale-while-revalidate=60');
        return res.status(200).json({
            source: 'substack',
            fetchedAt: new Date().toISOString(),
            count: items.length,
            items,
        });
    } catch (error) {
        return res.status(500).json({ error: 'Unable to load Substack feed.' });
    }
};
