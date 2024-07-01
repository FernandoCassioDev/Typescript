import readlinesync = require("readline-sync");

let numero1: number;
let numero2: number;

numero1 = readlinesync.questionFloat("Digite o primeiro numero: ", {
  limitMessage: "Digite um valor valido",
});

numero2 = readlinesync.questionFloat("Digite o primeiro numero: ", {
  limitMessage: "Digite um valor valido",
});

console.log(`\nSoma: ${numero1} + ${numero2} = ${numero1 + numero2}`);
console.log(`\nSoma: ${numero1} - ${numero2} = ${numero1 - numero2}`);
console.log(`\nSoma: ${numero1} * ${numero2} = ${numero1 * numero2}`);
console.log(`\nSoma: ${numero1} / ${numero2} = ${numero1 / numero2}`);
