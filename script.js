/* ═════════════════════════════════════════════════
   script.js — Erick Gutiérrez 30 años ⚽
═════════════════════════════════════════════════ */

'use strict';

// ─── 1. IMAGES LIST ───────────────────────────────
const IMAGES = [
  "images/168335_10150385778815051_6793163_n.jpg",
  "images/18609.jpeg",
  "images/20180623_111015.jpg",
  "images/316360265_187187307196420_8695510364665741298_n.jpg",
  "images/8500255D-AFF1-4C4D-A05A-E0E9BE4BCA19.jpg",
  "images/FB_IMG_1518758699630.jpg",
  "images/FB_IMG_1518758776277.jpg",
  "images/FB_IMG_1518758787548.jpg",
  "images/FB_IMG_1526056679174.jpg",
  "images/FB_IMG_1527096576418.jpg",
  "images/FB_IMG_1533517205195.jpg",
  "images/FB_IMG_1546536013610.jpg",
  "images/FB_IMG_1546536021157.jpg",
  "images/FB_IMG_1560451738065.jpg",
  "images/FB_IMG_1560633643835.jpg",
  "images/FB_IMG_1570404344491.jpg",
  "images/FB_IMG_1581536269974.jpg",
  "images/FB_IMG_1582782711945.jpg",
  "images/FB_IMG_1582782718313.jpg",
  "images/FB_IMG_1639252423903.jpg",
  "images/FB_IMG_1746391580446.jpg",
  "images/FB_IMG_1747496495432.jpg",
  "images/FB_IMG_1749755056063.jpg",
  "images/IMG_20190526_224221.jpg",
  "images/IMG_3649.jpg",
  "images/IMG_4409.jpg",
  "images/IMG_4579.jpg",
  "images/PXL_20221009_210719281.jpg",
  "images/PXL_20221121_154201060.jpg",
  "images/PXL_20221123_170225894.PORTRAIT~2.jpg",
  "images/PXL_20221125_200049726.PORTRAIT.jpg",
  "images/PXL_20221126_185348858.jpg",
  "images/PXL_20221128_200336134.jpg",
  "images/PXL_20221128_211740213.jpg",
  "images/PXL_20230529_052356090.jpg",
  "images/PXL_20231218_011844390.jpg",
  "images/PXL_20240215_013126953.jpg",
  "images/PXL_20240303_225831637.jpg",
  "images/PXL_20240516_010412058.MP.jpg",
  "images/PXL_20251104_194707471.jpg",
  "images/PXL_20251104_194819805.jpg",
];

// ─── 2. FLOATING PHRASES ──────────────────────────
const PHRASES = [
  "⚽ GOLAZO",
  "MUNDIAL 2026",
  "FIFAS ETERNAS",
  "ERICK 30",
  "PLAYERA LISTA",
  "ESTADIO LLENO",
  "GOL DE ORO",
  "CAMPEÓN DE VIDA",
  "DESDE EL ÁREA",
  "TIEMPO EXTRA",
  "ANFIELD ROAD",
  "ESTADIO AZTECA",
  "QATAR 2022",
  "EL MEJOR ONCE",
  "GOOOOL",
  "COPA DEL MUNDO",
  "HAT TRICK",
  "OFFSIDE",
  "PENALTI",
  "TRIBUNA ALTA",
  "VESTUARIO",
  "CÉSPED VERDE",
  "BALÓN DORADO",
  "30 AÑOS DE GOLES",
  "PARTIDO HISTÓRICO",
  "EL 10 DE LA FIESTA",
  "FIFA MODE",
  "TIEMPO REGLAMENTARIO",
  "ÁRBITRO CONTIGO",
  "CANCHA PROPIA",
  "UN TANTO MÁS",
  "SELECCIÓN PERSONAL",
  "TEMPORADA ÉPICA",
  "CAMPEÓN",
  "PRORROGA",
  "LIGA DE CAMPEONES",
  "🏆 COPA",
  "FUTBOL ES VIDA",
  "DESDE EL CENTRO",
  "TIRO LIBRE",
];

// ─── 3. UTILITY ───────────────────────────────────
const rand = (min, max) => Math.random() * (max - min) + min;
const randInt = (min, max) => Math.floor(rand(min, max));
const shuffle = arr => [...arr].sort(() => Math.random() - .5);

// ─── 4. BACKGROUND COLLAGE ────────────────────────
function buildBackgroundCollage() {
  const bg = document.getElementById('collageBg');
  const shuffled = shuffle(IMAGES);
  const W = window.innerWidth;
  const H = window.innerHeight;

  shuffled.forEach((src, i) => {
    const img = document.createElement('img');
    img.classList.add('bg-photo');
    img.src = src;

    const size = rand(120, 280);
    const left = rand(-5, 95);
    const top  = rand(-5, 95);
    const rot  = rand(-25, 25);

    img.style.cssText = `
      width: ${size}px;
      height: ${size * rand(.7, 1.4)}px;
      left: ${left}%;
      top: ${top}%;
      transform: rotate(${rot}deg);
    `;

    bg.appendChild(img);

    // stagger fade-in
    setTimeout(() => img.classList.add('visible'), i * 120);
  });
}

// ─── 5. FLOATING PHRASES ──────────────────────────
function buildFloatingPhrases() {
  const container = document.getElementById('floatingPhrases');
  const phrasePool = shuffle([...PHRASES, ...PHRASES]);

  phrasePool.forEach((text, i) => {
    const el = document.createElement('div');
    el.classList.add('phrase-bubble');
    el.textContent = text;

    const left     = rand(0, 95);
    const duration = rand(20, 45);
    const delay    = rand(0, 30);
    const rot      = rand(-15, 15);
    const size     = rand(10, 20);

    el.style.cssText = `
      left: ${left}%;
      bottom: -5%;
      font-size: ${size}px;
      --r: ${rot}deg;
      animation-duration: ${duration}s;
      animation-delay: -${delay}s;
    `;

    container.appendChild(el);
  });
}

// ─── 6. GALLERY COLLAGE ───────────────────────────
const galleryImages = [];

function buildGallery() {
  const container = document.getElementById('galleryCollage');
  const shuffled  = shuffle(IMAGES);

  shuffled.forEach((src, i) => {
    const item = document.createElement('div');
    item.classList.add('gallery-item');
    item.dataset.index = i;

    const img = document.createElement('img');
    img.src = src;
    img.alt = `Foto ${i + 1}`;
    img.loading = 'lazy';

    const badge = document.createElement('div');
    badge.classList.add('photo-badge');
    badge.textContent = PHRASES[i % PHRASES.length];

    item.appendChild(img);
    item.appendChild(badge);
    container.appendChild(item);

    galleryImages.push(src);

    item.addEventListener('click', () => openLightbox(i));
  });
}

// ─── 7. LIGHTBOX ──────────────────────────────────
let lbIndex = 0;

function openLightbox(index) {
  lbIndex = index;
  document.getElementById('lbImg').src = galleryImages[lbIndex];
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

function lbNavigate(dir) {
  lbIndex = (lbIndex + dir + galleryImages.length) % galleryImages.length;
  document.getElementById('lbImg').src = galleryImages[lbIndex];
}

document.getElementById('lbClose').addEventListener('click', closeLightbox);
document.getElementById('lbPrev').addEventListener('click', () => lbNavigate(-1));
document.getElementById('lbNext').addEventListener('click', () => lbNavigate(1));

document.getElementById('lightbox').addEventListener('click', e => {
  if (e.target === document.getElementById('lightbox')) closeLightbox();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape')       closeLightbox();
  if (e.key === 'ArrowRight')   lbNavigate(1);
  if (e.key === 'ArrowLeft')    lbNavigate(-1);
});

// ─── 8. COUNTDOWN ─────────────────────────────────
function updateCountdown() {
  // 7 de marzo 2026 a las 16:00 (hora CDMX = UTC-6)
  const target = new Date('2026-03-07T16:00:00-06:00');
  const now    = new Date();
  const diff   = target - now;

  if (diff <= 0) {
    document.getElementById('countdown').innerHTML =
      '<div class="cd-block"><span class="cd-num" style="font-size:clamp(28px,5vw,60px);color:var(--green)">¡ES HOY! ⚽</span></div>';
    return;
  }

  const days  = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins  = Math.floor((diff % 3600000)  / 60000);
  const secs  = Math.floor((diff % 60000)    / 1000);

  const pad = n => String(n).padStart(2, '0');
  document.getElementById('cd-days').textContent  = String(days);
  document.getElementById('cd-hours').textContent = pad(hours);
  document.getElementById('cd-mins').textContent  = pad(mins);
  document.getElementById('cd-secs').textContent  = pad(secs);
}

// ─── 9. INIT ──────────────────────────────────────
(function init() {
  buildBackgroundCollage();
  buildFloatingPhrases();
  buildGallery();
  updateCountdown();
  setInterval(updateCountdown, 1000);
})();
