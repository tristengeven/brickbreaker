class Ball {
  constructor() {
    this.x = width / 2;
    this.y = height - 40;
    this.diameter = 15;
    this.radius = this.diameter / 2;
    this.vx = 1.75; //random(-2, 2);
    this.vy = -4;
    this.LEFT_EDGE = this.x - this.radius;
    this.RIGHT_EDGE = this.x + this.radius;
    this.BOT_EDGE = this.y + this.radius;
    this.TOP_EDGE = this.y - this.radius;
  }

  display() {
    fill(color("gray"));
    circle(this.x, this.y, this.diameter);
  }

  update() {
    this.LEFT_EDGE = this.x - this.diameter / 2;
    this.RIGHT_EDGE = this.x + this.diameter / 2;
    this.BOT_EDGE = this.y + this.diameter / 2;
    this.TOP_EDGE = this.y - this.diameter / 2;
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;
  }

  collideBrickTopBottom() {
    // this.vx = this.vx * -1;
    // console.log("colliding with brick");
    this.vy = this.vy * -1;
  }
  collideBrickSide() {
    this.vx = this.vx * -1;
  }
  collideWall() {
    this.vx = this.vx * -1;
  }
  collidePaddle() {
    this.vy = this.vy * -1;
  }
}
