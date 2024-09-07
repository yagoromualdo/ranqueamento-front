import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TopicosListagemModel} from "../content/models/topicos-listagem.model";

const API_URL = 'http://localhost:8080/api/';

// const API_URL = 'https://ranqueamento-api-production.up.railway.app/api/';

@Injectable({
  providedIn: 'root'
})
export class TopicoService {
  constructor(private http: HttpClient) {}

  listar(): Observable<Array<TopicosListagemModel>> {
    return this.http.get<Array<TopicosListagemModel>>(API_URL + 'listar', {});
  }
}
