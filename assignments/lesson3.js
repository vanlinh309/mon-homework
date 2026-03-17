// Pattern Power — Homework Assignments
// isLoadFromImage: false  → emoji-based round (patternRow + choices are text/emoji)
// isLoadFromImage: true   → image-based round (patternImage + choices are image paths)
window.HOMEWORK_CONFIG = [
  // {
  //   label: "⭐ Emoji",
  //   isLoadFromImage: false,
  //   rounds: [
  //     { pattern: ["⭐","❤️","⭐","❤️","⭐","?"], answer: "❤️", choices: ["⭐","❤️","🌟"] },
  //     { pattern: ["🍎","🍊","🔵","🍎","?","🔵"], answer: "🍊", choices: ["🍎","🍊","🔵"] },
  //     { pattern: ["🌳","☀️","?","🌳","☀️","☀️"], answer: "☀️", choices: ["🌳","☀️","🌙"] }
  //   ]
  // },
  {
    label: "⭐ Emoji 2",
    isLoadFromImage: false,
    rounds: [
      { pattern: ["🤖","?","🤖","🏗️","🤖","🏗️"], answer: "🏗️", choices: ["🤖","🏗️"] },
      { pattern: ["🎂","🍔","?","🎂","🍔","🍔","🎂","🍔","🍔",], answer: "🍔", choices: ["🎂","🍔"] },
      { pattern: ["🐰","🐰","🐢","🐢","?",], answer: "🐰", choices: ["🐢","🐰"] },
      { pattern: ["🥤","🍷","🍸","🥤","?",], answer: "🍷", choices: ["🥤","🍷","🍸"] },
    ]
  },

  {
    label: "🔢 Set 1",
    isLoadFromImage: true,
    folder: "assets/Lesson3/Set1",
    rounds: [
      {
        patternImage: "assets/Lesson3/Set1/Pattern (1).png",
        choices: [
          "assets/Lesson3/Set1/Pattern1_Result (1).png",
          "assets/Lesson3/Set1/Pattern1_Result (2)_OK.png",
          "assets/Lesson3/Set1/Pattern1_Result (3).png"
        ],
        answer: "assets/Lesson3/Set1/Pattern1_Result (2)_OK.png"
      },
      {
        patternImage: "assets/Lesson3/Set1/Pattern (2).png",
        choices: [
          "assets/Lesson3/Set1/Pattern2_Result (1)_OK.png",
          "assets/Lesson3/Set1/Pattern2_Result (2).png",
          "assets/Lesson3/Set1/Pattern2_Result (3).png"
        ],
        answer: "assets/Lesson3/Set1/Pattern2_Result (1)_OK.png"
      },
      {
        patternImage: "assets/Lesson3/Set1/Pattern (3).png",
        choices: [
          "assets/Lesson3/Set1/Pattern3_Result (1).png",
          "assets/Lesson3/Set1/Pattern3_Result (2).png",
          "assets/Lesson3/Set1/Pattern3_Result (3)_OK.png"
        ],
        answer: "assets/Lesson3/Set1/Pattern3_Result (3)_OK.png"
      },
      {
        patternImage: "assets/Lesson3/Set1/Pattern (4).png",
        choices: [
          "assets/Lesson3/Set1/Pattern4_Result (1).png",
          "assets/Lesson3/Set1/Pattern4_Result (2).png",
          "assets/Lesson3/Set1/Pattern4_Result (3)_OK.png"
        ],
        answer: "assets/Lesson3/Set1/Pattern4_Result (3)_OK.png"
      }
    ]
  },

  // {
  //   label: "🎯 Set 2",
  //   isLoadFromImage: true,
  //   folder: "assets/Lesson3/Set2",
  //   rounds: [
  //     {
  //       patternImage: "assets/Lesson3/Set2/Pattern (1).png",
  //       choices: [
  //         "assets/Lesson3/Set2/Pattern1_Result (1).png",
  //         "assets/Lesson3/Set2/Pattern1_Result (2)_OK.png",
  //         "assets/Lesson3/Set2/Pattern1_Result (3).png",
  //       ],
  //       answer: "assets/Lesson3/Set2/Pattern1_Result (2)_OK.png"
  //     }
  //   ]
  // },

  {
    label: "🌟 Set 3",
    isLoadFromImage: true,
    folder: "assets/Lesson3/Set3",
    rounds: [
      {
        patternImage: "assets/Lesson3/Set3/Pattern (1).png",
        choices: [
          "assets/Lesson3/Set3/Pattern1_Result (1)_OK.png",
          "assets/Lesson3/Set3/Pattern1_Result (2).png",
          "assets/Lesson3/Set3/Pattern1_Result (3).png"
        ],
        answer: "assets/Lesson3/Set3/Pattern1_Result (1)_OK.png"
      },
      {
        patternImage: "assets/Lesson3/Set3/Pattern (2).png",
        choices: [
          "assets/Lesson3/Set3/Pattern2_Result (1).png",
          "assets/Lesson3/Set3/Pattern2_Result (2)_OK.png",
          "assets/Lesson3/Set3/Pattern2_Result (3).png"
        ],
        answer: "assets/Lesson3/Set3/Pattern2_Result (2)_OK.png"
      },
      {
        patternImage: "assets/Lesson3/Set3/Pattern (3).png",
        choices: [
          "assets/Lesson3/Set3/Pattern3_Result (1).png",
          "assets/Lesson3/Set3/Pattern3_Result (2)_OK.png",
          "assets/Lesson3/Set3/Pattern3_Result (3).png"
        ],
        answer: "assets/Lesson3/Set3/Pattern3_Result (2)_OK.png"
      },
      {
        patternImage: "assets/Lesson3/Set3/Pattern (4).png",
        choices: [
          "assets/Lesson3/Set3/Pattern4_Result (1).png",
          "assets/Lesson3/Set3/Pattern4_Result (2)_OK.png",
          "assets/Lesson3/Set3/Pattern4_Result (3).png"
        ],
        answer: "assets/Lesson3/Set3/Pattern4_Result (2)_OK.png"
      }
    ]
  }
];
