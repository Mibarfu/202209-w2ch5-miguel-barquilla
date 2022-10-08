class WordMaker {
  matrixWord = [];
  rows;
  columns;
  rangeRandomNumbers = 1000;
  probabilityLeaving = 20;

  constructor(columns, rows) {
    this.columns = columns;
    this.rows = rows;
    this.matrixWord = Array(rows);

    this.createWord(rows, columns);
    this.randonLife();
  }

  createWord(rows, columns) {
    for (let i = 0; i < rows; i++) {
      this.matrixWord[i] = Array(columns);
    }
  }

  randonLife() {
    for (let row = 0; row < this.rows; row++)
      for (let column = 0; column < this.columns; column++) {
        this.matrixWord[row][column] =
          Math.floor(Math.random() * (this.rangeRandomNumbers - 1)) + 1 <
          (this.rangeRandomNumbers / 100) * this.probabilityLeaving;
      }
  }
}

export default WordMaker;
