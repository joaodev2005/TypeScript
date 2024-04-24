namespace Veiculos {
    export class Carro {
        name: string
        motor: motores.Motor
        constructor(name: string) {
            this.name = name
            this.motor = new motores.Motor('2.0')
        }
    }
}

namespace motores {
    class Turbo {
        pot: number
        constructor(pot: number) {
            this.pot = pot
        }
    }
    export class Motor {
        pot: string
        constructor(pot: string) {
            this.pot = pot
        }
    }
}

const carro = new Veiculos.Carro('Ferrari');

console.log(carro.name)
console.log(carro.motor)