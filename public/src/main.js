import WordMaker from "./WordMaker/WordMaker.js";
import BuilderGrid from "./BuiderGrid/BuilderGrid.js";
import nextGeneration from "./nextGeneration/nextGeneration.js";
import nextToCurrentGeneration from "./nextToCurrentGeneration/nextToCurrentGeneration.js";

const rows = 100;
const columns = 100;
const sizCell = 3;

const gridElement = document.querySelector(".grid-canvas");
const word = new WordMaker(rows, columns);

word.randonLife();

const grid = new BuilderGrid(rows, columns, sizCell, gridElement);

grid.buildGrid(word.matrixWord);

setInterval(() => {
  const nextGenerationArray = nextGeneration(rows, columns, word.matrixWord);

  grid.buildGrid(nextGenerationArray);

  word.matrixWord = nextToCurrentGeneration(rows, columns, nextGenerationArray);
}, 100);
