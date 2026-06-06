/* ===== LOTAS MAKEUP STUDIO & SALON — MAIN JS (COMPLETE) ===== */

/* ============================================================
   1. THEME SYSTEM
   ============================================================ */
(function ThemeSystem() {
  const THEMES = ['dark', 'rose', 'emerald', 'royal'];
  const LABELS = { dark:'Gold', rose:'Rose', emerald:'Emerald', royal:'Royal' };
  const KEY = 'lotas_theme';

  function applyTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    localStorage.setItem(KEY, t);
    document.querySelectorAll('.theme-btn').forEach(b => b.classList.toggle('active', b.dataset.theme === t));
  }

  function injectTopBar() {
    if (document.querySelector('.theme-toggle-bar')) return;
    const bar = document.createElement('div');
    bar.className = 'theme-toggle-bar';
    bar.innerHTML = '<span class="ttb-label">Theme</span>' +
      THEMES.map(t => `<button class="theme-btn" data-theme="${t}" data-label="${LABELS[t]}" title="${LABELS[t]} Parth"></button>`).join('');
    document.body.prepend(bar);
    bar.querySelectorAll('.theme-btn').forEach(btn => {
      btn.addEventListener('click', () => { applyTheme(btn.dataset.theme); createSparkles(btn); });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    injectTopBar();
    applyTheme(localStorage.getItem(KEY) || 'dark');
  });
})();

/* ============================================================
   2. NAVBAR
   ============================================================ */
(function Navbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 60), { passive: true });
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(a => {
    const href = (a.getAttribute('href') || '').split('/').pop();
    if (href === path || (path === '' && href === 'index.html')) a.classList.add('active');
  });
})();

/* ============================================================
   3. MOBILE MENU
   ============================================================ */
(function MobileMenu() {
  const ham = document.querySelector('.hamburger');
  const nav = document.querySelector('.mobile-nav');
  if (!ham || !nav) return;
  ham.addEventListener('click', () => {
    ham.classList.toggle('open');
    nav.classList.toggle('open');
    document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    ham.classList.remove('open'); nav.classList.remove('open'); document.body.style.overflow = '';
  }));
})();

/* ============================================================
   4. SCROLL REVEAL
   ============================================================ */
(function ScrollReveal() {
  const targets = document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-scale,.reveal-rotate,.stagger,.section-line-enter');
  if (!targets.length) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  targets.forEach(el => obs.observe(el));
})();

/* ============================================================
   5. GOLD PARTICLE CANVAS
   ============================================================ */
(function ParticleCanvas() {
  const canvas = document.querySelector('.particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }

  function Particle() { this.reset(true); }
  Particle.prototype.reset = function(init) {
    this.x = Math.random() * W;
    this.y = init ? Math.random() * H : H + 10;
    this.r = Math.random() * 1.6 + 0.3;
    this.vy = -(Math.random() * 0.5 + 0.15);
    this.vx = (Math.random() - 0.5) * 0.25;
    this.life = Math.random() * 0.5 + 0.3;
    this.decay = Math.random() * 0.001 + 0.0005;
    this.gold = Math.random() > 0.35;
  };
  Particle.prototype.update = function() {
    this.y += this.vy; this.x += this.vx; this.life -= this.decay;
    if (this.life <= 0 || this.y < -10) this.reset(false);
  };
  Particle.prototype.draw = function() {
    const theme = document.documentElement.getAttribute('data-theme') || 'dark';
    const C = { dark:['rgba(201,169,110,','rgba(245,224,176,'], rose:['rgba(212,134,154,','rgba(235,176,190,'], emerald:['rgba(74,222,128,','rgba(187,247,208,'], royal:['rgba(167,139,250,','rgba(196,181,253,'] };
    const [c1,c2] = C[theme] || C.dark;
    ctx.beginPath(); ctx.arc(this.x, this.y, this.r, 0, Math.PI*2);
    ctx.fillStyle = this.gold ? c1+this.life+')' : c2+(this.life*0.6)+')';
    ctx.fill();
  };

  function init() { resize(); particles = Array.from({length:100}, () => new Particle()); }
  function loop() { ctx.clearRect(0,0,W,H); particles.forEach(p=>{p.update();p.draw();}); requestAnimationFrame(loop); }
  window.addEventListener('resize', resize, {passive:true});
  init(); loop();
})();

/* ============================================================
   6. CURSOR GLOW
   ============================================================ */
(function CursorGlow() {
  if (window.innerWidth <= 768) return;
  const g = document.createElement('div'); g.className = 'cursor-glow'; document.body.appendChild(g);
  document.addEventListener('mousemove', e => { g.style.left=e.clientX+'px'; g.style.top=e.clientY+'px'; }, {passive:true});
})();

/* ============================================================
   7. SPARKLES
   ============================================================ */
function createSparkles(originEl) {
  const rect = originEl ? originEl.getBoundingClientRect() : null;
  const cx = rect ? rect.left + rect.width/2 : window.innerWidth/2;
  const cy = rect ? rect.top + rect.height/2 : window.innerHeight/2;
  for (let i = 0; i < 10; i++) {
    const s = document.createElement('div'); s.className = 'sparkle';
    const angle = (i/10)*360; const dist = 30 + Math.random()*50;
    s.style.cssText = `left:${cx}px;top:${cy}px;position:fixed;z-index:99998;--tx:${Math.cos(angle*Math.PI/180)*dist}px;--ty:${Math.sin(angle*Math.PI/180)*dist}px;`;
    document.body.appendChild(s); setTimeout(() => s.remove(), 2000);
  }
}
document.addEventListener('click', e => {
  if (e.target.closest('.btn') || e.target.classList.contains('offer-cta')) createSparkles(e.target);
});

/* ============================================================
   8. COUNTER ANIMATION
   ============================================================ */
function animateCounters() {
  document.querySelectorAll('.hero-stat .num,.stat-num,.rs-stat-num').forEach(el => {
    if (el.dataset.animated) return; el.dataset.animated = '1';
    const text = el.textContent.trim();
    const num = parseInt(text.replace(/\D/g,''));
    if (!num) return;
    const suffix = text.replace(/\d/g,'');
    let start; const dur = 1800;
    const step = ts => { if(!start) start=ts; const p=Math.min((ts-start)/dur,1); el.textContent=Math.floor((1-Math.pow(1-p,3))*num)+suffix; if(p<1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  });
}
new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting) animateCounters();}),{threshold:0.3}).observe(document.querySelector('.hero-stats')||document.body);

/* ============================================================
   9. REVIEWS SLIDER
   ============================================================ */
function initReviewsSlider() {
  const track = document.querySelector('.reviews-track');
  if (!track) return;
  const prev = document.querySelector('.reviews-prev'), next = document.querySelector('.reviews-next');
  let idx = 0;
  function getVis() { return window.innerWidth<=768?1:window.innerWidth<=1100?2:3; }
  function slide() {
    const cards = track.querySelectorAll('.review-card'); if(!cards.length) return;
    const max = Math.max(0, cards.length-getVis()); if(idx>max) idx=max;
    track.style.transform = `translateX(-${idx*(cards[0].offsetWidth+20)}px)`;
  }
  function goNext() { const c=track.querySelectorAll('.review-card'); idx=idx>=Math.max(0,c.length-getVis())?0:idx+1; slide(); }
  function goPrev() { const c=track.querySelectorAll('.review-card'); idx=idx<=0?Math.max(0,c.length-getVis()):idx-1; slide(); }
  if(next) next.addEventListener('click', goNext);
  if(prev) prev.addEventListener('click', goPrev);
  window.addEventListener('resize', slide, {passive:true});
  setInterval(goNext, 4500);
}

function renderHomeReviews() {
  const track = document.querySelector('.reviews-track');
  if (!track || typeof REVIEWS_DATA==='undefined') return;
  track.innerHTML = REVIEWS_DATA.slice(0,9).map(r=>`
    <div class="review-card">
      <div class="review-header">
        <div class="review-avatar">${r.name.charAt(0)}</div>
        <div class="review-info">
          <div class="review-name">${r.name}</div>
          <div class="review-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</div>
        </div>
      </div>
      <p class="review-text">"${r.text}"</p>
    </div>`).join('');
  initReviewsSlider();
}

/* ============================================================
   10. RENDER HOME OFFERS
   ============================================================ */
function renderHomeOffers() {
  const grid = document.getElementById('offersGrid');
  if (!grid || typeof OFFERS_DATA==='undefined') return;
  grid.innerHTML = OFFERS_DATA.map(o=>`
    <div class="offer-card ${o.featured?'featured':''} reveal">
      <span class="offer-badge">${o.badge}</span>
      <h3 class="offer-name">${o.name}</h3>
      <p class="offer-tagline">${o.tagline}</p>
      <div class="offer-price"><span class="currency">₹</span><span class="amount">${o.price.toLocaleString('en-IN')}</span><span class="original">₹${o.originalPrice.toLocaleString('en-IN')}</span></div>
      <ul class="offer-includes">${o.includes.map(i=>`<li><span class="inc-icon">✦</span>${i}</li>`).join('')}</ul>
      <a href="pages/booking.html" class="offer-cta">Book This Package</a>
    </div>`).join('');
}

/* ============================================================
   11. FAQ ACCORDION
   ============================================================ */
(function FAQ() {
  document.addEventListener('click', e => {
    const btn = e.target.closest('.faq-q');
    if (!btn) return;
    const item = btn.closest('.faq-item');
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i=>i.classList.remove('open'));
    if (!wasOpen) item.classList.add('open');
  });
})();

/* ============================================================
   12. SMOOTH PAGE TRANSITIONS
   ============================================================ */
(function PageTransitions() {
  const overlay = document.createElement('div'); overlay.className='page-transition'; document.body.appendChild(overlay);
  document.querySelectorAll('a[href]').forEach(a => {
    const href = a.getAttribute('href')||'';
    if (!href||href.startsWith('#')||href.startsWith('http')||href.startsWith('tel:')||href.startsWith('mailto:')||href.includes('wa.me')) return;
    a.addEventListener('click', e => { e.preventDefault(); overlay.classList.add('active'); setTimeout(()=>{window.location=href;},300); });
  });
  window.addEventListener('pageshow', ()=>overlay.classList.remove('active'));
})();

/* ============================================================
   13. SMOOTH ANCHOR SCROLL
   ============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const t=document.querySelector(a.getAttribute('href'));
    if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth',block:'start'});}
  });
});

/* ============================================================
   14. RATING BARS ANIMATE
   ============================================================ */
(function RatingBars() {
  const block = document.querySelector('.rating-summary-inner');
  if (!block) return;
  new IntersectionObserver(([e])=>{
    if(!e.isIntersecting) return;
    block.querySelectorAll('.rs-bar-fill').forEach(b=>{const w=b.style.width;b.style.width='0';setTimeout(()=>{b.style.width=w;},150);});
  },{threshold:0.3}).observe(block);
})();

/* ============================================================
   15. DOM READY
   ============================================================ */
document.addEventListener('DOMContentLoaded', ()=>{
  renderHomeOffers();
  renderHomeReviews();
});
