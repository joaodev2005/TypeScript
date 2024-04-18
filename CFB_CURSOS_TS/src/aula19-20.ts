class Conta {
    public saldo: number = 4.970;
    public numero: number;
    public titular: string;
    public banco: string;

    constructor(titular: string, banco: string) {
        this.numero = this.gerarConta();
        this.titular = titular;
        this.banco = banco;

    }

    info(): void {
        console.log(`O saldo da conta é R$ ${this.saldo}`);
        console.log(`O número da conta é ${this.numero}`);
        console.log(`O nome do titular da conta é ${this.titular}`);
        console.log(`Sua agencia é ${this.banco}`);
    }

    gerarConta(): number {
        return Math.floor(Math.random() * 1000) + 1;
    }
}

class ContaPf extends Conta {
    cpf: number

    constructor(cpf: number, titular: string, banco: string) {
        super(titular, banco)
        this.cpf = cpf
    }
}
class ContaPj extends Conta {
    cnpj: number
    constructor(cnpj: number, titular: string, banco: string) {
        super(titular, banco)
        this.cnpj = cnpj
    }
}

const conta = new ContaPf(133, 'João', 'Banco do Brasil');
const conta2 = new ContaPj(3455674, 'Cliton', 'Banco black');

conta.info()


console.log(conta)
console.log(conta2)