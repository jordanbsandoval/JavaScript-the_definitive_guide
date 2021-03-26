#!/usr/bin/node
let book = {
    name : "javascript",
    edition : 7
};

console.log(book.name);         // accediendo por punto
console.log(book["edition"]);   // accediendo por []

book.año = 2017;                // agregando un nuevo elemento par a la lista en cola
console.log(book);

book.autor = {};                // Agregando un elemento sin propiedades
console.log(book);

book.autor = "jordan";          // Agregando la propiedad al elemento anterior sin propiedades
console.log(book);
