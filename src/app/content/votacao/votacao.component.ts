import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TecnologiasService} from "../../services/tecnologias-service";
import {TecnologiasModel} from "../models/tecnologias.model";
import {TopicoInfosGeralModel} from "../models/topico-infos-geral.model";
import {TopicoService} from "../../services/topico-service";
import {StorageService} from "../../authentication/services/storage.service";
import {VotoModel} from "../models/voto.model";
import {VotosService} from "../../services/votos-service";

@Component({
  selector: 'app-votacao',
  templateUrl: './votacao.component.html',
  styleUrls: ['./votacao.component.css']
})
export class VotacaoComponent implements OnInit{

  idTopico: any;
  tecnologias: TecnologiasModel[] = [];
  topicoInfo: TopicoInfosGeralModel = {};
  selectedTecnologia: any = null;
  user: any;
  tecnologiaVotada: any;

  constructor(
    private route: ActivatedRoute,
    private tecnologiasService: TecnologiasService,
    private topicoService: TopicoService,
    private storageService: StorageService,
    private votosService: VotosService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.idTopico = this.route.snapshot.paramMap.get('id');
    this.fazerConsultasIniciais();
    if(this.storageService.getUser() && this.storageService.getUser().id) {
      this.user = this.storageService.getUser();
    }
  }

  fazerConsultasIniciais() {
    if(this.idTopico) {

      this.topicoService.buscarPorId(this.idTopico).subscribe(res => {
        this.topicoInfo = res;

        if (res.topico && res.topico.idTipo) {
          this.tecnologiasService.listar(res.topico.idTipo).subscribe(tec => {
            this.tecnologias = tec;

            const voto: VotoModel = {
              idTopico: Number(this.idTopico),
              idTecnologia: undefined,
              idUsuario: this.user.id
            };
            this.votosService.obterVotoPorTopicoEUsuario(voto).subscribe(vot => {
              if (vot && vot.idTecnologia) {
                this.selectedTecnologia = vot.idTecnologia;
              }
            });
          });
        }
      });
    }
  }

  votar() {
    if(this.selectedTecnologia && this.user && this.user.id && this.idTopico) {
      const voto: VotoModel = {
        idTopico: Number(this.idTopico),
        idTecnologia: this.selectedTecnologia,
        idUsuario: this.user.id
      };
      this.votosService.votar(voto).subscribe(res => {
        this.router.navigate(['/ranking/', this.idTopico]).then();
      });
    }
  }

  cancelar() {
    this.router.navigate(['/ranking/', this.idTopico]).then();
  }
}
