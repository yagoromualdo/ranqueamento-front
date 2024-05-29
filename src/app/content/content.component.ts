import { Component } from '@angular/core';
import {Router} from "@angular/router";


export interface ModelCardInfo {
  id: number,
  titulo: string,
  iconPrimeiroLugar: string,
  primeiroLugar: string,
  iconSegundoLugar: string,
  segundoLugar: string,
  iconTerceiroLugar: string,
  terceiroLugar: string,
  qtdVotos: number,
  qtdComentarios: number
}
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  listaExemplo: ModelCardInfo[] = [
    {
      id: 1,
      titulo: 'Melhor linguagem para trabalhar com IA',
      iconPrimeiroLugar: 'code',
      primeiroLugar: 'Linguagem A',
      iconSegundoLugar: 'code',
      segundoLugar: 'Linguagem B',
      iconTerceiroLugar: 'code',
      terceiroLugar: 'Linguagem C',
      qtdVotos: 30,
      qtdComentarios: 10
    },
    {
      id: 2,
      titulo: 'Melhor linguagem para trabalhar com IA',
      iconPrimeiroLugar: 'code',
      primeiroLugar: 'Linguagem A',
      iconSegundoLugar: 'code',
      segundoLugar: 'Linguagem B',
      iconTerceiroLugar: 'code',
      terceiroLugar: 'Linguagem C',
      qtdVotos: 30,
      qtdComentarios: 10
    },
    {
      id: 3,
      titulo: 'Melhor linguagem para trabalhar com IA',
      iconPrimeiroLugar: 'code',
      primeiroLugar: 'Linguagem A',
      iconSegundoLugar: 'code',
      segundoLugar: 'Linguagem B',
      iconTerceiroLugar: 'code',
      terceiroLugar: 'Linguagem C',
      qtdVotos: 30,
      qtdComentarios: 10
    },
    {
      id: 4,
      titulo: 'Melhor linguagem para trabalhar com IA',
      iconPrimeiroLugar: 'code',
      primeiroLugar: 'Linguagem A',
      iconSegundoLugar: 'code',
      segundoLugar: 'Linguagem B',
      iconTerceiroLugar: 'code',
      terceiroLugar: 'Linguagem C',
      qtdVotos: 30,
      qtdComentarios: 10
    },
    {
      id: 5,
      titulo: 'Melhor linguagem para trabalhar com IA',
      iconPrimeiroLugar: 'code',
      primeiroLugar: 'Linguagem A',
      iconSegundoLugar: 'code',
      segundoLugar: 'Linguagem B',
      iconTerceiroLugar: 'code',
      terceiroLugar: 'Linguagem C',
      qtdVotos: 30,
      qtdComentarios: 10
    },
    {
      id: 6,
      titulo: 'Melhor linguagem para trabalhar com IA',
      iconPrimeiroLugar: 'code',
      primeiroLugar: 'Linguagem A',
      iconSegundoLugar: 'code',
      segundoLugar: 'Linguagem B',
      iconTerceiroLugar: 'code',
      terceiroLugar: 'Linguagem C',
      qtdVotos: 30,
      qtdComentarios: 10
    },
    {
      id: 7,
      titulo: 'Melhor linguagem para trabalhar com IA',
      iconPrimeiroLugar: 'code',
      primeiroLugar: 'Linguagem A',
      iconSegundoLugar: 'code',
      segundoLugar: 'Linguagem B',
      iconTerceiroLugar: 'code',
      terceiroLugar: 'Linguagem C',
      qtdVotos: 30,
      qtdComentarios: 10
    },
    {
      id: 8,
      titulo: 'Melhor linguagem para trabalhar com IA',
      iconPrimeiroLugar: 'code',
      primeiroLugar: 'Linguagem A',
      iconSegundoLugar: 'code',
      segundoLugar: 'Linguagem B',
      iconTerceiroLugar: 'code',
      terceiroLugar: 'Linguagem C',
      qtdVotos: 30,
      qtdComentarios: 10
    },
  ];

  porVotacao: boolean = true;

  constructor(
    private router: Router,
  ) {
  }

  mudarTipoRanking() {
    this.porVotacao = !this.porVotacao;
  }

  visualizarRank(id: number) {
    this.router.navigate(['/ranking/', id]).then();
  }

}
