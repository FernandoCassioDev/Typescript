import readlinesync = require("readline-sync");

let numero1: number;
let numero2: number;

numero1 = readlinesync.questionFloat("Digite o primeiro numero: ", {
  limitMessage: "Digite um valor valido",
});

numero2 = readlinesync.questionFloat("Digite o segundo numero: ", {
  limitMessage: "Digite um valor valido",
});


console.log(`\nSoma: ${somar(numero1, numero2)}`);
console.log(`\nSubtração: ${subtrair(numero1, numero2)}`);
console.log(`\nMultiplicação: ${multiplicar(numero1, numero2)}`);

let resultadoDivisao = dividir(numero1, numero2)

if(resultadoDivisao){
    console.log(`\nDivisão: ${dividir(numero1, numero2)}`);
}else{
    console.log(`\nNão existe divisão por zero!`);
}
autor()

function somar(numero1: number, numero2: number): number{
    return numero1 + numero2
}

function subtrair(numero1: number, numero2: number): number{
    return numero1 - numero2
}

function multiplicar(numero1: number, numero2: number): number{
    return numero1 * numero2
}

function dividir(numero1: number, numero2: number): number | null{
    let divisao = numero1 / numero2
    return (divisao != Infinity? divisao : null)
}

function autor(): void{
    console.log("Feito por Fernando")
}