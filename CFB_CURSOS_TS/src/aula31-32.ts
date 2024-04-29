// let av = [10, 20, 30, 40]

// let [ aa, bb, cc, dd] = av

// console.log(aa)
// console.log(bb)
// console.log(cc)
// console.log(dd)


// let [aa, bb, cc, dd] = ['branco', 'vermelho', 'azul', 'amarelo']

// console.log(aa)
// console.log(bb)
// console.log(cc)
// console.log(dd) 

// const games = {
//     jogo1: 'The last of Us 2',
//     jogo2: 'Cuphead',
//     jogo3: 'Red Dead Redemption 2',
//     jogo4: 'GTA V',
//     jogo5: 'God of War 4'
// }

// let { jogo1, jogo2, jogo3, jogo4, jogo5 } = games

// console.log(jogo1)
// console.log(jogo2)
// console.log(jogo3)
// console.log(jogo4)
// console.log(jogo5)

let [nu1, nu2=0, nu3=0, nu4=0, ...nu5] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

// console.log(nu1)
// console.log(nu2)
// console.log(nu3)
// console.log(nu4)
// console.log(nu5)

const fColors = () => {
    return ['branco', 'vermelho', 'azul', 'amarelo']
} 

let [co1, co2, co3, co4] = fColors()

console.log(co1)
console.log(co2)
console.log(co3)
console.log(co4)

let text = 'Curso de TypeScript'

let [p1, p2, p3] = text.split(" ")

console.log(p1)
console.log(p2)
console.log(p3)