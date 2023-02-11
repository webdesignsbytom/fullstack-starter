const canvas = document.getElementById('canvas');
const countContainer = document.getElementById('click__count');
const testContainer = document.getElementById('test__count');

canvas.addEventListener('click', (e) => {
  var x = e.pageX - canvas.offsetLeft;
  var y = e.pageY - canvas.offsetTop;
  console.log('x', x);
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
  constructor(id, xpos, ypos, radius, color, count, speed) {
    this.id = id;
    this.xpos = xpos;
    this.ypos = ypos;
    this.radius = radius;
    this.color = color;
    this.count = count;
    this.clicked = function () {
      console.log('CLIIIIIIICKED', this);
      clickedOnCount++;
      renderCounts();
      this.delete()
    };
    this.speed = speed;

    this.dx = 1 * this.speed;
    this.dy = 1 * this.speed;
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

  update() {
    this.draw(context);

    if (this.xpos > canvas.width) {
      this.dx = -this.dx;
    }

    if (this.xpos - this.radius < 0) {
      this.dx = -this.dx;
    }

    if (this.ypos > canvas.height) {
      this.dy = -this.dy;
    }

    if (this.ypos - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.xpos += this.dx;
    this.ypos += this.dy;
  }

  delete() {
    console.log('DELETE DELETE')
    const foundAlgae = algaeArray.find((a) => a.id === this.id)
    const algaeIndex = algaeArray.indexOf(foundAlgae)
    console.log('foundAlgae', algaeIndex)
    algaeArray.splice(algaeIndex, 1)
  }
}

let createArray = 10;
let algaeCounter = 1;
let algaeArray = [];
let clickedOnCount = 0;

// On click event swarm
function clickFunctionSwarm() {
  for (i = 0; i < createArray; i++) {
    let random_x = Math.random() * window_width;
    let random_y = Math.random() * window_height;

    const algaeSwarm = new Algae(
      i,
      random_x,
      random_y,
      20,
      'red',
      algaeCounter,
      1
    );
    algaeSwarm.draw(context);
    algaeArray.push(algaeSwarm);

    algaeCounter++;
  }
}

function updateSwarm() {
  requestAnimationFrame(updateSwarm);
  context.clearRect(0, 0, canvas.width, canvas.height);
  algaeArray.forEach((algaeSwarm) => {
    algaeSwarm.update();
  });
}

function renderCounts() {
  countContainer.innerText = `Algae Clicked On: ${clickedOnCount}`;
}

function run() {
  renderCounts();
  updateSwarm();
}

run();
