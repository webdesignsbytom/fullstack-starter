import Player from './classes/Player.js';

class Game {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.width = this.canvas.width; // Keep the height and width as the size of the canvas for the game
    this.height = this.canvas.height;
    this.player = new Player(this);
  }

  render() {
    this.ctx.fillRect(100, 100, 50, 150);
  }
}

window.addEventListener('load', function () {
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');

  canvas.width = 720;
  canvas.height = 720;

  const game = new Game(canvas, ctx);
  game.render();
});
