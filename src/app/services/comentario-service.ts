import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {TopicoModel} from "../content/models/topico.model";
import {Observable} from "rxjs";
import {ComentarioModel} from "../content/models/comentario.model";
import {TopicoInfosGeralModel} from "../content/models/topico-infos-geral.model";
import {TecnologiasModel} from "../content/models/tecnologias.model";

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  constructor(private http: HttpClient) {}

  apiUrl = environment.apiUrl;

  salvarComentario(comentario: any): Observable<ComentarioModel> {
    return this.http.post<ComentarioModel>(this.apiUrl + 'comentario/salvarComentario', comentario);
  }

  listarPorTopico(idTopico: string): Observable<Array<ComentarioModel>> {
    return this.http.get<Array<ComentarioModel>>(`${this.apiUrl}comentario/listarPorTopico/${idTopico}`);
  }
}
