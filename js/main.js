// Mobile menu
const toggle = document.querySelector('.mobile-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
if (toggle && mobileMenu) {
  toggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });
}

// Close modal on Escape
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// Supabase tours
const SB_URL = "https://nmsublcklbpyccaendon.supabase.co";
const SB_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5tc3VibGNrbGJweWNjYWVuZG9uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYwNjUwNTAsImV4cCI6MjA5MTY0MTA1MH0.Y6lZ15a12eaAMxPDMU8x7uNRcEmJFZTGW2e-dx9mRa8";
const WA = "610452499051";
let allTours = [];

async function loadTours() {
  const grid = document.getElementById('toursGrid');
  if (!grid) return;
  try {
    const res = await fetch(`${SB_URL}/rest/v1/tours?status=eq.approved&order=created_at.desc`, {
      headers: { apikey: SB_KEY, Authorization: `Bearer ${SB_KEY}` }
    });
    if (!res.ok) throw new Error();
    allTours = await res.json();
    if (allTours.length > 0) renderTours(allTours);
  } catch {
    // fallback to static cards already in HTML
  }
}

function renderTours(list) {
  const grid = document.getElementById('toursGrid');
  if (!grid) return;
  if (!list.length) { grid.innerHTML = '<div style="grid-column:1/-1;padding:60px 0;text-align:center;color:var(--text-muted);font-size:.9rem">No tours found.</div>'; return; }
  grid.innerHTML = list.map((t, i) => {
    const idx = allTours.indexOf(t);
    const img = t.image_url ? `<img src="${t.image_url}" alt="${t.title || ''}" loading="lazy">` : '';
    const emoji = ['🏔️','🌿','🏝️','🛕','💧','📸'][i % 6];
    const desc = t.description ? (t.description.length > 90 ? t.description.slice(0, 90) + '…' : t.description) : '';
    return `<div class="tour-card" onclick="openModal(${idx})">
      <div class="tour-thumb">${img || emoji}<span class="tour-badge best-seller">${t.category || 'Tour'}</span></div>
      <div class="tour-body">
        <div class="tour-name">${t.title || 'Tour'}</div>
        <div class="tour-meta">${t.duration ? `<span>⏱ ${t.duration}</span>` : ''}${t.max_group ? `<span>👥 Max ${t.max_group}</span>` : ''}${t.location ? `<span>📍 ${t.location}</span>` : ''}</div>
        <div class="tour-footer">
          <span class="tour-price">${t.price ? `IDR ${t.price}` : '$0'} <span>/ person</span></span>
          <span class="tour-stars"><svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg> 4.9</span>
        </div>
      </div>
    </div>`;
  }).join('');
}

function openModal(i) {
  const t = allTours[i]; if (!t) return;
  const modal = document.getElementById('tourModal');
  const heroEl = document.getElementById('modalHero');
  const bodyEl = document.getElementById('modalBody');
  const wa = t.whatsapp || WA;
  const waMsg = encodeURIComponent('Hi! I\'m interested in booking: ' + t.title);
  heroEl.innerHTML = t.image_url
    ? `<div class="modal-hero"><img src="${t.image_url}" alt="${t.title || ''}"><span class="modal-hero-tag">${t.category || 'Tour'}</span></div>`
    : '<div class="modal-hero-noimg">🏝️</div>';
  const incl = t.includes
    ? `<div class="modal-section-title">What's included</div><div class="modal-includes">${t.includes.split(',').map(x => `<span class="modal-include-tag">✓ ${x.trim()}</span>`).join('')}</div>`
    : '';
  bodyEl.innerHTML = `<div class="modal-title">${t.title || 'Tour'}</div>
    <div class="modal-price">${t.price ? `IDR ${t.price}` : '$0'} <span>/ person</span></div>
    <div class="modal-meta">${t.location ? `<span class="modal-meta-item">📍 ${t.location}</span>` : ''}${t.duration ? `<span class="modal-meta-item">⏱ ${t.duration}</span>` : ''}${t.max_group ? `<span class="modal-meta-item">👥 Max ${t.max_group}</span>` : ''}${t.category ? `<span class="modal-meta-item">🏷 ${t.category}</span>` : ''}</div>
    ${t.description ? `<div class="modal-section-title">About this tour</div><p class="modal-desc">${t.description}</p>` : ''}
    ${incl}
    <div class="modal-actions">
      <a href="https://wa.me/${wa}?text=${waMsg}" target="_blank" class="modal-wa-btn">💬 WhatsApp</a>
      <a href="https://wa.me/${wa}?text=${waMsg}" target="_blank" class="modal-book-btn">Book now →</a>
    </div>`;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('tourModal');
  if (modal) { modal.classList.remove('active'); document.body.style.overflow = ''; }
}

loadTours();
