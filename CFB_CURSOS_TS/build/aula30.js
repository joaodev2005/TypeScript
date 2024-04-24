"use strict";
var Veiculos;
(function (Veiculos) {
    let Cores;
    (function (Cores) {
        Cores[Cores["preto"] = 0] = "preto";
        Cores[Cores["branco"] = 1] = "branco";
        Cores[Cores["vermelho"] = 2] = "vermelho";
        Cores[Cores["azul"] = 3] = "azul";
        Cores[Cores["amarelo"] = 4] = "amarelo";
        Cores[Cores["verde"] = 5] = "verde";
        Cores[Cores["cinza"] = 6] = "cinza";
    })(Cores || (Cores = {}));
    class Carro {
        name;
        motor;
        cor;
        constructor(name, motor, cor) {
            this.name = name;
            this.motor = motor;
            this.cor = Cores[cor];
        }
        ligar() {
            this.motor.liga = true;
        }
        desligar() {
            this.motor.liga = false;
        }
        get minhaCor() {
            return this.cor;
        }
        get meuNome() {
            return this.name;
        }
        get estouLigado() {
            return (this.motor.liga ? 'sim' : 'nao');
        }
        get minhaPotencia() {
            return this.motor.potencia;
        }
    }
    Veiculos.Carro = Carro;
    class CarroEsportivo extends Carro {
        constructor(name, cor) {
            super(name, new motores.Motor('2.0', 4, new motores.Turbo(100)), 0);
        }
    }
    Veiculos.CarroEsportivo = CarroEsportivo;
    class CarroPopular extends Carro {
        constructor(name, cor) {
            super(name, new motores.Motor('1.0', 4), 3);
        }
    }
    Veiculos.CarroPopular = CarroPopular;
})(Veiculos || (Veiculos = {}));
var motores;
(function (motores) {
    class Turbo {
        pot;
        constructor(pot) {
            this.pot = pot;
        }
        get potencia() {
            return this.pot;
        }
    }
    motores.Turbo = Turbo;
    class Motor {
        ligado;
        cilindros;
        pot;
        constructor(pot, cilindros, turbo) {
            this.ligado = false;
            this.cilindros = cilindros;
            this.pot = pot + (turbo ? turbo.potencia : 0);
        }
        set liga(ligado) {
            this.ligado = ligado;
        }
        get liga() {
            return this.ligado;
        }
        get potencia() {
            return this.pot;
        }
    }
    motores.Motor = Motor;
})(motores || (motores = {}));
const carro1 = new Veiculos.CarroPopular('supra', 4);
const carro2 = new Veiculos.CarroEsportivo('Ford Mustang GT', 1);
console.log(`Nome: ${carro1.meuNome}`);
console.log(`Cor: ${carro1.minhaCor}`);
console.log(`Potencia: ${carro1.minhaPotencia}`);
console.log(`Ligado: ${carro1.estouLigado}`);
console.log('==========================');
console.log(`Nome: ${carro2.meuNome}`);
console.log(`Cor: ${carro2.minhaCor}`);
console.log(`Potencia: ${carro2.minhaPotencia}`);
console.log(`Ligado: ${carro2.estouLigado}`);
