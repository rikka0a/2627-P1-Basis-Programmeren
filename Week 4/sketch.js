let circles = [];
let movingOut = false;

function setup() {
  createCanvas(800, 600);

  for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 20; j++) {
      circles.push({
        x: i * 50 + 25,
        y: j * 50 + 25,
        size: random(20, 40),
        direction: random() < 0.5 ? -1 : 1,
        color: "pink",
        timer: random(30, 60)
      });
    }
  }
}

function draw() {
  background(206, 138, 255);

  let allOut = true;

  for (let circle of circles) {
    circle.timer--;
    if (circle.timer <= 0) {
      circle.color = random() < 0.2 ? "#c4ffd5" : "pink";
      circle.timer = random(30, 60);
    }
    fill(circle.color);
    circle.size += circle.direction;
    if (circle.size >= 40 || circle.size <= 20) {
      circle.direction *= -1;
    }

    if (movingOut) {
      let directionX = circle.x - width / 2;
      let directionY = circle.y - height / 2;
      let distance = dist(circle.x, circle.y, width / 2, height / 2);

      if (distance > 0) {
        circle.x += directionX / distance;
        circle.y += directionY / distance;
      }

      if (circle.x > -circle.size && circle.x < width + circle.size &&
          circle.y > -circle.size && circle.y < height + circle.size) {
        allOut = false;
      }
    }

    if (circle.color === "#c4ffd5") {
      rectMode(CENTER);
      rect(circle.x, circle.y, circle.size, circle.size);
    } else {
      ellipse(circle.x, circle.y, circle.size, circle.size);
    }
  }

  if (movingOut && allOut) {
    movingOut = false;
    for (let i = 0; i < circles.length; i++) {
      circles[i].x = floor(i / 20) * 50 + 25;
      circles[i].y = i % 20 * 50 + 25;
    }
  }
}

function keyPressed() {
  if (keyCode === ENTER && !movingOut) {
    movingOut = true;
  }
}

