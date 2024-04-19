"use strict";
class Conta {
    saldoConta;
    numero;
    titular;
    banco;
    constructor(titular, banco) {
        this.numero = this.gerarConta();
        this.titular = titular;
        this.banco = banco;
        this.saldoConta = 0;
    }
    info() {
        console.log(`saldo da Conta: R$ ${this.saldoConta}`);
        console.log(`Conta: ${this.numero}`);
        console.log(`Titular: ${this.titular}`);
        console.log(`Sua agencia: ${this.banco}`);
    }
    gerarConta() {
        return Math.floor(Math.random() * 1000) + 1;
    }
    saldo() {
        return this.saldoConta;
    }
    depositar(qtd) {
        this.saldoConta += qtd;
    }
    sacar(qtd) {
        if (qtd >= this.saldoConta) {
            this.saldoConta -= qtd;
        }
        console.log('Saldo insuficiente');
    }
}
class ContaPf extends Conta {
    cpf;
    constructor(cpf, titular, banco) {
        super(titular, banco);
        this.cpf = cpf;
    }
    info() {
        console.log('=====Tipo de conta PF=====');
        super.info();
        console.log(`CPF: ${this.gerarCpf()}`);
        console.log('-------------------------');
    }
    gerarCpf() {
        let cpf = '';
        for (let i = 0; i < 9; i++) {
            cpf += Math.floor(Math.random() * 10);
        }
        let soma = 0;
        for (let i = 0; i < 9; i++) {
            soma += parseInt(cpf.charAt(i)) * (10 - i);
        }
        let primeiroDigito = 11 - (soma % 11);
        if (primeiroDigito > 9) {
            primeiroDigito = 0;
        }
        cpf += primeiroDigito;
        soma = 0;
        for (let i = 0; i < 10; i++) {
            soma += parseInt(cpf.charAt(i)) * (11 - i);
        }
        let segundoDigito = 11 - (soma % 11);
        if (segundoDigito > 9) {
            segundoDigito = 0;
        }
        cpf += segundoDigito;
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    }
    depositar(valor) {
        if (valor > 1000) {
            console.log('Depósito inválido');
        }
        else {
            super.depositar(valor);
        }
    }
}
class ContaPj extends Conta {
    cnpj;
    constructor(cnpj, titular, banco) {
        super(titular, banco);
        this.cnpj = cnpj;
    }
    info() {
        console.log('=====Tipo de conta PJ=====');
        super.info();
        console.log(`CNPJ: ${this.gerarCnpj()}`);
    }
    gerarCnpj() {
        return Math.floor(Math.random() * 10000000000000) + 1;
    }
    depositar(valor) {
        if (valor > 10000) {
            console.log('Depósito inválido');
        }
        else {
            super.depositar(valor);
        }
    }
}
const conta = new ContaPf(133, 'João', 'Banco do Brasil');
const conta2 = new ContaPj(3455674, 'Claiton', 'Banco black');
conta.depositar(1000);
conta2.depositar(4900);
console.log(conta.saldo());
console.log(conta2.saldo());
