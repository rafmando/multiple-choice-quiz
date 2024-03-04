export const questions = [
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
        text: "Next JS uses SSR which optimizes SEO ",
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
    id: 2,
    text: "Typescript (a superset of javascript) was released in 2012.",
    question: "Why can TypeScript be chosen over JavaScript?",
    options: [
      {
        id: 0,
        text: "Because it has better runtime performance",
        isCorrect: false,
      },
      {
        id: 1,
        text: "It runs on a server which types for you",
        isCorrect: false,
      },
      {
        id: 2,
        text: "It provides type saftey during runtime",
        isCorrect: true,
      },
    ],
  },
  {
    id: 3,
    text: "In Javscript we can either use a class based component or a functional component.",
    question:
      "What is the differnce between a class component and a functional component?",
    options: [
      {
        id: 0,
        text: "One is a function and one isn't",
        isCorrect: false,
      },
      {
        id: 1,
        text: "Functions can be hoisted and classes can't be",
        isCorrect: true,
      },
      {
        id: 2,
        text: "You can't create an instance of a function but can with a class",
        isCorrect: false,
      },
    ],
  },
  {
    id: 4,
    text: "When creating UI shared libraries in a team we may create components in a mono repo.",
    question: "What is a mono repo?",
    options: [
      {
        id: 0,
        text: "A folder which contains many projects that share packages",
        isCorrect: true,
      },
      {
        id: 1,
        text: "One single folder with one project",
        isCorrect: false,
      },
      {
        id: 2,
        text: "A folder less than 100MB ",
        isCorrect: false,
      },
    ],
  },
  {
    id: 5,
    text: "Tesing is a crucial step to take when creating your application. We can use technologies like cypress for e2e tests.",
    question: "What is an e2e test?",
    options: [
      {
        id: 0,
        text: "e2e tests the server",
        isCorrect: false,
      },
      {
        id: 1,
        text: "e2e tests an individual component",
        isCorrect: false,
      },
      {
        id: 2,
        text: "e2e tests the whole application's journy",
        isCorrect: true,
      },
    ],
  },
];
