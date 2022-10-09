class WordMaker {
  matrixWord;
  rows;
  columns;
  rangeRandomNumbers = 100;
  probabilityLeaving = 20;

  constructor(rows, columns) {
    this.columns = columns;
    this.rows = rows;
    this.matrixWord = Array(rows);

    this.createWord(rows, columns);
  }

  createWord(rows, columns) {
    for (let row = 0; row < rows; row++) {
      this.matrixWord[row] = Array(columns);
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
