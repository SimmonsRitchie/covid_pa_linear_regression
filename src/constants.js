export const SAMPLE_DATASETS = [
  {
    name: "mostly flat (1)",
    data: [
      { x: 0, y: 5 },
      { x: 10, y: 5.1 },
      { x: 20, y: 4.9 },
      { x: 30, y: 5.1 },
      { x: 40, y: 4.8 },
      { x: 50, y: 5.0 },
      { x: 120, y: 5.1 }
    ]
  },
  {
    name: "mostly flat (2)",
    data: [
      { x: 1, y: 5 },
      { x: 2, y: 5.1 },
      { x: 3, y: 5.1 },
      { x: 4, y: 5.1 },
      { x: 5, y: 5 },
      { x: 6, y: 5 },
      { x: 7, y: 5.1 }
    ]
  },
  {
    name: "perfectly flat (1)",
    data: [
      { x: 0, y: 3 },
      { x: 1, y: 3 },
      { x: 2, y: 3 },
      { x: 3, y: 3 },
      { x: 4, y: 3 },
      { x: 5, y: 3 },
      { x: 6, y: 3 }
    ]
  },
  {
    name: "gentle fall (1)",
    data: [
      { x: 0, y: 7 },
      { x: 1, y: 6.7 },
      { x: 2, y: 6.5 },
      { x: 3, y: 6.3 },
      { x: 4, y: 6.2 },
      { x: 5, y: 6.0 },
      { x: 6, y: 5.9 }
    ]
  },
  {
    name: "gentle fall (2)",
    data: [
      { x: 0, y: 4.7 },
      { x: 1, y: 4.7 },
      { x: 2, y: 4.4 },
      { x: 3, y: 4.3 },
      { x: 4, y: 4.2 },
      { x: 5, y: 4.0 },
      { x: 6, y: 3.9 }
    ]
  },
  {
    name: "sharp rise (1)",
    data: [
      { x: 0, y: 3 },
      { x: 1, y: 5 },
      { x: 2, y: 6 },
      { x: 3, y: 5 },
      { x: 4, y: 5 },
      { x: 5, y: 8 },
      { x: 6, y: 8 }
    ]
  },
  {
    name: "sharp rise (2)",
    data: [
      { x: 0, y: 1 },
      { x: 1, y: 2 },
      { x: 2, y: 1 },
      { x: 3, y: 3 },
      { x: 4, y: 2 },
      { x: 5, y: 4 },
      { x: 6, y: 4 }
    ]
  },
  {
    name: "mostly fall (1)",
    data: [
      { x: 0, y: 5 },
      { x: 1, y: 4.1 },
      { x: 2, y: 3.1 },
      { x: 3, y: 2.1 },
      { x: 4, y: 1 },
      { x: 5, y: 0 },
      { x: 6, y: 0.1 }
    ]
  }
];

export const DATA_SOURCE_OPTIONS = [
  {
    id: "live",
    displayText: "Live Pa. county data",
    descrip:
      "Live COVID-19 daily case counts for Pennsylvania converted into 7-day moving averages. X values represent days, Y values represent death counts."
  },
  {
    id: "random",
    displayText: "Random numbers",
    descrip:
      "Generates a series of random X and Y values for testing purposes. For the most part, we should expect to see 'no trend' when analyzing these numbers."
  },
  {
    id: "dummy",
    displayText: "Dummy data",
    descrip: "Selects preset arrays of X and Y values for testing purposes."
  }
];
