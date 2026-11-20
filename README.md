# ELECTRICAL SERVICES — TSCG TECHNOLOGIES PORTFOLIO DEMO

A premium, modern, visually impressive, and fully responsive Electrical Services business website designed and engineered as a high-impact frontend portfolio showcase.

---

## 1. Project Overview

- **Website Identity:** ELECTRICAL SERVICES
- **Category:** Electrical Contractor / Electrician / Residential & Commercial Electrical Services
- **Target Audience:** Homeowners, commercial clients, builders, property managers, and facility directors
- **Purpose:** Frontend portfolio demonstration illustrating best practices in trade contractor web design, safety-oriented user journeys, structured scopes of work, and interactive client intake.
- **Demo Compliance:** No invented business names, fake certifications, fabricated customer reviews, or live emergency guarantees. All phone numbers (`0000000000`), emails (`demo@example.com`), and addresses are clearly marked as demonstration placeholders. Forms are strictly front-end validated simulations with zero external data transmission.

---

## 2. Directory Structure

```
electrical-services/
├── index.html                   # Page 1: Homepage (Hero, trust strip, 8 services, workflow, featured demos)
├── about.html                   # Page 2: About (Safety pillars, capabilities, timeline, technical crew)
├── services.html                # Page 3: Services (6 in-depth sections: A through F, safety disclaimers)
├── emergency.html               # Page 4: Emergency Electrical (8 hazard cards, strict safety rules, demo intake)
├── projects.html                # Page 5: Projects (Filterable gallery, 8 demo cards, modal & lightbox)
├── contact.html                 # Page 6: Contact (Demo details, validated inquiry form, FAQs)
│
├── images/                      # 21 Production-grade photography assets (.jpg)
│   ├── electrical-hero-main.jpg
│   ├── electrical-residential-service.jpg
│   ├── electrical-commercial-service.jpg
│   └── ... (All 21 production visuals)
├── assets/
│   ├── css/
│   │   └── style.css            # Custom industrial stylesheet, variables, animations, responsive queries
│   ├── js/
│   │   └── main.js              # Vanilla JS: sticky header, mobile nav, modals, lightbox, form validations
│   ├── images/
│   │   └── placeholders/        # High-tech vector SVG fallbacks with stable aspect ratios
│   └── icons/                   # Reusable vector icons embedded inline for maximum performance
│
├── IMAGE-GENERATION-GUIDE.md    # 21 copy-ready Google Flow photographic prompts with full parameters
└── README.md                    # Deployment and local preview instructions
```

---

## 3. Technology Stack & Zero-Dependency Guarantee

Built strictly in accordance with client specifications:
- **HTML5:** Semantic, accessible (ARIA), SEO-optimized markup.
- **CSS3:** Custom CSS variables, modern flexbox and grid layouts, GPU-accelerated transforms, zero CSS frameworks (No Tailwind, No Bootstrap).
- **Vanilla JavaScript:** ES6+, native `IntersectionObserver` scroll reveals, zero JS frameworks or libraries (No React, Vue, jQuery, GSAP, or Three.js).
- **Hostinger Ready:** 100% static client-side codebase. No Node.js build steps, Webpack, PHP, or database requirements.

---

## 4. Visual Identity & Brand System

- **Deep Navy:** `#101D2B` (Dominant foundational canvas)
- **Industrial Charcoal:** `#171F29` (Card and panel surface background)
- **Electric Blue:** `#2377D4` (Primary interactive highlights, links, and borders)
- **Bright Cyan:** `#35C9E6` (High-visibility accent glow, nodes, and focus rings)
- **Safety Orange:** `#FF9B42` (Reserved for emergency indicators, callouts, and key action CTAs)
- **Warm White & Light Grey:** `#F7F9FC` & `#E9EEF3` (Readable high-contrast typography)

---

## 5. Local Preview Instructions

You can preview the site immediately without installing any dependencies:

### Method A: Direct Browser Launch
1. Navigate into the project folder.
2. Double-click `index.html` to open it in Chrome, Edge, Firefox, or Safari.

### Method B: Lightweight Local Server (Recommended for smooth pathing)
Using Python 3 (installed by default on most systems):
```bash
# In the project directory:
python -m http.server 8000
```
Then open your web browser and navigate to:
```
http://localhost:8000
```

---

## 6. Hostinger Static Hosting Deployment Guide

This project is tailored specifically for instant deployment on Hostinger's static web hosting or shared hosting.

### Step 1: Access Hostinger hPanel
1. Log in to your **Hostinger Control Panel (hPanel)**.
2. Select your hosting account or domain name.
3. Open **File Manager** (under *Files*) or configure an **FTP/SFTP** connection (e.g., using FileZilla).

### Step 2: Navigate to Document Root
1. Enter the `public_html/` directory.
2. If there is a default Hostinger `default.php` file, delete or archive it.

### Step 3: Upload Website Files
Upload the contents of this folder directly into `public_html/`:
- `index.html`
- `about.html`
- `services.html`
- `emergency.html`
- `projects.html`
- `contact.html`
- `images/` (entire folder with all 21 production JPG visuals)
- `assets/` (entire folder including `css/`, `js/`, and `images/`)
- `IMAGE-GENERATION-GUIDE.md` (optional or kept in root for documentation)
- `README.md`

### Step 4: Verify Live Deployment
1. Visit your domain (e.g., `https://yourdomain.com`).
2. Verify that:
   - All 6 pages load with working navigation links.
   - The sticky header smoothly blurs on scroll.
   - Mobile hamburger menu toggles cleanly on mobile viewports.
   - Project modal and image lightboxes trigger correctly.
   - Contact and Emergency forms display demonstration validation and confirmation dialogues.
   - SVG placeholders render crisp blueprints with zero layout shift.

---

## 7. Replacing Image Placeholders with AI-Generated Photos

Refer to the included `IMAGE-GENERATION-GUIDE.md` for complete, copy-ready Google Flow prompts.
1. Run each numbered prompt in Google Flow.
2. Save the output image with the exact filename indicated (e.g., `electrical-hero-main.jpg`).
3. Place the file into `assets/images/placeholders/`.
4. In the HTML files, update the file extensions from `.svg` to `.jpg`.

---

## 8. Quality Assurance & Compliance

- **No Live Claims:** All certifications, licenses, and phone numbers are strictly identified as demonstration content.
- **Data Protection:** Form submissions do not write to databases, make external API requests, or store user information.
- **Accessibility:** Semantic landmarks (`<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`), keyboard trap avoidance on modals, high-contrast ratios, and `prefers-reduced-motion` compliance.
- **Responsive Viewports Tested:** 360px, 390px, 768px, 1280px, and 1440px+.

---
*Developed for TSCG Technologies Portfolio Demonstration.*
