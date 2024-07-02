import leia = require("readline-sync");
import { Stack } from "../interface/Stack";

let pilha = new Stack<string>(),
  continuar = true,
  entrada;

while (continuar == true) {
  console.log("************************************");
  console.log("\n1- Adicionar um novo livro na pilha");
  console.log("2 - Listar todos os livros da Pilha");
  console.log("3 - Retirar um livro da pilha");
  console.log("0 - Sair");
  console.log("\n************************************");

  entrada = leia.questionInt("Digite um numero do menu: ", {
    limitMessage: "Digite um valor valido!",
  });

  switch (entrada) {
    case 1:
      let nome = leia.question("Digite o nome do livro: ", {
        limitMessage: "Digite um nome valido!",
      });

      pilha.push(nome);

      console.log("Pilha: ");
      pilha.printStack();
      console.log("Livro adicionado!");
      break;
    case 2:
      console.log("Lista de livros na pilha: ");
      pilha.printStack();
      break;
    case 3:
      if (pilha.isEmpty()) {
        console.log("A pilha está vazia");
      } else {
        pilha.pop();
        console.log("pilha: ");
        pilha.printStack();
        console.log("Livro retirado!");
      }
      break;
    case 0:
      console.log("Programa finalizado!");
      continuar = false;
      break;
    default:
      console.log("Digite uma opção valida!");
      break;
  }
}
