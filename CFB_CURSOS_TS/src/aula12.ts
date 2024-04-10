const somar = (a: number = 30, b: number = 8): number => {

    return a + b
}

console.log(somar())

const newUser = (name: string, age: number, address?: string) => {
    
    let dados = {name, age, address}

    console.log(dados)

    if(address === undefined) {
        console.log('Endereço não informado')
    }
}

newUser('Joaquim', 30)