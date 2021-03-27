#!/usr/bin/node
function factorial(x){              // una funcion para calcular los factoriales
    let product = 1;                // empieza con una variable en 1
    while (x > 1){                  // repite las declaraciones mientras sea verdadero
        product *= x;               // multiplica a x las veces que el ciclo es verdadero y asigna su valor
                                    // a la variable prodcut
        x--;                        // decrementa a n, para la terminacion del ciclo o conteo
    }   
    return (product);               // retorna el calculo obtenido
}
console.log(factorial(9));
