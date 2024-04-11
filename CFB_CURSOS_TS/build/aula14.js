"use strict";
const fSoma = (...n) => {
    let a = 0;
    n.forEach((e) => {
        a += e;
    });
    return a;
};
console.log(fSoma(10, 20, 40, 88));
