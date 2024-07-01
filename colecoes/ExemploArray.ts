import readlinesync = require("readline-sync");

const numeros: Array<number> = new Array<number>();

numeros.push(7);
numeros.push(5);
numeros.push(1);
numeros.push(7);

// numeros.push(
//   readlinesync.questionFloat("Digite um numero: ", {
//     limitMessage: "Digite um valor valido",
//   })
// );

numeros.unshift(2.5, 3.6, 8);

for (let numero of numeros) console.log(numero);
console.log(numeros);

console.log(`\nA posição do elemento 5 é: ${numeros.indexOf(5)}`);
console.log(`\nA posição do elemento 5 é: ${numeros.indexOf(50)}`);
console.log(`\nA posição do elemento 5 é: ${numeros.indexOf(7)}`);

console.log(`\nExiste no array o elemento 5: ${numeros.includes(5)}`);

//atualização de valor
numeros[numeros.indexOf(5)] = 10;

console.table(numeros);

//apagar um valor
numeros.splice(numeros.indexOf(10), 1)

console.table(numeros);
