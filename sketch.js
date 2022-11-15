let gameStarted = false;
let gameOver = false;
let gameWon = false;
let score = 0;
let lives = 3;
let bricks = [];
let gameBall;
let gamePaddle;

function setup() {
  createCanvas(windowWidth, windowHeight);

  let BRICK_WIDTH = windowWidth / 10;
  let BRICK_HEIGHT = 40;
  let Y_OFFSET = 40;

  createBricks(1, BRICK_WIDTH, BRICK_HEIGHT, Y_OFFSET); // default level 1

  gameBall = new Ball();
  gamePaddle = new Paddle();
}

function draw() {
  background(220);

  // update Ball & Paddle coords
  gameBall.update();
  gamePaddle.update();

  // check if ball is under screen, if so restart
  if (gameBall.y >= height) {
    setup();
  }

  // check ball for wall collision
  if (gameBall.LEFT_EDGE <= 0 || gameBall.RIGHT_EDGE >= width) {
    gameBall.collideWall();
  }
  if (gameBall.TOP_EDGE < 0) {
    gameBall.vy = gameBall.vy * -1;
  }

  // check ball for paddle collision
  if (gameBall.BOT_EDGE > gamePaddle.TOP_EDGE) {
    if (
      gameBall.x > gamePaddle.LEFT_EDGE &&
      gameBall.x < gamePaddle.RIGHT_EDGE
    ) {
      gameBall.collidePaddle();
    }
  }

  for (let i = 0; i < bricks.length; i++) {
    bricks[i].display();
    curr = bricks[i];

    bottomCollision =
      gameBall.TOP_EDGE <= curr.BOT_EDGE &&
      gameBall.x >= curr.LEFT_EDGE &&
      gameBall.x <= curr.RIGHT_EDGE &&
      dist(gameBall.x, gameBall.y, gameBall.x, curr.BOT_EDGE) < gameBall.radius;

    topCollision =
      gameBall.BOT_EDGE >= curr.TOP_EDGE &&
      gameBall.x >= curr.LEFT_EDGE &&
      gameBall.x <= curr.RIGHT_EDGE &&
      dist(gameBall.x, gameBall.y, gameBall.x, curr.TOP_EDGE) < gameBall.radius;

    rightCollision =
      gameBall.LEFT_EDGE <= curr.RIGHT_EDGE &&
      gameBall.y <= curr.BOT_EDGE &&
      gameBall.y >= curr.TOP_EDGE &&
      dist(gameBall.x, gameBall.y, curr.RIGHT_EDGE, gameBall.y) <
        gameBall.radius;

    leftCollision =
      gameBall.RIGHT_EDGE >= curr.LEFT_EDGE &&
      gameBall.y <= curr.BOT_EDGE &&
      gameBall.y >= curr.TOP_EDGE &&
      dist(gameBall.x, gameBall.y, curr.LEFT_EDGE, gameBall.y) <
        gameBall.radius;

    if (bottomCollision || topCollision) {
      gameBall.collideBrickTopBottom();
      bricks.splice(i, 1);
    } else if (rightCollision || leftCollision) {
      gameBall.collideBrickSide();
      bricks.splice(i, 1);
    } else {
      // otherwise display
      bricks[i].display();
    }
  }

  gameBall.move();
  gameBall.display();

  gamePaddle.move();
  gamePaddle.display();
}

// createBricks(1, BRICK_WIDTH, BRICK_HEIGHT, START_Y); // default level 1
function createBricks(level, BRICK_WIDTH, BRICK_HEIGHT, Y_OFFSET) {
  const BRICKS_IN_ROW = floor(width / BRICK_WIDTH) - 1;
  const ROWS_OF_BRICKS = 4;
  const X_OFFSET = (width - BRICKS_IN_ROW * BRICK_WIDTH) / 2;

  for (let row = 0; row < ROWS_OF_BRICKS; row++) {
    for (let col = 0; col < BRICKS_IN_ROW; col++) {
      bricks.push(
        new Brick(row, col, BRICK_WIDTH, BRICK_HEIGHT, X_OFFSET, Y_OFFSET)
      );
    }
  }
}
