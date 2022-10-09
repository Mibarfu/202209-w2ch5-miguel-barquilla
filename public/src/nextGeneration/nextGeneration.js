const findNeighbors = (row, colummn, currentGenerationArray) => {
  let neighBors = 0;

  if (currentGenerationArray[row - 1][colummn - 1]) neighBors++;
  if (currentGenerationArray[row - 1][colummn]) neighBors++;
  if (currentGenerationArray[row - 1][colummn + 1]) neighBors++;
  if (currentGenerationArray[row][colummn - 1]) neighBors++;
  if (currentGenerationArray[row][colummn + 1]) neighBors++;
  if (currentGenerationArray[row + 1][colummn - 1]) neighBors++;
  if (currentGenerationArray[row + 1][colummn]) neighBors++;
  if (currentGenerationArray[row + 1][colummn + 1]) neighBors++;

  return neighBors;
};

const newStateCell = (currentCell, neighBors) => {
  let newState;

  if (currentCell === true && neighBors < 2) newState = false;
  if (currentCell === true && neighBors > 3) newState = false;
  if (currentCell === false && neighBors === 3) newState = true;

  return newState;
};

const nextGeneration = (rows, columns, currentGenerationArray) => {
  const nextGenerationArray = Array(rows);

  for (let i = 0; i < rows; i++) {
    nextGenerationArray[i] = Array(columns);
  }

  for (let row; row < rows; row++) {
    for (let column; column < columns; column++) {
      nextGenerationArray[row][column] = newStateCell(
        currentGenerationArray[row][column],
        findNeighbors(row, column, currentGenerationArray)
      );
    }
  }
  return nextGenerationArray;
};

export default nextGeneration;
