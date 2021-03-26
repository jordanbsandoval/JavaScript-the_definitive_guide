#!/usr/bin/node
let x = 2, y = 3;
console.log(x === y);   //=> false: Operador de igualdad
console.log(x > y);     //=> false: mayor que
console.log(x >= y);    //=> false: mayor que o igual que
console.log(x < y);     //=> true: menor que
console.log(x <= y);    //=> menor que o igual que
console.log("two" === "three"); //=> false: los dos strings son diferentes
console.log("two" > "three");   //=> true: 'tw' es alfabeticamente mayor que 'th'
console.log(false === (x > y)); //=> true: Falso + falso (tabla de la verdad)

