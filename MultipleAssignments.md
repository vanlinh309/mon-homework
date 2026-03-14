# Multiple Assignments Feature — Implementation Tracker

## Goal
Add a collapsible left sidebar to every lesson so Mon can navigate between multiple homework assignments. Each lesson has its own HOMEWORKS config array at the top of the file.

## Requirements Summary
- 10+ homeworks per lesson
- Left sidebar: collapsed by default (28px strip), expands to 160px pushing content right
- Items labeled: HW 1, HW 2, HW 3 … (user renames later)
- Progress tracked per session only (resets on refresh)
- Celebrate at end of each assignment
- No completed-homework counter needed

## Per-Lesson Homework Structure

| Lesson | One homework = | Config pattern |
|--------|---------------|----------------|
| 1 Shadow | A set of image pairs with a shared prefix | `{ prefix: 'as1', pairs: ['bus','car',...] }` |
| 2 Maze | One maze image file | `{ image: 'assets/lesson2/maze1.png' }` |
| 3 Patterns | A subset of pattern rounds | `{ rounds: [...] }` |
| 4 Counting | A 2×2 grid with different emoji/counts | `{ blocks: [{emoji,count}, ...] }` |
| 5 Coloring | A set of 3–4 SVG scenes | `{ scenes: [...scene objects...] }` |

## Lesson 1 — Image Naming Convention
- Assignment 1: `assets/lesson1/as1_bus.png`, `assets/lesson1/as1_bus_shadow.png`
- Assignment 2: `assets/lesson2/as2_cat.png`, `assets/lesson2/as2_cat_shadow.png`
- Current existing files (bus, car, etc.) are used as HW 1 with prefix `''` for backward compat

## Files to Create/Modify

| File | Action | Status |
|------|--------|--------|
| `style.css` | Add sidebar + app-layout styles | ✅ Done |
| `sidebar.js` | New — shared `toggleSidebar()` | ✅ Done |
| `lesson1-shadow.html` | Add sidebar + HOMEWORKS config | ✅ Done |
| `lesson2-maze.html` | Add sidebar + HOMEWORKS config | ✅ Done |
| `lesson3-patterns.html` | Add sidebar + HOMEWORKS config | ✅ Done |
| `lesson4-counting.html` | Add sidebar + HOMEWORKS config | ✅ Done |
| `lesson5-coloring.html` | Add sidebar + HOMEWORKS config | ✅ Done |
| `CLAUDE.md` | Update with new homework system docs | ✅ Done |

## Implementation Steps

### Step 1 — style.css + sidebar.js
- Add `.app-layout` (flex row, flex:1, min-height:0)
- Add `.sidebar` (collapsed 28px), `.sidebar.open` (160px), transition
- Add `.sidebar-toggle` button (28px wide, full height of toggle area)
- Add `.sidebar-inner` (hidden when collapsed, visible when open)
- Add `.sidebar-title`, `.hw-item`, `.hw-item.active`
- Add `.lesson-scroll` (flex:1, overflow-y:auto)
- Create `sidebar.js` with `toggleSidebar()`

### Step 2 — lesson1-shadow.html
- Replace `ALL_PAIRS` + `TOTAL_ROUNDS` with `HOMEWORKS` array
- Add `currentHW`, `renderSidebar()`, `loadHomework(idx)`
- `showRound()` reads pairs from `HOMEWORKS[currentHW]`
- Update `imgPath()` to use prefix

### Step 3 — lesson2-maze.html
- Add `HOMEWORKS` array (list of image paths)
- `loadHomework(idx)` → update `#maze-img` src + clear canvas
- Labels auto-generated as "HW 1", "HW 2" from array index

### Step 4 — lesson3-patterns.html
- Replace flat `ROUNDS` array with `HOMEWORKS` containing round subsets
- `loadHomework(idx)` → set active rounds + reset game

### Step 5 — lesson4-counting.html
- Replace flat `BLOCKS` array with `HOMEWORKS` containing block sets
- `loadHomework(idx)` → rebuild all blocks with new data

### Step 6 — lesson5-coloring.html
- Split `SCENES` into `HOMEWORKS` with scene subsets (3–4 per HW)
- `loadHomework(idx)` → set active scenes + re-render first scene

### Step 7 — CLAUDE.md update
- Document the new HOMEWORKS pattern for each lesson

## Status Legend
- ⬜ Todo
- 🔄 In Progress
- ✅ Done
