import TileMap from './TileMap.js';
import Player from './Player.js';
import Game from './Game.js';

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const tileSize = 32;

// const engine = new Engine()
const game = new Game();
const player = new Player('Paccmanny', game);
const tileMap = new TileMap(tileSize, player);

export let movementDirection = {
  up: false,
  down: false,
  left: false,
  right: false,
};

window.addEventListener('load', () => {
  function gameLoop() {
    tileMap.draw(canvas, ctx);

    let res = getKey();
    if (res.length > 0) {
      tileMap.movePlayer(res);
    }
  }
  
  setInterval(gameLoop, 1000 / 60);
});

function getKey() {
  var keys = Object.keys(movementDirection);
  var filtered = keys.filter(function (key) {
    return movementDirection[key] === true;
  });

  return filtered;
}

