import {Component, OnInit} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {TopicoService} from "../../services/topico-service";
import {ActivatedRoute, Router} from "@angular/router";
import {TopicoInfosGeralModel} from "../models/topico-infos-geral.model";
import {TecnologiasModel} from "../models/tecnologias.model";
import {TopicoModel} from "../models/topico.model";
import {StorageService} from "../../authentication/services/storage.service";

export interface PeriodicElement {
  posicao: number;
  icon: string;
  nome: string;
  votos: number;
  porcentagem: string;
  comentarioAFavor: number;
  comentarioContra: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {posicao: 1, icon: 'code', nome: 'Linguagem A', votos: 16, porcentagem: '19,51%', comentarioAFavor: 7, comentarioContra: 0},
  {posicao: 2, icon: 'code', nome: 'Linguagem A',votos: 14, porcentagem: '17,07%', comentarioAFavor: 4, comentarioContra: 1},
  {posicao: 3, icon: 'code', nome: 'Linguagem A',votos: 11, porcentagem: '13,41%', comentarioAFavor: 3, comentarioContra: 0},
  {posicao: 4, icon: 'code', nome: 'Linguagem A', votos: 10, porcentagem: '12,20%', comentarioAFavor: 2, comentarioContra: 2},
  {posicao: 5, icon: 'code', nome: 'Linguagem A', votos: 8, porcentagem: '--,--%', comentarioAFavor: 2, comentarioContra: 2},
  {posicao: 6, icon: 'code', nome: 'Linguagem A', votos: 7, porcentagem: '--,--%', comentarioAFavor: 0, comentarioContra: 0},
  {posicao: 7, icon: 'code', nome: 'Linguagem A', votos: 6, porcentagem: '--,--%', comentarioAFavor: 1, comentarioContra: 3},
  {posicao: 8, icon: 'code', nome: 'Linguagem A', votos: 5, porcentagem: '--,--%', comentarioAFavor: 1, comentarioContra: 2},
  {posicao: 9, icon: 'code', nome: 'Linguagem A', votos: 3, porcentagem: '--,--%', comentarioAFavor: 0, comentarioContra: 4},
  {posicao: 10, icon: 'code', nome: 'Linguagem A', votos: 2, porcentagem: '--,--%', comentarioAFavor: 0, comentarioContra: 4},
];

@Component({
  selector: 'app-visualizar-ranking-especifico',
  templateUrl: './visualizar-ranking-especifico.component.html',
  styleUrls: ['./visualizar-ranking-especifico.component.css']
})
export class VisualizarRankingEspecificoComponent implements OnInit {

  id: any;
  displayedColumns: string[] = ['posicao', 'icon', 'nome', 'qtdVotos', 'porcentagem', 'comentarioAFavor', 'comentarioContra'];
  dataSourceT = ELEMENT_DATA;
  topicoInfo: TopicoInfosGeralModel = {};
  dataSource: TecnologiasModel[] | undefined = [];
  user: any;

  constructor(
    private topicoService: TopicoService,
    private route: ActivatedRoute,
    private router: Router,
    private storageService: StorageService,
  ) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.fazerConsultasIniciais();
    if(this.storageService.getUser() && this.storageService.getUser().id) {
      this.user = this.storageService.getUser();
    }
  }

  fazerConsultasIniciais() {
    if(this.id) {
      this.topicoService.buscarPorId(this.id).subscribe(res => {
        this.topicoInfo = res;
        this.dataSource = res.tecnologias;
      });
    }
  }

  votacao(id: Number) {
    this.router.navigate(['/ranking/votacao/', id]).then();
  }
}
