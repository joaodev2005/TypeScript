let numbers: number[] = [1, 2, 3];  

numbers.push(4); //adiciona no final do array
numbers.unshift(10); //adiciona no comeco do array
numbers.pop(); //remove do final
numbers.shift(); //remove do comeco
console.log(numbers)

let numbersRo: ReadonlyArray<number> = [1, 2, 3];

