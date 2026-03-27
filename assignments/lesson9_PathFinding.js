// Help Bunny Find the Carrot — Homework Assignments
//
// Set-level fields:
//   label    — sidebar label
//   gridSize — (optional) grid size: 3 = 3×3, 4 = 4×4, 5 = 5×5. Defaults to 3.
//
// Round fields:
//   bunny / carrot — [row, col], 0-indexed from top-left
//   options        — array of { moves: [...], isCorrect: bool }
//
// Directions: UP (row-1), DOWN (row+1), LEFT (col-1), RIGHT (col+1)
// isCorrect: true  → path lands exactly on the carrot
// isCorrect: false → path goes out-of-bounds OR lands on the wrong cell

window.HOMEWORK_CONFIG = [
  {
    label: "🐰 Set 1",
    gridSize: 3,
    rounds: [
      {
        // bunny mid-left → carrot top-right  (3×3)
        bunny: [1, 0], carrot: [0, 2],
        options: [
          { moves: ['RIGHT', 'UP', 'RIGHT'],  isCorrect: true },
          { moves: ['DOWN', 'RIGHT', 'RIGHT'], isCorrect: false },
          { moves: ['UP',  'RIGHT', 'UP'],     isCorrect: false },
        ]
      },
      {
        // bunny top-mid → carrot bottom-right  (3×3)
        bunny: [0, 1], carrot: [2, 2],
        options: [
          { moves: ['LEFT', 'DOWN', 'RIGHT'],  isCorrect: false },
          { moves: ['RIGHT', 'DOWN', 'RIGHT'], isCorrect: false },
          { moves: ['DOWN', 'DOWN', 'RIGHT'],  isCorrect: true },
        ]
      },
      {
        // bunny top-right → carrot mid-left  (3×3)
        bunny: [0, 2], carrot: [1, 0],
        options: [
          { moves: ['DOWN', 'LEFT', 'LEFT'], isCorrect: true },
          { moves: ['LEFT', 'DOWN', 'LEFT'], isCorrect: false },
          { moves: ['LEFT', 'LEFT', 'DOWN'], isCorrect: false },
        ]
      },
      {
        // bunny top-left → carrot bottom-right  (3×3, 4 steps)
        bunny: [0, 0], carrot: [2, 2],
        options: [
          { moves: ['DOWN', 'RIGHT', 'DOWN', 'RIGHT'], isCorrect: false },
          { moves: ['RIGHT', 'RIGHT', 'DOWN', 'DOWN'], isCorrect: true },
          { moves: ['DOWN', 'DOWN', 'RIGHT', 'UP'],    isCorrect: false },
        ]
      },
      {
        // bunny top-left → carrot bottom-right  (3×3, 4 steps)
        bunny: [1, 1], carrot: [2, 0],
        options: [
          { moves: ['DOWN', 'RIGHT', 'DOWN', 'RIGHT'], isCorrect: false },
          { moves: ['RIGHT', 'RIGHT', 'DOWN', 'DOWN'], isCorrect: false },
          { moves: ['RIGHT', 'DOWN', 'LEFT', 'LEFT'],    isCorrect: true },
        ]
      }
    ]
  } 
];
