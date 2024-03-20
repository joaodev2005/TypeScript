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

const anyArray: any[] = [1, "teste", true, [], {nome: "Joaquim"}];

anyArray.push(false);

// console.log(anyArray)

// 3 - parametros tipados

function sum(a: number, b: number) {
    let res = a + b;

    console.log(res);
}

sum(1, 32);