const canvas = document.getElementById('canvas');

let context = canvas.getContext('2d');

class Algae {
  constructor(xpos, ypos, radius, color) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.radius = radius;
    this.color = color;
  }

  draw(context) {
    context.beginPath();

    context.strokeStyle = this.color;
    context.lineWidth = 10;

    context.arc(this.xpos, this.ypos, this.radius, Math.PI * 2, false);

    context.stroke();
    context.closePath();
  }

  update() {
    
  }
}

function createAlgae() {
    console.log('creating')
    let posx = 0 + 10
    let posy = 0 + 10
    const newAlgae = new Algae(posx, posy, 5, 'red')
    console.log('newAlgae', newAlgae)
    newAlgae.draw(context)
}

function draw() {
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");
  
      ctx.beginPath();
      ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
      ctx.moveTo(110, 75);
      ctx.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
      ctx.moveTo(65, 65);
      ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
      ctx.moveTo(95, 65);
      ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
      ctx.stroke();
    }
  }
  