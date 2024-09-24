import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContentComponent} from "./content.component";
import {
  VisualizarRankingEspecificoComponent
} from "./visualizar-ranking-especifico/visualizar-ranking-especifico.component";
import {VotacaoComponent} from "./votacao/votacao.component";

const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: ':id', component: VisualizarRankingEspecificoComponent },
  { path: 'votacao/:id', component: VotacaoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
