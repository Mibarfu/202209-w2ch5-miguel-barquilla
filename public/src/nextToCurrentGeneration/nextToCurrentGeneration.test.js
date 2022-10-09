import nextToCurrentGeneration from "./nextToCurrentGeneration.js";

describe("Given the function nextToCurrentGeneration", () => {
  describe("When its receives receives by parameters the values ​​50, 50, [[...values ​​random]]...", () => {
    test("Then it should returns an equal array without being the same", () => {});
    const expectedArray = Array(50);

    for (let i = 0; i < 50; i++) {
      expectedArray[i] = Array(50);
    }

    for (let row = 0; row < 50; row++)
      for (let column = 0; column < 50; column++) {
        expectedArray[row][column] =
          Math.floor(Math.random() * (2 - 0)) + 0 < 1;
      }

    const returnArray = nextToCurrentGeneration(50, 50, expectedArray);
    expect(false).toEqual(returnArray === expectedArray);
    expect(expectedArray).toEqual(returnArray);
  });
});
