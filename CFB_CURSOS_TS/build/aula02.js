"use strict";
class Curso {
    canal;
    curso;
    constructor(canal, curso) {
        this.canal = canal;
        this.curso = curso;
    }
}
const curso = new Curso('CFB Cursos', 'TypeScript');
console.log(curso.curso);
console.log(curso.canal);
