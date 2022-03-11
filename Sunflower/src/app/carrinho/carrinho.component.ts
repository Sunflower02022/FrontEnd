import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { AuthService } from '../service/auth.service';
import { CarrinhoService } from '../service/carrinho.service';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';


@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  produto: Produto = new Produto()
  categoria: Categoria = new Categoria()
  listaCompras = this.carrinho.listar();
  comprados = this.carrinho.listar();
  idProduto: number
  idCategoria: number

  constructor(
    private carrinho: CarrinhoService,
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){

    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }

    this.idProduto = this.route.snapshot.params['id']
    this.findByIdProduto(this.idProduto)

    let id = this.route.snapshot.params['id']
    this.findByIdProduto(id)
    // this.exibirProduto()
  }

  findByIdProduto(id:number){
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto)=> {
      this.produto = resp
    })
  }

  total() {
    return this.comprados.map((item) => item.preco).reduce((a, b) => a + b, 0);
  }

  finalizarCompra(){
    
    this.router.navigate(["/inicio"])
    alert("Sua compra foi finalizada com sucesso. Volte sempre!")
  }

  exibirProduto(){
    this.categoria.id =  this.idCategoria

    this.produtoService.getByIdProduto(this.idProduto).subscribe((resp: Produto)=>{
      this.produto = resp
      console.log(this.produto)
    })


  }

}
