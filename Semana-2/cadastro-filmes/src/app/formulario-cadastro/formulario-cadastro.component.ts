import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomDateValidation } from '../model/custom-date-validation';
import { Filmes } from '../model/filmes';

@Component({
  selector: 'app-formulario-cadastro',
  templateUrl: './formulario-cadastro.component.html',
  styleUrls: ['./formulario-cadastro.component.css']
})
export class FormularioCadastroComponent implements OnInit {

  @Output() formularioEnviado = new EventEmitter<Filmes>();
  formulario = new FormGroup({
    titulo: new FormControl('', [Validators.required,Validators.maxLength(24)]),
    dataLancamento: new FormControl('', [Validators.required, CustomDateValidation.validDate('dataLancamento')]),
    generoSelecionado: new FormControl(null, [Validators.required])
  });

  listaGeneros: string[] = ["Ação","Ficção Científica", "Terror", "Outros"]

  salvarFilme(){
    console.log(this.formulario.value);
    this.formularioEnviado.emit(new Filmes(
      this.formulario.value.titulo!,
      this.formulario.value.generoSelecionado!,
      this.formulario.value.dataLancamento!
    ))
  }

  ngOnInit(): void {
  }

}
