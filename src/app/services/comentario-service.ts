import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {TopicoModel} from "../content/models/topico.model";
import {Observable} from "rxjs";
import {ComentarioModel} from "../content/models/comentario.model";

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  constructor(private http: HttpClient) {}

  apiUrl = environment.apiUrl;

  salvarComentario(comentario: any): Observable<ComentarioModel> {
    return this.http.post<ComentarioModel>(this.apiUrl + 'comentario/salvarComentario', comentario);
  }
}
