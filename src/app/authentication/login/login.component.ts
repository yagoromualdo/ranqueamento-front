import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {StorageService} from "../services/storage.service";
import {Router} from "@angular/router";
import {AppService} from "../../services/app-service";
import {MatDialog} from "@angular/material/dialog";
import {MensagemPadraoComponent} from "../../utils/mensagens/mensagem-padrao/mensagem-padrao.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnChanges {

  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  @Input() mostrarSucessoCadastro: boolean = false;

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router,
    private appService: AppService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['mostrarSucessoCadastro'] && changes['mostrarSucessoCadastro'].currentValue) {
      const dialogRef = this.dialog.open(MensagemPadraoComponent, {
        data: {message: 'Usuário cadastrado com sucesso!', tipo: 'sucesso'},
        position: {bottom: '0px'},
        panelClass: 'custom-dialog'
      });

      setTimeout(() => {
        dialogRef.close();
      }, 5000);
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe({
      next: data => {
        this.storageService.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
        this.login();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }

  login() {
    if (this.isLoggedIn) {
      this.router.navigate(['../ranking']).then(r => console.log('_'));
      this.appService.emitBoolean(true);  // ou false, dependendo do caso
    }
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();

        window.location.reload();
      },
      error: err => {
        console.log(err);
      }
    });
  }

}
