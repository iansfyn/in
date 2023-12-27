class Game {
    constructor() {
       this.score = 0;
       this.gameOver = false;
    }
   
    incrementScore() {
       if (!this.gameOver) {
         this.score++;
       }
    }
   
    endGame() {
       this.gameOver = true;
    }
   
    displayScore() {
       console.log("Your score is:", this.score);
    }
   }
   
   let myGame = new Game();
   
   myGame.incrementScore();
   myGame.incrementScore();
   myGame.displayScore();
   
   myGame.endGame();
   myGame.incrementScore();
   myGame.displayScore();