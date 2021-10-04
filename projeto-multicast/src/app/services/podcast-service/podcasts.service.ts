import { Injectable } from '@angular/core';
import { Podcast } from 'src/app/model/podcast.model';

@Injectable({
  providedIn: 'root'
})
export class PodcastsService {

  constructor() { }

  podcast: Podcast[] = [
    {
      "id": 1,
      "imagem": "../../../assets/img/podcastsLogo/flow.jpg",
      "nome": "FlowPodcast",
      "genero": "Humorístico",
      "descricao": "Flow Podcast é um podcast brasileiro apresentado por Bruno Aiub (Monark) e Igor Coelho (Igor 3K). É dirigido e produzido por Gianluca Eugenio (Gianzão)."
    },
    {
      "id": 2,
      "imagem": "../../../assets/img/podcastsLogo/deriva.jpg",
      "nome": "A Deriva Podcast",
      "genero": "Informativo/Científica",
      "descricao": "A deriva podcast é apresentado pelo Arthur Petry que tem como objetivo ter um bate papo leve é tranquilo porem esclarecedor sobre uma gama de assuntos."
    },
    {
      "id": 3,
      "imagem": "../../../assets/img/podcastsLogo/inteligencia.jpg",
      "nome": "Inteligência Ltda.",
      "genero": "Humorístico/Entreterimento",
      "descricao": "O comediante, quadrinhista e aeromoça Rogério Vilela bate um papo com convidados mais inteligentes do que ele (como se fosse difícil!) sobre os mais diversos temas, dos mais profundos aos mais banais. Quase sempre com bom humor."
    },
    {
      "id": 4,
      "imagem": "../../../assets/img/podcastsLogo/naoOuvo.jpg",
      "nome": "Não Ouvo",
      "genero": "Humorístico",
      "descricao": "Todos os podcasts da família Não Salvo. Um programa diferente por dia. Segunda: Xêpa! | Terça: Inferno Astral | Quarta: Bicuda | Quinta: Não Ouvo | Sexta: Se Eu Fosse Você"
    },
    {
      "id": 5,
      "imagem": "../../../assets/img/podcastsLogo/podpah.jpg",
      "nome": "Podpah",
      "genero": "Humorístico/Social",
      "descricao": "O podcast mais zika da internet apresentado por Igão Underground e Mítico Jovem, que vai ao ar de segunda a sexta."
    },
    {
      "id": 6,
      "imagem": "../../../assets/img/podcastsLogo/venus.jpg",
      "nome": "Venus Podcast",
      "genero": "Informativo/Entreterimento",
      "descricao": "Venus Podcast acontece segunda, terça e quinta, normalmente às 17h, AO VIVO simultaneamente no Youtube, Twitch e no Multicast."
    },
  ]

  podcasts(): Podcast[]{
    return this.podcast;
  }
}
