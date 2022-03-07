import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {

  listaProduto: Produto[]
  produto: Produto = new Produto()

  constructor(
    private router: Router,
    private cadastroProdutoService: ProdutoService,
  ) { }

  ngOnInit(){

    // if(environment.token == ''){
    //   this.router.navigate(['/entrar'])
    }

    findAllProduto(){
      this.cadastroProdutoService.getAllProduto().subscribe((resp: Produto[]) =>{
        this.listaProduto = resp
      })
    }
  
    cadastrar(){
      this.cadastroProdutoService.postProduto(this.produto).subscribe((resp: Produto) =>{
        this.produto = resp
        alert('Produto cadastrado com sucesso!')
        this.findAllProduto()
        this.produto = new Produto
      })
    }

}
