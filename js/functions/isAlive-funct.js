export const isAlive = (board) => {
  const newBoard = [];
  for (let i = 0; i < board.length; i++) {
    const newRow = [];
    for (let j = 0; j < board[i].length; j++) {
      let liveNeighbors = 0;

      if (board[i][j] === 1 && (liveNeighbors < 2 || liveNeighbors > 3)) {
        newRow.push(0);
      } else if (board[i][j] === 0 && liveNeighbors === 3) {
        newRow.push(1);
      } else {
        newRow.push(board[i][j]);
      }
      for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
          if (x === 0 && y === 0) {
            continue;
          }

          const rowIndex = i + x;
          const colIndex = j + y;
          if (
            rowIndex >= 0 &&
            rowIndex < board.length &&
            colIndex >= 0 &&
            colIndex < board[i].length
          ) {
            liveNeighbors += board[rowIndex][colIndex];
          }
        }
      }
    }
    newBoard.push(newRow);
  }
  return newBoard;
};
