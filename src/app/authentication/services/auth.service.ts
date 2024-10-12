import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../../environments/environment";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = environment.apiUrl + 'auth/';
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      this.apiUrl + 'signin',
      {
        username,
        password,
      },
      httpOptions
    );
  }

  register(username: string, apelido: string, email: string, password: string): Observable<any> {
    return this.http.post(
      this.apiUrl + 'signup',
      {
        username,
        apelido,
        email,
        password,
      },
      httpOptions
    );
  }

  logout(): Observable<any> {
    return this.http.post(this.apiUrl + 'signout', { }, httpOptions);
  }
}
