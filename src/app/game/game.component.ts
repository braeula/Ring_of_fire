import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Game } from '../../models/game';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  pickCardAnimation = false
  game?: Game;

  ngOnInit(): void { //ngOnInit: wird aufgerufen, nachdem Komp. vollständig initialisiert wurde. void: gibt keinen Wert zurück; kein return-Wert erwartet
    this.newGame();
  }

  newGame() {
    this.game = new Game();
    console.log(this.game);
    
  }

  takeCard() {
    this.pickCardAnimation = true;
  }

}
