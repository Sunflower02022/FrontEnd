import {Produto} from "./Produto"
import {Setor} from "./Setor"

export class Categoria{
	public id: number;
	public nomeCategoria: string;
	public descricaoCategoria: string;
	public setor: Setor; // poder ser só enum
	public produto: Produto[];
}
