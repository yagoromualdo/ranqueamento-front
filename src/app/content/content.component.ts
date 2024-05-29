import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {TopicoService} from "../services/topico-service";


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
export class ContentComponent implements OnInit {

  listaExemplo: ModelCardInfo[] = [
    {
      id: 1,
      titulo: 'Melhor linguagem para desenvolvimento de jogos',
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
      titulo: 'Melhor SGBD NoSQL',
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
      titulo: 'Melhor framework para desenvolvimento de aplicações desktop',
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
      titulo: 'Melhor framework para automação de testes',
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
      titulo: 'Melhor biblioteca para manipulação de dados em Python',
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
      titulo: 'Melhor biblioteca para animações em JavaScript',
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
      titulo: 'Melhor biblioteca para desenvolvimento de interfaces gráficas em Python',
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
      titulo: 'Melhor SGBD para aplicações móveis',
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

  listaTopicos: ModelCardInfo[] = [];

  constructor(
    private router: Router,
    private topicoService: TopicoService
  ) {
  }

  ngOnInit() {
    this.listaTopicos = this.listaExemplo;
    this.listarTopicos();
  }

  listarTopicos() {

    this.topicoService.listar().subscribe(
      res => {
        console.log(res);
        this.listaTopicos = []; // Reset the list to avoid appending to old data
        if(res.length > 1) {
          for (let i = 0; i < res.length; i++) {
            const topico: ModelCardInfo = {
              id: 1,
              titulo: res[i].nome,
              iconPrimeiroLugar: 'code',
              primeiroLugar: 'Tecnologia A',
              iconSegundoLugar: 'code',
              segundoLugar: 'Tecnologia B',
              iconTerceiroLugar: 'code',
              terceiroLugar: 'Tecnologia C',
              qtdVotos: 30,
              qtdComentarios: 10
            };
            this.listaTopicos.push(topico);
          }
        } else {
          this.listaTopicos = this.listaExemplo;
        }
      }
    )
  }


  mudarTipoRanking() {
    this.porVotacao = !this.porVotacao;
  }

  visualizarRank(id: number) {
    this.router.navigate(['/ranking/', id]).then();
  }

}
