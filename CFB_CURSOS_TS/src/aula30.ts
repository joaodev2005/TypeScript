namespace Veiculos {
    enum Cores { 'preto', 'branco', 'vermelho', 'azul', 'amarelo', 'verde', 'cinza' }
    export abstract class Carro {
        private name: string
        private motor: motores.Motor
        private cor: string
        constructor(name: string, motor: motores.Motor, cor: Cores) {
            this.name = name
            this.motor = motor
            this.cor = Cores[cor]
        }

        public ligar() {
            this.motor.liga = true
        }

        public desligar() {
            this.motor.liga = false
        }

        get minhaCor() {
            return this.cor
        }

        get meuNome() {
            return this.name
        }

        get estouLigado() {
            return (this.motor.liga ? 'sim' : 'nao')
        }

        get minhaPotencia() {
            return this.motor.potencia
        }
    }

    export class CarroEsportivo extends Carro {
        constructor(name: string, cor: Cores) {
            super(name, new motores.Motor('2.0', 4, new motores.Turbo(100)), 0)
        }
    }

    export class CarroPopular extends Carro {
        constructor(name: string, cor: Cores) {
            super(name, new motores.Motor('1.0', 4), 3)
        }
    }
}



namespace motores {
    export class Turbo {
        private pot: number
        constructor(pot: number) {
            this.pot = pot
        }

        get potencia() {
            return this.pot
        }
    }
    export class Motor {
        private ligado: boolean
        private cilindros: number
        private pot: string
        constructor(pot: string, cilindros: number, turbo?: Turbo) {
            this.ligado = false
            this.cilindros = cilindros
            this.pot = pot + (turbo ? turbo.potencia : 0)
        }

        set liga(ligado: boolean) {
            this.ligado = ligado
        }

        get liga() {
            return this.ligado
        }

        get potencia() {
            return this.pot
        }
    }
}

const carro1 = new Veiculos.CarroPopular('supra', 4)
const carro2 = new Veiculos.CarroEsportivo('Ford Mustang GT', 1)

console.log(`Nome: ${carro1.meuNome}`)
console.log(`Cor: ${carro1.minhaCor}`)
console.log(`Potencia: ${carro1.minhaPotencia}`)
console.log(`Ligado: ${carro1.estouLigado}`)

console.log('==========================')

console.log(`Nome: ${carro2.meuNome}`)
console.log(`Cor: ${carro2.minhaCor}`)
console.log(`Potencia: ${carro2.minhaPotencia}`)
console.log(`Ligado: ${carro2.estouLigado}`)