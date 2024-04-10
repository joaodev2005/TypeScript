function logar(user: string, password: string): void {

    console.log('Usuario: ' + user)
    console.log('Senha: ' + password)

    setTimeout(() => {
        console.log('logado')
    }, 3000)
}

logar('joao', '123')

const soma = (a: number, b: number): number => {

    let r = a + b

    return r
}

const s_res: number = soma(19, 6)
const n_res: string = soma(55, 877).toString()

console.log(s_res)
console.log(n_res)