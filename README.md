# Md. Shahadat Hosain — Portfolio

A fully responsive personal portfolio website built with HTML, CSS and JavaScript.

## Project Structure

```
portfolio/
├── index.html              ← Main homepage
├── css/
│   ├── style.css           ← Main stylesheet (all shared styles)
│   └── skill-page.css      ← Styles for individual skill detail pages
├── js/
│   └── main.js             ← All JavaScript (nav, modal, skills data)
└── skills/
    ├── ms-office.html          ← MS Office Suite detail page
    ├── graphic-design.html     ← Graphic Design detail page
    ├── business-growth.html    ← Business Growth Management detail page
    ├── website-management.html ← Website Management detail page
    └── social-media.html       ← Social Media Management detail page
```

## Features

- Responsive design (mobile, tablet, desktop)
- Hamburger menu on mobile
- Hero section with photo
- Clickable skill cards → opens a quick-view modal
- "View Full Details" button in modal → navigates to dedicated skill page
- Each skill has its own rich detail page (tools, offers, why choose me)
- Contact section with Facebook, LinkedIn, WhatsApp links
- Contact form
- Smooth scroll & active nav highlighting

## How to Deploy on GitHub Pages

1. **Create a new GitHub repository** (e.g. `portfolio`)
2. **Upload all files** maintaining the exact folder structure above
3. Go to **Settings → Pages**
4. Under **Source**, select `main` branch and `/ (root)` folder
5. Click **Save** — your site will be live at:
   `https://YOUR-USERNAME.github.io/portfolio/`

## Live Edit Tips

- To change your name/info: edit `index.html`
- To update skill descriptions: edit `js/main.js` (the `skillsData` object)
- To change colors: edit the `:root` variables at the top of `css/style.css`
- To add a new skill: create a new HTML file in `/skills/`, add a card in `index.html`, add data in `main.js`

## Contact

- Facebook: [md.shahadat.hosain.fb](https://www.facebook.com/md.shahadat.hosain.fb)
- LinkedIn: [@mdshahadathosain](https://www.linkedin.com/in/mdshahadathosain)
- WhatsApp: [+880 1868 901103](https://wa.me/8801868901103)
