"use strict";
class Computer {
    name = '';
    ram = 0;
    cpu = 0;
    ligado = false;
}
const c1 = new Computer();
const c2 = new Computer();
const c3 = new Computer();
c1.name = 'Macbook Pro';
c2.name = 'Macbook Air';
c3.name = 'Macbook Mini';
console.log(c1.name);
console.log(c2.name);
console.log(c3.name);
