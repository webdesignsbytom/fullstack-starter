import { movementDirection } from './main.js';

window.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowUp':
      // Single jump
      movementDirection.up = true;
      break;
    case 'ArrowLeft':
      movementDirection.left = true;
      break;
    case 'ArrowRight':
      movementDirection.right = true;
      break;
    case 'ArrowDown':
      movementDirection.down = true;
      break;
    case '':
      //
      break;
  }
});

window.addEventListener('keyup', (event) => {
  switch (event.key) {
    case 'ArrowLeft':
      movementDirection.left = false;
      break;
    case 'ArrowRight':
      movementDirection.right = false;
      break;
    case 'ArrowDown':
      movementDirection.down = false;
      break;
    case 'ArrowUp':
      movementDirection.up = false;
      break;
  }
});
