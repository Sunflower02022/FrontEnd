import {Categoria} from "./Categoria"
import {Usuario} from "./Usuario"

	export class Produto{
  push(produto: Produto) {
    throw new Error('Method not implemented.');
  }
	public id: number;
	public nome: string;
	public preco: number;
	public descricao: string;
	public categoria: Categoria;
	public usuario: Usuario;
	public foto: string;
	
}
