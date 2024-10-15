import {UsuarioModel} from "./usuario.model";
import {TecnologiasModel} from "./tecnologias.model";

export interface ComentarioModel {
  id: number;
  comentario: string;
  tipoDeComentario: string;
  dataCriacao: any;
  usuario: UsuarioModel;
  tecnologias: TecnologiasModel;
}
