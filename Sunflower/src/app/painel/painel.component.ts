import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

	listaProduto: Produto[]
  produto: Produto = new Produto()

  categoria: Categoria = new Categoria()
  usuario: Usuario
  listaCategorias: Categoria[]
  idCategoria: number
  // usuario: Usuario = new Usuario()

  constructor(
	private router: Router,
    private cadastroProdutoService: ProdutoService,
    private categoriaService: CategoriaService,
    // private authService: AuthService
  ) { }

  ngOnInit(): void {

    if (environment.token == '') {
		this.router.navigate(['/entrar'])
	  }

    // this.findByTipoUsuario()

    // if(environment.tipo != 'adm'){
    //   alert('Você precisa ser administrador para acessar o painel de controle!')
    //   this.router.navigate(['/inicio'])
    //   console.log(environment.tipo)
    // }

    this.findAllProduto()
    this.findAllCategoria()
  }

  findAllCategoria(){
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) => {
      this.listaCategorias = resp
    })
  }

  findByIdCategoria(){
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categoria)=>{
     this.categoria = resp
    })
  }

  findAllProduto() {
    this.cadastroProdutoService.getAllProduto().subscribe((resp: Produto[]) => {
      this.listaProduto = resp
    })
  }

  // findByTipoUsuario(){
  //   this.authService.getByTipoUsuario(this.usuario.tipo).subscribe((resp: Usuario)=> {
  //     this.usuario = resp
  //   })
  // }

}
