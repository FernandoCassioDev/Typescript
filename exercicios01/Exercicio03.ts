import readlinesync = require("readline-sync");

let inteiros: Set<number> = new Set<number>();
let cont = 10;

for (let i = 0; i < 10; i++) {
  inteiros.add(
    readlinesync.questionInt(`Digite ${cont--} numero(s) inteiro(s): `, {
      limitMessage: "Digite um numero valido",
    })
  );
}



console.table(inteiros)
