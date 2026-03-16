// Count It Up — Homework Assignments
// isShowFromImage: false → emoji blocks (tap each emoji to count, then pick number)
// isShowFromImage: true  → image block (2×2 image grid, numbers + answer set explicitly)
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
      { folder: "assets/lesson4/Set1", numbers: [3, 4, 5], answer: 4 }
    ]
  },
  {
    label: "🖼️ Set 2",
    isShowFromImage: true,
    blocks: [
      { folder: "assets/lesson4/Set2", numbers: [3, 4, 5], answer: 4 }
    ]
  },
  {
    label: "🖼️ Set 3",
    isShowFromImage: true,
    blocks: [
      { folder: "assets/lesson4/Set3", numbers: [3, 4, 5], answer: 4 }
    ]
  },
  {
    label: "🖼️ Set 4",
    isShowFromImage: true,
    blocks: [
      { folder: "assets/lesson4/Set4", numbers: [3, 4, 5], answer: 4 }
    ]
  }
];
