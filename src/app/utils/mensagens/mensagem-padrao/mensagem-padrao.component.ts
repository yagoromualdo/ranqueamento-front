import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-mensagem-padrao',
  templateUrl: './mensagem-padrao.component.html',
  styleUrls: ['./mensagem-padrao.component.css']
})
export class MensagemPadraoComponent {

  constructor(
    public dialogRef: MatDialogRef<MensagemPadraoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

}
