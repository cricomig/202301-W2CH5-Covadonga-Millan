// Suponiendo que tenemos un cuadrado de 6x6, hay que tener en cuenta
// los vecinos del bicho que haya en el medio, por ejemplo:
//  0 1 0
//  0 1 0
//  1 0 1
// entonces dentro del array tenemos al bicho principal en la posición arr[1][1]
// por eso lo dejamos fuera del switch

export const countAlive = (board) => {
  let areAlive = 0;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (i === 1 && j === 1) continue;

      switch (board[i][j]) {
        case 1:
          areAlive++;
          break;
        default:
          break;
      }
    }
  }

  return areAlive;
};
