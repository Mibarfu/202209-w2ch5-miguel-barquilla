class BuilderGrid {
  width;
  heigth;
  rows;
  size;
  columns;
  element;
  contextGrid;

  constructor(rows, columns, size, element) {
    this.rows = rows;
    this.columns = columns;
    this.width = columns * this.size;
    this.heigth = rows * this.size;
    this.element = element;
    this.size = size;
    this.contextGrid = this.element.getContext("2d");
  }

  buildGrid(arrayToPaint) {
    this.element.width = this.columns * this.size;
    this.element.height = this.rows * this.size;
    for (let row = 0; row < this.rows; row++) {
      for (let column = 0; column < this.columns; column++) {
        this.contextGrid.fillStyle = arrayToPaint[row][column]
          ? "black"
          : "white";

        this.contextGrid.fillRect(
          column * (this.size + 1),
          row * (this.size + 1),
          this.size,
          this.size
        );
      }
    }
  }
}

export default BuilderGrid;
