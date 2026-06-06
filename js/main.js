/* ===== LOTAS MAKEUP STUDIO & SALON — MAIN JS v4 ===== */

/* ============================================================
   1. THEME SYSTEM — full themes incl. light, sound effects
   ============================================================ */
(function ThemeSystem() {
  const THEMES = [
    { id:'dark',    label:'Midnight Gold',  light:false },
    { id:'rose',    label:'Rose Bloom',     light:false },
    { id:'emerald', label:'Emerald Glow',   light:false },
    { id:'royal',   label:'Royal Violet',   light:false },
    { id:'pearl',   label:'Pearl White',    light:true  },
    { id:'blush',   label:'Blush Cream',    light:true  },
    { id:'lavender',label:'Lavender Mist',  light:true  },
  ];
  const KEY = 'lotas_theme';

  // Tiny click sound via Web Audio
  function playThemeSound() {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain); gain.connect(ctx.destination);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.18, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.35);
    } catch(e) {}
  }

  function applyTheme(id) {
    document.documentElement.setAttribute('data-theme', id);
    localStorage.setItem(KEY, id);
    document.querySelectorAll('.theme-btn').forEach(b => b.classList.toggle('active', b.dataset.theme === id));
  }

  function injectTopBar() {
    if (document.querySelector('.theme-toggle-bar')) return;
    const bar = document.createElement('div');
    bar.className = 'theme-toggle-bar';
    bar.innerHTML = `
      <span class="ttb-label">✨ Select Your Vibe</span>
      <div class="theme-btns-wrap">
        ${THEMES.map(t=>`
          <button class="theme-btn ${t.light?'light-theme':''}" data-theme="${t.id}" title="${t.label}">
            <span class="tb-dot"></span>
            <span class="tb-name">${t.label}</span>
          </button>
        `).join('')}
      </div>
      <a class="ttb-credit" href="https://parth27.vercel.app" target="_blank" rel="noopener">
        Website by Parth Rajpurohit
      </a>`;
    document.body.prepend(bar);
    bar.querySelectorAll('.theme-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        applyTheme(btn.dataset.theme);
        playThemeSound();
        createSparkles(btn);
      });
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
  window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 60), {passive:true});
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(a => {
    const href = (a.getAttribute('href')||'').split('/').pop().split('#')[0];
    if (href===path || (path===''&&href==='index.html')) a.classList.add('active');
  });
})();

/* ============================================================
   3. MOBILE MENU
   ============================================================ */
(function MobileMenu() {
  const ham = document.querySelector('.hamburger');
  const nav = document.querySelector('.mobile-nav');
  if (!ham||!nav) return;
  ham.addEventListener('click', () => {
    ham.classList.toggle('open'); nav.classList.toggle('open');
    document.body.style.overflow = nav.classList.contains('open')?'hidden':'';
  });
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    ham.classList.remove('open'); nav.classList.remove('open'); document.body.style.overflow='';
  }));
})();

/* ============================================================
   4. SCROLL REVEAL
   ============================================================ */
(function ScrollReveal() {
  const targets = document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-scale,.stagger');
  if (!targets.length) return;
  const obs = new IntersectionObserver(e=>e.forEach(x=>{ if(x.isIntersecting) x.target.classList.add('visible'); }),{threshold:0.08,rootMargin:'0px 0px -40px 0px'});
  targets.forEach(el=>obs.observe(el));
})();

/* ============================================================
   5. PARTICLES
   ============================================================ */
(function Particles() {
  const canvas = document.querySelector('.particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W,H,particles=[];
  function resize(){W=canvas.width=window.innerWidth;H=canvas.height=window.innerHeight;}
  function P(){this.reset(true);}
  P.prototype.reset=function(init){
    this.x=Math.random()*W; this.y=init?Math.random()*H:H+10;
    this.r=Math.random()*1.6+0.3; this.vy=-(Math.random()*0.5+0.15);
    this.vx=(Math.random()-0.5)*0.25; this.life=Math.random()*0.5+0.3;
    this.decay=Math.random()*0.001+0.0005; this.gold=Math.random()>0.35;
  };
  P.prototype.update=function(){this.y+=this.vy;this.x+=this.vx;this.life-=this.decay;if(this.life<=0||this.y<-10)this.reset(false);};
  P.prototype.draw=function(){
    const t=document.documentElement.getAttribute('data-theme')||'dark';
    const isLight=['pearl','blush','lavender'].includes(t);
    const C={dark:['rgba(201,169,110,','rgba(245,224,176,'],rose:['rgba(212,134,154,','rgba(235,176,190,'],emerald:['rgba(74,222,128,','rgba(187,247,208,'],royal:['rgba(167,139,250,','rgba(196,181,253,'],pearl:['rgba(180,140,90,','rgba(200,160,100,'],blush:['rgba(196,122,133,','rgba(220,160,170,'],lavender:['rgba(140,110,190,','rgba(170,140,210,']};
    const [c1,c2]=(C[t]||C.dark);
    ctx.beginPath();ctx.arc(this.x,this.y,this.r,0,Math.PI*2);
    ctx.fillStyle=this.gold?c1+this.life+')':c2+(this.life*(isLight?0.4:0.6))+')';ctx.fill();
  };
  function init(){resize();particles=Array.from({length:80},()=>new P());}
  function loop(){ctx.clearRect(0,0,W,H);particles.forEach(p=>{p.update();p.draw();});requestAnimationFrame(loop);}
  window.addEventListener('resize',resize,{passive:true});
  init();loop();
})();

/* ============================================================
   6. CURSOR GLOW
   ============================================================ */
(function CursorGlow(){
  if(window.innerWidth<=768) return;
  const g=document.createElement('div');g.className='cursor-glow';document.body.appendChild(g);
  document.addEventListener('mousemove',e=>{g.style.left=e.clientX+'px';g.style.top=e.clientY+'px';},{passive:true});
})();

/* ============================================================
   7. SPARKLES
   ============================================================ */
function createSparkles(el) {
  const rect=el?el.getBoundingClientRect():null;
  const cx=rect?rect.left+rect.width/2:window.innerWidth/2;
  const cy=rect?rect.top+rect.height/2:window.innerHeight/2;
  for(let i=0;i<10;i++){
    const s=document.createElement('div');s.className='sparkle';
    const angle=(i/10)*360;const dist=30+Math.random()*50;
    s.style.cssText=`left:${cx}px;top:${cy}px;position:fixed;z-index:99998;--tx:${Math.cos(angle*Math.PI/180)*dist}px;--ty:${Math.sin(angle*Math.PI/180)*dist}px;`;
    document.body.appendChild(s);setTimeout(()=>s.remove(),2000);
  }
}
document.addEventListener('click',e=>{
  const b=e.target.closest('.btn')||(e.target.classList.contains('offer-cta')?e.target:null);
  if(b) createSparkles(b);
});

/* ============================================================
   8. COUNTER ANIMATION
   ============================================================ */
function animateCounters(){
  document.querySelectorAll('.hero-stat .num,.stat-num,.rs-stat-num').forEach(el=>{
    if(el.dataset.animated) return; el.dataset.animated='1';
    const text=el.textContent.trim();const num=parseInt(text.replace(/\D/g,''));
    if(!num) return;const suffix=text.replace(/\d/g,'');
    let start;const dur=1800;
    const step=ts=>{if(!start)start=ts;const p=Math.min((ts-start)/dur,1);el.textContent=Math.floor((1-Math.pow(1-p,3))*num)+suffix;if(p<1)requestAnimationFrame(step);};
    requestAnimationFrame(step);
  });
}
const heroStats=document.querySelector('.hero-stats');
if(heroStats) new IntersectionObserver(([e])=>{if(e.isIntersecting)animateCounters();},{threshold:0.3}).observe(heroStats);

/* ============================================================
   9. REVIEWS SLIDER
   ============================================================ */
function initReviewsSlider(){
  const track=document.querySelector('.reviews-track');if(!track) return;
  const prev=document.querySelector('.reviews-prev'),next=document.querySelector('.reviews-next');
  let idx=0;
  function getVis(){return window.innerWidth<=768?1:window.innerWidth<=1100?2:3;}
  function slide(){const cards=track.querySelectorAll('.review-card');if(!cards.length)return;const max=Math.max(0,cards.length-getVis());if(idx>max)idx=max;track.style.transform=`translateX(-${idx*(cards[0].offsetWidth+20)}px)`;}
  function goNext(){const c=track.querySelectorAll('.review-card');idx=idx>=Math.max(0,c.length-getVis())?0:idx+1;slide();}
  function goPrev(){const c=track.querySelectorAll('.review-card');idx=idx<=0?Math.max(0,c.length-getVis()):idx-1;slide();}
  if(next) next.addEventListener('click',goNext);
  if(prev) prev.addEventListener('click',goPrev);
  window.addEventListener('resize',slide,{passive:true});
  setInterval(goNext,4500);
}
function renderHomeReviews(){
  const track=document.querySelector('.reviews-track');
  if(!track||typeof REVIEWS_DATA==='undefined') return;
  track.innerHTML=REVIEWS_DATA.slice(0,9).map(r=>`
    <div class="review-card">
      <div class="review-header">
        <div class="review-avatar">${r.name.charAt(0)}</div>
        <div class="review-info"><div class="review-name">${r.name}</div><div class="review-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</div></div>
      </div>
      <p class="review-text">"${r.text}"</p>
    </div>`).join('');
  initReviewsSlider();
}

/* ============================================================
   10. HOME OFFERS — No price, Ask Price WhatsApp button
   ============================================================ */
function renderHomeOffers(){
  const grid=document.getElementById('offersGrid');
  if(!grid||typeof OFFERS_DATA==='undefined') return;
  grid.innerHTML=OFFERS_DATA.map(o=>`
    <div class="offer-card ${o.featured?'featured':''} reveal">
      <span class="offer-badge">${o.badge}</span>
      <h3 class="offer-name">${o.name}</h3>
      <p class="offer-tagline">${o.tagline}</p>
      <ul class="offer-includes">${o.includes.map(i=>`<li><span class="inc-icon">✦</span>${i}</li>`).join('')}</ul>
      <a href="https://wa.me/919981286212?text=${encodeURIComponent('Hi Lotas Makeup Studio! I am interested in the "'+o.name+'" package. Could you please share the price and details? Thank you!')}" target="_blank" class="offer-cta ask-price-btn">📱 Ask Price on WhatsApp</a>
    </div>`).join('');
  document.querySelectorAll('#offersGrid .reveal').forEach(el=>{
    new IntersectionObserver(([e])=>{if(e.isIntersecting)e.target.classList.add('visible');},{threshold:0.08}).observe(el);
  });
}

/* ============================================================
   11. FAQ ACCORDION
   ============================================================ */
document.addEventListener('click',e=>{
  const btn=e.target.closest('.faq-q');if(!btn) return;
  const item=btn.closest('.faq-item');const wasOpen=item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i=>i.classList.remove('open'));
  if(!wasOpen) item.classList.add('open');
});

/* ============================================================
   12. PAGE TRANSITIONS — skip hash, external, tel, wa, blank
   ============================================================ */
(function PageTransitions(){
  const overlay=document.createElement('div');overlay.className='page-transition';document.body.appendChild(overlay);
  document.addEventListener('click',e=>{
    const a=e.target.closest('a[href]');if(!a) return;
    const href=a.getAttribute('href')||'';
    if(href.startsWith('http')||href.startsWith('#')||href.startsWith('tel:')||
       href.startsWith('mailto:')||href.includes('wa.me')||href.includes('maps.google')||
       href===''||a.target==='_blank'||href.includes('#')) return;
    e.preventDefault();overlay.classList.add('active');
    setTimeout(()=>{window.location.href=href;},280);
  });
  window.addEventListener('pageshow',()=>overlay.classList.remove('active'));
})();

/* ============================================================
   13. SMOOTH ANCHOR SCROLL
   ============================================================ */
document.addEventListener('click',e=>{
  const a=e.target.closest('a[href^="#"]');if(!a) return;
  const target=document.querySelector(a.getAttribute('href'));
  if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth',block:'start'});}
});

/* ============================================================
   14. RATING BARS
   ============================================================ */
(function RatingBars(){
  const block=document.querySelector('.rating-summary-inner');if(!block) return;
  new IntersectionObserver(([e])=>{
    if(!e.isIntersecting) return;
    block.querySelectorAll('.rs-bar-fill').forEach(b=>{const w=b.style.width;b.style.width='0';setTimeout(()=>{b.style.width=w;},150);});
  },{threshold:0.3}).observe(block);
})();

/* ============================================================
   15. DOM READY
   ============================================================ */
document.addEventListener('DOMContentLoaded',()=>{
  renderHomeOffers();
  renderHomeReviews();
});
