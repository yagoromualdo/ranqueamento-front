import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {TecnologiasModel} from "../content/models/tecnologias.model";

@Injectable({
  providedIn: 'root'
})
export class TecnologiasService {
  constructor(private http: HttpClient) {}

  apiUrl = environment.apiUrl;

  listar(tipo: number): Observable<Array<TecnologiasModel>> {
    return this.http.get<Array<TecnologiasModel>>(`${this.apiUrl}tecnologias/listar/${tipo}`);
  }
}
