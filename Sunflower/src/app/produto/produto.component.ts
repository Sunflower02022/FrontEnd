import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { AuthService } from '../service/auth.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  listaResidencial: Produto[]
  listaIndustrial: Produto[]
  
  categoria = new Categoria()

  listaProdutos: Produto[]
  produto: Produto = new Produto()

  constructor(
    private router: Router,
    private authService: AuthService,
    private produtoService: ProdutoService
  ) { }

  ngOnInit() {

    
    this.getAllProdutos()

    this.separarProdutoIndustrial()

  }

  separarProdutoIndustrial(){
    for (let i = 1 ;i < this.listaProdutos.length; i ++){
      if(this.listaProdutos[i].categoria.setor == "INDUSTRIAL"){
        this.listaIndustrial.push(this.listaProdutos[i])
        console.log(this.listaProdutos[i])
      }

    }
    console.log("ok")
    console.log(this.listaIndustrial)
  }


  

  getAllProdutos() {
    this.produtoService.getAllProduto().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp
      console.log("ok2")
      console.log(this.listaIndustrial)
    })
  }

  cadastrarProduto() {
    this.produtoService.postProduto(this.produto).subscribe((resp: Produto) => {
      this.produto = resp
      alert('Produto cadastrado com sucesso!')
      this.getAllProdutos()
      this.produto = new Produto()
    })

  }

}
