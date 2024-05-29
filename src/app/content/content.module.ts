import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContentRoutingModule} from "./content-routing.module";
import { ContentComponent } from './content.component';
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import { VisualizarRankingEspecificoComponent } from './visualizar-ranking-especifico/visualizar-ranking-especifico.component';



@NgModule({
  declarations: [
    ContentComponent,
    VisualizarRankingEspecificoComponent
  ],
    imports: [
        CommonModule,
        ContentRoutingModule,
        MatIconModule,
        MatTooltipModule
    ]
})
export class ContentModule { }
