import { doBoard } from './js/doBoard-funct';
import { countAlive } from './js/areAlive-funct';

// Una célula viva sigue las siguientes reglas:
// Si tiene menos de 2 células contiguas vivas, muere por "soledad".
// Si tiene más de 3 células contiguas vivas, muere por "sobrepoblación".
// Si tiene 2 o 3 células contiguas vivas, sobrevive.
// Una célula muerta sigue la siguiente regla: Permanece muerta hasta que
// tiene exactamente 3 células contiguas vivas, momento en el que "nace".

// Alive < 2 = dies
// Alive > 3 = dies
// Alive >=2 = lives
// Alive === 3 = isBorn

const rows = 3;
const columns = 3;

const gameBoard = doBoard(rows, columns);
console.table(gameBoard);

const checkNeighbors = countAlive(gameBoard);
console.log(checkNeighbors);
