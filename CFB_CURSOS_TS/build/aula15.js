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
class Game {
    name = '';
    year = 0;
    developer = '';
    console = '';
    price = 0;
    genre = '';
}
const game = new Game();
game.name = 'God of War';
game.console = 'PS4';
game.developer = 'Santa Monica Studio';
game.year = 2018;
game.price = 250;
game.genre = 'Action';
console.log(game);
