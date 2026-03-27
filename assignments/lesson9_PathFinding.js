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
        bunny: [0, 0], carrot: [2, 2],
        options: [
          { moves: ['DOWN', 'RIGHT', 'DOWN', 'RIGHT'], isCorrect: true  }, // lands [2,2] ✓
          { moves: ['DOWN', 'DOWN', 'RIGHT', 'DOWN'],  isCorrect: false }, // out-of-bounds
          { moves: ['RIGHT', 'RIGHT', 'DOWN', 'LEFT'], isCorrect: false }, // lands [1,1]
        ]
      },
      {
        // bunny middle-right → carrot top-left
        bunny: [1, 2], carrot: [0, 0],
        options: [
          { moves: ['UP', 'LEFT', 'DOWN'],  isCorrect: false }, // lands [1,1]
          { moves: ['LEFT', 'LEFT', 'DOWN'], isCorrect: false }, // lands [2,0]
          { moves: ['LEFT', 'UP', 'LEFT'],  isCorrect: true  }, // lands [0,0] ✓
        ]
      },
      {
        // bunny bottom-right → carrot top-middle
        bunny: [2, 2], carrot: [0, 1],
        options: [
          { moves: ['UP', 'LEFT', 'UP'],    isCorrect: true  }, // lands [0,1] ✓
          { moves: ['UP', 'UP', 'RIGHT'],   isCorrect: false }, // out-of-bounds
          { moves: ['LEFT', 'LEFT', 'UP'],  isCorrect: false }, // lands [1,0]
        ]
      },
      {
        // bunny top-middle → carrot bottom-left
        bunny: [0, 1], carrot: [2, 0],
        options: [
          { moves: ['LEFT', 'DOWN', 'DOWN', 'RIGHT'], isCorrect: false }, // lands [2,1]
          { moves: ['DOWN', 'LEFT', 'DOWN'],          isCorrect: true  }, // lands [2,0] ✓
          { moves: ['DOWN', 'DOWN', 'RIGHT'],         isCorrect: false }, // lands [2,2]
        ]
      },
    ]
  },

  {
    label: "🐰 Set 2",
    rounds: [
      {
        // bunny top-right → carrot bottom-left
        bunny: [0, 2], carrot: [2, 0],
        options: [
          { moves: ['DOWN', 'LEFT', 'DOWN', 'RIGHT'], isCorrect: false }, // lands [2,2]
          { moves: ['LEFT', 'LEFT', 'DOWN', 'UP'],    isCorrect: false }, // lands [0,0]
          { moves: ['LEFT', 'DOWN', 'LEFT', 'DOWN'],  isCorrect: true  }, // lands [2,0] ✓
        ]
      },
      {
        // bunny bottom-middle → carrot top-left
        bunny: [2, 1], carrot: [0, 0],
        options: [
          { moves: ['UP', 'UP', 'LEFT'],        isCorrect: true  }, // lands [0,0] ✓
          { moves: ['LEFT', 'UP', 'UP', 'RIGHT'], isCorrect: false }, // lands [0,1]
          { moves: ['UP', 'UP', 'RIGHT'],       isCorrect: false }, // lands [0,2]
        ]
      },
      {
        // bunny middle-left → carrot top-right
        bunny: [1, 0], carrot: [0, 2],
        options: [
          { moves: ['UP', 'RIGHT', 'DOWN'],    isCorrect: false }, // lands [1,1]
          { moves: ['RIGHT', 'UP', 'RIGHT'],   isCorrect: true  }, // lands [0,2] ✓
          { moves: ['RIGHT', 'RIGHT', 'DOWN'], isCorrect: false }, // lands [2,2]
        ]
      },
      {
        // bunny top-left → carrot bottom-middle
        bunny: [0, 0], carrot: [2, 1],
        options: [
          { moves: ['RIGHT', 'DOWN', 'DOWN', 'LEFT'], isCorrect: false }, // lands [2,0]
          { moves: ['DOWN', 'DOWN', 'LEFT'],          isCorrect: false }, // out-of-bounds
          { moves: ['DOWN', 'RIGHT', 'DOWN'],         isCorrect: true  }, // lands [2,1] ✓
        ]
      },
      {
        // bunny bottom-left → carrot middle-right
        bunny: [2, 0], carrot: [1, 2],
        options: [
          { moves: ['RIGHT', 'UP', 'RIGHT'], isCorrect: true  }, // lands [1,2] ✓
          { moves: ['UP', 'RIGHT', 'DOWN'],  isCorrect: false }, // lands [2,1]
          { moves: ['UP', 'UP', 'RIGHT'],    isCorrect: false }, // lands [0,1]
        ]
      },
    ]
  },

  {
    label: "🐰 Set 3",
    rounds: [
      {
        // bunny top-left → carrot middle-right
        bunny: [0, 0], carrot: [1, 2],
        options: [
          { moves: ['DOWN', 'RIGHT', 'UP'],         isCorrect: false }, // lands [0,1]
          { moves: ['RIGHT', 'RIGHT', 'DOWN', 'LEFT'], isCorrect: false }, // lands [1,1]
          { moves: ['RIGHT', 'DOWN', 'RIGHT'],      isCorrect: true  }, // lands [1,2] ✓
        ]
      },
      {
        // bunny bottom-right → carrot top-left
        bunny: [2, 2], carrot: [0, 0],
        options: [
          { moves: ['UP', 'LEFT', 'UP', 'LEFT'],       isCorrect: true  }, // lands [0,0] ✓
          { moves: ['LEFT', 'UP', 'LEFT', 'UP', 'DOWN'], isCorrect: false }, // lands [1,0]
          { moves: ['UP', 'UP', 'LEFT', 'RIGHT'],      isCorrect: false }, // lands [0,2]
        ]
      },
      {
        // bunny center → carrot top-left
        bunny: [1, 1], carrot: [0, 0],
        options: [
          { moves: ['LEFT', 'DOWN'], isCorrect: false }, // lands [2,0]
          { moves: ['UP', 'LEFT'],   isCorrect: true  }, // lands [0,0] ✓
          { moves: ['UP', 'RIGHT'],  isCorrect: false }, // lands [0,2]
        ]
      },
      {
        // bunny top-right → carrot bottom-middle
        bunny: [0, 2], carrot: [2, 1],
        options: [
          { moves: ['LEFT', 'DOWN', 'DOWN', 'RIGHT'], isCorrect: false }, // lands [2,2]
          { moves: ['DOWN', 'LEFT', 'DOWN'],          isCorrect: true  }, // lands [2,1] ✓
          { moves: ['DOWN', 'DOWN', 'RIGHT'],         isCorrect: false }, // out-of-bounds
        ]
      },
      {
        // bunny bottom-left → carrot top-right
        bunny: [2, 0], carrot: [0, 2],
        options: [
          { moves: ['UP', 'RIGHT', 'UP', 'RIGHT'], isCorrect: true  }, // lands [0,2] ✓
          { moves: ['RIGHT', 'UP', 'UP', 'LEFT'],  isCorrect: false }, // lands [0,0]
          { moves: ['UP', 'UP', 'LEFT'],           isCorrect: false }, // out-of-bounds
        ]
      },
    ]
  }
];
