"use strict";
class Car {
    name;
    year;
    color;
    doors;
    manufacturer;
    motor;
    ligado;
    constructor() {
        console.log('Carro criado');
        this.name = 'Ferrari';
        this.year = 2020;
        this.color = 'Vermelho';
        this.doors = 2;
        this.manufacturer = 'Ferrari';
        this.motor = 2.0;
        this.ligado = false;
    }
}
const car = new Car();
console.log(car);
