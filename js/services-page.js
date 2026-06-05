// ===== SERVICES PAGE JS =====

const CAT_IDS = ['skin', 'hair', 'makeup', 'waxing', 'nails', 'body'];

function renderServices(filter) {
  const container = document.getElementById('servicesContainer');
  if (!container || typeof SERVICES_DATA === 'undefined') return;

  container.innerHTML = SERVICES_DATA.map((cat, idx) => {
    const catId = CAT_IDS[idx] || `cat${idx}`;
    const isHidden = filter !== 'all' && filter !== catId;
    return `
      <div class="service-category-block reveal ${isHidden ? 'hidden' : ''}" id="${catId}">
        <div class="svc-cat-header">
          <span class="svc-cat-icon">${cat.icon}</span>
          <h2 class="svc-cat-title">${cat.category}</h2>
        </div>
        <div class="svc-grid">
          ${cat.services.map(s => `
            <div class="svc-item">
              <div class="svc-item-info">
                <div class="svc-item-name">${s.name}</div>
                <div class="svc-item-desc">${s.desc}</div>
              </div>
              <div class="svc-item-price">${s.price}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  renderServices('all');

  // Handle hash on load
  const hash = window.location.hash.replace('#', '');
  if (hash && CAT_IDS.includes(hash)) {
    renderServices(hash);
    document.querySelectorAll('.cat-tab').forEach(t => {
      t.classList.toggle('active', t.dataset.cat === hash);
    });
    setTimeout(() => {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
  }

  // Tab click
  document.querySelectorAll('.cat-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.dataset.cat;
      renderServices(cat);
    });
  });
});
