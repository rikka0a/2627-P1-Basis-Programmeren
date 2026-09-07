function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  let x = 150;
  let y = 40;
  background(220);
  
  fill(255, 102, 204);
  text("Lotte de Waal", 25, 50);
  textSize(32);
  noStroke();
  
  fill("red");
  rect(30, 65, x, y);
  
  fill("white");
  rect(30, 105, x, y);
  
  fill("blue");
  rect(30, 145, x, y);
 
  fill("black");
  square(30, 250, 50);
  
  fill("white");
  square(80, 250, 50);

  fill("black");
  square(130, 250, 50);

  fill("white")
  square(30, 300, 50)

  fill("black")
  square(80, 300, 50)

  fill("white")
  square(130, 300,50)

  fill("black")
  square(30, 350, 50)

  fill("white")
  square(80, 350, 50)

  fill("black")
  square(130, 350,50)
}
