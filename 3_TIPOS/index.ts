// 1 - arrays

let numbers: number[] = [1, 2, 3];

numbers.push(4);

numbers.push(5);

// console.log(numbers);

// console.log(numbers[3]);

const names: string[] = ["João", "Maria"];

names.push("Joaquim");
names.push("Pedro");

// console.log(names)

// 2 - any

const anyArray: any[] = [1, "teste", true, [], { nome: "Joaquim" }];

anyArray.push(false);

// console.log(anyArray)

// 3 - parametros tipados

function sum(a: number, b: number) {
    let res = a + b;

    // console.log(res);
}

sum(1, 32);

// 5 - retorno de função

function sayHello(name: string): string {
    return `Hello ${name}`
}

// console.log(sayHello("Joaquim"))

// 6 - funções anonimas

setTimeout(function () {

    const sallary: number = 1000;

    // console.log(sallary);

}, 2000);

// 7 - tipos de objetos 

function passCoordinates(point: { x: number; y: number }) {

    // console.log(`x = ${point.x}, y = ${point.y}`)
}

const point = { x: 123100, y: 24400 };

passCoordinates(point);

// 8 - propriedades opcionais

function showNumbers(a: number, b: number, c?: number) {

    // console.log(`a = ${a}, b = ${b}, c = ${c}`)
}

showNumbers(1, 2, 3);

// 9 - validando argumentos na chamada

function myName(firstName: string, lastName?: string) {

    if (lastName !== undefined) {
        return `${firstName} ${lastName}`
    }

    return firstName
}

// console.log(myName("Joaquim", "Magalhães"))
// console.log(myName("Joaquim"))

// 10 - union types

function showBalance(balance: string | number) {
    // console.log(`O saldo da conta é R$ ${balance}`)
}

showBalance(100)
showBalance("200")

// 11 - avançando com union types

function showUserRole(role: boolean | string) {

    if (typeof role === "boolean") {
        return "Usuário não aprovado"
    }

    return `A função do usuário é ${role}`
}

// console.log(showUserRole('admin').toUpperCase())
// console.log(showUserRole(false).toUpperCase())

// 12 - type alias

type ID = string | number;

function showId(id: ID) {

    // console.log(`O ID é: ${id}`)
}

showId(32)

// 13 - interfaces

interface Point {
    x: number;
    y: number;
    z?: number;
}

function showCoords(obj: Point) {

    console.log(`x: ${obj.x}, y: ${obj.y}, z: ${obj.z}`)
}

const coordsObj: Point = {
    x: 10,
    y: 20,
    z: 30
}

showCoords(coordsObj)

// 14 - interface x type alias

interface Person {
    name: string;
}

interface Person {
    age: number;
}

const somePerson: Person = {
    name: "Joaquim",
    age: 30
}

// console.log(somePerson)

// 15 - literal types

let test: "testando" = "testando";

// console.log(test)

function showDirection(direction: "left" | "right" | "center") {
    // console.log(`A direção é: ${direction}`)
}

showDirection("left")

// 16 - non null assertion operator

const p = document.getElementById("some-p");

// console.log(p!.innerText);

// 17 - bigint

const n: bigint = 1000n;

// console.log(n)

// 18 - symbol

const symbolA: symbol = Symbol("a");

const symbolB: symbol = Symbol("a");

// console.log(symbolA === symbolB)

