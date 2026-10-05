// ======================================================
// Поздравителни картички
// ======================================================

// Категории (cat в картичките по-долу)
const CATEGORIES = [
  { id: 'all', label: 'Всички' },
  { id: 'flowers', label: 'Цветя' },
  { id: 'love', label: 'Рози и любов' },
  { id: 'birthday', label: 'Рожден ден' },
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
  { id: 'violet-basket', cat: 'flowers', label: 'Лилава кошница', zone: [12, 58, 18, 6], color: '#7a3f6a' },
  { id: 'gold', cat: 'flowers', label: 'Златни цветя', zone: [10, 6, 32, 30], color: '#7a4a3a' },
  { id: 'basket', cat: 'flowers', label: 'Кошница с цветя', zone: [12, 58, 18, 6], color: '#8a4f4a' },
  { id: 'frame', cat: 'flowers', label: 'Цветна рамка', zone: [20, 22, 20, 22], color: '#5b3f63' },
  { id: 'spring', cat: 'flowers', label: 'Пролетен букет', zone: [12, 60, 18, 6], color: '#3d6b5c' },
  { id: 'cream', cat: 'flowers', label: 'Нежни цветя', zone: [12, 24, 32, 24], color: '#6b5444' },
  { id: 'lily', cat: 'flowers', label: 'Лилия', zone: [12, 4, 14, 68], color: '#8a5238' },
  { id: 'dusty-roses', cat: 'love', label: 'Пудрени рози', zone: [14, 6, 16, 46], color: '#7a4a5a' },
  { id: 'purple-basket', cat: 'flowers', label: 'Кошница с люляк', zone: [12, 58, 18, 6], color: '#6a3f6f' },

  // --- Рози и любов ---
  { id: 'red-roses', cat: 'love', label: 'Червени рози', zone: [16, 24, 24, 20], color: '#7a2f35' },
  { id: 'rose-hearts', cat: 'love', label: 'Роза и сърца', zone: [14, 6, 20, 52], color: '#7a4a6a' },
  { id: 'gold-roses', cat: 'love', label: 'Златни рози', zone: [14, 6, 40, 40], color: '#6a4534' },
  { id: 'pink-roses', cat: 'love', label: 'Рози с панделка', zone: [12, 54, 18, 6], color: '#8a4a5f' },
  { id: 'red-rose', cat: 'love', label: 'Червена роза', zone: [14, 6, 18, 42], color: '#9a3a38' },
  { id: 'pink-flowers', cat: 'flowers', label: 'Розови цветя', zone: [14, 6, 22, 36], color: '#7a5a48' },
  { id: 'gold-hearts', cat: 'love', label: 'Златни сърца', zone: [20, 32, 20, 32], color: '#6a4534' },
  { id: 'gold-frame', cat: 'love', label: 'Златна рамка с рози', zone: [36, 27, 34, 28], color: '#6a3a3f' },
  { id: 'pink-roses-gold', cat: 'love', label: 'Рози в рамка', zone: [32, 30, 31, 30], color: '#7a4545' },
  { id: 'roses-black', cat: 'love', label: 'Рози и черна рамка', zone: [31, 26, 31, 26], color: '#f1d9a8' },

  // --- Рожден ден ---
  { id: 'gifts', cat: 'birthday', label: 'Подаръци', zone: [12, 52, 18, 6], color: '#5b6f8a' },
  { id: 'bday-blue', cat: 'birthday', label: 'Рожден ден – синя', zone: [20, 20, 20, 20], color: '#1f4f7a', glow: 'light' },
  { id: 'bday-balloons', cat: 'birthday', label: 'Рожден ден – балони', zone: [34, 24, 33, 24], color: '#1d4a5c', glow: 'light' },

  // --- Коледа ---
  { id: 'holly', cat: 'xmas', label: 'Коледен имел', zone: [12, 40, 14, 8], color: '#fab905', glow: 'dark' },
  { id: 'bauble', cat: 'xmas', label: 'Коледна топка', zone: [12, 42, 12, 10], color: '#1f4a47', glow: 'light' },
  { id: 'xmas-frame', cat: 'xmas', label: 'Коледна рамка', zone: [14, 40, 16, 10], color: '#123b36', glow: 'light' },
  { id: 'xmas-gold', cat: 'xmas', label: 'Коледна със злато', zone: [12, 8, 14, 42], color: '#22403c', glow: 'light' },
  { id: 'tree-gifts', cat: 'xmas', label: 'Елха с подаръци', zone: [24, 20, 22, 32], color: '#22403c', glow: 'light' },
  { id: 'santa', cat: 'xmas', label: 'Дядо Коледа', zone: [14, 55, 16, 5], color: '#7a3a2f', glow: 'light' },
  { id: 'blue-tree', cat: 'xmas', label: 'Синя елха', zone: [8, 48, 45, 5], color: '#2f5f73', glow: 'light' },
  { id: 'baubles-white', cat: 'xmas', label: 'Златни топки', zone: [14, 26, 14, 24], color: '#2c5159', glow: 'light' },
  { id: 'baubles-pink', cat: 'xmas', label: 'Топки и снежинки', zone: [22, 28, 22, 34], color: '#4b5f6b', glow: 'light' },
  { id: 'blue-gifts', cat: 'xmas', label: 'Елха със сини подаръци', zone: [12, 24, 22, 38], color: '#2f5a6e', glow: 'light' },
  { id: 'baubles-watercolor', cat: 'xmas', label: 'Акварелни топки', zone: [14, 6, 14, 62], color: '#2f5a63', glow: 'light' },
  { id: 'gift-poinsettia', cat: 'xmas', label: 'Подарък с коледна звезда', zone: [14, 57, 14, 6], color: '#a10e0e', glow: 'light' },
  { id: 'navy-bows', cat: 'xmas', label: 'Тъмносиня с панделки', zone: [14, 26, 14, 24], color: '#e6a94eda' },
  { id: 'navy-tree', cat: 'xmas', label: 'Тъмносиня елха', zone: [12, 44, 12, 6], color: '#fddc87' },
  { id: 'pastel-tree', cat: 'xmas', label: 'Пастелна елха', zone: [12, 50, 14, 6], color: '#2f5565', glow: 'light' },
  { id: 'mint-copper', cat: 'xmas', label: 'Мента и мед', zone: [26, 16, 24, 42], color: '#8a4f33', glow: 'light' },


  // --- Великден ---
  { id: 'easter-1', cat: 'easter', label: 'Великденски яйца', zone: [12, 6, 14, 53], color: '#5e4a2a' },
  { id: 'easter-2', cat: 'easter', label: 'Великденски яйца 2', zone: [12, 58, 12, 7], color: '#6b4a2a' },
];

const GLOWS = {
  light: '0 1px 8px rgba(255, 255, 255, 0.8)',
  dark: '0 2px 8px rgba(0, 0, 0, 0.55)'
};

// Същите ореоли във вид, подходящ за canvas (при сваляне на картичката)
const CANVAS_GLOWS = {
  light: { color: 'rgba(255, 255, 255, 0.8)', blur: 8, offsetY: 1 },
  dark: { color: 'rgba(0, 0, 0, 0.55)', blur: 8, offsetY: 2 }
};

// Шрифтове: id съвпада с data-font в style.css (всички поддържат кирилица)
const FONTS = [
  { id: 'greatvibes', label: 'Аа', css: "'Great Vibes', cursive" },
  { id: 'caveat', label: 'Аа', css: "'Caveat', cursive", bold: true },
  { id: 'marck', label: 'Аа', css: "'Marck Script', cursive" },
  { id: 'playfair', label: 'Аа', css: "'Playfair Display', serif", italic: true },
  { id: 'cormorant', label: 'Аа', css: "'Cormorant Garamond', serif", italic: true },
  { id: 'pacifico', label: 'Аа', css: "'Pacifico', cursive" }
];

const MAX_CHARS = 300;

const card = document.getElementById('card');
const cardText = document.getElementById('cardText');
const catsBox = document.getElementById('cats');
const thumbs = document.getElementById('thumbs');
const fontsBox = document.getElementById('fonts');
const messageInput = document.getElementById('messageInput');
const charCount = document.getElementById('charCount');
const sizeInput = document.getElementById('sizeInput');

const downloadBtn = document.getElementById('downloadBtn');
const copyLinkBtn = document.getElementById('copyLinkBtn');

// --- Кратки линкове (Supabase) ---
const sb = window.supabase
  ? window.supabase.createClient(window.SUPABASE_URL, window.SUPABASE_KEY)
  : null;

function genCardId() {
  const chars = 'abcdefghijkmnpqrstuvwxyz23456789';
  const bytes = crypto.getRandomValues(new Uint8Array(8));
  return Array.from(bytes, b => chars[b % chars.length]).join('');
}

// Помни последния записан линк, за да не се записва една и съща картичка многократно
let lastSaved = { sig: '', link: '' };

// Записва картичката и връща кратък линк. Ако не успее, връща стария дълъг линк.
async function buildShortLink() {
  const sig = JSON.stringify([currentTplId, card.dataset.font, sizeInput.value, messageInput.value]);
  if (lastSaved.sig === sig) return lastSaved.link;
  try {
    if (!sb) throw new Error('Supabase не е зареден');
    const id = genCardId();
    const { error } = await sb.from('cards').insert({
      id,
      tpl: currentTplId,
      font: card.dataset.font,
      size: parseFloat(sizeInput.value),
      msg: messageInput.value.slice(0, MAX_CHARS)
    });
    if (error) throw error;
    const base = location.href.split(/[?#]/)[0];
    const link = base + '?k=' + id + '&v=1';
    lastSaved = { sig, link };
    return link;
  } catch (e) {
    console.warn('Кратък линк не стана, ползвам дългия.', e);
    return buildLink();
  }
}

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
  cardText.textContent = val.trim() ? val : 'Твоето пожелание тук';
  charCount.textContent = val.length;
}
messageInput.addEventListener('input', updateText);

// --- Размер на текста ---
function updateSize() {
  card.style.setProperty('--size', sizeInput.value);
}
sizeInput.addEventListener('input', updateSize);

// ======================================================
// Изпращане: сваляне и линк
// ======================================================

// Кратко потвърждение върху самия бутон (не добавя нищо към страницата)
function flashLabel(btn, text, ms = 2000) {
  if (!btn.dataset.label) btn.dataset.label = btn.textContent;
  btn.style.minWidth = btn.offsetWidth + 'px';
  btn.textContent = text;
  clearTimeout(btn.flashTimer);
  if (ms) {
    btn.flashTimer = setTimeout(() => {
      btn.textContent = btn.dataset.label;
      btn.style.minWidth = '';
    }, ms);
  }
}

// --- Кратък запис на текста за линка ---
// Всеки знак от азбуката по-долу става ЕДНА цифра (в система с основа 84),
// а цялото число се записва с 64 безопасни за адреса знака (A-Z, a-z, 0-9, - и _).
// Така 300 български букви излизат около 320 знака вместо около 1800.
// Знаци извън азбуката (латиница, емотикони и др.) се записват с 4 цифри.
const TEXT_ALPHABET =
  'абвгдежзийклмнопрстуфхцчшщъьюя' +
  'АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЬЮЯ' +
  ' \n0123456789.,!?:;-()"\'';
const ESC = TEXT_ALPHABET.length; // специален знак: следват 3 цифри с код на знак
const RADIX = ESC + 1;
const URL_DIGITS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';

function packText(text) {
  const digits = [1]; // водеща единица, за да не се губят нули в началото
  for (let i = 0; i < text.length; i++) {
    const idx = TEXT_ALPHABET.indexOf(text[i]);
    if (idx >= 0) {
      digits.push(idx);
    } else {
      const code = text.charCodeAt(i);
      digits.push(ESC, Math.floor(code / (RADIX * RADIX)), Math.floor(code / RADIX) % RADIX, code % RADIX);
    }
  }
  let n = 0n;
  for (const d of digits) n = n * BigInt(RADIX) + BigInt(d);
  let out = '';
  while (n > 0n) {
    out = URL_DIGITS[Number(n % 64n)] + out;
    n /= 64n;
  }
  return out;
}

function unpackText(code) {
  let n = 0n;
  for (const ch of code) {
    const v = URL_DIGITS.indexOf(ch);
    if (v < 0) throw new Error('Невалиден код');
    n = n * 64n + BigInt(v);
  }
  const digits = [];
  while (n > 0n) {
    digits.unshift(Number(n % BigInt(RADIX)));
    n /= BigInt(RADIX);
  }
  digits.shift(); // водещата единица
  let text = '';
  for (let i = 0; i < digits.length; i++) {
    const d = digits[i];
    if (d === ESC) {
      text += String.fromCharCode(digits[i + 1] * RADIX * RADIX + digits[i + 2] * RADIX + digits[i + 3]);
      i += 3;
    } else if (d < ESC) {
      text += TEXT_ALPHABET[d];
    }
  }
  return text;
}
// --- край на краткия запис ---

// Линк, който пази избраната картичка, шрифт, размер и текст в адреса.
// v=1 означава, че линкът отваря само картичката (без редактора).
function buildLink() {
  const base = location.href.split(/[?#]/)[0];
  const parts = [
    'c=' + encodeURIComponent(currentTplId),
    'f=' + encodeURIComponent(card.dataset.font),
    's=' + encodeURIComponent(sizeInput.value),
    'x=' + packText(messageInput.value),
    'v=1'
  ];
  return base + '?' + parts.join('&');
}

// --- Рисуване на картичката в canvas (за сваляне и споделяне като файл) ---
function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error('Картинката не се зареди'));
    img.src = src;
  });
}

// Разделя текста на редове според ширината (като white-space: pre-wrap + overflow-wrap: anywhere)
function wrapText(ctx, text, maxWidth) {
  const lines = [];
  text.split('\n').forEach(paragraph => {
    if (paragraph === '') {
      lines.push('');
      return;
    }
    let line = '';
    paragraph.split(' ').forEach(word => {
      const test = line ? line + ' ' + word : word;
      if (ctx.measureText(test).width <= maxWidth) {
        line = test;
        return;
      }
      if (line) {
        lines.push(line);
        line = '';
      }
      if (ctx.measureText(word).width <= maxWidth) {
        line = word;
        return;
      }
      // Много дълга дума: чупи се по букви
      let chunk = '';
      for (const ch of word) {
        if (chunk && ctx.measureText(chunk + ch).width > maxWidth) {
          lines.push(chunk);
          chunk = ch;
        } else {
          chunk += ch;
        }
      }
      line = chunk;
    });
    lines.push(line);
  });
  return lines;
}

async function renderCardBlob() {
  const t = TEMPLATES.find(x => x.id === currentTplId);
  const img = await loadImage(`images/card-${t.id}.jpg`);

  // Размерите и стилът на текста се взимат от това, което се вижда на екрана
  const cs = getComputedStyle(cardText);
  const k = Math.min(img.naturalWidth || 1200, 1800) / card.clientWidth;
  const W = Math.round(card.clientWidth * k);
  const H = Math.round(W * 2 / 3);
  const fontPx = parseFloat(cs.fontSize) * k;
  const fontSpec = `${cs.fontStyle} ${cs.fontWeight} ${fontPx}px ${cs.fontFamily}`;
  const text = cardText.textContent;

  try {
    await document.fonts.load(fontSpec, text);
    await document.fonts.ready;
  } catch (e) {
    // ако шрифтът не може да се зареди, ползва се резервният
  }

  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');

  // Фон (като background-size: cover)
  const scale = Math.max(W / img.naturalWidth, H / img.naturalHeight);
  const dw = img.naturalWidth * scale;
  const dh = img.naturalHeight * scale;
  ctx.drawImage(img, (W - dw) / 2, (H - dh) / 2, dw, dh);

  // Зона за текста
  const zx = W * t.zone[3] / 100;
  const zy = H * t.zone[0] / 100;
  const zw = W * (100 - t.zone[1] - t.zone[3]) / 100;
  const zh = H * (100 - t.zone[0] - t.zone[2]) / 100;

  ctx.font = fontSpec;
  ctx.fillStyle = cs.color;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  const glow = CANVAS_GLOWS[t.glow];
  if (glow) {
    ctx.shadowColor = glow.color;
    ctx.shadowBlur = glow.blur * k;
    ctx.shadowOffsetY = glow.offsetY * k;
  }

  const lines = wrapText(ctx, text, zw);
  const lineHeight = fontPx * 1.25;
  const totalHeight = lines.length * lineHeight;
  let y = zy + (zh - totalHeight) / 2 + lineHeight / 2;

  ctx.save();
  ctx.beginPath();
  ctx.rect(zx, zy, zw, zh);
  ctx.clip();
  lines.forEach(line => {
    ctx.fillText(line, zx + zw / 2, y);
    y += lineHeight;
  });
  ctx.restore();

  return new Promise((resolve, reject) => {
    canvas.toBlob(
      blob => (blob ? resolve(blob) : reject(new Error('Неуспешно създаване на файл'))),
      'image/jpeg',
      0.92
    );
  });
}

const RENDER_ERROR =
  'Не успях да създам картинката. Ако си отворила файла директно от папката, ' +
  'отвори сайта през Live Server или от адреса в GitHub Pages.';

// --- Свали картичката ---
async function downloadCard() {
  downloadBtn.disabled = true;
  flashLabel(downloadBtn, 'Подготвям…', 0);
  try {
    const blob = await renderCardBlob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `kartichka-${currentTplId}.jpg`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    flashLabel(downloadBtn, 'Свалена ✓');
  } catch (e) {
    flashLabel(downloadBtn, 'Свали картичката', 1);
    alert(RENDER_ERROR);
  } finally {
    downloadBtn.disabled = false;
  }
}

// --- Копирай линка ---
async function copyLink() {
  copyLinkBtn.disabled = true;
  flashLabel(copyLinkBtn, 'Подготвям…', 0);
  const linkPromise = buildShortLink();
  let ok = false;
  try {
    // Promise в ClipboardItem, за да работи и в Safari (iPhone) след изчакване
    await navigator.clipboard.write([
      new ClipboardItem({
        'text/plain': linkPromise.then(l => new Blob([l], { type: 'text/plain' }))
      })
    ]);
    ok = true;
  } catch (e) {
    const link = await linkPromise;
    try {
      await navigator.clipboard.writeText(link);
      ok = true;
    } catch (err) {
      const tmp = document.createElement('textarea');
      tmp.value = link;
      tmp.style.position = 'fixed';
      tmp.style.opacity = '0';
      document.body.appendChild(tmp);
      tmp.select();
      try { ok = document.execCommand('copy'); } catch (err2) { ok = false; }
      tmp.remove();
    }
  }
  copyLinkBtn.disabled = false;
  if (ok) {
    flashLabel(copyLinkBtn, 'Копирано ✓');
  } else {
    flashLabel(copyLinkBtn, 'Копирай линка', 1);
    alert('Не успях да копирам линка автоматично.');
  }
}

downloadBtn.addEventListener('click', downloadCard);
copyLinkBtn.addEventListener('click', copyLink);

// ======================================================
// Отваряне от линк: ?c=<картичка>&f=<шрифт>&s=<размер>&x=<текст в кратък код>&v=1
// (v=1 показва само картичката, виж и малкия скрипт в <head> на index.html)
// ======================================================
const params = new URLSearchParams(location.search);

const paramTpl = params.get('c');
if (paramTpl && TEMPLATES.some(x => x.id === paramTpl)) {
  currentTplId = paramTpl;
}

const paramFont = params.get('f');
const startFont = FONTS.some(f => f.id === paramFont) ? paramFont : FONTS[0].id;

const paramSize = parseFloat(params.get('s'));
if (!isNaN(paramSize)) {
  const min = parseFloat(sizeInput.min);
  const max = parseFloat(sizeInput.max);
  sizeInput.value = Math.min(max, Math.max(min, paramSize));
}

if (params.has('x')) {
  // нов, кратък формат
  try {
    messageInput.value = unpackText(params.get('x')).slice(0, MAX_CHARS);
  } catch (e) {
    // повреден код: остава текстът по подразбиране
  }
} else if (params.has('t')) {
  // стар формат (t=...), за да работят вече изпратените линкове
  messageInput.value = params.get('t').slice(0, MAX_CHARS);
}

// --- Начално състояние ---
catsBox.querySelector('.cat-btn').classList.add('active'); // "Всички"
renderThumbs();
selectTemplate(currentTplId);
selectFont(startFont);
updateText();
updateSize();

// Ако картичката е от линк, показва я в списъка с миниатюри
if (paramTpl) {
  const active = thumbs.querySelector('.thumb.active');
  if (active) {
    thumbs.scrollTop += active.getBoundingClientRect().top - thumbs.getBoundingClientRect().top - 4;
  }
}

// Годината във футъра
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Отваряне от кратък линк: ?k=<код>&v=1
async function loadSharedCard(key) {
  try {
    if (!sb) return;
    const { data, error } = await sb.rpc('get_card', { p_id: key });
    if (error || !data || !data.length) return;
    const c = data[0];
    if (TEMPLATES.some(x => x.id === c.tpl)) selectTemplate(c.tpl);
    if (FONTS.some(f => f.id === c.font)) selectFont(c.font);
    const min = parseFloat(sizeInput.min);
    const max = parseFloat(sizeInput.max);
    sizeInput.value = Math.min(max, Math.max(min, c.size));
    messageInput.value = String(c.msg).slice(0, MAX_CHARS);
    updateText();
    updateSize();
  } catch (e) {
    // при грешка остава картичката по подразбиране
  }
}

const paramKey = params.get('k');
if (paramKey) loadSharedCard(paramKey);
