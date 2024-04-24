"use strict";
var Veiculos;
(function (Veiculos) {
    class Carro {
        name;
        motor;
        constructor(name) {
            this.name = name;
            this.motor = new motores.Motor('2.0');
        }
    }
    Veiculos.Carro = Carro;
})(Veiculos || (Veiculos = {}));
var motores;
(function (motores) {
    class Turbo {
        pot;
        constructor(pot) {
            this.pot = pot;
        }
    }
    class Motor {
        pot;
        constructor(pot) {
            this.pot = pot;
        }
    }
    motores.Motor = Motor;
})(motores || (motores = {}));
const carro = new Veiculos.Carro('Ferrari');
console.log(carro.name);
console.log(carro.motor);
