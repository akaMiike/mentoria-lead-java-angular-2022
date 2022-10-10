import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  exibirAlerta(valorAtualizado: number){
    if(valorAtualizado % 7 === 0){
      alert("Multiplo de 7");
    }
  }

  listaCheia(listaTarefas: string[]){
    if(listaTarefas.length === 10){
      alert("A lista está cheia!");
    }
  }
  
}
