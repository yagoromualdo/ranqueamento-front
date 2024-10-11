import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TopicoService} from "../../services/topico-service";
import {TopicoModel} from "../models/topico.model";
import {StorageService} from "../../authentication/services/storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-criar-ranking',
  templateUrl: './criar-ranking.component.html',
  styleUrls: ['./criar-ranking.component.css']
})
export class CriarRankingComponent implements OnInit {

  form!: FormGroup;
  user: any;

  constructor(
    private fb: FormBuilder,
    private topicoService: TopicoService,
    private storageService: StorageService,
    private router: Router,
  ) {
    this.criarForm();
  }

  ngOnInit() {
    if(this.storageService.getUser() && this.storageService.getUser().id) {
      this.user = this.storageService.getUser();
    }
  }

  criarForm() {
    this.form = this.fb.group({
      tipo: ['1', [Validators.required]],
      nome: ['', [Validators.required]],
      categoria: ['1', [Validators.required]]
    });
  }

  salvar(): void {
    if (this.form.valid) {
      const topico: TopicoModel = {
        id: 0,
        idTipo: this.form.get('tipo')?.value,
        categoria: this.form.get('categoria')?.value,
        nome: this.form.get('nome')?.value,
        idUsuario: this.user.id
      }
      this.topicoService.salvar(topico).subscribe(res => {
        if (res && res.id) {
          this.router.navigate(['/ranking/', res.id]).then();
        } else {
          this.router.navigate(['/ranking']).then();
        }
      });
    }
  }

  cancelar() {
    this.router.navigate(['/ranking']).then();
  }

}
