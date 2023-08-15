import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common'
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [MatGridListModule, MatCardModule, MatIconModule, NgFor, NgIf, CommonModule ],
})
export class HomeComponent {

  constructor(private router: Router) { }

  verDetalhes(imovelId: string) {
    this.router.navigate(['/detalhes', imovelId]);
  }

  toogleFavorito(index: number): void {
    this.games[index].favorito = !this.games[index].favorito
  }

  data: any = new Date();
  games: Array<any> = [
    {
      id: 1,
      titulo: 'STARFIELD',
      foto: 'https://cdn.akamai.steamstatic.com/steam/apps/1716740/header.jpg?t=1690917875',
      preco: 299,
      favorito: true,
      categoria: ' rpg de ação'
      
      
    },
    {
      id: 2,
      titulo: 'ELDEN RING',
      foto: 'https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg?t=1683618443',
      preco: 230,
      favorito: false,
      categoria: ' rpg de ação'
    },

    {
      id: 3,
      titulo: 'Diablo IV',
      foto: 'https://assetsio.reedpopcdn.com/diablo-iv.webp?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp',
      preco: 150,
      favorito: false,
      categoria: ' jogo de aventura',
    },
    {
      id: 4,
      titulo: 'The last of us parte 1',
      foto: 'https://cdn.akamai.steamstatic.com/steam/apps/1888930/header.jpg?t=1686864554',
      preco:250,
      favorito: false,
      categoria:' jogo de tiro'
      
      
    },
    {
      id: "rg93h8eirbgrebngn",
      titulo: 'Resident Evil Village',
      foto: 'https://cdn.akamai.steamstatic.com/steam/apps/1196590/header.jpg?t=1690436815',
      preco:140,
      favorito: true,
      categoria: ' survival horror'
    },
    {
      id: "8493ty34hg489gh",
      titulo: 'Hollow Knight',
      foto: 'https://cdn.akamai.steamstatic.com/steam/apps/367520/header.jpg?t=1667006028',
      preco:46,
      favorito: true,
      categoria: ' aventura de ação'
    },
    {
      id: 5,
      titulo: 'Mortal Kombat 11',
      foto: 'https://cdn.akamai.steamstatic.com/steam/apps/976310/header.jpg?t=1691103008',
      preco:230,
      favorito: true,
      categoria: ' jogo de luta'
    },
    {
      id: 6,
      titulo: 'Danganronpa V3',
      foto: 'https://cdn.akamai.steamstatic.com/steam/apps/567640/header.jpg?t=1654081483',
      preco:26,
      favorito: false,
      categoria: ' visual novel '
    },
    {
      id: 7,
      titulo: 'Little Nightmares II',
      foto: 'https://cdn.akamai.steamstatic.com/steam/apps/860510/header.jpg?t=1676858317',
      preco:127,
      favorito: false,
      categoria: ' survival horror'
    },
    {
      id: 8,
      titulo: 'Stray',
      foto: 'https://cdn.akamai.steamstatic.com/steam/apps/1332010/header.jpg?t=1691683094',
      preco:53,
      favorito: false,
      categoria: ' jogo de simulação'
    },
    {
      id: 9,
      titulo: 'Dead by Daylight',
      foto: 'https://cdn.akamai.steamstatic.com/steam/apps/381210/header.jpg?t=1690568846',
      preco: 49,
      favorito: false,
      categoria: ' jogo de ação'
    },
    {
      id: 10,
      titulo: 'Outlast',
      foto: 'https://cdn.akamai.steamstatic.com/steam/apps/238320/header.jpg?t=1666817106',
      preco:60,
      favorito: false,
      categoria: ' survival horror '
    },
    {
      id: 11,
      titulo: 'Cult of the Lamb',
      foto: 'https://cdn.akamai.steamstatic.com/steam/apps/1313140/header.jpg?t=1691752432',
      preco:65,
      favorito: false,
      categoria: ' jogo de luta'
    },
    {
      id: 12,
      titulo: 'DARK SOULS™ III',
      foto: 'https://cdn.akamai.steamstatic.com/steam/apps/374320/header.jpg?t=1682651227',
      preco:230,
      favorito: false,
      categoria: ' RPG de ação'
    },
    {
      id: 13,
      titulo: 'Cyberpunk 2077',
      foto: 'https://cdn.akamai.steamstatic.com/steam/apps/1091500/header.jpg?t=1690808313',
      preco:200,
      favorito: false,
      categoria: ' rpg eletrônico'
    },
    {
      id: 14,
      titulo: 'Fate/EXTELLA LINK',
      foto: 'https://cdn.akamai.steamstatic.com/steam/apps/622220/header.jpg?t=1624656561',
      preco:28,
      favorito: false,
      categoria: ' jogo de luta'
    },
  ];
}
