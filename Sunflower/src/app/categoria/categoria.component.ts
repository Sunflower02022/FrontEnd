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
  setor: string
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

  tipoSetor(event: any){
    this.setor = event.target.value
    
  }

  getAllCategoria() {
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) => {
      this.listaCategorias = resp
    })
  }

  cadastrarCategoria() {
      console.log(this.setor)
      this.categoria.setor = this.setor
      this.categoria.setor = this.categoria.setor
      this.categoriaService.postCategoria(this.categoria).subscribe((resp: Categoria) => {
      this.categoria = resp
      alert('Categoria cadastrada com sucesso!')
      this.getAllCategoria()
      this.categoria = new Categoria()
      this.setor = ""
      this.router.navigate(['/painel'])
    })

  }

}
