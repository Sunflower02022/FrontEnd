import { Injectable } from '@angular/core';
import { Produto } from '../model/Produto';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  produto: Produto[] = [];

  constructor() {}

  adicionar(produto: Produto) {
    this.produto.push(produto);
  }

  listar() {
    return this.produto;
  }

  limpar() {
    this.produto = [];
    return this.produto;
  }

}