import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss'],
})
export class NewGameComponent implements OnInit {
  players;

  constructor(private playerService: PlayerService) {
    this.players = this.playerService.getPlayers();
  }

  ngOnInit(): void {
    console.log(this.players);
  }
}
