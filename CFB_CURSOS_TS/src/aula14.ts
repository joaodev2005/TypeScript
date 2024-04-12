const fSoma = (...n: number[]) => {

    let a: number = 0

    n.forEach((e: number) => {

        a += e
    })

    return a
}

console.log(fSoma(10, 20, 40, 88))

const mediaEscola = (...n: number[]) => {
    let z: number = 0

    n.forEach((e: number) => {

        z += e
    })

    return z / n.length
}

let media = mediaEscola(5, 4, 3, 2)

console.log('Sua média escolar é:', + media)