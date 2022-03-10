import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  listaCompras = this.carrinho.listar();
  comprados = this.carrinho.listar();
  idProduto: number

  constructor(
    private carrinho: CarrinhoService,
    private produtoService: ProdutoService,
    private categoria: CategoriaService,
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    this.idProduto = this.route.snapshot.params['id']
    this.findByIdProduto(this.idProduto)
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

}
