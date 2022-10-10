import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() listaInicial!: string[];
  @Output() listaEncheu = new EventEmitter<string[]>();
  listaTarefas: string[] = [];
  tituloTarefa : string = "";
  indiceTarefaASerRemovida: number = -1;

  ngOnInit(): void {
    alert("Foram adicionadas " + this.listaInicial.length + " tarefas iniciais!")
    this.listaInicial.forEach((element) => {
      this.listaTarefas.push(element);
    })
  }

  setTarefa(event: any){
    this.tituloTarefa = event.target.value;
  }

  adicionarTarefaLista(){
    if(this.tituloTarefa == ""){
      alert("Titulo da tarefa não pode ser vazia!");
    }
    else if(this.listaTarefas.length === 10){
      alert("A lista está cheia, por favor, apague alguma tarefa antes de adicionar outra!");
    }
    else if(this.listaTarefas.indexOf(this.tituloTarefa) != -1){
      alert("Já existe uma tarefa com esta descrição!");
    }
    else{
      this.listaTarefas.push(this.tituloTarefa);
      this.tituloTarefa = "";
      this.listaEncheu.emit(this.listaTarefas);
    }
  }

  removerTarefa(event: any){
    var index: number = this.listaTarefas.indexOf(event.path[1].childNodes[0].data);
    this.listaTarefas.splice(index, 1);
  }

  subirTarefa(event: any){
    var index: number = this.listaTarefas.indexOf(event.path[1].childNodes[0].data);
    var temp: string = "";
    if(index > 0){
      temp = this.listaTarefas[index-1];
      this.listaTarefas[index-1] = this.listaTarefas[index];
      this.listaTarefas[index] = temp;
    }
  }

  descerTarefa(event: any){
    var index: number = this.listaTarefas.indexOf(event.path[1].childNodes[0].data);
    var temp: string = "";
    if(index < this.listaTarefas.length){
      temp = this.listaTarefas[index+1];
      this.listaTarefas[index+1] = this.listaTarefas[index];
      this.listaTarefas[index] = temp;
    }
  }

}
