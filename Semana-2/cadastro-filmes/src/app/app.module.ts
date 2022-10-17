import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMaskModule } from 'ngx-mask';

import { AppComponent } from './app.component';
import { FormularioCadastroComponent } from './formulario-cadastro/formulario-cadastro.component';
import { ListaFilmesComponent } from './lista-filmes/lista-filmes.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioCadastroComponent,
    ListaFilmesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
