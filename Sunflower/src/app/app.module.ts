import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { SobreComponent } from './sobre/sobre.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InicioComponent } from './inicio/inicio.component';
import { ProdutoComponent } from './produto/produto.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { PainelComponent } from './painel/painel.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { ProdutoDeleteComponent } from './delete/produto-delete/produto-delete.component';
import { CategoriaDeleteComponent } from './delete/categoria-delete/categoria-delete.component';
import { ProdutoEditComponent } from './edit/produto-edit/produto-edit.component';
import { CategoriaEditComponent } from './edit/categoria-edit/categoria-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    EntrarComponent,
    CadastrarComponent,
    SobreComponent,
    InicioComponent,
    ProdutoComponent,
    CategoriaComponent,
    PainelComponent,
    CadastroProdutoComponent,
    ProdutoDeleteComponent,
    CategoriaDeleteComponent,
    ProdutoEditComponent,
    CategoriaEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule,
	FormsModule
  ],
  providers: [{
	  provide:LocationStrategy,
	  useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
