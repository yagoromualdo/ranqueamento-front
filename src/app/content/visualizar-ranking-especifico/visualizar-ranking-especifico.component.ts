import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

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
  {posicao: 1, icon: 'code', nome: 'Linguagem A', votos: 16, porcentagem: '--,--%', comentarioAFavor: 7, comentarioContra: 0},
  {posicao: 2, icon: 'code', nome: 'Linguagem A',votos: 14, porcentagem: '--,--%', comentarioAFavor: 4, comentarioContra: 1},
  {posicao: 3, icon: 'code', nome: 'Linguagem A',votos: 11, porcentagem: '--,--%', comentarioAFavor: 3, comentarioContra: 0},
  {posicao: 4, icon: 'code', nome: 'Linguagem A', votos: 10, porcentagem: '--,--%', comentarioAFavor: 2, comentarioContra: 2},
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
export class VisualizarRankingEspecificoComponent {

  displayedColumns: string[] = ['posicao', 'icon', 'nome', 'votos', 'porcentagem', 'comentarioAFavor', 'comentarioContra'];
  dataSource = ELEMENT_DATA;

  titlePage = "Melhor linguagem para trabalhar com IA";

}
