let jumpHeight = 2;
let movementSpeed = 5;

const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

canvas.width = 16 * 64;
canvas.height = 9 * 64;

const backgroundLevel1 = new Sprite({ position: { x: 0, y: 0 } });
const player = new Player(canvas);

let keys = {
  up: false,
  down: false,
  left: false,
  right: false,
};

function animate() {
  window.requestAnimationFrame(animate);
  // Reset canvas
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  backgroundLevel1.draw(ctx)

  player.velocity.x = 0;

  if (keys.left) player.velocity.x -= movementSpeed;
  else if (keys.right) player.velocity.x += movementSpeed;

  player.draw(ctx);
  player.update(ctx);
}

animate();
