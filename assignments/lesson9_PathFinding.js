// Help Bunny Find the Carrot — Homework Assignments
// Each round has pre-defined bunny/carrot positions AND the 3 answer options.
// Grid is 0-indexed: row 0 = top, row 2 = bottom; col 0 = left, col 2 = right.
// Directions: UP (row-1), DOWN (row+1), LEFT (col-1), RIGHT (col+1)
// isCorrect: true  → path lands exactly on the carrot
// isCorrect: false → path goes out-of-bounds OR lands on the wrong cell

window.HOMEWORK_CONFIG = [
  {
    label: "🐰 Set 1",
    rounds: [
      {
        // bunny bottom-left → carrot top-right
        bunny: [1, 0], carrot: [0, 2],
        options: [
          { moves: ['RIGHT', 'UP', 'RIGHT'],  isCorrect: true },
          { moves: ['DOWN', 'RIGHT', 'RIGHT'], isCorrect: false  }, 
          { moves: ['UP',  'RIGHT', 'UP',],  isCorrect: false },
        ]
      },
      {
        // bunny top-left → carrot bottom-right
        bunny: [0, 1], carrot: [2, 2],
        options: [
          { moves: ['LEFT', 'DOWN', 'RIGHT'], isCorrect: false  }, // lands [2,2] ✓
          { moves: ['RIGHT', 'DOWN', 'RIGHT'],  isCorrect: false }, // out-of-bounds
          { moves: ['DOWN', 'DOWN', 'RIGHT'], isCorrect: true }, // lands [1,1]
        ]
      },
      {
        // bunny bottom-right → carrot top-middle
        bunny: [0, 2], carrot: [1, 0],
        options: [
          { moves: ['UP', 'LEFT', 'UP'],    isCorrect: true  }, // lands [0,1] ✓
          { moves: ['LEFT', 'DOWN', 'LEFT'],   isCorrect: true }, // out-of-bounds
          { moves: ['LEFT', 'LEFT', 'UP'],  isCorrect: false }, // lands [1,0]
        ]
      },
      {
        // bunny bottom-right → carrot top-middle
        bunny: [0, 0], carrot: [2, 2],
        options: [
          { moves: ['UP', 'LEFT', 'UP', 'RIGHT'],    isCorrect: true  }, // lands [0,1] ✓
          { moves: ['DOWN', 'DOWN', 'RIGHT', 'RIGHT'],   isCorrect: true }, // out-of-bounds
          { moves: ['LEFT', 'DOWN', 'LEFT', 'UP'],  isCorrect: false }, // lands [1,0]
        ]
      }
    ]
  }
];
