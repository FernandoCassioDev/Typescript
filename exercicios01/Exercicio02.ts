import readlinesync = require("readline-sync");

const inteiros: Array<number> = new Array<number>(2, 5, 1, 3, 4, 9, 7, 8, 10, 6);

let entrada = readlinesync.questionInt(
  "Digite o valor que deseja procurar na collection: ",
  { limitMessage: "Digite um valo valido" }
);

inteiros.indexOf(entrada) != -1 
? console.log(`O número ${entrada} está localizado na posição ${inteiros.indexOf(entrada)}`) 
: console.log(`O número ${entrada} não foi encontrado na collection!`)
