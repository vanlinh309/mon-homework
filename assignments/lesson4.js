// Count It Up — Homework Assignments
// isShowFromImage: false → emoji blocks (tap each emoji to count, then pick number)
// isShowFromImage: true  → image blocks (one image per card, pick number below)
window.HOMEWORK_CONFIG = [
  {
    label: "🔢 Emoji",
    isShowFromImage: false,
    blocks: [
      { emoji: "🚗", count: 6 },
      { emoji: "🐶", count: 8 },
      { emoji: "🍕", count: 5 },
      { emoji: "🌸", count: 7 }
    ]
  },
  {
    label: "🖼️ Set 1",
    isShowFromImage: true,
    blocks: [
      { image: "assets/lesson4/Set1/1.png", numbers: [3, 6, 4], answer: 3 },
      { image: "assets/lesson4/Set1/2.png", numbers: [7, 4, 5], answer: 5 },
      { image: "assets/lesson4/Set1/3.png", numbers: [9, 7, 8], answer: 9 },
      { image: "assets/lesson4/Set1/4.png", numbers: [5, 4, 9], answer: 4 }
    ]
  },
  {
    label: "🖼️ Set 2",
    isShowFromImage: true,
    blocks: [
      { image: "assets/lesson4/Set2/1.png", numbers: [2, 4, 5], answer: 5 },
      { image: "assets/lesson4/Set2/2.png", numbers: [8, 7, 5], answer: 8 },
      { image: "assets/lesson4/Set2/3.png", numbers: [6, 5, 3], answer: 3 },
      { image: "assets/lesson4/Set2/4.png", numbers: [3, 7, 4], answer: 3 }
    ]
  },
  {
    label: "🖼️ Set 3",
    isShowFromImage: true,
    blocks: [
      { image: "assets/lesson4/Set3/1.png", numbers: [7, 6, 8], answer: 6 },
      { image: "assets/lesson4/Set3/2.png", numbers: [4, 6, 7], answer: 7 },
      { image: "assets/lesson4/Set3/3.png", numbers: [5, 4, 6], answer: 4 },
      { image: "assets/lesson4/Set3/4.png", numbers: [4, 7, 5], answer: 5 }
    ]
  },
  {
    label: "🖼️ Set 4",
    isShowFromImage: true,
    blocks: [
      { image: "assets/lesson4/Set4/1.png", numbers: [7, 8, 2], answer: 8 },
      { image: "assets/lesson4/Set4/2.png", numbers: [4, 2, 3], answer: 2 },
      { image: "assets/lesson4/Set4/3.png", numbers: [3, 5, 6], answer: 7 },
      { image: "assets/lesson4/Set4/4.png", numbers: [4, 6, 5], answer: 6 }
    ]
  }
];
