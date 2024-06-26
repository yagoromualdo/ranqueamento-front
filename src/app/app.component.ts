import {Component, OnChanges, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {StorageService} from "./authentication/services/storage.service";
import {AuthService} from "./authentication/services/auth.service";
import {EventBusService} from "./authentication/shared/event-bus.service";
import {Router} from "@angular/router";
import {AppService} from "./services/app-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  eventBusSub?: Subscription;

  booleanSubscription: Subscription | undefined;
  booleanValue: boolean | undefined;

  constructor(
    private storageService: StorageService,
    private authService: AuthService,
    private eventBusService: EventBusService,
    private router: Router,
    private appService: AppService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }

    this.eventBusSub = this.eventBusService.on('logout', () => {
      this.logout();
    });

    this.booleanSubscription = this.appService.onBooleanChange().subscribe(value => {
      this.booleanValue = value;
    });
  }

  ngOnDestroy(): void {
    if (this.booleanSubscription) {
      this.booleanSubscription.unsubscribe();
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

  login() {
      this.router.navigate(['../login']).then(r => console.log('_'));
  }

}
