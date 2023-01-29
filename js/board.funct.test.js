import { doBoard } from './doBoard-funct.js';
describe('Given doBoard function', () => {
  describe('When we have an empty array', () => {
    test('Then the function pushes random 0s and 1ns and returns a 6x6 board', () => {
      const rows = 6;
      const columns = 6;
      const board = [0, 1, 0, 1, 1, 1];
      const expected = doBoard(rows, columns);
      const received = board.length;
      expect(received).toBe(expected.length);
    });
  });
});