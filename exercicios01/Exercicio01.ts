import readlinesync = require("readline-sync");

let cores: Array<string> = new Array<string>();

for (let i = 0; i < 5; i++) {
  cores.push(
    readlinesync.question("Digite uma cor: ", {
      limitMessage: "Digite uma cor valida!",
    })
  );
}

console.table(cores);
console.log(cores.sort().join(", "));
