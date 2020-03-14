var width, height, ball;
function setup() {
  // put setup code here
  width = 600;
  height = 600;
  ball = new Ball();
  createCanvas(width, height);
}

function draw() {
  // put drawing code here
  background(0);
  ball.show();
}

class Ball {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.xSpeed = 0;
    this.ySpeed = 0;
  }

  show() {
    ellipseMode(CENTER);
    fill(0, 255, 0);
    ellipse(this.x, this.y, 20, 20);
  }
}