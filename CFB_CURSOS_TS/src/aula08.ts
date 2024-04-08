enum dias {
    domingo = 0,
    segunda = 1,
    terça = 2,
    quarta = 3,
    quinta = 4,
    sexta = 5,
    sabado = 6
}

// console.log(dias.domingo)
// console.log(dias['domingo'])
// console.log(dias[1])

const day = new Date()

// console.log(dias[day.getDay()])

enum colors {
    white = '#fff',
    black = '#000',
    gray = '#ccc',
    red = '#f00',
    green = '#0f0',
    blue = '#00f'
}

console.log(colors.white)

enum typeUser {
    ADMIN = 'ADMIN',
    USER = 'USER',
    SEO = 'SEO'
}

console.log(typeUser.USER)

// const tpUser: typeUser = 'ADMIN' 