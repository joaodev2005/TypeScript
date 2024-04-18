"use strict";
class Conta {
    saldo = 4.970;
    numero;
    titular;
    banco;
    constructor(titular, banco) {
        this.numero = this.gerarConta();
        this.titular = titular;
        this.banco = banco;
    }
    info() {
        console.log(`O saldo da conta é R$ ${this.saldo}`);
        console.log(`O número da conta é ${this.numero}`);
        console.log(`O nome do titular da conta é ${this.titular}`);
        console.log(`Sua agencia é ${this.banco}`);
    }
    gerarConta() {
        return Math.floor(Math.random() * 1000) + 1;
    }
}
class ContaPf extends Conta {
    cpf;
    constructor(cpf, titular, banco) {
        super(titular, banco);
        this.cpf = cpf;
    }
}
class ContaPj extends Conta {
    cnpj;
    constructor(cnpj, titular, banco) {
        super(titular, banco);
        this.cnpj = cnpj;
    }
}
const conta = new ContaPf(133, 'João', 'Banco do Brasil');
const conta2 = new ContaPj(3455674, 'Cliton', 'Banco black');
conta.info();
console.log(conta);
console.log(conta2);
