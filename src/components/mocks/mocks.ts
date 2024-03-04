export const mockLookUp = new Map([
  [
    "When using Javscript frameworks like React or Vue we use a virtual dom.",
    1,
  ],
  ["A widely used library Next JS, is used by many companies in 2024.", 1],
  ["Typescript (a superset of javascript) was released in 2012.", 0],
]);

export const mockQuestions = [
  {
    id: 0,
    text: "When using Javscript frameworks like React or Vue we use a virtual dom.",
    question:
      "What is the difference between the virtual dom and the real dom?",
    options: [
      { id: 0, text: "It's not a copy of the real dom ", isCorrect: false },
      {
        id: 1,
        text: "It's a lightweight copy of the real dom",
        isCorrect: true,
      },
      { id: 2, text: "It's slower that the real dom", isCorrect: false },
    ],
  },
  {
    id: 1,
    text: "A widely used library Next JS, is used by many companies in 2024.",
    question: "Why may someone use Next JS over plain react?",
    options: [
      {
        id: 0,
        text: "Next JS uses ssr which optimizes SEO ",
        isCorrect: true,
      },
      {
        id: 1,
        text: "Next JS only strictly uses typescript",
        isCorrect: false,
      },
      {
        id: 2,
        text: "Next JS has graphql built in its library",
        isCorrect: false,
      },
    ],
  },
  {
    id: 3,
    text: "Typescript (a superset of javascript) was released in 2012.",
    question: "Why can TypeScript be chosen over JavaScript?",
    options: [
      {
        id: 0,
        text: "Because it has better runtime performance",
        isCorrect: true,
      },
      {
        id: 1,
        text: "It runs on a server which types for you",
        isCorrect: false,
      },
      {
        id: 2,
        text: "It provides type saftey during runtime",
        isCorrect: false,
      },
    ],
  },
];
