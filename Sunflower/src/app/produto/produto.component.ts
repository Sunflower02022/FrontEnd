import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';
import { AuthService } from '../service/auth.service';
import { CarrinhoService } from '../service/carrinho.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  listaProdutos: Produto[]
  produto: Produto = new Produto()
  idProduto: number

  constructor(
    private router: Router,
    private authService: AuthService,
    private produtoService: ProdutoService,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit() {

    this.getAllProdutos()

  }

  getAllProdutos() {
    this.produtoService.getAllProduto().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp
    })
  }

  getByIdProduto(id:number){
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto)=> {
      this.produto = resp
      this.adicionarProduto()
    })
  }

  adicionarProduto(){
    this.carrinhoService.adicionar(this.produto)
    console.log(this.carrinhoService.produto)
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
