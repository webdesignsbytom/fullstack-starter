class Player {
  constructor(canvas) {
    this.canvas = canvas;
    this.position = {
      x: 100,
      y: 100,
    };

    this.velocity = {
      x: 0,
      y: 0,
    };
    this.gravity = 1;
    this.width = 100;
    this.height = 100;
    this.colour = 'red';
    this.sides = {
      bottom: this.position.y + this.height,
    };
  }

  draw(ctx) {
    ctx.fillStyle = this.colour;
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update(ctx) {
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y;
    this.sides.bottom = this.position.y + this.height;

    // Above bottom of canvas
    if (this.sides.bottom + this.velocity.y < this.canvas.height) {
      this.velocity.y += this.gravity;
    } else {
      this.velocity.y = 0;
    }
  }
}
