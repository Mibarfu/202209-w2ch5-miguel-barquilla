const nextToCurrentGeneration = (rows, columns, nextGenerationArray) => {
  const currentGenerationArray = Array(rows);

  for (let i = 0; i < rows; i++) {
    currentGenerationArray[i] = Array(columns);
  }

  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      currentGenerationArray[row][column] = nextGenerationArray[row][column];
    }
  }

  return currentGenerationArray;
};

export default nextToCurrentGeneration;
