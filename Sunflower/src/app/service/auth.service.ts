import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
	  private http: HttpClient
  ) { }

  entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin>{
	  return this.http.post<UsuarioLogin>("https://ecommercesunflower.herokuapp.com/usuario/logar", usuarioLogin);
  }

   cadastrar(usuario: Usuario): Observable<Usuario>{
	  return this.http.post<Usuario>("https://ecommercesunflower.herokuapp.com/usuario/cadastrar", usuario);
  }

  logado(){
	  let ok: boolean = false;
	  if (environment.token != ""){
		  ok = true;
	  }
	return ok;
  }

  // getByTipoUsuario(tipo: string): Observable<Usuario>{
  //   return this.http.get<Usuario>("http://localhost:8080/usuario/tipo")
  // }

}
