var width, height, ball, pad1, pad2, diameter, player1, player2;
function setup() {
  // put setup code here
  player1 = 0;
  player2 = 0;
  width = 600;
  height = 600;
  diameter = 20;
  showScore();
  ball = new Ball();
  pad1 = new Pad(20, height / 2);
  pad2 = new Pad(width - 20, height / 2);
  createCanvas(width, height);
}

function draw() {
  // put drawing code here
  background(0);
  fill(255);
  rect(width / 2, height / 2, 5, height);
  movePad();
  checkPads();
  ball.update();
  ball.show();
  pad1.show();
  pad2.show();
  checkLoss();
}

function movePad() {
  if(keyIsDown(UP_ARROW)) {
    pad2.y -= 5;
  }
  if(keyIsDown(DOWN_ARROW)) {
    pad2.y += 5;
  }
  if(keyIsDown(83)) {
    pad1.y += 5;
  }
  if(keyIsDown(87)) {
    pad1.y -= 5;
  }
}

function checkPads() {
  if((ball.y >= pad1.y - 37.5) && (ball.y <= pad1.y + 37.5) && (ball.x - diameter / 2 <= pad1.x + 5)) {
    ball.xSpeed *= -1;
  }
  if((ball.y >= pad2.y - 37.5) && (ball.y <= pad2.y + 37.5) && (ball.x + diameter / 2 >= pad2.x - 5)) {
    ball.xSpeed *= -1;
  }
}

function mousePressed() {
  ball.xSpeed = floor(random(-5, 6));
  ball.ySpeed = floor(random(-5, 6));
}

function checkLoss() {
  if(((ball.y <= pad1.y - 37.5) || (ball.y >= pad1.y + 37.5)) && ball.x < pad1.x) {
    player2++;
    showScore();
    ball = new Ball();
  }

  if(((ball.y <= pad2.y - 37.5) || (ball.y >= pad2.y + 37.5)) && ball.x > pad2.x) {
    player1++;
    showScore();
    ball = new Ball();
  }
}

function showScore() {
  alert(`Player 1: ${player1}, Player 2: ${player2}`)
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
    ellipse(this.x, this.y, diameter, diameter);
  }
  
  update() {
    ball.x += ball.xSpeed;
    ball.y += ball.ySpeed;

    if((ball.y - diameter / 2 <= 0) || (ball.y + diameter / 2 >= height)) {
      ball.ySpeed = ball.ySpeed * -1;
    }
    if((ball.x - diameter / 2 <= 0) || (ball.x + diameter / 2 >= width)) {
      ball.xSpeed = ball.xSpeed * -1;
    }
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