import { Component } from '@angular/core';
import { Contato } from './contato';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-adiciona-contato',
  imports: [CommonModule],
  templateUrl: './adiciona-contato.html',
  styleUrl: './adiciona-contato.scss'
})
export class AdicionaContato {
  contatos: Contato[]

  constructor() {
    this.contatos = []
  }

   adicionar(nm: string, em: string) {
     const novo = new Contato(nm)
     this.contatos.push(novo)
     console.log(this.contatos)
   }
}
