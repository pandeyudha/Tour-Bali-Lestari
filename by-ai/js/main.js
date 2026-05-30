/* =========================================================
   TOUR BALI LESTARI · /by-ai
   ========================================================= */

const WA = '610452499051';

/* ---------- TOUR DATA (20) ---------- */
const tours = [
  // ------------------ BALI (10) ------------------
  {
    id: 1, region: 'bali', regionLabel: 'Bali',
    title: 'Uluwatu Sunset & Kecak Dance',
    location: 'South Bali',
    duration: '5 hours',
    group: '1–6',
    price: 65,
    rating: 4.9,
    reviews: 187,
    prompt: 'Uluwatu+temple+sunset+cliff+ocean+Bali+aerial+photograph',
    desc: 'Watch the sun melt behind Bali\'s most sacred cliffside temple, then catch the mesmerizing Kecak fire dance under the stars.'
  },
  {
    id: 2, region: 'bali', regionLabel: 'Bali',
    title: 'Mount Batur Sunrise Trek',
    location: 'Kintamani',
    duration: '8 hours',
    group: '1–8',
    price: 75,
    rating: 4.9,
    reviews: 312,
    prompt: 'Mount+Batur+volcano+sunrise+Bali+landscape+photograph',
    desc: 'Hike under a sky full of stars and watch sunrise from the rim of an active volcano. A bucket-list classic.'
  },
  {
    id: 3, region: 'bali', regionLabel: 'Bali',
    title: 'Nusa Penida Island Hopping',
    location: 'Nusa Penida',
    duration: '12 hours',
    group: '1–6',
    price: 95,
    rating: 4.8,
    reviews: 224,
    prompt: 'Nusa+Penida+Kelingking+beach+cliff+turquoise+water+aerial+photograph',
    desc: 'Kelingking Beach, Broken Beach, Angel\'s Billabong — the island that broke Instagram, all in one day.'
  },
  {
    id: 4, region: 'bali', regionLabel: 'Bali',
    title: 'Ubud Cultural & Rice Terrace',
    location: 'Ubud',
    duration: '9 hours',
    group: '1–6',
    price: 60,
    rating: 4.9,
    reviews: 256,
    prompt: 'Tegallalang+rice+terrace+Ubud+Bali+green+landscape+photograph',
    desc: 'Sacred Monkey Forest, traditional village walks, Tegallalang rice terraces — Bali\'s cultural heart, unhurried.'
  },
  {
    id: 5, region: 'bali', regionLabel: 'Bali',
    title: 'Tanah Lot Sunset Temple',
    location: 'Tabanan',
    duration: '4 hours',
    group: '1–6',
    price: 45,
    rating: 4.8,
    reviews: 198,
    prompt: 'Tanah+Lot+temple+sea+rock+Bali+sunset+golden+hour+photograph',
    desc: 'A temple on a rock in the sea. Time it right and you\'ll never forget the view.'
  },
  {
    id: 6, region: 'bali', regionLabel: 'Bali',
    title: 'Sekumpul Waterfall Trek',
    location: 'North Bali',
    duration: '10 hours',
    group: '1–6',
    price: 85,
    rating: 4.9,
    reviews: 142,
    prompt: 'Sekumpul+waterfall+Bali+tropical+jungle+cascading+water+photograph',
    desc: 'Seven cascading waterfalls deep in the jungle. The trek is real, the reward is unreal.'
  },
  {
    id: 7, region: 'bali', regionLabel: 'Bali',
    title: 'Sidemen Valley Cycling',
    location: 'Sidemen',
    duration: '7 hours',
    group: '1–6',
    price: 55,
    rating: 4.8,
    reviews: 98,
    prompt: 'Sidemen+valley+rice+field+Bali+green+countryside+photograph',
    desc: 'Pedal through emerald rice terraces, traditional villages, and the Bali tourists rarely see.'
  },
  {
    id: 8, region: 'bali', regionLabel: 'Bali',
    title: 'Tegallalang Swing & Waterfall',
    location: 'Tegallalang',
    duration: '8 hours',
    group: '1–6',
    price: 70,
    rating: 4.7,
    reviews: 176,
    prompt: 'Bali+swing+jungle+rice+terrace+Tegallalang+aerial+photograph',
    desc: 'The iconic Bali swing over the jungle, plus Tibumana waterfall and Tegenungan. Pure Bali magic.'
  },
  {
    id: 9, region: 'bali', regionLabel: 'Bali',
    title: 'Bedugul Ulun Danu Temple',
    location: 'Bedugul',
    duration: '8 hours',
    group: '1–6',
    price: 65,
    rating: 4.8,
    reviews: 154,
    prompt: 'Ulun+Danu+Beratan+temple+lake+Bedugul+Bali+misty+photograph',
    desc: 'The floating temple on Lake Beratan. Cool mountain air, mystical morning mist, postcard views.'
  },
  {
    id: 10, region: 'bali', regionLabel: 'Bali',
    title: 'West Bali Hidden Gems',
    location: 'Menjangan',
    duration: '12 hours',
    group: '1–6',
    price: 110,
    rating: 4.9,
    reviews: 67,
    prompt: 'Menjangan+island+West+Bali+snorkeling+beach+turquoise+photograph',
    desc: 'Snorkel pristine reefs at Menjangan Island, visit West Bali National Park — the side tourists miss.'
  },

  // ------------------ INDONESIA (10) ------------------
  {
    id: 11, region: 'nusa', regionLabel: 'Nusa Tenggara',
    title: 'Komodo Dragon Expedition',
    location: 'Komodo NP, NTT',
    duration: '3 days',
    group: '2–10',
    price: 450,
    rating: 5.0,
    reviews: 89,
    prompt: 'Komodo+Padar+island+viewpoint+turquoise+water+Indonesia+aerial+photograph',
    desc: 'Meet prehistoric dragons, hike Padar\'s legendary three-bay viewpoint, snorkel Pink Beach. The ultimate Indonesian adventure.'
  },
  {
    id: 12, region: 'papua', regionLabel: 'Papua',
    title: 'Raja Ampat Diving Paradise',
    location: 'Raja Ampat, Papua',
    duration: '5 days',
    group: '2–8',
    price: 1450,
    rating: 5.0,
    reviews: 54,
    prompt: 'Raja+Ampat+Papua+karst+island+turquoise+lagoon+aerial+photograph',
    desc: 'The richest marine biodiversity on Earth. Liveaboard or resort, our crews are local Papuans who know every spot.'
  },
  {
    id: 13, region: 'java', regionLabel: 'Java',
    title: 'Borobudur Sunrise',
    location: 'Yogyakarta, Java',
    duration: '2 days',
    group: '1–8',
    price: 220,
    rating: 4.9,
    reviews: 178,
    prompt: 'Borobudur+temple+sunrise+stupa+Java+Indonesia+misty+photograph',
    desc: 'Watch dawn break over the world\'s largest Buddhist temple. 9th century. Still standing. Still magical.'
  },
  {
    id: 14, region: 'java', regionLabel: 'Java',
    title: 'Mount Bromo Sunrise',
    location: 'East Java',
    duration: '2 days',
    group: '1–8',
    price: 195,
    rating: 4.9,
    reviews: 234,
    prompt: 'Mount+Bromo+crater+sunrise+volcano+Java+Indonesia+landscape+photograph',
    desc: 'Stand at the edge of an active crater. Sea of sand. Otherworldly. This is Java at its rawest.'
  },
  {
    id: 15, region: 'nusa', regionLabel: 'Nusa Tenggara',
    title: 'Lombok Pink Beach & Gili',
    location: 'Lombok',
    duration: '3 days',
    group: '2–8',
    price: 380,
    rating: 4.8,
    reviews: 76,
    prompt: 'Pink+Beach+Lombok+pink+sand+ocean+Indonesia+aerial+photograph',
    desc: 'Pink sand beach, secret coves, and Gili Trawangan sunsets. Bali\'s quieter, prettier neighbor.'
  },
  {
    id: 16, region: 'java', regionLabel: 'Java',
    title: 'Yogyakarta Heritage',
    location: 'Yogyakarta, Java',
    duration: '2 days',
    group: '1–8',
    price: 180,
    rating: 4.8,
    reviews: 112,
    prompt: 'Prambanan+temple+Yogyakarta+Hindu+stone+Indonesia+sunset+photograph',
    desc: 'Prambanan temple complex, royal palace, Malioboro street, batik workshops. Java\'s cultural capital.'
  },
  {
    id: 17, region: 'sumatra', regionLabel: 'Sumatra',
    title: 'Lake Toba Volcanic',
    location: 'North Sumatra',
    duration: '4 days',
    group: '2–8',
    price: 480,
    rating: 4.9,
    reviews: 43,
    prompt: 'Lake+Toba+Samosir+island+Sumatra+Indonesia+landscape+aerial+photograph',
    desc: 'The world\'s largest volcanic lake. Visit Samosir Island, meet the Batak people, soak in hot springs.'
  },
  {
    id: 18, region: 'sumatra', regionLabel: 'Sumatra',
    title: 'Belitung Granite Islands',
    location: 'Belitung',
    duration: '3 days',
    group: '2–8',
    price: 420,
    rating: 4.9,
    reviews: 38,
    prompt: 'Belitung+island+granite+rocks+beach+Indonesia+turquoise+aerial+photograph',
    desc: 'Massive granite boulders rising from white sand and impossibly blue water. Indonesia\'s best-kept beach secret.'
  },
  {
    id: 19, region: 'sulawesi', regionLabel: 'Sulawesi',
    title: 'Wakatobi Marine Park',
    location: 'SE Sulawesi',
    duration: '5 days',
    group: '2–8',
    price: 950,
    rating: 5.0,
    reviews: 29,
    prompt: 'Wakatobi+underwater+coral+reef+tropical+fish+Indonesia+photograph',
    desc: 'World-class diving in a marine park the size of Massachusetts. Coral reefs in their original, pristine state.'
  },
  {
    id: 20, region: 'sulawesi', regionLabel: 'Sulawesi',
    title: 'Tana Toraja Cultural Trek',
    location: 'South Sulawesi',
    duration: '4 days',
    group: '2–8',
    price: 520,
    rating: 4.9,
    reviews: 51,
    prompt: 'Tana+Toraja+tongkonan+traditional+houses+Sulawesi+Indonesia+photograph',
    desc: 'Boat-shaped ancestral houses, cliff burials, sacred rituals. One of Earth\'s most extraordinary living cultures.'
  }
];

const FEATURED_IDS = [11, 2, 12]; // Komodo, Batur, Raja Ampat

/* ---------- IMAGE URL BUILDER ---------- */
function imgUrl(prompt, seed = 1, w = 800, h = 600) {
  return `https://image.pollinations.ai/prompt/${prompt}?width=${w}&height=${h}&nologo=true&seed=${seed}`;
}

/* ---------- RENDER TOURS ---------- */
function renderTours(list) {
  const grid = document.getElementById('toursGrid');
  if (!list.length) {
    grid.innerHTML = '<div class="tours-empty">No tours found in this region.</div>';
    return;
  }
  grid.innerHTML = list.map((t, i) => `
    <article class="tour-card reveal" style="transition-delay:${i * 0.04}s"
             onclick="bookTour(${t.id})">
      <div class="tour-img">
        <span class="tour-badge">${t.regionLabel}</span>
        <span class="tour-rating"><span class="tour-rating-star">★</span> ${t.rating}</span>
        <img src="${imgUrl(t.prompt, t.id)}" alt="${escapeHtml(t.title)}" loading="lazy"
             onerror="this.style.display='none'">
      </div>
      <div class="tour-body">
        <h3 class="tour-title">${escapeHtml(t.title)}</h3>
        <div class="tour-loc">📍 ${escapeHtml(t.location)}</div>
        <div class="tour-meta">
          <span>⏱ ${t.duration}</span>
          <span>👥 ${t.group}</span>
          <span>★ ${t.reviews} reviews</span>
        </div>
        <div class="tour-foot">
          <div class="tour-price">$${t.price}<span> / person</span></div>
          <span class="tour-link">View
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </span>
        </div>
      </div>
    </article>
  `).join('');

  // re-trigger reveal animations
  observeReveal();
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}

function bookTour(id) {
  const t = tours.find(x => x.id === id);
  if (!t) return;
  const msg = encodeURIComponent(`Hi! I'm interested in the "${t.title}" tour. Can you tell me more?`);
  window.open(`https://wa.me/${WA}?text=${msg}`, '_blank');
}

/* ---------- FILTER ---------- */
function setupFilter() {
  const pills = document.querySelectorAll('.filter-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const filter = pill.dataset.filter;
      const filtered = filter === 'all' ? tours : tours.filter(t => t.region === filter);
      renderTours(filtered);
    });
  });
}

/* ---------- FEATURED CAROUSEL ---------- */
let featuredIndex = 0;
let featuredTimer;

function renderFeaturedDots() {
  const dotsEl = document.getElementById('featuredDots');
  dotsEl.innerHTML = FEATURED_IDS.map((_, i) =>
    `<span class="featured-dot ${i === featuredIndex ? 'active' : ''}" data-i="${i}"></span>`
  ).join('');
  dotsEl.querySelectorAll('.featured-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      featuredIndex = +dot.dataset.i;
      updateFeatured();
      restartFeaturedTimer();
    });
  });
}

function updateFeatured() {
  const t = tours.find(x => x.id === FEATURED_IDS[featuredIndex]);
  if (!t) return;
  const img = document.getElementById('featuredImg');
  const badge = document.getElementById('featuredBadge');
  const rating = document.getElementById('featuredRating');
  const title = document.getElementById('featuredTitle');
  const desc = document.getElementById('featuredDesc');
  const meta = document.getElementById('featuredMeta');
  const price = document.getElementById('featuredPrice');

  // fade-out → swap → fade-in
  img.style.opacity = '0';
  setTimeout(() => {
    img.src = imgUrl(t.prompt, t.id, 1200, 900);
    img.alt = t.title;
    img.style.opacity = '1';
  }, 250);

  badge.textContent = t.regionLabel;
  rating.innerHTML = `★ ${t.rating} <span style="color:var(--text-3);font-weight:400;margin-left:6px">${t.reviews} reviews</span>`;
  title.textContent = t.title;
  desc.textContent = t.desc;
  meta.innerHTML = [
    `<span class="featured-meta-tag">📍 ${escapeHtml(t.location)}</span>`,
    `<span class="featured-meta-tag">⏱ ${t.duration}</span>`,
    `<span class="featured-meta-tag">👥 ${t.group}</span>`
  ].join('');
  price.textContent = `$${t.price}`;

  // update dots
  document.querySelectorAll('.featured-dot').forEach((d, i) => {
    d.classList.toggle('active', i === featuredIndex);
  });
}

function nextFeatured() {
  featuredIndex = (featuredIndex + 1) % FEATURED_IDS.length;
  updateFeatured();
}

function restartFeaturedTimer() {
  clearInterval(featuredTimer);
  featuredTimer = setInterval(nextFeatured, 6000);
}

/* ---------- STAT COUNTERS ---------- */
function animateCounters() {
  const els = document.querySelectorAll('.stat-num');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = +el.dataset.count;
      const decimal = el.dataset.decimal === 'true';
      const duration = 1600;
      const start = performance.now();
      function tick(now) {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        const val = target * eased;
        el.textContent = decimal ? (val / 10).toFixed(1) : Math.floor(val) + '+';
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = decimal ? (target / 10).toFixed(1) : target + '+';
      }
      requestAnimationFrame(tick);
      obs.unobserve(el);
    });
  }, { threshold: 0.4 });
  els.forEach(el => obs.observe(el));
}

/* ---------- FAQ ---------- */
function setupFaq() {
  document.querySelectorAll('.faq-q').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.parentElement;
      const wasActive = item.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
      if (!wasActive) item.classList.add('active');
    });
  });
}

/* ---------- NAV SCROLL ---------- */
function setupNav() {
  const nav = document.getElementById('nav');
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    nav.classList.toggle('scrolled', y > 40);
    lastScroll = y;
  });
}

/* ---------- SCROLL REVEAL ---------- */
let revealObserver;
function observeReveal() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          revealObserver.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  }
  document.querySelectorAll('.reveal:not(.in)').forEach(el => revealObserver.observe(el));
}

function applyRevealToSections() {
  document.querySelectorAll('.section-head, .why-card, .review-card, .featured-card, .stat, .faq-item, .filter-bar')
    .forEach(el => el.classList.add('reveal'));
}

/* ---------- MOBILE NAV ---------- */
function setupMobileNav() {
  const burger = document.querySelector('.nav-burger');
  const links = document.querySelector('.nav-links');
  if (!burger || !links) return;
  burger.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    burger.classList.toggle('open', open);
    // simple mobile-open style applied inline
    if (open) {
      links.style.cssText = 'display:flex;position:fixed;inset:64px 20px auto 20px;flex-direction:column;background:rgba(5,6,13,0.96);padding:24px;border-radius:18px;border:1px solid var(--border);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);gap:20px;z-index:55';
    } else {
      links.style.cssText = '';
    }
  });
  // close on link click
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    if (window.innerWidth <= 860) {
      links.classList.remove('open');
      links.style.cssText = '';
    }
  }));
}

/* ---------- INIT ---------- */
function init() {
  renderTours(tours);
  setupFilter();
  renderFeaturedDots();
  updateFeatured();
  restartFeaturedTimer();
  animateCounters();
  setupFaq();
  setupNav();
  setupMobileNav();
  applyRevealToSections();
  observeReveal();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
