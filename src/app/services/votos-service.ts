import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {VotoModel} from "../content/models/voto.model";

@Injectable({
  providedIn: 'root'
})
export class VotosService {

  constructor(private http: HttpClient) {}

  apiUrl = environment.apiUrl;

  votar(voto: VotoModel): Observable<VotoModel> {
    return this.http.post<VotoModel>(this.apiUrl + 'votacao/votar', voto);
  }

  obterVotoPorTopicoEUsuario(voto: VotoModel): Observable<VotoModel> {
    return this.http.post<VotoModel>(this.apiUrl + 'votacao/obterVotoPorTopicoEUsuario', voto);
  }
}
