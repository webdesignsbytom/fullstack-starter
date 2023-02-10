const canvas = document.getElementById('canvas');

let context = canvas.getContext('2d');

var window_height = window.innerHeight / 2;
var window_width = window.innerWidth / 3;

canvas.width = window_width;
canvas.height = window_height;

canvas.style.background = '#ff8';

let hit_counter = 0;

class Circle {
  constructor(xpos, ypos, radius, color, text, speed) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.radius = radius;
    this.color = color;
    this.text = text;
    this.speed = speed;

    this.dx = 1 * this.speed;
    this.dy = 1 * this.speed;
  }

  draw(context) {
    context.beginPath();

    context.strokeStyle = this.color;
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.font = '20px Arial';
    context.fillText(this.text, this.xpos, this.ypos);

    context.lineWidth = 5;
    context.arc(this.xpos, this.ypos, this.radius, 0, Math.PI * 2, false);
    context.stroke();
    context.closePath();
  }

  update() {
    context.clearRect(0, 0, window_width, window_height)

    this.draw(context);

    if (this.xpos > window_width) {
        this.dx = -this.dx;
        hit_counter++;
    }

    if ( (this.xpos - this.radius) < 0) {
        this.dx = -this.dx;
        hit_counter++;
    }

    if (this.ypos > window_width) {
        this.dy = -this.dy;
        hit_counter++;
    }

    if ( (this.ypos - this.radius) < 0) {
        this.dy = -this.dy;
        hit_counter++;
    }

    this.xpos += this.dx;
    this.ypos += this.dy;
  }
}

let circle_counter = 1;
// let random_x = Math.random() * window_width;
// let random_y = Math.random() * window_height;
// let my_circle = new Circle(random_x, random_y, 50, 'black', circle_counter, 10);

let my_circle = new Circle(100, 150, 50, 'black', hit_counter, 3);


my_circle.draw(context)

let updateCircle = function() {
    requestAnimationFrame(updateCircle);
    my_circle.update();
}

updateCircle();

// for ( var numbers = 0; numbers < 1; numbers++) {
//     let random_x = Math.random() * window_width
//     let random_y = Math.random() * window_height

//     let my_circle = new Circle(random_x, random_y, 50, "black", circle_counter, 1)
//     all_circles.push(my_circle)
//     createCircle(all_circles[numbers])
//     circle_counter++
// }
