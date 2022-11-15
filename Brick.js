class Brick {
  constructor(brickRow, brickCol, BRICK_WIDTH, BRICK_HEIGHT, START_X, START_Y) {
    // rect(x,y,width,height)
    this.x = brickCol * BRICK_WIDTH + START_X;
    this.y = brickRow * BRICK_HEIGHT + START_Y;
    this.width = BRICK_WIDTH;
    this.height = BRICK_HEIGHT;
    this.LEFT_EDGE = this.x;
    this.RIGHT_EDGE = this.x + BRICK_WIDTH;
    this.TOP_EDGE = this.y;
    this.BOT_EDGE = this.y + BRICK_HEIGHT;
    this.color = floor(random(3));
  }

  display() {
    fill(COLOR_PALLETE[this.color]);
    rect(this.x, this.y, this.width, this.height);
  }
}
