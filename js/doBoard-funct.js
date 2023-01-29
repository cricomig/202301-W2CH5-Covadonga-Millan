export const doBoard = (rows, columns) => {
  const board = [];
  for (let i = 0; i < rows; i++) {
    const emptyArr = [];

    for (let j = 0; j < columns; j++) {
      emptyArr.push(Math.round(Math.random()));
    }

    board.push(emptyArr);
  }

  return board;
};
