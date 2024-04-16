"use strict";
class Conta {
    saldo = 4.970;
    numero;
    titular;
    banco;
    constructor(numero, titular, banco) {
        this.numero = numero;
        this.titular = titular;
        this.banco = banco;
    }
    info() {
        console.log(`O saldo da conta é R$ ${this.saldo}`);
        console.log(`O número da conta é ${this.numero}`);
        console.log(`O nome do titular da conta é ${this.titular}`);
        console.log(`Sua agencia é ${this.banco}`);
    }
}
class ContaPf extends Conta {
}
class ContaPj extends Conta {
}
const conta = new ContaPf(123, 'João', 'Banco do Brasil');
const conta2 = new ContaPj(123, 'Cliton', 'Banco black');
conta.info();
console.log(conta2);
