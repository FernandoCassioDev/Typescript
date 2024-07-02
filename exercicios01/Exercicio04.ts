import readlinesync = require("readline-sync");

const inteiros: Set<number> = new Set<number>([2, 5, 1, 3, 4, 9, 7, 8, 10, 6]);

let entrada = readlinesync.questionInt(
  "Digite o valor que deseja procurar na collection: ",
  { limitMessage: "Digite Fum valo valido" }
);

inteiros.has(entrada)
  ? console.log(`O número ${entrada} foi encontrado na collection!`)
  : console.log(`O número ${entrada} não foi encontrado na collection!`);
