let dados: object = {
    nome: 'Joaquim',
    idade: 30,
    profissao: 'Programador',
    corFavorita: 'azul',
    ola: () => { return 'ola' },
    info: (p: string) => { console.log(p) }
}

console.log(dados)

// dados.ola()
// dados.info(dados.nome)