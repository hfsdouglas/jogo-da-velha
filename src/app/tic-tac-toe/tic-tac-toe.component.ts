import { Component } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.sass']
})
export class TicTacToeComponent {
  currentPlayer: string = 'O';
  winner: string = '';
  board:string [][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];

  processPlay(row: number, col: number) {
    if (this.board[row][col] == '' && this.winner == '') {
      this.board[row][col] = this.currentPlayer;
      if (this.checkWinner(this.currentPlayer)) {
        this.winner = this.currentPlayer;
      }
      switch (this.currentPlayer) {
        case 'O': 
          this.currentPlayer = 'X';
        break;
        case 'X': 
          this.currentPlayer = 'O';
        break;
      }
    }
  }

  checkWinner(player: string): boolean {
    for (let i = 0; i < this.board.length; i++) {
      if (this.board[i][0] == player && this.board[i][1] == player && this.board[i][2] == player) {
        return true;
      }
      if (this.board[0][i] == player && this.board[1][i] == player && this.board[2][i] == player) {
        return true;
      }
    }
    if (this.board[0][0] == player && this.board[1][1] == player && this.board[2][2] == player) {
      return true;
    }
    if (this.board[0][2] == player && this.board[1][1] == player && this.board[2][0] == player) {
      return true;
    }
    return false;
  }

  restart() {
    this.currentPlayer = 'O';
    this.winner = '';
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
  }
}
