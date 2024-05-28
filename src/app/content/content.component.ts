import { Component } from '@angular/core';


export interface ModelCardInfo {
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

  mudarTipoRanking() {
    this.porVotacao = !this.porVotacao;
  }

}
