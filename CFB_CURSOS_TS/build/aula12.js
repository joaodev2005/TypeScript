"use strict";
const somar = (a = 30, b = 8) => {
    return a + b;
};
console.log(somar());
const newUser = (name, age, address) => {
    let dados = { name, age, address };
    console.log(dados);
    if (address === undefined) {
        console.log('Endereço não informado');
    }
};
newUser('Joaquim', 30);
