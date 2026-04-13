# jyothivenkat.com

> Personal portfolio for a UX Research leader and AI builder.

A editorial-style portfolio site for Jyothi Venkat -- researcher and engineer building at the intersection of human behavior and AI. Showcases career narrative, selected work, thought leadership, case studies, and contact pathways.

Live at [jyothivenkat.com](https://jyothivenkat.com)

---

## Architecture

```
                    +-----------------------------------+
                    |         jyothivenkat.com          |
                    |        (Static Site on Vercel)     |
                    +-----------------------------------+
                                    |
          +-------------------------+-------------------------+
          |              |              |              |
   +------v------+ +----v------+ +----v------+ +-----v-----+
   |  index.html  | |projects   | | writing   | | connect   |
   |  (Story)     | | (Work)    | | (Articles)| | (Contact) |
   +--------------+ +-----------+ +-----------+ +-----------+
          |              |              |
          +-------+------+------+-------+
                  |             |
           +------v------+ +---v-----------+
           |  styles.css  | |   script.js    |
           | (All styles) | | (Data, render, |
           +--------------+ |  animations)   |
                            +----------------+
                                    |
                         +----------v----------+
                         | api/substack-feed.js |
                         | (Vercel serverless   |
                         |  RSS proxy)          |
                         +----------------------+
                                    |
                         +----------v----------+
                         | Substack RSS Feed    |
                         +----------------------+
```

### Data Flow

```
1. STATIC PAGES       2. CLIENT JS           3. SERVERLESS API        4. RENDER
+--------------+     +---------------+     +------------------+     +----------+
| HTML pages   | --> | script.js     | --> | api/substack-    | --> | Article  |
| with layout  |     | fetches feed  |     | feed.js proxies  |     | cards    |
| and nav      |     | + renders     |     | RSS, returns     |     | Project  |
+--------------+     | project grid  |     | JSON             |     | grid     |
                     +---------------+     +------------------+     +----------+
```

---

## What It Does

### Story (Home)
The landing page with a split hero, four-chapter career narrative, operating principles, expertise areas, and a personal interests section.

### Selected Work
A filterable grid of projects rendered by JavaScript from a data array. Categories include Thought Leadership, Infrastructure, Agents, Product, Apps, and Games. Each card links to live demos, repos, and articles.

### Writing
Thought leadership articles fetched live from Substack via a serverless RSS proxy. Falls back to a hardcoded article list if the API is unavailable. Covers AI systems, research methodology, build guides, and tool reviews.

### My Story
A detailed career timeline from engineer to C-Suite -- covering roles at OKX, X (formerly Twitter), Yahoo, Unilever, and Clorox. Includes a skills matrix, leadership philosophy, and career milestones.

### Case Studies
Research case studies with methodology breakdowns, findings, and business impact from OKX, X, and Stash.

### Connect
Contact page with pathways for advisory, roles, speaking, and collaborations. Links to LinkedIn, X, Substack, Medium, and GitHub.

---

## Download & Install

No build tools, package managers, or dependencies required.

### Option 1: Open directly

```bash
# Clone the repository
git clone https://github.com/jyothivenkat-hub/jyothivenkat.git

# Open in your browser
open jyothivenkat/index.html
```

### Option 2: Local server (for the Substack API proxy)

```bash
cd jyothivenkat

# Any static server works
python3 -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000).

Note: The serverless function in `api/` runs on Vercel. Locally, the writing page falls back to its built-in article list.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | Vanilla HTML5 |
| Styling | Vanilla CSS (custom properties, grid, flexbox) |
| Interactivity | Vanilla JavaScript (no frameworks) |
| Fonts | Playfair Display (headlines), Inter (body), JetBrains Mono (labels) via Google Fonts |
| API | Vercel serverless function (Substack RSS proxy) |
| Hosting | Vercel |
| SEO | Open Graph + Twitter Card meta tags, sitemap.xml, robots.txt |

---

## Project Structure

```
jyothivenkat/
  index.html               -- Home / Story page
  projects.html             -- Selected Work (filterable project grid)
  writing.html              -- Thought Leadership articles
  about.html                -- My Story (career timeline)
  case-studies.html          -- Research case studies
  connect.html              -- Contact page
  styles.css                -- All styles (editorial design system)
  script.js                 -- Project data, article rendering, animations,
                               mobile menu, scroll effects
  headshot.jpg              -- Profile photo
  sitemap.xml               -- SEO sitemap
  robots.txt                -- Crawler directives
  api/
    substack-feed.js        -- Vercel serverless function (RSS proxy)
  prototype/                -- Earlier design prototype (archived)
  editorial-palettes.html   -- Accent color preview (design tool)
  swatches.html             -- Color swatch reference (design tool)
  font-preview.html         -- Font comparison tool (design tool)
  site-redesign-guide.md    -- Internal redesign documentation
```

---

## License

MIT
