import { Component, Input, OnInit } from '@angular/core';
import { Filmes } from '../model/filmes';

@Component({
  selector: 'app-lista-filmes',
  templateUrl: './lista-filmes.component.html',
  styleUrls: ['./lista-filmes.component.css']
})
export class ListaFilmesComponent implements OnInit {

  @Input() listaFilmesCadastrados!: Filmes[]

  ngOnInit(): void {
  }

}
