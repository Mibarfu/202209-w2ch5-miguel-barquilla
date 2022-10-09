import WordMaker from "./WordMaker/WordMaker.js";
import BuilderGrid from "./BuiderGrid/BuilderGrid.js";
import {
  declareEventsRestartButton,
  declareEventsPlayButton,
} from "./eventsBottons/eventsButtons.js";

const columns = 300;
const rows = 150;
const sizCell = 3;

const gridElement = document.querySelector(".grid-canvas");
const word = new WordMaker(rows, columns);

word.randonLife();

const grid = new BuilderGrid(rows, columns, sizCell, gridElement);

grid.buildGrid(word.matrixWord);

declareEventsRestartButton(word, grid);
declareEventsPlayButton(rows, columns, word, grid);
