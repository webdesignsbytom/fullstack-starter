const canvas = document.getElementById('canvas');
const countContainer = document.getElementById('click__count')

canvas.addEventListener('click', (e) => {
  var x = e.pageX - canvas.offsetLeft;
  var y = e.pageY - canvas.offsetTop;
  console.log('x', x)
  console.log('y', y);

  algaeArray.forEach(function (algae) {
    if (
      Math.pow(x - algae.xpos, 2) + Math.pow(y - algae.ypos, 2) <
      Math.pow(algae.radius, 2)
    ) {
      algae.clicked();
    }
  });
});

let context = canvas.getContext('2d');

let window_height = window.innerHeight / 2;
let window_width = window.innerWidth / 2;

canvas.width = window_width;
canvas.height = window_height;

class Algae {
  constructor(xpos, ypos, radius, color, count) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.radius = radius;
    this.color = color;
    this.count = count;
    this.clicked = function() {console.log('CLIIIIIIICKED')};
  }

  draw(context) {
    context.beginPath();

    context.strokeStyle = this.color;
    context.lineWidth = 4;

    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.font = '20px Arial';
    context.fillText(this.count, this.xpos, this.ypos);

    context.arc(this.xpos, this.ypos, this.radius, Math.PI * 2, false);

    context.stroke();
    context.closePath();
  }

  update() {}
}

let createArray = 10;
let algaeCounter = 1;
let algaeArray = [];

// On click event swarm
function clickFunctionSwarm() {
  for (i = 0; i < createArray; i++) {
    let random_x = Math.random() * window_width;
    let random_y = Math.random() * window_height;

    const algaeSwarm = new Algae(random_x, random_y, 20, 'red', algaeCounter);
    algaeSwarm.draw(context);
    algaeArray.push(algaeSwarm);

    algaeCounter++;
  }
}
