import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContentRoutingModule} from "./content-routing.module";
import { ContentComponent } from './content.component';
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import { VisualizarRankingEspecificoComponent } from './visualizar-ranking-especifico/visualizar-ranking-especifico.component';
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {VotacaoComponent} from "./votacao/votacao.component";
import {MatRadioModule} from "@angular/material/radio";
import {FormsModule} from "@angular/forms";




@NgModule({
  declarations: [
    ContentComponent,
    VisualizarRankingEspecificoComponent,
    VotacaoComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    MatIconModule,
    MatTooltipModule,
    MatTableModule,
    MatButtonModule,
    MatRadioModule,
    FormsModule
  ]
})
export class ContentModule { }
