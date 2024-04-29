"use strict";
let [nu1, nu2 = 0, nu3 = 0, nu4 = 0, ...nu5] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const fColors = () => {
    return ['branco', 'vermelho', 'azul', 'amarelo'];
};
let [co1, co2, co3, co4] = fColors();
console.log(co1);
console.log(co2);
console.log(co3);
console.log(co4);
let text = 'Curso de TypeScript';
let [p1, p2, p3] = text.split(" ");
console.log(p1);
console.log(p2);
console.log(p3);
