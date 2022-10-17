import { Component } from '@angular/core';
import { Filmes } from './model/filmes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cadastro-filmes'

  listaFilmes: Filmes[] = []
  
  cadastrarFilme(filme: Filmes){
    this.listaFilmes.push(filme)
  }
}
