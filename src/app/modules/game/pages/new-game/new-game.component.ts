import { compileDeclareInjectorFromMetadata } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { PlayerModel } from '../../models/player.model';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss'],
})
export class NewGameComponent implements OnInit {
  players: PlayerModel[];
  form: FormGroup;

  constructor(private playerService: PlayerService) {
    this.players = this.playerService.getPlayers();
    this.form = this.createForm();
  }

  ngOnInit(): void {}

  submit(): void {
    console.log(this.form.get('players')?.errors);
  }

  private createForm(): FormGroup {
    return new FormGroup({
      players: new FormControl('', [Validators.required, this.minPlayers]),
    });
  }

  private minPlayers(control: AbstractControl): ValidationErrors | null {
    return control.value.length < 2
      ? { error: 'You must select at least 2 players' }
      : null;
  }
}
