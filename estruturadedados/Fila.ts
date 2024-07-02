//FIFO

import { Queue } from "../interface/Queue";

const fila = new Queue<number>();

for (let i = 1; i <= 10; i++) {
  fila.enqueue(i); //adiciona elementos na fila
}

//mostra a fila
console.log("\nExibir todos os Elementos da fila: ");
fila.printQueue();

//remove o primeiro item da lista
console.log("\nRemover elementos: ", fila.dequeue());
fila.printQueue();

//exibe o primeiro elemento da fila
console.log("\nExibir o primeiro elemento da fila: ", fila.peek());

//verifica se algum elemento existe na fila
console.log("\nChecar se existe algum elemento na fila: ", fila.contains(4));

//esvazia a fila
console.log("\nEsvazia a fila: ", fila.clear());


//verifica se a lista está vazia
console.log("\nChecar se a fila está vazia: ", fila.isEmpty());