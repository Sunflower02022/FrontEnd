import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { AuthService } from '../service/auth.service';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  listaCategorias: Categoria[]
  categoria: Categoria = new Categoria()
  idCategoria: number

  constructor(
    private router: Router,
    private authService: AuthService,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit() {
    this.getAllCategoria()

    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }
  }

  getAllCategoria() {
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) => {
      this.listaCategorias = resp
    })
  }

  cadastrarCategoria() {
    this.categoriaService.postCategoria(this.categoria).subscribe((resp: Categoria) => {
      this.categoria = resp
      alert('Categoria cadastrada com sucesso!')
      this.getAllCategoria()
      this.categoria = new Categoria()
    })

  }

}
