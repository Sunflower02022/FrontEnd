import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { environment } from 'src/environments/environment.prod';


@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

	usuarioLogin: UsuarioLogin = new UsuarioLogin();

  constructor(
	  private router: Router,
	  private auth: AuthService
  ) { }

  ngOnInit(){
	  window.scroll(0,0)
  }

  entrar(){
	  this.auth.entrar(this.usuarioLogin).subscribe((resp: UsuarioLogin) => {
		  this.usuarioLogin = resp;
		  environment.token = this.usuarioLogin.token,
		  environment.nomeCompleto = this.usuarioLogin.nomeCompleto;
		  environment.idUsuario = this.usuarioLogin.idUsuario,
		  environment.email = this.usuarioLogin.email,

		  this.router.navigate(["/inicio"])
	  }, erro => {
		  if(erro.status == 500 || erro.status == 401){
			  alert("Usuario ou senha incorreta!")
		  }
	  })
  }

}
