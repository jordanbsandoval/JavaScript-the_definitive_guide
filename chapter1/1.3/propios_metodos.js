#!/usr/bin/node
points = function(){
    let p1 = this[0];
    let p2 = this[1];
    let a = p2.x-p1.x;
    let b = p2.y-p1.y;
    return Math.sqrt(a*a + b*b);
};
console.log(points());
