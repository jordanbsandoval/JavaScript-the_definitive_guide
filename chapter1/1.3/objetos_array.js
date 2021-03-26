#!/usr/bin/node
let objetos_arr ={                      // Definiendo un objeto con 2 propiedades
    w : [[4, 3, 5, 7], [2, 4, 6, 8]],   // El valor de cada propiedad del objeto es un array
    q : [1, 2,, 3, 4]                   // los elementos del array son arrays
};
console.log(objetos_arr.w[0][0]);
console.log(objetos_arr.q[0]);
