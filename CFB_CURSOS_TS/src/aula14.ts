const fSoma = (...n: number[]) => {

    let a: number = 0

    n.forEach((e: number) => {

        a += e
    })

    return a
}

console.log(fSoma(10, 20, 40, 88))