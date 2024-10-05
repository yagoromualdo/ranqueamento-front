import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TopicosListagemModel} from "../content/models/topicos-listagem.model";
import {environment} from "../../environments/environment";
import {TopicoInfosGeralModel} from "../content/models/topico-infos-geral.model";
import {VotoModel} from "../content/models/voto.model";
import {TopicoModel} from "../content/models/topico.model";

@Injectable({
  providedIn: 'root'
})
export class TopicoService {
  constructor(private http: HttpClient) {}

  apiUrl = environment.apiUrl;

  salvar(topico: TopicoModel): Observable<TopicoModel> {
    return this.http.post<TopicoModel>(this.apiUrl + 'topico/salvar', topico);
  }

  listar(): Observable<Array<TopicosListagemModel>> {
    return this.http.get<Array<TopicosListagemModel>>(this.apiUrl + 'topico/listar', {});
  }

  buscarPorId(id: number): Observable<TopicoInfosGeralModel> {
    return this.http.get<TopicoInfosGeralModel>(`${this.apiUrl}topico/buscarPorId/${id}`);
  }

}
