import { Automovel } from "./Automovel";
import { Terrestre } from "./Terrestre";
import { Transporte } from "./Transporte";

const t1: Transporte = new Transporte(5)
t1.visualizar();

console.log("\n")

const tr1: Terrestre = new Terrestre(5, 4, 250);
tr1.visualizar()

console.log("\n")

const aut1: Automovel = new Automovel("Verde", 4, "280", 5, 5, 4, 130)
aut1.visualizar()