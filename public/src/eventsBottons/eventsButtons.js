const declareEventsRestartButton = (word, grid) => {
  document.querySelector(".restart-button").addEventListener("click", () => {
    word.randonLife();

    grid.buildGrid(word.matrixWord);
  });
};

export default declareEventsRestartButton;
