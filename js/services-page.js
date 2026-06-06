// ===== SERVICES PAGE JS =====

const CAT_IDS = ['skin', 'hair', 'makeup', 'waxing', 'body'];

function renderServices(filter) {
  const container = document.getElementById('servicesContainer');
  if (!container || typeof SERVICES_DATA === 'undefined') return;

  const filteredData = filter === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((_, idx) => CAT_IDS[idx] === filter);

  container.innerHTML = SERVICES_DATA.map((cat, idx) => {
    const catId = CAT_IDS[idx] || `cat${idx}`;
    const isHidden = filter !== 'all' && filter !== catId;
    return `
      <div class="service-category-block ${isHidden ? 'hidden' : ''}" id="${catId}">
        <div class="svc-cat-header">
          <span class="svc-cat-icon">${cat.icon}</span>
          <h2 class="svc-cat-title">${cat.category}</h2>
        </div>
        <div class="svc-grid">
          ${cat.services.map(s => `
            <div class="svc-item reveal">
              <div class="svc-item-info">
                <div class="svc-item-name">${s.name}</div>
                <div class="svc-item-desc">${s.desc}</div>
              </div>
              <div class="svc-item-price">
                <a href="https://wa.me/919981286212?text=${encodeURIComponent('Hi Lotas Makeup Studio! I am interested in the "' + s.name + '" service. Could you please share the price and availability?')}" target="_blank" class="svc-ask-price">Ask Price →</a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');

  // Trigger reveal for newly added items
  setTimeout(() => {
    container.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
  }, 100);
}

document.addEventListener('DOMContentLoaded', () => {
  // Always render all services first
  renderServices('all');

  // Handle hash in URL (e.g. services.html#hair)
  const hash = window.location.hash.replace('#', '');
  if (hash && CAT_IDS.includes(hash)) {
    // Switch active tab
    document.querySelectorAll('.cat-tab').forEach(t => {
      t.classList.toggle('active', t.dataset.cat === hash);
    });
    // Filter to that category
    renderServices(hash);
    // Scroll to section after render
    setTimeout(() => {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 350);
  }

  // Tab click
  document.querySelectorAll('.cat-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderServices(tab.dataset.cat);
      // Update URL hash without page jump
      history.replaceState(null, '', '#' + tab.dataset.cat);
    });
  });
});
