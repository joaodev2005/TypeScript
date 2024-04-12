class Computer {
    public name: string = '';
    public ram: number = 0;
    public cpu: number = 0;
    public ligado: boolean = false;
}

const c1 = new Computer();
const c2 = new Computer();
const c3 = new Computer();

c1.name = 'Macbook Pro';
c2.name = 'Macbook Air';
c3.name = 'Macbook Mini';

console.log(c1.name);
console.log(c2.name);
console.log(c3.name)

class Game {
    public name: string = '';
    public year: number = 0;
    public developer: string = '';
    public console: string = '';
    public price: number = 0;
    public genre: string = '';
}

const game = new Game();

game.name = 'God of War';
game.console = 'PS4';
game.developer = 'Santa Monica Studio';
game.year = 2018;
game.price = 250;
game.genre = 'Action';

console.log(game)