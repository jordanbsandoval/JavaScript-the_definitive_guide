#!/usr/bin/node
let array = [2, 3, 5, 7, 11];           // defino un array con 5 elementos
function sum(array){                    // Calcula la suma de los elementos del array pasado por parametro
    let sum = 0;                        // Empieza con una suma inicial de 0
    for (let x of array){               // bucle sobre la matriz, asignando cada elemento a x
        sum += x;                       // Agrega el valor del elemento a la variable sum
    }                                   // este es el fin del bucle
    return sum;                         // retorna el valor de sum
}
console.log(sum(array));                // => 28: suma de los elementos del array

