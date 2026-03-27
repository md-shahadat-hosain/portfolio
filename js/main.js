/* ============================================================
   PORTFOLIO — Md. Shahadat Hosain
   main.js — All JavaScript Logic
   ============================================================ */

/* ── HAMBURGER MENU ──────────────────────────────────────── */
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

function closeMobile() {
  hamburger.classList.remove('open');
  mobileMenu.classList.remove('open');
}

/* ── ACTIVE NAV LINK ON SCROLL ───────────────────────────── */
const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
  });
});

/* ── SKILLS DATA ─────────────────────────────────────────── */
const skillsData = {
  'ms-office': {
    icon: '💼',
    title: 'MS Office Suite',
    subtitle: 'Microsoft Word · Excel · PowerPoint · Outlook',
    description: 'Expert-level proficiency across the entire Microsoft Office suite. From crafting professional documents and detailed reports in Word, to building dynamic spreadsheets and data analysis in Excel, to designing compelling presentations in PowerPoint.',
    tools: ['MS Word', 'MS Excel', 'PowerPoint', 'Outlook', 'MS Publisher', 'OneNote'],
    offers: [
      'Professional document formatting, templates & reports',
      'Advanced Excel formulas, pivot tables & data visualization',
      'Impactful PowerPoint presentation design',
      'Mail merge, macros & automation workflows',
      'CV / Resume writing & formatting',
      'Business proposal & letterhead design',
    ],
  },
  'graphic-design': {
    icon: '🎨',
    title: 'Graphic Design',
    subtitle: 'Minimal & Normal Design · Branding · Visual Identity',
    description: 'Creative visual design with a clean, minimal aesthetic. I craft compelling visuals that communicate clearly and leave a lasting impression — from brand identities to social media graphics and marketing materials.',
    tools: ['Canva', 'Adobe Photoshop', 'Illustrator', 'Figma', 'CorelDRAW'],
    offers: [
      'Logo design & complete brand identity kits',
      'Social media post & banner design',
      'Flyer, poster & brochure design',
      'Business card & stationery design',
      'YouTube thumbnail & channel art',
      'Infographic & presentation graphics',
    ],
  },
  'business-growth': {
    icon: '📈',
    title: 'Business Growth Management',
    subtitle: 'Strategy · Planning · Market Analysis · Optimization',
    description: 'Helping businesses identify opportunities, eliminate bottlenecks and build sustainable growth strategies. I combine market analysis, competitive research and actionable planning to drive measurable results.',
    tools: ['Google Analytics', 'Meta Business Suite', 'Trello', 'Notion', 'Google Workspace'],
    offers: [
      'Business strategy & growth planning',
      'Competitor & market research analysis',
      'KPI setting, tracking & reporting',
      'Process optimization & workflow improvement',
      'Customer journey mapping & conversion strategies',
      'Business profile & brand positioning',
    ],
  },
  'website-management': {
    icon: '🌐',
    title: 'Website Management',
    subtitle: 'WordPress · Content · SEO · Maintenance',
    description: 'End-to-end website management to keep your online presence sharp, fast, and up-to-date. From content updates and SEO optimization to performance monitoring and plugin management.',
    tools: ['WordPress', 'Elementor', 'cPanel', 'Google Search Console', 'Yoast SEO', 'Cloudflare'],
    offers: [
      'WordPress website setup & customization',
      'Content updates, pages & blog posts',
      'On-page SEO optimization',
      'Speed & performance optimization',
      'Plugin installation & management',
      'Regular backups & security monitoring',
    ],
  },
  'social-media': {
    icon: '📱',
    title: 'Social Media Management',
    subtitle: 'Facebook · Instagram · LinkedIn · Content Strategy',
    description: 'Growing your brand\'s digital presence through strategic content creation, audience engagement, and platform management. I help you build an authentic online community that converts followers into customers.',
    tools: ['Facebook Business', 'Instagram', 'LinkedIn', 'Buffer', 'Hootsuite', 'Canva'],
    offers: [
      'Social media profile setup & optimization',
      'Content calendar planning & scheduling',
      'Post design & copywriting',
      'Audience growth & engagement strategies',
      'Facebook & Instagram page management',
      'Performance analytics & monthly reports',
    ],
  },
};

/* ── MODAL LOGIC ─────────────────────────────────────────── */
const modalOverlay = document.getElementById('modalOverlay');
const modalBox     = document.getElementById('modalBox');

function openSkillModal(skillId) {
  const data = skillsData[skillId];
  if (!data) return;

  document.getElementById('modal-icon').textContent      = data.icon;
  document.getElementById('modal-title').textContent     = data.title;
  document.getElementById('modal-subtitle').textContent  = data.subtitle;
  document.getElementById('modal-desc').textContent      = data.description;

  // Tools badges
  const toolsEl = document.getElementById('modal-tools');
  toolsEl.innerHTML = data.tools.map(t => `<span class="tool-badge">${t}</span>`).join('');

  // Offer items
  const offersEl = document.getElementById('modal-offers');
  offersEl.innerHTML = data.offers.map(o => `<div class="modal-offer-item">${o}</div>`).join('');

  // Link "View Full Details" to the dedicated skill page
  const pageMap = {
    'ms-office':          'skills/ms-office.html',
    'graphic-design':     'skills/graphic-design.html',
    'business-growth':    'skills/business-growth.html',
    'website-management': 'skills/website-management.html',
    'social-media':       'skills/social-media.html',
  };
  const fullPageBtn = document.getElementById('modal-full-page-btn');
  fullPageBtn.onclick = () => { window.location.href = pageMap[skillId]; };

  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

// Close on overlay click
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

/* ── CONTACT FORM ────────────────────────────────────────── */
function handleContactSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('contactName').value.trim();
  if (!name) return;
  alert(`Thank you, ${name}! Your message has been received.\nFor a quick response, please also reach out via WhatsApp or Facebook.`);
  e.target.reset();
}
