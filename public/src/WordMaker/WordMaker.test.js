import WordMaker from "./WordMaker.js";

describe("Given the class WordMaker", () => {
  describe("When it is instantiated with values (20, 20) of the form 'new WordMaker(20,20)'", () => {
    test("Then it should create a two-dimensional array of 20 items within each item", () => {
      const expectedRows = 20;
      const expectedColumns = 20;

      const wordMaker = new WordMaker(expectedRows, expectedColumns);

      const returnedRows = wordMaker.matrixWord.length;
      const returnedColumns = wordMaker.matrixWord[0].length;

      expect(expectedRows).toEqual(returnedRows);
      expect(expectedColumns).toEqual(returnedColumns);
    });
  });

  describe("when the 'randonLife()' method is called from two different instances", () => {
    test("Then it should return , the equality of the two arrays will be false", () => {
      const rows = 50;
      const columns = 50;
      const expectEqualArrays = false;
      let returnEqualArrays = true;

      const wordMaker1 = new WordMaker(50, 50);
      const wordMaker2 = new WordMaker(50, 50);
      wordMaker1.randonLife();
      const arrayWordMaker1 = wordMaker1.matrixWord;
      wordMaker2.randonLife();
      const arrayWordMaker2 = wordMaker2.matrixWord;

      for (let row = 0; row < rows; row++)
        for (let column = 0; column < columns; column++)
          if (arrayWordMaker1[row][column] !== arrayWordMaker2[row][column])
            returnEqualArrays = false;

      expect(expectEqualArrays).toEqual(returnEqualArrays);
    });
  });
});
