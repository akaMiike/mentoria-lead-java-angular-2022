export class Filmes {
    nome: string = ""
    genero: string = ""
    dataLancamento: string = ""
  
    constructor(nome: string, genero: string, dataLancamento: string){
      this.nome = nome
      this.genero = genero
      this.dataLancamento = dataLancamento
    }
  }