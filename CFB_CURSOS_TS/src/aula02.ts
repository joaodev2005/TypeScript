class Curso {
    canal: null
    curso: null
    constructor(canal: any, curso: any) {
        this.canal = canal;
        this.curso = curso;
    }
}

const curso = new Curso('CFB Cursos', 'TypeScript');

console.log(curso.curso) 
console.log(curso.canal)