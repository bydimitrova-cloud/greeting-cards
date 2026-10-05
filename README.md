# Поздравителни картички

Уеб приложение, в което избираш поздравителна картичка, пишеш своя поздрав и виждаш резултата на живо. Готовата картичка можеш да свалиш като файл или да я изпратиш с кратък линк. Изградено е с чист HTML, CSS и JavaScript, а за късите линкове се използва [Supabase](https://supabase.com).

## Функции

- **40 картички** в 5 категории: Цветя, Рози и любов, Рожден ден, Коледа и Великден
- **Филтриране по категория** с бутони над миниатюрите
- **Преглед на живо:** текстът се показва върху картичката, докато го пишеш
- **Поздрав до 300 знака** с брояч
- **6 стила на писане с поддръжка на кирилица:** Great Vibes, Caveat, Marck Script, Playfair Display, Cormorant Garamond и Pacifico
- **Регулируем размер на текста**
- **Сваляне на готовата картичка** като JPG файл с високо качество, с текста вече върху нея (рисува се чрез Canvas API)
- **Кратък линк за споделяне:** картичката се записва в Supabase и получава кратък адрес от вида `?k=<код>&v=1`. Който го отвори, вижда само готовата картичка, без редактора
- **Резервен линк:** ако връзката със Supabase не работи, се създава по-дълъг линк, в който са записани картичката, шрифтът, размерът и текстът. Текстът е кодиран компактно, за да остане адресът къс
- **Съвместимост със стари линкове** (с параметър `t=`), за да продължат да работят вече изпратените
- **Адаптивен дизайн**, който работи на телефон и компютър
- За всяка картичка е зададена свободна зона за текста и подходящ цвят, така че надписът да се чете добре

## Планирани функции

- **Повече категории и картички.** Библиотеката ще се разширява постепенно. Всички изображения ще бъдат от [Pixnio](https://pixnio.com).

## Структура на проекта

```
greeting-cards/
├── images/
│   ├── card-<id>.jpg      # картичките в пълен размер
│   ├── thumbs/<id>.jpg    # миниатюри
│   ├── favicon.png
│   └── apple-touch-icon.png
├── index.html             # страницата и настройките на Supabase
├── script.js              # картички, категории, шрифтове и логика
└── style.css              # стилове
```

## Как да стартирам проекта

1. Клонирай репото:
   ```
   git clone https://github.com/bydimitrova-cloud/greeting-cards.git
   ```
2. Отвори папката `greeting-cards`.
3. Стартирай проекта с разширението **Live Server** във VS Code (или го отвори през GitHub Pages).

Не се изискват инсталации. Нужна е интернет връзка, защото шрифтовете се зареждат от Google Fonts, а клиентът на Supabase - от CDN.

> Не отваряй `index.html` директно от папката (с двоен клик). Тогава браузърът блокира рисуването на картичката и свалянето няма да работи. Ползвай Live Server или GitHub Pages.

## Настройка на Supabase

Късите линкове се пазят в таблица `cards`. Адресът на проекта и публичният (`publishable`) ключ се задават в края на `index.html`:

```html
<script>
  window.SUPABASE_URL = 'https://<проект>.supabase.co';
  window.SUPABASE_KEY = '<publishable ключ>';
</script>
```

Публичният ключ е предназначен да стои във фронтенда, но затова е важно таблицата да е защитена с Row Level Security. Ето примерна настройка (SQL Editor в Supabase):

```sql
create table public.cards (
  id text primary key,
  tpl text not null,
  font text not null,
  size numeric not null,
  msg text not null,
  created_at timestamptz default now()
);

alter table public.cards enable row level security;

-- Всеки може да записва картичка, но не и да чете или трие чужди
create policy "anyone can insert cards"
  on public.cards for insert to anon
  with check (char_length(msg) <= 300);

-- Четенето става само по код, през функция
create or replace function public.get_card(p_id text)
returns setof public.cards
language sql
security definer
set search_path = public
as $$
  select * from public.cards where id = p_id;
$$;

grant execute on function public.get_card(text) to anon;
```

Приложението използва само две операции: `insert` в таблицата `cards` и извикване на `get_card`. Ако Supabase не е настроен или не отговаря, приложението продължава да работи с резервния (дълъг) линк.

## Как да добавя нова картичка

1. Сложи изображението в `images/` като `card-<id>.jpg` и миниатюра в `images/thumbs/` като `<id>.jpg`.
2. Добави ред в масива `TEMPLATES` в `script.js`:
   ```js
   { id: 'moya-kartichka', cat: 'flowers', label: 'Моята картичка',
     zone: [12, 8, 20, 8], color: '#5c4a4f' }
   ```
   - `id` е името на файловете
   - `cat` е категорията (`flowers`, `love`, `birthday`, `xmas`, `easter`)
   - `zone` е свободната зона за текста в проценти: `[горе, дясно, долу, ляво]`
   - `color` е цветът на текста
   - по желание `glow: 'light'` или `'dark'` за по-добра четимост върху тъмни или светли фонове

## Използвани технологии

- HTML5
- CSS3 (CSS променливи, container queries, `aspect-ratio`)
- JavaScript (ES6), Canvas API
- Supabase (кратки линкове)
- Google Fonts

## Изображения

Изображенията на картичките са от [Pixnio](https://pixnio.com) и се използват съгласно [Pixnio License](https://pixnio.com/terms#pixnio-license), която позволява безплатна употреба, включително търговска, без задължително посочване на автор. Изображенията не могат да се препродават като отделни снимки.

## Автор

[bydimitrova-cloud](https://github.com/bydimitrova-cloud)
