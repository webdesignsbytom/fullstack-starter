window.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowUp':
      // Single jump
      keys.up = true;
      break;
    case 'ArrowLeft':
      keys.left = true;
      break;
    case 'ArrowRight':
      keys.right = true;
      break;
    case '':
      //
      break;
  }
});

window.addEventListener('keyup', (event) => {
  switch (event.key) {
    case 'ArrowLeft':
      keys.left = false;
      break;
    case 'ArrowRight':
      keys.right = false;
  }
});
