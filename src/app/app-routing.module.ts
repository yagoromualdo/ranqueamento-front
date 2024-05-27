import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./authentication/home/home.component";
import {LoginComponent} from "./authentication/login/login.component";
import {RegisterComponent} from "./authentication/register/register.component";
import {ProfileComponent} from "./authentication/profile/profile.component";
import {BoardUserComponent} from "./authentication/board-user/board-user.component";
import {BoardModeratorComponent} from "./authentication/board-moderator/board-moderator.component";
import {BoardAdminComponent} from "./authentication/board-admin/board-admin.component";
import {AuthenticationComponent} from "./authentication/authentication.component";

const routes: Routes = [

  { path: 'login', component: AuthenticationComponent },
  { path: 'ranking', loadChildren: () => import('./content/content.module').then(m => m.ContentModule) },
  { path: '', redirectTo: 'ranking', pathMatch: 'full' },
  // { path: 'home', component: HomeComponent },
  // { path: 'register', component: AuthenticationComponent },
  // { path: 'profile', component: ProfileComponent },
  // { path: 'user', component: BoardUserComponent },
  // { path: 'mod', component: BoardModeratorComponent },
  // { path: 'admin', component: BoardAdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
