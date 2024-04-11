"use strict";
const teste = (txt) => {
    console.log(txt);
};
const somas = (num) => {
    let s = 0;
    num.forEach((e) => {
        s += e;
    });
    return s;
};
teste('TypeScript');
teste('Joaquim');
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
console.log(somas(numeros));
