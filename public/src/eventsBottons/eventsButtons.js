import nextGeneration from "../nextGeneration/nextGeneration.js";
import nextToCurrentGeneration from "../nextToCurrentGeneration/nextToCurrentGeneration.js";

export const declareEventsRestartButton = (word, grid) => {
  document.querySelector(".restart-button").addEventListener("click", () => {
    word.randonLife();

    grid.buildGrid(word.matrixWord);
  });
};

export const declareEventsPlayButton = (rows, columns, wordArray, grid) => {
  let isInterval = false;
  let timerId;

  document.querySelector(".play-button").addEventListener("click", () => {
    if (!isInterval) {
      timerId = setInterval(() => {
        const word = wordArray;
        isInterval = true;

        const nextGenerationArray = nextGeneration(
          rows,
          columns,
          word.matrixWord
        );

        grid.buildGrid(nextGenerationArray);
        word.matrixWord = nextToCurrentGeneration(
          rows,
          columns,
          nextGenerationArray
        );
      }, 100);
    }
    document.querySelector(".stop-button").addEventListener("click", () => {
      clearInterval(timerId);
      isInterval = false;
    });
  });
};
