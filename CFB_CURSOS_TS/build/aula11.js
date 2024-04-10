"use strict";
function logar(user, password) {
    console.log('Usuario: ' + user);
    console.log('Senha: ' + password);
    setTimeout(() => {
        console.log('logado');
    }, 3000);
}
logar('joao', '123');
const soma = (a, b) => {
    let r = a + b;
    return r;
};
const s_res = soma(19, 6);
const n_res = soma(55, 877).toString();
console.log(s_res);
console.log(n_res);
