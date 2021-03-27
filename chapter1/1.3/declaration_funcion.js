#!/usr/bin/node
function abs(x){           // funcion para calcular el valor absoluto
    if(x >= 0)              // Sentencia if
        return (x);         // ejecuta el codigo si la condicion es verdadera
    else                    // la clausula opcional ELSE ejecuta su codigo
        return (-x);        // si la compara es falsa
}                           // las llaves son opcionales cuando hay una declaracion por clausula
console.log(abs(-10) === abs(10));
console.log(abs(-10));
