// Una célula viva sigue las siguientes reglas:
// Si tiene menos de 2 células contiguas vivas, muere por "soledad".
// Si tiene más de 3 células contiguas vivas, muere por "sobrepoblación".
// Si tiene 2 o 3 células contiguas vivas, sobrevive.
// Una célula muerta sigue la siguiente regla: Permanece muerta hasta que
//   tiene exactamente 3 células contiguas vivas, momento en el que "nace".

// Alive < 2 = dies
// Alive > 3 = dies
// Alive >=2 = lives
// Alive === 3 = isBorn

// El tablero es como un eje de coordenadas y el bicho principal estaría en la 0,0
// Entonces en un cuadrado con un bicho en el centro que tenga en cuenta sus vecinos
// las posiciones serían así:
// (-1, 1)   (0,1)    (1,1)
// (-1, 0) (el bicho) (1,0)
// (-1,-1)  (0,-1)    (1,-1)

let table;
let x;
let y;
let rows = 3;
let columns = 3;
let isAlive = Boolean;
let bicho;

// Declaramos los ejes para poder ver dónde están los bichos y poder descartar la
// posición 0,0 donde estaría el bicho primigenio.
// Si está vivo, isAlive será true, si no, false.

const table = () => {
  for (x = 0; x < rows; x++) {
    for (y = 0; y < columns; y++) {
      if isAlive === true;

    }
  }

  return table;
};

console.table(obj);
