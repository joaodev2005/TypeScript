"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Objeto = exports.Coisas = void 0;
const Coisas = ['GTR R34', 1, true, 'Ferrari'];
exports.Coisas = Coisas;
class Person {
    name;
    height;
    constructor(name, height) {
        this.name = name;
        this.height = height;
    }
}
class Objeto {
    name;
    constructor(name) {
        this.name = name;
    }
}
exports.Objeto = Objeto;
exports.default = Person;
