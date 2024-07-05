export abstract class Pessoa {
    private _nome: string;

	constructor(nome: string) {
		this._nome = nome;
	}

    /**
     * Getter nome
     * @return {string}
     */
	public get nome(): string {
		return this._nome;
	}

    /**
     * Setter nome
     * @param {string} value
     */
	public set nome(value: string) {
		this._nome = value;
	}

    public visualizar(){
        console.log("\n******************************")
        console.log("\nDados do atleta")
        console.log("\n******************************")
        console.log(`\n${this._nome}`)
    }

    public abstract cansar(): void;

}