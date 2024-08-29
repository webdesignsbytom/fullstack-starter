import Player from './classes/Player.js';

class Game {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.width = this.canvas.width; // Keep the height and width as the size of the canvas for the game
    this.height = this.canvas.height;
    this.baseHeight = 720;
    this.ratio = this.height / this.baseHeight;
    this.player = new Player(this);
    this.gravity;

    window.addEventListener('resize', (e) => {
      this.resize(e.currentTarget.innerWidth, e.currentTarget.innerHeight);
    });
  }

  resize(width, height) {
    this.canvas.width = width;
    this.canvas.height = height;

    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.ratio = this.height / this.baseHeight;

    this.player.resize();
  }

  render() {
    this.gravity = 0.15 * this.ratio;
    this.ctx.fillStyle = 'red';

    this.player.update();
    this.player.draw();
  }
}

window.addEventListener('load', function () {
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');

  canvas.width = 720;
  canvas.height = 720;

  const game = new Game(canvas, ctx);

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.render();
    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
});
