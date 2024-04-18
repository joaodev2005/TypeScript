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
        console.log('-------------------------');
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
        console.log(`Conta PF criada com sucesso. O nome do titular é ${titular}`);
    }
}
class ContaPj extends Conta {
    cnpj;
    constructor(cnpj, titular, banco) {
        super(titular, banco);
        this.cnpj = cnpj;
        console.log(`Conta PJ criada com sucesso. O nome do titular é ${titular}`);
    }
}
const conta = new ContaPf(133, 'João', 'Banco do Brasil');
const conta2 = new ContaPj(3455674, 'Claiton', 'Banco black');
conta.info();
conta2.info();
