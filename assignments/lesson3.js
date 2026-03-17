// Pattern Power — Homework Assignments
// isLoadFromImage: false  → emoji-based round (patternRow + choices are text/emoji)
// isLoadFromImage: true   → image-based round (patternImage + ? slot + image choices)
// isMatchingHalf: true    → half-image matching (left: half image, right: 3 choice images)
// isOddOneOut: true       → 4 images in a row, tap the one that doesn't belong
//
// Matching1 naming: {n}_half.png + {n}_a/b/c.png (correct = specified in answer)
// OddOneOut naming: {n}_1/2/3/4.png  (odd one = specified in answer)
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
    label: "🧩 Matching 1",
    isMatchingHalf: true,
    folder: "assets/Lesson3/Matching1",
    rounds: [
      {
        mainImage: "assets/Lesson3/Matching1/m1.png",
        choices: [
          "assets/Lesson3/Matching1/m1_h (1).png",
          "assets/Lesson3/Matching1/m1_h (2).png",
          "assets/Lesson3/Matching1/m1_h (3)_OK.png"
        ],
        answer: "assets/Lesson3/Matching1/m1_h (3)_OK.png"
      },
      {
        mainImage: "assets/Lesson3/Matching1/m2.png",
        choices: [
          "assets/Lesson3/Matching1/m2_h (1)_OK.png",
          "assets/Lesson3/Matching1/m2_h (2).png",
          "assets/Lesson3/Matching1/m2_h (3).png"
        ],
        answer: "assets/Lesson3/Matching1/m2_h (1)_OK.png"
      },
      {
        mainImage: "assets/Lesson3/Matching1/m3.png",
        choices: [
          "assets/Lesson3/Matching1/m3_h (1).png",
          "assets/Lesson3/Matching1/m3_h (2).png",
          "assets/Lesson3/Matching1/m3_h (3)_OK.png"
        ],
        answer: "assets/Lesson3/Matching1/m3_h (3)_OK.png"
      },
      {
        mainImage: "assets/Lesson3/Matching1/m4.png",
        choices: [
          "assets/Lesson3/Matching1/m4_h (1)_OK.png",
          "assets/Lesson3/Matching1/m4_h (2).png",
          "assets/Lesson3/Matching1/m4_h (3).png"
        ],
        answer: "assets/Lesson3/Matching1/m4_h (1)_OK.png"
      }
    ]
  },

  {
    label: "🔍 Odd One Out",
    isOddOneOut: true,
    folder: "assets/Lesson3/OddOneOut",
    rounds: [
      {
        images: [
          "assets/Lesson3/OddOneOut/1_1.png",
          "assets/Lesson3/OddOneOut/1_2.png",
          "assets/Lesson3/OddOneOut/1_3.png",
          "assets/Lesson3/OddOneOut/1_4.png"
        ],
        answer: "assets/Lesson3/OddOneOut/1_2.png"
      },
      {
        images: [
          "assets/Lesson3/OddOneOut/2_1.png",
          "assets/Lesson3/OddOneOut/2_2.png",
          "assets/Lesson3/OddOneOut/2_3.png",
          "assets/Lesson3/OddOneOut/2_4.png"
        ],
        answer: "assets/Lesson3/OddOneOut/2_4.png"
      }
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
