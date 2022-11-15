class Paddle {
  constructor() {
    this.x = width / 2;
    this.y = height - 30;
    this.width = 60;
    this.height = 14;
    this.LEFT_EDGE = this.x;
    this.RIGHT_EDGE = this.x + this.width;
    this.TOP_EDGE = this.y;
  }

  display() {
    fill(color("gray"));
    rect(this.x, this.y, this.width, this.height);
  }

  update() {
    this.LEFT_EDGE = this.x;
    this.RIGHT_EDGE = this.x + this.width;
    this.TOP_EDGE = this.y;
  }

  move() {
    this.x = mouseX - this.width / 2;
  }
}
