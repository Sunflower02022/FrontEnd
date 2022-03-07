import {Produto} from "./Produto"

export class Usuario{
	public idUsuario: number;
	public nomeCompleto: string;
	public email: string;
	public senha: string;
	public tipo: string;
	public produto: Produto[];
}
