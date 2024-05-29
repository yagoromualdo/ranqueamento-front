import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

// const API_URL = 'http://localhost:8080/api/test/';

const API_URL = 'https://ranqueamento-api-production.up.railway.app/api/test/';

@Injectable({
  providedIn: 'root'
})
export class TopicoService {
  constructor(private http: HttpClient) {}

  listar(): Observable<any> {
    return this.http.get(API_URL + 'listar', {});
  }
}
