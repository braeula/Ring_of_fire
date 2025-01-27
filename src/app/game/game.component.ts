import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Game } from '../../models/game';
import { PlayerComponent } from "../player/player.component";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { MatDialogModule } from '@angular/material/dialog';
import { GameInfoComponent } from "../game-info/game-info.component";

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PlayerComponent, MatButtonModule, MatIconModule, MatDialogModule, GameInfoComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  pickCardAnimation = false
  currentCard: string | undefined = '';
  game: Game = new Game();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void { //ngOnInit: wird aufgerufen, nachdem Komp. vollständig initialisiert wurde. void: gibt keinen Wert zurück; kein return-Wert erwartet
    this.newGame();
  }

  newGame() {
    this.game = new Game();
    console.log(this.game);

  }

  takeCard() {
    if (!this.pickCardAnimation) {
      this.currentCard = this.game.stack.pop();
      console.log(this.currentCard);
      this.pickCardAnimation = true;




      setTimeout(() => {
        if (this.currentCard) {
          this.game.playedCards.push(this.currentCard);  // Hier wird nur ein definierter Wert gepusht
        }
        this.pickCardAnimation = false;
        this.game.currentPlayer++;
        this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;

      }, 1000);
    }

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent)

    dialogRef.afterClosed().subscribe((name: string) => {
      // if (name && name.length > 0) {
      //   this.game.players.push(name)
      // }
      name && name.length > 0 && this.game.players.push(name); // ist das gleiche wie eine If Schleife
      // (name && name.length > 0) && this.game.players.push(name); // ist das gleiche wie eine If Schleife
    });
  }

}
