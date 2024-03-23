"use strict";
// 1 - arrays
let numbers = [1, 2, 3];
numbers.push(4);
numbers.push(5);
// console.log(numbers);
// console.log(numbers[3]);
const names = ["João", "Maria"];
names.push("Joaquim");
names.push("Pedro");
// console.log(names)
// 2 - any
const anyArray = [1, "teste", true, [], { nome: "Joaquim" }];
anyArray.push(false);
// console.log(anyArray)
// 3 - parametros tipados
function sum(a, b) {
    let res = a + b;
    // console.log(res);
}
sum(1, 32);
// 5 - retorno de função
function sayHello(name) {
    return `Hello ${name}`;
}
// console.log(sayHello("Joaquim"))
// 6 - funções anonimas
setTimeout(function () {
    const sallary = 1000;
    // console.log(sallary);
}, 2000);
// 7 - tipos de objetos 
function passCoordinates(point) {
    // console.log(`x = ${point.x}, y = ${point.y}`)
}
const point = { x: 123100, y: 24400 };
passCoordinates(point);
// 8 - propriedades opcionais
function showNumbers(a, b, c) {
    // console.log(`a = ${a}, b = ${b}, c = ${c}`)
}
showNumbers(1, 2, 3);
// 9 - validando argumentos na chamada
function myName(firstName, lastName) {
    if (lastName !== undefined) {
        return `${firstName} ${lastName}`;
    }
    return firstName;
}
// console.log(myName("Joaquim", "Magalhães"))
// console.log(myName("Joaquim"))
// 10 - union types
function showBalance(balance) {
    // console.log(`O saldo da conta é R$ ${balance}`)
}
showBalance(100);
showBalance("200");
// 11 - avançando com union types
function showUserRole(role) {
    if (typeof role === "boolean") {
        return "Usuário não aprovado";
    }
    return `A função do usuário é ${role}`;
}
function showId(id) {
    // console.log(`O ID é: ${id}`)
}
showId(32);
function showCoords(obj) {
    console.log(`x: ${obj.x}, y: ${obj.y}, z: ${obj.z}`);
}
const coordsObj = {
    x: 10,
    y: 20,
    z: 30
};
showCoords(coordsObj);
const somePerson = {
    name: "Joaquim",
    age: 30
};
// console.log(somePerson)
// 15 - literal types
let test = "testando";
console.log(test);
function showDirection(direction) {
    console.log(`A direção é: ${direction}`);
}
showDirection("left");
