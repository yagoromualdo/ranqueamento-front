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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CriarRankingComponent } from './criar-ranking/criar-ranking.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";




@NgModule({
  declarations: [
    ContentComponent,
    VisualizarRankingEspecificoComponent,
    VotacaoComponent,
    CriarRankingComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    MatIconModule,
    MatTooltipModule,
    MatTableModule,
    MatButtonModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
  ]
})
export class ContentModule { }
