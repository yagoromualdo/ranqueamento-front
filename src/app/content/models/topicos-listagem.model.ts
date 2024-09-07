import {TopicoModel} from "./topico.model";
import {PrimeiroSegundoTerceiroModel} from "./primeiro-segundo-terceiro.model";

export interface TopicosListagemModel {
  topico: TopicoModel;
  primeiroSegundoTerceiro: PrimeiroSegundoTerceiroModel;
  qtdVotos: Number;
  qtdComentarios: Number;
}
