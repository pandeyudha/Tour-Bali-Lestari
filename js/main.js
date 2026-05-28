const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => { navbar.classList.toggle('scrolled', window.scrollY > 60); });

function toggleFaq(el) {
  const item = el.parentElement;
  const wasActive = item.classList.contains('active');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
  if (!wasActive) item.classList.add('active');
}

const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
      obs.unobserve(e.target);
    }
  });
}, { threshold: .12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.feature-card,.testimonial-card,.about-content,.about-images,.hero-slide,.stat-item').forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(32px)';
  el.style.transition = `opacity .7s cubic-bezier(.22,1,.36,1) ${i * .06}s, transform .7s cubic-bezier(.22,1,.36,1) ${i * .06}s`;
  obs.observe(el);
});

const SB_URL = "https://nmsublcklbpyccaendon.supabase.co";
const SB_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5tc3VibGNrbGJweWNjYWVuZG9uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYwNjUwNTAsImV4cCI6MjA5MTY0MTA1MH0.Y6lZ15a12eaAMxPDMU8x7uNRcEmJFZTGW2e-dx9mRa8";
const WA = "610452499051";
let allTours = [];

async function loadTours() {
  const grid = document.getElementById('toursGrid');
  try {
    const res = await fetch(`${SB_URL}/rest/v1/tours?status=eq.approved&order=created_at.desc`, {
      headers: { apikey: SB_KEY, Authorization: `Bearer ${SB_KEY}` }
    });
    if (!res.ok) throw new Error('Failed');
    allTours = await res.json();
    renderTours(allTours);
  } catch (e) {
    grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:60px 0;color:var(--text-muted)">⚠️ Could not load tours.</div>';
  }
}

function renderTours(list) {
  const grid = document.getElementById('toursGrid');
  if (list.length === 0) { grid.innerHTML = '<div class="tours-no-results">🔍 No tours found. Try a different search.</div>'; return; }
  grid.innerHTML = list.map((t, i) => {
    const idx = allTours.indexOf(t);
    const img = t.image_url
      ? `<div class="tour-card-img"><img src="${t.image_url}" alt="${t.title || ''}" loading="lazy"><span class="tour-card-tag">${t.category || 'Tour'}</span></div>`
      : `<div class="tour-card-img tour-card-noimg"><span class="tour-card-tag">${t.category || 'Tour'}</span>🏝️</div>`;
    let descText = 'Experience an unforgettable Bali adventure.';
    if (t.description) { try { descText = JSON.parse(t.description).summary || descText; } catch(e) { descText = t.description; } }
    const desc = descText.length > 120 ? descText.slice(0, 120) + '...' : descText;
    return `<div class="tour-card" onclick="openModal(${idx})" style="opacity:0;transform:translateY(32px);transition:opacity .6s var(--ease) ${i * .08}s,transform .6s var(--ease) ${i * .08}s">${img}<div class="tour-card-body"><h3 class="tour-card-title">${t.title || 'Tour'}</h3><p class="tour-card-desc">${desc}</p><div class="tour-card-meta">${t.location ? `<span>📍 ${t.location}</span>` : ''}${t.duration ? `<span>⏱ ${t.duration}</span>` : ''}${t.max_group ? `<span>👥 Max ${t.max_group}</span>` : ''}</div><div class="tour-card-footer"><span class="tour-card-price">$${t.price || 0} <span>/ person</span></span><span class="tour-card-link">View Details <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span></div></div></div>`;
  }).join('');
  setTimeout(() => { grid.querySelectorAll('.tour-card').forEach(el => { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; }); }, 100);
}

function filterTours() {
  const q = document.getElementById('tourSearch').value.toLowerCase().trim();
  const clearBtn = document.getElementById('searchClear');
  clearBtn.classList.toggle('show', q.length > 0);
  if (!q) { renderTours(allTours); return; }
  const filtered = allTours.filter(t =>
    (t.title || '').toLowerCase().includes(q) ||
    (t.location || '').toLowerCase().includes(q) ||
    (t.category || '').toLowerCase().includes(q) ||
    (t.description || '').toLowerCase().includes(q)
  );
  renderTours(filtered);
}

function clearSearch() {
  document.getElementById('tourSearch').value = '';
  document.getElementById('searchClear').classList.remove('show');
  renderTours(allTours);
}

function openModal(i) {
  const t = allTours[i]; if (!t) return;
  const modal = document.getElementById('tourModal'), heroEl = document.getElementById('modalHero'), bodyEl = document.getElementById('modalBody');
  const wa = t.whatsapp || WA, waMsg = encodeURIComponent('Hi! I\'m interested in booking: ' + t.title);
  heroEl.innerHTML = t.image_url
    ? '<div class="modal-hero"><img src="' + t.image_url + '" alt="' + (t.title || '') + '"><span class="modal-hero-tag">' + (t.category || 'Tour') + '</span></div>'
    : '<div class="modal-hero-noimg">🏝️</div>';

  // parse description — supports plain text or JSON
  let desc = '', notIncl = '', meetingHtml = '', vehicleHtml = '', restrictHtml = '', cancelHtml = '';
  if (t.description) {
    try {
      const d = JSON.parse(t.description);
      desc = d.summary ? '<h4 class="modal-section-title">About this tour</h4><p class="modal-desc">' + d.summary + '</p>' : '';
      if (d.course && d.course.length)
        desc += '<h4 class="modal-section-title">Course</h4><div class="modal-course">' + d.course.map(c => '<div class="modal-course-item"><div class="modal-course-header"><span class="modal-course-name">' + c.name + '</span><span class="modal-course-dur">' + c.duration + '</span></div><p class="modal-course-desc">' + c.desc + '</p></div>').join('') + '</div>';
      if (d.not_includes && d.not_includes.length)
        notIncl = '<h4 class="modal-section-title">Not included</h4><div class="modal-includes">' + d.not_includes.map(x => '<span class="modal-notincl-tag">✕ ' + x + '</span>').join('') + '</div>';
      if (d.meeting_time || d.meeting_place)
        meetingHtml = '<h4 class="modal-section-title">Meeting info</h4><div class="modal-meeting">' + (d.meeting_time ? '<div class="modal-meeting-item">🕐 <span>' + d.meeting_time + '</span></div>' : '') + (d.meeting_place ? '<div class="modal-meeting-item">📍 <span>' + d.meeting_place + '</span></div>' : '') + '</div>';
      if (d.vehicle)
        vehicleHtml = '<h4 class="modal-section-title">Vehicle</h4><p class="modal-desc" style="margin-bottom:20px">🚗 ' + d.vehicle + '</p>';
      if (d.restrictions && d.restrictions.length)
        restrictHtml = '<h4 class="modal-section-title">Important notes</h4><ul class="modal-restrict-list">' + d.restrictions.map(x => '<li>' + x + '</li>').join('') + '</ul>';
      if (d.cancellation)
        cancelHtml = '<h4 class="modal-section-title">Cancellation policy</h4><p class="modal-desc modal-cancel">' + d.cancellation + '</p>';
    } catch(e) {
      desc = '<h4 class="modal-section-title">About this tour</h4><p class="modal-desc">' + t.description + '</p>';
    }
  }

  const incl = t.includes
    ? '<h4 class="modal-section-title">What\'s included</h4><div class="modal-includes">' + t.includes.split(',').map(x => '<span class="modal-include-tag">✓ ' + x.trim() + '</span>').join('') + '</div>'
    : '';

  bodyEl.innerHTML = '<h2 class="modal-title">' + (t.title || 'Tour') + '</h2>'
    + '<div class="modal-price">$' + (t.price || 0) + ' <span>/ person</span></div>'
    + '<div class="modal-meta">'
    + (t.location ? '<div class="modal-meta-item">📍 ' + t.location + '</div>' : '')
    + (t.duration ? '<div class="modal-meta-item">⏱ ' + t.duration + '</div>' : '')
    + (t.max_group ? '<div class="modal-meta-item">👥 Max ' + t.max_group + '</div>' : '')
    + (t.category ? '<div class="modal-meta-item">🏷 ' + t.category + '</div>' : '')
    + '</div>'
    + desc + incl + notIncl + meetingHtml + vehicleHtml + restrictHtml + cancelHtml
    + '<div class="modal-actions"><a href="https://wa.me/' + wa + '?text=' + waMsg + '" target="_blank" class="modal-wa-btn">💬 WhatsApp</a><a href="https://wa.me/' + wa + '?text=' + waMsg + '" target="_blank" class="modal-book-btn">Book Now →</a></div>';
  modal.classList.add('active'); document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('tourModal').classList.remove('active');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

loadTours();

/* popup */
(function() {
  let deadline = parseInt(localStorage.getItem('blPopupDeadline'));
  if (!deadline || isNaN(deadline)) {
    deadline = Date.now() + 30 * 24 * 60 * 60 * 1000;
    localStorage.setItem('blPopupDeadline', deadline);
  }

  function pad(n) { return String(n).padStart(2, '0'); }

  function updateTimer() {
    const diff = Math.max(0, deadline - Date.now());
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    document.getElementById('blDays').textContent = pad(d);
    document.getElementById('blHours').textContent = pad(h);
    document.getElementById('blMins').textContent = pad(m);
    document.getElementById('blSecs').textContent = pad(s);
  }

  setTimeout(function() {
    const popup = document.getElementById('blPopup');
    if (!popup) return;
    updateTimer();
    popup.classList.add('active');
    setInterval(updateTimer, 1000);
  }, 2000);
})();

function closePopup() {
  const popup = document.getElementById('blPopup');
  if (!popup) return;
  popup.classList.remove('active');
  localStorage.setItem('blPopupSeen', 'true');
}
