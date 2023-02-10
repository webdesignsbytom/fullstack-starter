const canvas = document.getElementById('canvas');

// detect canvas events
// function isIntersect(point, algae) {
//     return (
//       Math.sqrt((point.x - algae.xpos) ** 2 + (point.y - algae.ypos) ** 2) <
//       algae.radius
//     );
//   }

// canvas.addEventListener('click', (e) => {
//   const pos = {
//     x: e.clientX,
//     y: e.clientY,
//   };
//   console.log('pos', pos)
//   algaeArray.forEach((algae) => {
//     if (isIntersect(pos, algae)) {
//       alert('click on algae: ' + algae.count);
//       console.log('xxx')
//     }
//   });
// });

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

var window_height = window.innerHeight / 2;
var window_width = window.innerWidth / 2;

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
let circleCounter = 1;
let algaeArray = [];

// On click event swarm
function clickFunctionSwarm() {
  for (i = 0; i < createArray; i++) {
    let random_x = Math.random() * window_width;
    let random_y = Math.random() * window_height;

    const algaeSwarm = new Algae(random_x, random_y, 20, 'red', circleCounter);
    algaeSwarm.draw(context);
    algaeArray.push(algaeSwarm);

    circleCounter++;
    console.log('algaeArray', algaeArray);
  }
}
