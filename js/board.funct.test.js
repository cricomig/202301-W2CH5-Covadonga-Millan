import { doBoard } from './doBoard-funct';
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

    test('Then the function pushes random 0s and 1ns and returns a 10x10 board', () => {
      const rows = 10;
      const columns = 10;
      const board = [0, 1, 0, 1, 1, 1, 0, 1, 0, 1];
      const expected = doBoard(rows, columns);
      const received = board.length;
      expect(received).toBe(expected.length);
    });

    test('Then the function pushes random 0s and 1ns and returns an empty board', () => {
      const rows = 0;
      const columns = 0;
      const board = [];
      const expected = doBoard(rows, columns);
      const received = board.length;
      expect(received).toBe(expected.length);
    });
  });
});
