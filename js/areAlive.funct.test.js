import { countAlive } from './areAlive-funct';
describe('Given areAlive function', () => {
  describe('When we have a 3x3 board filled with 1 and 0', () => {
    test('Then the function counts how many alive cells are around the 1,1 position', () => {
      const board = [
        [1, 0, 1],
        [0, 1, 1],
        [1, 0, 1],
      ];

      const expected = 5;
      const received = countAlive(board);
      expect(received).toBe(expected);
    });

    test('Then the function counts how many alive cells are around the 1,1 position', () => {
      const board = [
        [1, 0, 0],
        [1, 0, 1],
        [0, 0, 1],
      ];

      const expected = 4;
      const received = countAlive(board);
      expect(received).toBe(expected);
    });

    test('Then the function counts how many alive cells are around the 1,1 position', () => {
      const board = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ];

      const expected = 0;
      const received = countAlive(board);
      expect(received).toBe(expected);
    });

    test('Then the function counts how many alive cells are around the 1,1 position', () => {
      const board = [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
      ];

      const expected = 8;
      const received = countAlive(board);
      expect(received).toBe(expected);
    });
  });
});
