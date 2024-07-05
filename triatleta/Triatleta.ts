import { Ciclista } from "./Ciclista";
import { Corredor } from "./Corredor";
import { Nadador } from "./Nadador";
import { Pessoa } from "./Pessoa";

export class Triatleta extends Pessoa implements Corredor, Ciclista, Nadador{

    constructor(nome: string){
        super(nome)
    }

    correr(): void {
        console.log("Atleta correndo...")
    }
    aquecer(): void {
        console.log("Atleta aquecendo...")
    }
    pedalar(): void {
        console.log("Atleta pedalando...")
    }
    
    nadar(): void {
        console.log("Atleta nadando...")
    }

    trotar(): void {
        console.log("Atleta trotando...")
    }

    public cansar(): void {
        console.log("cansou...")
    }
}