import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-mensagem-padrao',
  templateUrl: './mensagem-padrao.component.html',
  styleUrls: ['./mensagem-padrao.component.css']
})
export class MensagemPadraoComponent {

  backgroundColor = '#4caf50';

  constructor(
    public dialogRef: MatDialogRef<MensagemPadraoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if(this.data && this.data.tipo) {
      if(this.data.tipo == 'sucesso') {
        this.backgroundColor = '#4caf50';
      } else if(this.data.tipo == 'alerta') {
        this.backgroundColor = '#e7ba00';
      }
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
