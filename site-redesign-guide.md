# jyothivenkat.com — Redesign Guide

Everything you need to restructure your Squarespace site. Start with the quick wins, then follow sections in order.

---

## Priority Quick Wins

These 3 changes have the biggest impact and can be done in under an hour each:

### 1. Connect Substack to Writing Page (30 min)
Your Articles page has a single post from August 2022, but you've been actively publishing on Substack since January 2026. Connecting the RSS feed immediately fills the page with fresh content. See **Section 2** for full instructions.

### 2. Replace Projects Page with AI Builds + Gated Case Studies (45 min)
The current Projects page (`/lookbook`) contains a leadership philosophy write-up — not projects. Replace it with a two-tier Work section: public AI Projects (your personal builds) + password-protected Case Studies (company work). See **Section 4** for templates.

### 3. Update Resume & Kill the Resume Page (20 min)
The resume PDF is from 2021 (the filename literally says `Resume_2021.pdf`). Update it, add a download button to the About page, and remove the standalone Resume page from navigation. See **Section 6**.

---

## 1. Updated About Page Copy

Replace your current homepage content with this:

---

### Hero Section

**Heading:** Jyothi Venkat

**Tagline:** UX Research Leader & Product Strategy | AI Builder

**Intro (two paragraphs):**

I love studying and understanding human behavior deeply, but what sets me apart is what happens next. I build the technical teams and operational systems that translate those insights into products people actually want to use and billion-dollar business outcomes.

With a **CS degree**, an **MBA**, and **18+ years of leadership** at the executive level including the CEO office, I operate at the intersection of Engineering, Product, and Strategy. My focus is always the same: delivering research that ships, scales, and moves the needle for the business.

---

### Three Scrollable Story Sections

Three visually separated sections, each with 3 cards in a row. Alternating backgrounds (white/off-white/white) for visual rhythm. Each section has a small uppercase label + heading + 3 cards.

---

#### Section 1: MY STORY — "My Journey from Code to C-Suite"

Three cards:
- **Applied Research, Not Theory** — I embed UX Research directly into business OKRs so organizations move from gut-driven decisions to evidence-based execution. At OKX, I operated from the CEO office, shaping product direction and ensuring research influenced decisions at the highest level.
- **An Uncommon Path** — CS degree → full-stack developer → market research (Unilever, Clorox) → UX research leader (Twitter, Yahoo, OKX) + MBA. Engineer who builds, business leader who operates.
- **Global Team Builder** — Built research orgs from zero across APAC, Europe, and the US. OKX (from scratch), Yahoo (News, Search, Commerce, AI/ML), Twitter (multi-billion dollar ad portfolio). Domains: Fintech, Crypto, Social Media, News, Consumer Products, B2B, Advertising.

---

#### Section 2: HOW I LEAD — "My Leadership Philosophy"

Three cards:
- **People** — It all begins with people at the center. Being empathetic and kind, understanding the perspectives of customers, stakeholders, and team members.
- **Passion** — Bringing energy to every problem, simplifying complexity, and solving what matters.
- **Persistence** — Having the grit to drive insights all the way to action.

---

#### Section 3: WHERE I'M GOING — "The Researcher-Maker"

Intro line: I apply the same principle to AI that I apply to research: show, don't tell. I don't write about building, I ship.

Three cards:
- **Zero → One Velocity** — Build end-to-end products with AI to learn what collapses build time.
- **Researcher MVPs** — Researchers build their own prototypes, test, and iterate, not just write reports.
- **AI Agents for Busywork** — Agents handle the repetitive work so researchers focus on strategy and craft.

**CTAs:** "See What I'm Building" → AI Projects page | "Read the Thesis" → Substack

**How to build in Squarespace:** Create 3 separate Sections with alternating background colors. Each section uses a 3-column grid layout with Text Blocks for each card. Add subtle borders and padding to create the card look.

---

### Company Logo Strip

Display a horizontal row of company names/logos:

**OKX** · **Twitter** · **Yahoo** · **Stash** · **Clorox** · **Unilever**

**How to build:** Use an Image Block row with small, grayscale logos (find official logos or use text if logos aren't available). Alternatively, display as a simple text line: "Previously at OKX, Twitter, Yahoo, Stash, Clorox, and Unilever"

---

### Selected Executive Impact (display as a bold 2x2 grid)

Use large, bold numbers with short labels — this is the visual centerpiece:

| Stat | Label |
|------|-------|
| **$4B+** | in product direction influenced |
| **0 → 1** | Product launches |
| **Built & Scaled** | global research teams across US, EMEA, APAC |

**How to build in Squarespace:**
1. Add a new **Section** with a 3-column grid layout
2. Each cell: large **Heading** for the number, small **Text Block** for the label
3. Style the numbers in your accent color or bold weight
4. Alternatively: use Squarespace's **Summary Block** or **Markdown Block** for a cleaner look

---

### Expertise (display as horizontal tags/pills — no emojis)

Frontier AI Strategy | Agentic UX | Human-AI Interaction | UX Research | Product Strategy | Research Operations | Mixed-Methods Research | JTBD Framework | Customer Segmentation | Product-Market Fit | Go-to-Market Strategy | Executive Storytelling | People Leadership | Organizational Design

---

### Currently Writing About

I publish weekly on research, AI, and product leadership:

- Substack: jyothiwrites.substack.com
- Medium: (add your Medium profile URL)

---

### Call-to-Action Buttons (display as a prominent row of 2 buttons)

| Button | Links to |
|--------|----------|
| **Read My Writing** | Your Writing/Articles page |
| **View My Work** | Your Projects page (password-protected) |

**How to build in Squarespace:**
1. Add a **Button Block** row (Squarespace supports multiple buttons in a row)
2. Style: primary button for "Read My Writing," secondary/outlined for "View My Work"

---

### Links (display as clean icons in footer or below CTA buttons)

- LinkedIn
- Substack
- Medium
- GitHub (if applicable)

---

### How to apply this in Squarespace:

1. Go to **Pages -> Home** in the Squarespace editor
2. Click on the existing text blocks and replace content section by section
3. **Hero:** Use a large heading for your name, a smaller subheading for the tagline
4. **Bio:** Use 3 separate Text Blocks (or one block with paragraph breaks)
5. **Company strip:** Add an Image Block row or Text Block below the bio — "Previously at OKX, Twitter, Stash, Yahoo, and Unilever"
6. **By the Numbers:** Add a 2x2 grid section with large stat numbers (see instructions above)
7. **Expertise tags:** Add a Text Block, type each tag separated by ` | ` for a clean inline look. Alternatively use Squarespace's Button Blocks styled as small outlined/ghost buttons in a row
8. **Currently Writing About:** Simple text block with linked URLs
9. **CTA Buttons:** Add a Button Block row with 2 buttons (Read My Writing, View My Work)
10. **Links:** Use a Social Links Block or Button Blocks in a horizontal row
11. Remove the old closing line with rocket emoji ("Let's connect and build the future together. 🚀")
12. Remove all green checkmark emojis (✅) from the expertise/skills list
13. Remove the unused cart icon: go to **Design → Site Styles → Header → Cart** and toggle it off
14. Keep your professional headshot — update it if you have a newer one

---

## 2. Dynamic Articles Setup (RSS Integration)

**Status: IMPLEMENTED** — the Writing page now dynamically pulls articles from Substack RSS.

### How It Works
- `script.js` fetches the Substack RSS feed via a CORS proxy (`api.allorigins.win`)
- Parses the XML and renders article cards dynamically into the `.articles-grid` container
- Each card shows: source badge, title, description excerpt (truncated to 160 chars), and formatted date
- Cards link directly to the Substack article (opens in new tab)
- New articles appear automatically when published on Substack — no manual updates needed

### Feed URL
- **Substack:** `https://jyothiwrites.substack.com/feed`

### Error Handling
- Loading state shown while fetching
- If fetch fails, a fallback message appears with a direct link to Substack

---

## 3. Password-Protected Pages Setup

Squarespace has built-in per-page password protection.

### Create/Configure Each Protected Page:

#### Projects / Case Studies Page

1. Go to **Pages** in Squarespace editor
2. Click on the existing **"Projects"** page (or its gear icon)
3. Go to **Settings → General**
4. Scroll to **Page Password**
5. Enter your chosen password (e.g., `jv-projects-2026`)
6. Save

Now replace the current Projects page content (philosophy/values) with actual project showcases — see Section 4 below for the template.

#### Portfolio / Decks Page (New)

1. In **Pages**, click the **+** to add a new page
2. Choose **Blank Page**
3. Name it **"Portfolio"**
4. Go to **Settings → General → Page Password**
5. Set a different password (e.g., `jv-portfolio-2026`)
6. Save
7. Add content using the template in Section 4

#### GitHub Page (New)

1. In **Pages**, click **+** to add a new page
2. Choose **Blank Page**
3. Name it **"GitHub"**
4. Go to **Settings → General → Page Password**
5. Set a different password (e.g., `jv-github-2026`)
6. Save
7. Add content using the template in Section 4

### What visitors see:
When someone visits a protected page, Squarespace shows a clean password prompt. They enter the password and get access for that browser session.

---

## 4. Page Content Templates

### Projects / Case Studies Template

Structure each project as a card on the page. Use Squarespace's **Section** blocks with a 2-column grid.

**Card format for each project:**

```
[Project Title] — [Company]
[One-line description of what this was]

Role: [Your role]
Impact: [Key metric or outcome]
Methods: [e.g., "Mixed methods: surveys, interviews, A/B testing"]

[View Case Study →]  (link to Google Slides, PDF, or Notion doc)
```

---

#### Pre-filled Project Cards (ready to use — add your case study links)

**Project 1:**
```
AI Safety Research Framework — OKX
Designed and led the research program evaluating AI safety
and ethical concerns across crypto trading products.

Role: Head of Research
Impact: Informed product policy changes affecting 50M+ users
Methods: Expert interviews, competitive analysis, user testing

[View Case Study →]
```

**Project 2:**
```
Advertiser Experience Redesign — Twitter
Led the end-to-end research effort to reimagine how advertisers
interact with Twitter's ad platform, from onboarding to campaign
management.

Role: Research & Strategy Lead
Impact: +25% YoY revenue increase
Methods: Mixed methods — user interviews, journey mapping, A/B testing, quantitative surveys

[View Case Study →]
```

**Project 3:**
```
Research-Led Market Expansion — Stash
Drove the research strategy that identified and validated new market
segments, enabling Stash to scale during a critical growth period.

Role: Research & Strategy Lead
Impact: Scaled business from $700M to $2.2B
Methods: Customer segmentation, market analysis, product validation research

[View Case Study →]
```

**Project 4 (optional — add your own):**
```
[Project Title] — [Company]
[Description]

Role: [Your role]
Impact: [Key metric]
Methods: [Research methods used]

[View Case Study →]
```

---

#### Preserving Your Leadership Philosophy

Your current Projects page has leadership philosophy content (People, Passion, Persistence + core values). This is good content but shouldn't be the main Projects page. Options:

**Option A — Accordion on Projects page (recommended):**
Add a collapsible section at the bottom of the Projects page titled "My Research Philosophy" using Squarespace's **Accordion Block**. This keeps it accessible without dominating the page.

**Option B — Move to About page:**
Add it as a small section at the bottom of the About page, below the career timeline.

**Option C — Remove entirely:**
If the new bio and impact metrics already convey your approach, you may not need a separate philosophy section.

---

**How to build project cards in Squarespace:**
1. Add a new **Section** for each project
2. Use a **Text Block** for the title and description
3. Use a **Button Block** for "View Case Study" (link to your Google Slides/PDF)
4. Set the section layout to keep things aligned and clean
5. Add a subtle divider or spacing between projects
6. For the philosophy accordion: add an **Accordion Block** at the bottom of the page

---

### Portfolio / Decks Template

Use a visual grid layout:

```
[Thumbnail Image]
[Deck/Portfolio Title]
[Context: 1 line about when/why this was created]
[View Deck →]  (link to Google Slides or embedded)
```

**How to build in Squarespace:**
1. Add a **Gallery Section** with grid layout
2. For each item: upload a thumbnail screenshot of the deck cover
3. Link each thumbnail to the full deck (Google Slides URL or uploaded PDF)
4. Add captions with the title and context
5. Alternatively: use **Image Blocks** in a 2-column grid, each linking to a deck

**Tip:** To embed Google Slides directly:
1. In Google Slides: File → Share → Publish to web → Embed
2. Copy the iframe embed code
3. In Squarespace: add a **Code Block** and paste the embed

---

### GitHub Page Template

```
GitHub Profile
[Link to your full GitHub profile]

---

Featured Repositories

[Repo Name]
[1-line description]
Stack: Python, LangChain, OpenAI API
[View on GitHub →]

[Repo Name]
[1-line description]
Stack: TypeScript, Next.js, Vercel
[View on GitHub →]

[Repo Name]
[1-line description]
Stack: Python, BeautifulSoup, Pandas
[View on GitHub →]
```

**How to build in Squarespace:**
1. Add a **Text Block** with your GitHub profile link at the top
2. Add a **Divider Block**
3. For each repo: use a **Text Block** with the repo name as a heading, description as body text, and a **Button Block** linking to the repo
4. Keep it simple — this page is a curated directory, not a full showcase

---

## 5. Navigation Restructuring

### Current nav (what you have now):
```
About | Projects | Resume | Articles | LinkedIn
```
Problems: Resume is a wasted page, Projects has no projects, Articles has 1 post from 2022.

### Recommended nav structure (Two-Tier Work):

```
About | Writing | Work ▾ | Connect
                  ├── AI Projects (public)
                  └── Case Studies (password-protected)
```

- **AI Projects** — your personal builds (game, astro app, bot agent, website). Fully public, shows you're a maker.
- **Case Studies** — company research work (OKX, Twitter, Stash). Password-protected, shared selectively.
- **Connect** — links to LinkedIn (opens in new tab).

Only 4 items in the header. Clean, intentional.

### How to set up in Squarespace:

**Setting up the Work dropdown:**
1. Go to **Pages** in the sidebar
2. The order of pages in the sidebar = order in the nav
3. To create a dropdown:
   - Add a **Folder** (click + → Folder) named "Work"
   - Rename the existing Projects page to **"AI Projects"**
   - Create a new page named **"Case Studies"** (password-protect it — see Section 3)
   - Drag both **AI Projects** and **Case Studies** INTO the Work folder
4. The folder becomes a dropdown menu item automatically

**For both options:**
1. Drag pages into the desired order in the Pages panel
2. Remove the old **Resume** page from navigation:
   - Either delete it, or move it to **Not Linked** section in Pages
   - Add a resume download link to your About page instead (as a button)
3. Move **LinkedIn** link:
   - Keep it in the header nav as an external link, or
   - Move it to the footer for a cleaner header

### Adding LinkedIn as a nav link:
1. In **Pages**, click **+ → Link**
2. Enter your LinkedIn URL
3. Toggle "Open in new tab" ON
4. Drag it to the desired position in nav

---

## 6. Visual Direction — Design Refresh

Your current site uses a full dark background with light text. This was trendy a few years ago but now reads as heavy and dated for a professional portfolio. Here's the recommended visual direction:

### Theme: Light & Clean

Switch to a **light background with dark text** — it's more readable, more professional, and gives your content room to breathe.

**How to switch in Squarespace:**
1. Go to **Design → Site Styles**
2. Under **Colors**, select a light theme preset (white/off-white background, dark text)
3. Or manually set:
   - Background: `#FFFFFF` (white) or `#FAFAFA` (off-white)
   - Text: `#1A1A1A` (near-black) or `#2D2D2D` (dark gray)
   - Accent: `#1B365D` (navy blue) — for buttons, links, headings
   - Secondary accent: `#D4A574` (warm gold/copper) — for highlights, hover states

### Font Pairing

| Element | Font | Squarespace Setting |
|---------|------|-------------------|
| Headings | **DM Sans** or **Inter** (bold weight) | Design → Fonts → Heading |
| Body text | **Source Sans Pro** or **Inter** (regular weight) | Design → Fonts → Body |
| Nav/buttons | Same as headings | Design → Fonts → Navigation |

All three fonts are available in Squarespace's font library. Use one font family (e.g., Inter for everything) for a cohesive, modern look.

### Cleanup Items

- [ ] **Remove cart icon:** Go to **Design → Site Styles → Header** → toggle Cart off (it shows "0" and is irrelevant for a portfolio site)
- [ ] **Resume:** Remove the standalone Resume page. Add a "Download Resume" button on the About page
  - Upload a current PDF (your current one is from 2021 — update it!)
  - Add a **Button Block** on the About page that links to the file
- [ ] **Favicon:** Update to match the new color palette
  - Go to **Design → Logo & Title → Favicon**
  - Use your initials "JV" in navy on a white/transparent background
- [ ] **Header logo:** The current "JV" text logo is fine — ensure it uses the new font
- [ ] **SEO:** Update page descriptions
  - Go to each page → **Settings → SEO**
  - Write a concise meta description for each page
  - Home: "Jyothi Venkat — Research & product strategy leader with 18+ years of experience in AI, fintech, and emerging technology."
- [ ] **Mobile check:** Preview every page on mobile
  - Use Squarespace's built-in preview, or just resize your browser
- [ ] **Footer:** Add social links (LinkedIn, Substack, Medium, GitHub) in the footer
  - Go to **Design → Footer** or edit the footer section directly

---

## 7. Verification Checklist

After making all changes:

- [ ] **RSS/Articles:** Publish a test post on Substack → confirm it appears on the Writing page (give Zapier 15 min, or refresh the RSS widget)
- [ ] **Passwords:** Open an incognito window → visit each protected page → confirm the password prompt appears and the correct password works
- [ ] **Navigation:** Click every nav link on desktop and mobile → confirm they all work
- [ ] **External links:** Verify LinkedIn, Substack, Medium links all open correctly
- [ ] **Resume download:** Click the download button → confirm the PDF downloads
- [ ] **Mobile:** Check all pages on your phone — layout, text size, spacing
- [ ] **Page speed:** Run your site through [PageSpeed Insights](https://pagespeed.web.dev/) to check load times

---

## 8. Inspiration & References

Sites to reference for design direction — these are executive/leader portfolio sites with clean, modern aesthetics:

- **Lenny Rachitsky** (lennyrachitsky.com) — Clean personal brand + newsletter integration. Good example of Substack-to-site flow.
- **Julie Zhuo** (juliezhuo.com) — Former VP Design at Facebook. Minimal, writing-first layout with strong bio.
- **Teresa Torres** (producttalk.org) — Product discovery leader. Clean integration of writing, courses, and professional background.
- **Erin May** (erinmay.com) — UX research leader. Minimal portfolio with clear impact storytelling.

**What to take from these:**
- Minimal navigation (3-4 items max)
- Light backgrounds with high contrast text
- Writing/content front and center
- Impact numbers displayed prominently
- Professional headshot with clean layout
- No emojis, no clutter

---

## Quick Reference: Your URLs

| Item | URL |
|------|-----|
| Website | https://www.jyothivenkat.com |
| Substack | https://jyothiwrites.substack.com |
| Substack RSS | https://jyothiwrites.substack.com/feed |
| Medium RSS | https://medium.com/feed/@YOUR_HANDLE |
| Zapier | https://zapier.com |
| rss.app | https://rss.app |
| PageSpeed | https://pagespeed.web.dev |
