var Curso = /** @class */ (function () {
    function Curso(canal, curso) {
        this.canal = canal;
        this.curso = curso;
    }
    return Curso;
}());
var curso = new Curso('CFB Cursos', 'TypeScript');
console.log(curso.curso);
console.log(curso.canal);
