import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {TopicoService} from "../services/topico-service";
import {StorageService} from "../authentication/services/storage.service";


export interface ModelCardInfo {
  id: Number,
  titulo: String,
  iconPrimeiroLugar: String,
  primeiroLugar?: String,
  iconSegundoLugar?: String,
  segundoLugar?: String,
  iconTerceiroLugar?: String,
  terceiroLugar?: String,
  qtdVotos: Number,
  qtdComentarios: Number
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
  user: any;

  constructor(
    private router: Router,
    private topicoService: TopicoService,
    private storageService: StorageService,
  ) {
  }

  ngOnInit() {
    this.listaTopicos = this.listaExemplo;
    this.listarTopicos();
    if(this.storageService.getUser() && this.storageService.getUser().id) {
      this.user = this.storageService.getUser();
    }
  }

  listarTopicos() {

    this.topicoService.listar().subscribe(
      res => {
        this.listaTopicos = [];
        if(res.length > 1) {
          res.forEach(topicoListagem => {
            const topico: ModelCardInfo = {
              id: topicoListagem.topico.id,
              titulo: topicoListagem.topico.nome,
              iconPrimeiroLugar: topicoListagem.primeiroSegundoTerceiro.primeiro && topicoListagem.primeiroSegundoTerceiro.primeiro.icon
                ? 'assets/img-icons/' + topicoListagem.primeiroSegundoTerceiro.primeiro.icon
                : 'assets/img-icons/code.svg',
              primeiroLugar: topicoListagem.primeiroSegundoTerceiro.primeiro ?
                topicoListagem.primeiroSegundoTerceiro.primeiro.nome : 'Nenhum',
              iconSegundoLugar: topicoListagem.primeiroSegundoTerceiro.segundo && topicoListagem.primeiroSegundoTerceiro.segundo.icon
                ? 'assets/img-icons/' + topicoListagem.primeiroSegundoTerceiro.segundo.icon
                : 'assets/img-icons/code.svg',
              segundoLugar: topicoListagem.primeiroSegundoTerceiro.segundo ?
                topicoListagem.primeiroSegundoTerceiro.segundo.nome : 'Nenhum',
              iconTerceiroLugar: topicoListagem.primeiroSegundoTerceiro.terceiro && topicoListagem.primeiroSegundoTerceiro.terceiro.icon
                ? 'assets/img-icons/' + topicoListagem.primeiroSegundoTerceiro.terceiro.icon
                : 'assets/img-icons/code.svg',
              terceiroLugar: topicoListagem.primeiroSegundoTerceiro.terceiro ?



                topicoListagem.primeiroSegundoTerceiro.terceiro.nome : 'Nenhum',
              qtdVotos: topicoListagem.qtdVotos,
              qtdComentarios: topicoListagem.qtdComentarios ? topicoListagem.qtdComentarios : 0
            };
            this.listaTopicos.push(topico);
          })
        } else {
          this.listaTopicos = this.listaExemplo;
        }
      }
    )
  }


  mudarTipoRanking() {
    this.porVotacao = !this.porVotacao;
  }

  visualizarRank(id: Number) {
    this.router.navigate(['/ranking/', id]).then();
  }

  criarNovoTopico() {
    this.router.navigate(['/ranking/r/criar']).then();
  }
}
