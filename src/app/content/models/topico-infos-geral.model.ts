import {TopicoModel} from "./topico.model";
import {TecnologiasModel} from "./tecnologias.model";

export interface TopicoInfosGeralModel {
  topico?: TopicoModel;
  tecnologias?: TecnologiasModel[];
  qtdVotos?: Number;
}
