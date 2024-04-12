class Car {
    public name: string;
    public year: number;
    public color: string;
    public doors: number;
    public manufacturer: string;
    public motor: number;
    public ligado: boolean;

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

console.log(car)