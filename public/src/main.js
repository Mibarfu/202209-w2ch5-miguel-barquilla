import WordMaker from "./WordMaker/WordMaker.js";
import BuilderGrid from "./BuiderGrid/BuilderGrid.js";

const rows = 100;
const columns = 100;
const sizCell = 3;

const gridElement = document.querySelector(".grid-canvas");
const word = new WordMaker(rows, columns);

word.randonLife();

const grid = new BuilderGrid(
  rows,
  columns,
  sizCell,
  gridElement,
  word.matrixWord
);

grid.buildGrid();
