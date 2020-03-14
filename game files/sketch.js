var width, height, ball, pad1, pad2;
function setup() {
  // put setup code here
  width = 600;
  height = 600;
  ball = new Ball();
  pad1 = new Pad(20, height / 2);
  pad2 = new Pad(width - 20, height / 2);
  createCanvas(width, height);
}

function draw() {
  // put drawing code here
  background(0);
  ball.show();
  pad1.show();
  pad2.show();
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

class Pad {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  show() {
    rectMode(CENTER);
    fill(255);
    rect(this.x, this.y, 10, 75);
  }
}