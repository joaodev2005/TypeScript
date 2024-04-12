"use strict";
const fSoma = (...n) => {
    let a = 0;
    n.forEach((e) => {
        a += e;
    });
    return a;
};
console.log(fSoma(10, 20, 40, 88));
const mediaEscola = (...n) => {
    let z = 0;
    n.forEach((e) => {
        z += e;
    });
    return z / n.length;
};
let media = mediaEscola(5, 4, 3, 2);
console.log('Sua média escolar é:', +media);
