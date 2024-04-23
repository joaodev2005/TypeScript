const Coisas = ['GTR R34', 1, true, 'Ferrari'];

class Person {
    name: string
    height: number
    constructor (name: string, height: number) {
        this.name = name
        this.height = height
    }
}

class Objeto {
    name: string
    constructor (name: string) {
        this.name = name
    }
}

export default Person
export { Coisas, Objeto }