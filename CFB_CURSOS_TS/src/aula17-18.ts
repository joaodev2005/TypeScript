class Carr {
    private id: number;
    public name: string;
    private year: number;
    private color: string;
    private doors: number;
    private manufacturer: string;
    private motor: number;
    private ligado: boolean;

    constructor() {
        console.log('Carro criado');

        this.name = 'Ferrari';
        this.year = 2020;
        this.color = 'Vermelho';
        this.doors = 2;
        this.manufacturer = 'Ferrari';
        this.motor = 2.0;
        this.ligado = false;
        this.id = 0;
    }

    info(): void {
        console.log(`Nome:${this.name}`);
        console.log(`Ano:${this.year}`);
        console.log(`Cor:${this.color}`);
        console.log(`Portas:${this.doors}`);
        console.log(`Fabricante:${this.manufacturer}`);
        console.log(`Motor:${this.motor} Cavalos`);
        console.log(`Ligado:${this.ligado?'Sim':'Não'}`);
    }

    ligar(): void {
        this.ligado = true;
    }

    desligar(): void {
        this.ligado = false;
    }

    upMotor(qtd: number):void {
        if(qtd >= 0 && qtd <= 10) {
            this.motor = qtd
        } else {
            console.log('Quantidade inválida');
        }
    }
}

const carr = new Carr();

carr.ligar()
carr.desligar();

carr.name = 'Supra MK4';

carr.upMotor(8.3);

carr.info();