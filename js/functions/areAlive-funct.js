// Suponiendo que tenemos un cuadrado de 6x6, hay que tener en cuenta
// los vecinos del bicho que haya en el medio, por ejemplo:
//  0 1 0
//  0 1 0
//  1 0 1
// entonces dentro del array tenemos al bicho principal en la posición arr[1][1]
// por eso lo dejamos fuera del switch

export const countAlive = (board) => {
  let areAlive = 0;

  switch (board[0][0]) {
    case 1:
      areAlive++;
      break;
    default:
      break;
  }

  switch (board[0][1]) {
    case 1:
      areAlive++;
      break;
    default:
      break;
  }

  switch (board[0][2]) {
    case 1:
      areAlive++;
      break;
    default:
      break;
  }

  switch (board[1][0]) {
    case 1:
      areAlive++;
      break;
    default:
      break;
  }

  switch (board[1][2]) {
    case 1:
      areAlive++;
      break;
    default:
      break;
  }

  switch (board[2][0]) {
    case 1:
      areAlive++;
      break;
    default:
      break;
  }

  switch (board[2][1]) {
    case 1:
      areAlive++;
      break;
    default:
      break;
  }

  switch (board[2][2]) {
    case 1:
      areAlive++;
      break;
    default:
      break;
  }

  return areAlive;
};
