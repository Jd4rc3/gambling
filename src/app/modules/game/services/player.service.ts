import { Injectable } from '@angular/core';
import { PlayerModel } from '../models/player.model';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  constructor() {}

  getPlayers(): Array<PlayerModel> {
    const players = new Array<PlayerModel>();

    players.push({
      name: 'Camilo',
      id: '123',
    });

    players.push({
      name: 'Luisa',
      id: '321',
    });

    players.push({
      name: 'Sebastian',
      id: '456',
    });

    players.push({
      name: 'Jorge',
      id: '789',
    });

    return players;
  }
}
