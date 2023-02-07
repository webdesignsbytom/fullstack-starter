const canvas = document.getElementById('canvas');

let context = canvas.getContext('2d');

var window_height = window.innerHeight / 2;
var window_width = window.innerWidth / 2;

canvas.width = window_width;
canvas.height = window_height;

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
    context.lineWidth = 4;

    context.arc(this.xpos, this.ypos, this.radius, Math.PI * 2, false);

    context.stroke();
    context.closePath();
  }

  update() {}
}

let createArray = 10

function createAlgae() {
  let posx = 0 + 10;
  let posy = 0 + 10;

  const newAlgae = new Algae(posx, posy, 5, 'red');
  newAlgae.draw(context);
}

function createAlgaeSwarm() {
  for(i = 0; i < createArray; i++) {
    let random_x = Math.random() * window_width;
    let random_y = Math.random() * window_height;

    const algaeSwarm = new Algae(random_x, random_y, 5, 'red');
    algaeSwarm.draw(context);
  }
}

function createRandomColours() {
  for(i = 0; i < createArray; i++) {
    let random_x = Math.random() * window_width;
    let random_y = Math.random() * window_height;

    const colours = ['red', 'green', 'blue', 'magenta', 'pink']
    let randomNum = Math.floor(Math.random() * colours.length)
    console.log('randomNum', randomNum);
    let colour = colours[randomNum]

    const algaeSwarm = new Algae(random_x, random_y, 5, colour);
    algaeSwarm.draw(context);
  }
}


function drawSmiley() {
  const canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');

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