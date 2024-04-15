"use strict";
class Carr {
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
    info() {
        console.log(`Nome:${this.name}`);
        console.log(`Ano:${this.year}`);
        console.log(`Cor:${this.color}`);
        console.log(`Portas:${this.doors}`);
        console.log(`Fabricante:${this.manufacturer}`);
        console.log(`Motor:${this.motor}`);
        console.log(`Ligado:${this.ligado ? 'Sim' : 'Não'}`);
    }
    ligar() {
        this.ligado = true;
    }
    desligar() {
        this.ligado = false;
    }
}
const carr = new Carr();
carr.ligar();
carr.desligar();
carr.info();
