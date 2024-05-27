import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContentRoutingModule} from "./content-routing.module";
import { ContentComponent } from './content.component';
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    ContentComponent
  ],
    imports: [
        CommonModule,
        ContentRoutingModule,
        MatIconModule
    ]
})
export class ContentModule { }
