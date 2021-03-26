#!/usr/bin/node

let x = 3;

function plus1(y){
    return y+1;
}

console.log(plus1(x));

let square = function(p){
    return p * 2;
}

console.log(square(plus1(x)));
