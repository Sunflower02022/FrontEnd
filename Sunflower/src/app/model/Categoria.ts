import {Produto} from "./Produto"


export class Categoria{
	public id: number;
	public nomeCategoria: string;
	public descricaoCategoria: string;
	public setor: string; // poder ser só enum
	public produto: Produto[];
}
