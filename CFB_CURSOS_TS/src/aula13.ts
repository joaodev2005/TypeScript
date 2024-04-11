const teste = (txt: string): void => {
    console.log(txt)
}

const somas = (num: number[]): number => {

    let s: number = 0

    num.forEach((e: number) => {
        s += e
    })

    return s
}

teste('TypeScript')
teste('Joaquim')

let numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

console.log(somas(numeros))