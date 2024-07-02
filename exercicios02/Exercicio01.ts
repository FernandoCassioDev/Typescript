//importa a lista e o readline
import { Queue } from "../interface/Queue";
import leia = require("readline-sync");

//variaveis globais
let fila = new Queue<string>(),
  continuar = true,
  entrada;

//executa o programa enquanto o usuario não digitar 0  
while (continuar) {
  //menu
  console.log("************************************");
  console.log("\n1- Adicionar clientes na fila");
  console.log("2 - Listar todos os clientes");
  console.log("3 - Retirar clientes da fila");
  console.log("0 - Sair");
  console.log("\n************************************");

  //lê a opção escolhida pelo o usuario
  entrada = leia.questionInt("Digite um numero do menu: ", {
    limitMessage: "Digite um valor valido!",
  });

  //realiza o procedimento que o usuario escolheu
  switch (entrada) {
    case 1:
      let nome = leia.question("Digite o nome: ", {
        limitMessage: "Digite um nome valido!",
      });

      fila.enqueue(nome);

      console.log("Fila: ");
      fila.printQueue();
      console.log("Cliente adicionado!");
      break;
    case 2:
      console.log("Lista de clientes na fila: ");
      fila.printQueue();
      break;
    case 3:
      if (fila.isEmpty()) {
        console.log("A fila está vazia");
      } else {
        fila.dequeue();

        console.log("Fila: ");
        fila.printQueue();
        console.log("Cliente retirado!");
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
