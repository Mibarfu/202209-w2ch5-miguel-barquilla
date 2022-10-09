class BuilderGrid {
  width;
  heigth;
  rows;
  size;
  columns;
  element;
  array;

  constructor(rows, columns, size, element, array) {
    this.rows = rows;
    this.columns = columns;
    this.width = columns * this.size;
    this.heigth = rows * this.size;
    this.element = element;
    this.array = array;
    this.size = size;
  }

  buildGrid() {
    const contextGrid = this.element.getContext("2d");

    this.element.width = this.columns * this.size;
    this.element.height = this.rows * this.size;

    for (let row = 0; row < this.rows; row++) {
      for (let column = 0; column < this.columns; column++) {
        contextGrid.fillStyle = this.array[row][column] ? "black" : "white";
        contextGrid.fillRect(
          row * (this.size + 1),
          column * (this.size + 1),
          this.size,
          this.size
        );
      }
    }
  }
}

export default BuilderGrid;
