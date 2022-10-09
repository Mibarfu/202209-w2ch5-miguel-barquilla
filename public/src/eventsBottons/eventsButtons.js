import nextGeneration from "../nextGeneration/nextGeneration.js";
import nextToCurrentGeneration from "../nextToCurrentGeneration/nextToCurrentGeneration.js";

export const declareEventsRestartButton = (word, grid) => {
  document.querySelector(".restart-button").addEventListener("click", () => {
    word.randonLife();

    grid.buildGrid(word.matrixWord);
  });
};

export const declareEventsPlayButton = (rows, columns, word, grid) => {
  document.querySelector(".play-button").addEventListener("click", () => {
    setInterval(() => {
      const word2 = word;
      const nextGenerationArray = nextGeneration(
        rows,
        columns,
        word.matrixWord
      );
      grid.buildGrid(nextGenerationArray);
      word2.matrixWord = nextToCurrentGeneration(
        rows,
        columns,
        nextGenerationArray
      );
    }, 100);
  });
};

// export const declareEventsStopButton = (word, grid) => {
//   document.querySelector(".restart-button").addEventListener("click", () => {
//     word.randonLife();

//     grid.buildGrid(word.matrixWord);
//   });
// };
// declareEventsRestartButton;
