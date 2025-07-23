import { Component } from '@angular/core';
import { Contato, TipoContato } from './contato';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-adiciona-contato',
  imports: [CommonModule],
  templateUrl: './adiciona-contato.html',
  styleUrl: './adiciona-contato.scss'
})
export class AdicionaContato {
  contatos: Contato[]
  tipos: string[]

  constructor() {
    this.contatos = []
    this.tipos = Object.values(TipoContato)
  }

   adicionar(nm: string, tp: string) {
     const novo = new Contato(nm, this.getTipo(tp))
     this.contatos.push(novo)
     console.log(this.contatos)
   }
   getTipo(txt: string) {
    if (txt === TipoContato.AMIGO) {
      return TipoContato.AMIGO
    } else if (txt === TipoContato.FAMILIA) {
      return TipoContato.FAMILIA
    } else if (txt === TipoContato.IFRN) { 
      return TipoContato.IFRN
    } else if (txt === TipoContato.TRAB) {
      return TipoContato.TRAB
    }
    return TipoContato.OUTRO
   }
}
