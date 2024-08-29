export default class TileMap {
  constructor(tileSize, player) {
    this.tileSize = tileSize;
    this.wall = this.#image('wall.png');
    this.pacman = player.image;
    this.dot = this.#image('yellowDot.png');
    this.ghost = this.#image('ghost.png');
    this.player = player;
  }

  #image(fileName) {
    const img = new Image();
    img.src = `images/${fileName}`;
    return img;
  }

  // Grid 2D array
  // 0 = dots
  // 1 = walls
  // 2 = pacman
  // 3 = ghost
  map = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 1
    [1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1], // 2
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1], // 3
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1], // 4
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1], // 5
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1], // 6
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1], // 7
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1], // 8
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1], // 9
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 10
  ];

  draw(canvas, ctx) {
    this.#setCanvasSize(canvas);
    this.#clearCanvas(canvas, ctx);
    this.#drawMap(ctx);
  }

  movePlayer(movementArray) {
    if (movementArray) {
      let row = this.player.position.row;
      let column = this.player.position.column;

      if (movementArray.includes('left')) {
        column--;
      }
      if (movementArray.includes('right')) {
        column++;
      }
      if (movementArray.includes('up')) {
        row--;
      }
      if (movementArray.includes('down')) {
        row++;
      }

      // Update the map to move the player
      this.map[this.player.position.row][this.player.position.column] = 0; // Clear the old position
      this.map[row][column] = 2; // Set the new position

      this.player.position.row = row;
      this.player.position.column = column;
    }
  }

  #moveMapLeft(movementArray) {
    for (let row = 0; row < movementArray.length; row++) {
      this.map[row].pop();
    }
  }

  #drawMap(ctx) {
    for (let row = 0; row < this.map.length; row++) {
      for (let col = 0; col < this.map[row].length; col++) {
        const tile = this.map[row][col];
        let image = null;

        switch (tile) {
          case 1:
            image = this.wall;
            break;
          case 0:
            image = this.dot;
            break;
          case 2:
            image = this.pacman;
            break;
          case 3:
            image = this.ghost;
            break;
        }

        if (image !== null) {
          ctx.drawImage(
            image,
            col * this.tileSize,
            row * this.tileSize,
            this.tileSize,
            this.tileSize
          );
        }
      }
    }
  }

  #clearCanvas(canvas, ctx) {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  #setCanvasSize(canvas) {
    canvas.height = this.map.length * this.tileSize;
    canvas.width = this.map[0].length * this.tileSize;
  }
}
