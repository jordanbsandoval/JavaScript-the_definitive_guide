#!/usr/bin/node
function fact2(x){
    let i = 1, product = 1;
    for (i = 1; i < x; i++)
        product *= x;
    return (product);
}
console.log(fact2(5));
