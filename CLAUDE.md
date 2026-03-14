# Mon's Learning Games — CLAUDE.md

## Project Overview
Interactive math & logic web app for a **6-year-old child (Mon)**.
Used on both **laptop (mouse)** and **iPad (touch/stylus)**.

**Key constraint:** Pure HTML + CSS + JavaScript — no npm, no build tools, no frameworks.
Opens directly from `file://` or a simple HTTP server. Works fully offline.

---

## Repository
- **GitHub:** https://github.com/vanlinh309/mon-homework
- **Account:** `vanlinh309` (personal). Never push to `LinhNguyenCaspeco`.

---

## Project Structure
```
Homework/
├── index.html                  # Home screen — 5 lesson cards
├── style.css                   # Shared styles, animations, color palette
├── sidebar.js                  # Shared toggleSidebar() + renderSidebar()
├── sounds.js                   # Web Audio API sound effects (SFX.click/correct/wrong/etc.)
├── lesson1-shadow.html         # Shadow matching
├── lesson2-maze.html           # Maze path drawing
├── lesson3-patterns.html       # Pattern recognition
├── lesson4-counting.html       # Counting objects
├── lesson5-coloring.html       # Shape coloring
└── assets/
    ├── lesson1/                # bus.png, bus_shadow.png, car.png, car_shadow.png,
    │                           # helicopter.png, helicopter_shadow.png,
    │                           # taxi.png, taxi_shadow.png, truck.png, truck_shadow.png
    ├── lesson2/                # animal_maze.png
    └── lesson4/                # (reserved for future object images)
```

---

## Design Rules (non-negotiable)
- **Minimum tap target:** 60×60px — small fingers on iPad
- **Font:** `'Comic Sans MS', 'Chalkboard SE', 'Arial Rounded MT Bold', cursive` (fun, child-friendly)
- **Pointer events everywhere:** use `pointerdown/pointermove/pointerup` (works for both touch and mouse)
- **No horizontal scroll** at 768px viewport width
- **Bright colors** — use the CSS variables defined in `style.css`
- **No borders on images** unless specifically requested

---

## CSS Color Palette (from `style.css`)
```css
--color-red:    #FF4757
--color-blue:   #2F86EB
--color-green:  #2ED573
--color-yellow: #FFD700
--color-purple: #A855F7
--color-orange: #FF7F50
--color-pink:   #FF69B4
--color-bg:     #FFF9F0
```

---

## Shared Patterns (reuse across all lessons)

### Star counter
```html
<div class="star-bar">⭐ <span id="star-count">0</span></div>
```

### Feedback banner
```js
function showFeedback(msg, type) {  // type: 'correct' | 'wrong'
  const el = document.getElementById('feedback');
  el.textContent = msg;
  el.className = `feedback ${type} show`;
  if (type === 'wrong') setTimeout(() => el.classList.remove('show'), 1500);
}
```

### Fireworks celebration
- Use the `#fireworks-overlay` div pattern (already in every lesson)
- Call `spawnFireworks()` which creates `.firework-circle` divs with random positions/colors

### Back to home button
```html
<button class="btn-home" onclick="location.href='index.html'">🏠 Home</button>
```

---

## Lesson Summaries

### Lesson 1 — Shadow Matching (`lesson1-shadow.html`)
- **Assets:** `assets/lesson1/{name}.png` and `{name}_shadow.png`
- **Pairs:** bus, car, helicopter, taxi, truck
- **Mechanic:** Drag a line from object (left column) to its shadow (right column)
- **Canvas:** Sits over the game-wrap div; pointer events on the wrap, not the canvas
- **Image sizing:** Fixed box (`180×140px`) with `object-fit: contain` — all images appear same size regardless of original crop
- **Correct:** green glow (`box-shadow: 0 0 0 4px rgba(46,213,115,0.5)`)
- **Wrong:** red line flashes then clears
- **Rounds:** 3 rounds, all 5 pairs reshuffled each time

### Lesson 2 — Maze Drawing (`lesson2-maze.html`)
- **Asset:** `assets/lesson2/animal_maze.png` displayed as background
- **Canvas:** Transparent `#draw-canvas` overlaid exactly on top via `position: absolute; inset: 0`
- **Tools:** Draw (pencil), Erase, Clear button
- **Colors:** 6 color dots the kid can pick from
- **No hit detection** — free draw only, no path validation

### Lesson 3 — Pattern Recognition (`lesson3-patterns.html`)
- **No assets** — uses emoji only
- **Rounds:** 14 rounds across 5 difficulty levels (AB → ABC → AABB → mixed → nature 🌳☀️🌙)
- **Mechanic:** Pattern row with one `?` slot; kid taps one of 3 choice buttons
- **Wrong:** disables that choice button (opacity 0.4), allows retry
- **Correct:** locks answer, shows Next button

### Lesson 4 — Counting (`lesson4-counting.html`)
- **Layout:** 2×2 grid, all 4 blocks visible at once
- **Fixed blocks:** 6 🚗 | 8 🐶 | 5 🍕 | 7 🌸
- **Mechanic:** Tap each emoji to count it (toggle ✓), then pick from 3 number buttons
- **Object size:** 80×80px emoji items
- **All 4 solved** → fireworks

### Lesson 5 — Shape Coloring (`lesson5-coloring.html`)
- **No assets** — inline SVG scenes
- **Color rule:** Circle = Yellow (#FFD700), Rectangle = Red (#FF4757), Triangle = Blue (#2F86EB)
- **Two-step mechanic:**
  1. Kid taps a legend item (yellow circle / red rect / blue triangle) to select a tool
  2. Kid taps matching shapes in the drawing — only the correct shape type gets colored
  3. Wrong shape type → shake animation + "That's a [type]! Pick its color first!"
- **Scenes:** House 🏠, Train 🚂, Rocket 🚀, Boat ⛵ (switchable via tabs)
- **SVG shapes:** `<circle>`, `<rect>`, `<polygon>` with class `colorable`

---

## Multiple Homework Assignments (Sidebar)

Every lesson has a collapsible left sidebar that lets Mon navigate between 10+ homework sets. The sidebar is collapsed by default (28px strip showing `›` arrow) and expands to 160px, pushing content right.

### How it works
- Each lesson has a `HOMEWORKS` array at the top of the file — one entry per homework assignment
- `sidebar.js` provides `toggleSidebar()` and `renderSidebar(homeworks, currentIdx, onSelect)`
- Every lesson body uses `class="lesson-body"` and wraps content in `.app-layout` → `.sidebar` + `.lesson-scroll`

### HOMEWORKS config pattern per lesson

| Lesson | Config shape | Example |
|--------|-------------|---------|
| 1 Shadow | `{ pairs: [...names], prefix: '' }` | `{ pairs: ['bus','car'], prefix: '' }` |
| 2 Maze | `{ image: 'assets/lesson2/maze.png' }` | one entry per maze image |
| 3 Patterns | `{ rounds: [...round objects] }` | 3+ rounds per homework |
| 4 Counting | `{ blocks: [{emoji, count}, ...] }` | 4 blocks per homework |
| 5 Coloring | `{ scenes: [...scene objects] }` | 3–4 scenes per homework |

### Adding a new homework to Lesson 1
1. Name image files: `as2_cat.png` and `as2_cat_shadow.png` → drop into `assets/lesson1/`
2. Add to HOMEWORKS array in `lesson1-shadow.html`:
   ```js
   { pairs: ['cat','dog','fish'], prefix: 'as2' }
   ```
3. Open in browser — new "HW 2" appears in sidebar automatically

### Adding a new homework to Lesson 2
Drop a new maze image into `assets/lesson2/`, then add to HOMEWORKS in `lesson2-maze.html`:
```js
{ image: 'assets/lesson2/maze2.png' }
```

### Sidebar HTML template (in every lesson)
```html
<body class="lesson-body">
<div class="top-bar">...</div>
<div class="app-layout">
  <div class="sidebar" id="sidebar">
    <button class="sidebar-toggle" id="sidebar-toggle" onclick="toggleSidebar()">›</button>
    <div class="sidebar-inner">
      <div class="sidebar-title">Homework</div>
      <div class="hw-list" id="hw-list"></div>
    </div>
  </div>
  <div class="lesson-scroll [no-scroll]">
    <main>...</main>
  </div>
</div>
```
Use `no-scroll` on `.lesson-scroll` for lessons that should not scroll vertically (Lesson 1, Lesson 2).

---

## Adding a New Lesson
1. Create `lessonN-name.html` following the existing lesson structure
2. Add a card to `index.html` in `.home-grid`
3. Include `<link rel="stylesheet" href="style.css">`, `<script src="sounds.js"></script>`, `<script src="sidebar.js"></script>`
4. Use `class="lesson-body"` on body and the `.app-layout` sidebar wrapper
5. Use `pointerdown` events, not `click` (better touch response)
6. Minimum button/tap size: 60×60px

## Adding New Assets
- **Lesson 1 shadow pairs:** drop `{prefix}_{name}.png` + `{prefix}_{name}_shadow.png` into `assets/lesson1/`, add a new HOMEWORKS entry with matching `prefix` and `pairs`
- **Lesson 2 maze:** add new image to `assets/lesson2/`, add a new HOMEWORKS entry with `{ image: '...' }`
- **Lesson 4 objects:** currently emoji-based; to use real images swap `.obj-item` text content for `<img>` tags

---

## Git Workflow
- Remote: `https://github.com/vanlinh309/mon-homework.git`
- Always push to `vanlinh309` account — run `gh auth switch --user vanlinh309` before pushing if needed
- Branch: `master`
