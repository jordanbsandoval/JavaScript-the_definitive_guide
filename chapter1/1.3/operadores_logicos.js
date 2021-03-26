#!/usr/bin/node
let x = 3, y = 4;
console.log((x < 4) && (x == 3));       // => true: las dos expresiones son verdaderas  || 1, 1
console.log((x > y) || (x == 5));       // => false: Las dos expresiones son falsas     || 0, 0
console.log(!(x < y));                  // => false: invierte el valor verdadero de la expresion || 1, 0
