import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  porVotacao: boolean = true;

  mudarTipoRanking() {
    this.porVotacao = !this.porVotacao;
  }

}
