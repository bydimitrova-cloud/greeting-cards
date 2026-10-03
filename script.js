// ======================================================
// Поздравителни картички
// ======================================================

// Категории (cat в картичките по-долу)
const CATEGORIES = [
  { id: 'all', label: 'Всички' },
  { id: 'flowers', label: 'Цветя' },
  { id: 'love', label: 'Рози и любов' },
  { id: 'gifts', label: 'Подаръци' },
  { id: 'xmas', label: 'Коледа' },
  { id: 'easter', label: 'Великден' }
];

// Картички.
// id    -> името на файла: images/card-<id>.jpg и images/thumbs/<id>.jpg
// zone  -> свободната зона за текста в % от картичката: [горе, дясно, долу, ляво]
// color -> цвят на текста
// glow  -> 'light' (светъл ореол, за светли фонове) или 'dark' (тъмна сянка, за светъл текст)
const TEMPLATES = [
  // --- Цветя ---
  { id: 'gold', cat: 'flowers', label: 'Златни цветя', zone: [8, 6, 42, 26], color: '#7a4a3a' },
  { id: 'basket', cat: 'flowers', label: 'Кошница с цветя', zone: [12, 52, 18, 6], color: '#8a4f4a' },
  { id: 'frame', cat: 'flowers', label: 'Цветна рамка', zone: [20, 22, 20, 22], color: '#5b3f63' },
  { id: 'spring', cat: 'flowers', label: 'Пролетен букет', zone: [14, 58, 22, 6], color: '#3d6b5c' },
  { id: 'violet-basket', cat: 'flowers', label: 'Лилава кошница', zone: [12, 56, 20, 6], color: '#7a3f6a' },
  { id: 'cream', cat: 'flowers', label: 'Нежни цветя', zone: [12, 24, 32, 24], color: '#6b5444' },
  { id: 'lily', cat: 'flowers', label: 'Лилия', zone: [12, 4, 14, 68], color: '#8a5238' },
  { id: 'pink-flowers', cat: 'flowers', label: 'Розови цветя', zone: [14, 6, 22, 42], color: '#7a5a48' },
  { id: 'purple-basket', cat: 'flowers', label: 'Кошница с люляк', zone: [14, 62, 22, 6], color: '#6a3f6f' },

  // --- Рози и любов ---
  { id: 'red-roses', cat: 'love', label: 'Червени рози', zone: [16, 24, 24, 20], color: '#7a2f35' },
  { id: 'rose-hearts', cat: 'love', label: 'Роза и сърца', zone: [14, 6, 20, 58], color: '#7a4a6a' },
  { id: 'gold-roses', cat: 'love', label: 'Златни рози', zone: [10, 6, 40, 40], color: '#6a4534' },
  { id: 'pink-roses', cat: 'love', label: 'Рози с панделка', zone: [14, 56, 18, 6], color: '#8a4a5f' },
  { id: 'red-rose', cat: 'love', label: 'Червена роза', zone: [14, 22, 18, 42], color: '#9a3a38' },
  { id: 'dusty-roses', cat: 'love', label: 'Пудрени рози', zone: [14, 6, 16, 48], color: '#7a4a5a' },

  // --- Подаръци ---
  { id: 'gifts', cat: 'gifts', label: 'Подаръци', zone: [14, 58, 18, 6], color: '#5b6f8a' },

  // --- Коледа ---
  { id: 'holly', cat: 'xmas', label: 'Коледен имел', zone: [12, 40, 14, 8], color: '#fff6df', glow: 'dark' },
  { id: 'bauble', cat: 'xmas', label: 'Коледна топка', zone: [14, 40, 16, 12], color: '#1f4a47', glow: 'light' },
  { id: 'xmas-frame', cat: 'xmas', label: 'Коледна рамка', zone: [14, 36, 16, 10], color: '#123b36', glow: 'light' },
  { id: 'xmas-gold', cat: 'xmas', label: 'Коледна със злато', zone: [12, 8, 14, 42], color: '#22403c', glow: 'light' },

  // --- Великден ---
  { id: 'easter-1', cat: 'easter', label: 'Великденски яйца', zone: [12, 6, 14, 53], color: '#5e4a2a' },
  { id: 'easter-2', cat: 'easter', label: 'Великденски яйца 2', zone: [12, 54, 12, 7], color: '#6b4a2a' }
];

const GLOWS = {
  light: '0 1px 8px rgba(255, 255, 255, 0.8)',
  dark: '0 2px 8px rgba(0, 0, 0, 0.55)'
};

// Шрифтове: id съвпада с data-font в style.css (всички поддържат кирилица)
const FONTS = [
  { id: 'playfair', label: 'Аа', css: "'Playfair Display', serif", italic: true },
  { id: 'marck', label: 'Аа', css: "'Marck Script', cursive" },
  { id: 'caveat', label: 'Аа', css: "'Caveat', cursive", bold: true },
  { id: 'pacifico', label: 'Аа', css: "'Pacifico', cursive" }
];

const card = document.getElementById('card');
const cardText = document.getElementById('cardText');
const catsBox = document.getElementById('cats');
const thumbs = document.getElementById('thumbs');
const fontsBox = document.getElementById('fonts');
const messageInput = document.getElementById('messageInput');
const charCount = document.getElementById('charCount');
const sizeInput = document.getElementById('sizeInput');

let currentTplId = TEMPLATES[0].id;
let currentCat = 'all';

// --- Избор на картичка ---
function selectTemplate(id) {
  const t = TEMPLATES.find(x => x.id === id);
  if (!t) return;
  currentTplId = id;
  card.dataset.tpl = id;
  card.style.backgroundImage = `url("images/card-${t.id}.jpg")`;
  card.style.setProperty('--zt', t.zone[0] + '%');
  card.style.setProperty('--zr', t.zone[1] + '%');
  card.style.setProperty('--zb', t.zone[2] + '%');
  card.style.setProperty('--zl', t.zone[3] + '%');
  card.style.setProperty('--text-color', t.color);
  card.style.setProperty('--text-shadow', GLOWS[t.glow] || 'none');
  thumbs.querySelectorAll('.thumb').forEach(b => {
    b.classList.toggle('active', b.dataset.id === id);
  });
}

// --- Миниатюри (според избраната категория) ---
function renderThumbs() {
  thumbs.innerHTML = '';
  TEMPLATES
    .filter(t => currentCat === 'all' || t.cat === currentCat)
    .forEach(t => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'thumb';
      btn.dataset.id = t.id;
      btn.title = t.label;
      btn.setAttribute('aria-label', t.label);
      btn.style.backgroundImage = `url("images/thumbs/${t.id}.jpg")`;
      btn.classList.toggle('active', t.id === currentTplId);
      btn.addEventListener('click', () => selectTemplate(t.id));
      thumbs.appendChild(btn);
    });
}

// --- Категории ---
CATEGORIES.forEach(c => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'cat-btn';
  btn.dataset.id = c.id;
  btn.textContent = c.label;
  btn.addEventListener('click', () => {
    currentCat = c.id;
    catsBox.querySelectorAll('.cat-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.id === c.id);
    });
    renderThumbs();
  });
  catsBox.appendChild(btn);
});

// --- Избор на шрифт ---
function selectFont(id) {
  card.dataset.font = id;
  fontsBox.querySelectorAll('.font-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.id === id);
  });
}

FONTS.forEach(f => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'font-btn';
  btn.dataset.id = f.id;
  btn.textContent = f.label;
  btn.style.fontFamily = f.css;
  if (f.italic) btn.style.fontStyle = 'italic';
  if (f.bold) btn.style.fontWeight = '700';
  btn.addEventListener('click', () => selectFont(f.id));
  fontsBox.appendChild(btn);
});

// --- Текст на живо ---
function updateText() {
  const val = messageInput.value;
  // textContent (не innerHTML) – безопасно, ако някой постави специални знаци
  cardText.textContent = val.trim() ? val : 'Твоят поздрав тук';
  charCount.textContent = val.length;
}
messageInput.addEventListener('input', updateText);

// --- Размер на текста ---
function updateSize() {
  card.style.setProperty('--size', sizeInput.value);
}
sizeInput.addEventListener('input', updateSize);

// --- Начално състояние ---
catsBox.querySelector('.cat-btn').classList.add('active'); // "Всички"
renderThumbs();
selectTemplate(currentTplId);
selectFont(FONTS[0].id);
updateText();
updateSize();
