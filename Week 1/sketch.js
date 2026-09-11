function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  let x = 150;
  let y = 40;
  background(220);
  
  fill(255, 102, 204);
  text("Lotte de Waal", 25, 50);
  textSize(40);
  noStroke();
  
  fill("red");
  rect(30, 65, x, y);
  
  fill("white");
  rect(30, 105, x, y);
  
  fill("blue");
  rect(30, 145, x, y);
 
  stroke(1)
  strokeWeight(3)

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

  fill("brown")
  rect(65, 500, 160, 140)
  
  fill("beige")
  rect(90, 540, 60, 100)

  fill(94, 25, 0)
  triangle(50, 500, 140, 450, 240, 500,)
  
  noStroke();
  fill("black")
  circle(100, 600, 10, 50)

  fill("grey")
  rect(340, 65, 100, 230)

  rect(380, 150, 20, 200)

  fill("red")
  circle(389, 110, 60,)

  fill("orange ")
  circle(389, 180, 60,)

  fill("green")
  circle(389, 250, 60,)

  fill("white")
  stroke(1)
  strokeWeight(4)
  square(345, 455, 100, 10)

  noStroke();
  fill("black")
  circle(370, 480, 25, 10)

  fill("black")
  circle(395, 505, 25, 10)

  fill("black")
  circle(420, 530, 25, 10)
  mario()
}

function mario(){
  let x = 600
  let y = 164
  let pixelsize = 20

  fill("red")
  square(600, 64, 20)
  square(620, 64, 20)
  square(640, 64, 20)
  square(660, 64, 20)
  square(680, 64, 20)
  square(700, 64, 20)

  
  square(580, 84, 20)
  square(600, 84, 20)
  square(620, 84, 20)
  square(640, 84, 20)
  square(660, 84, 20)
  square(680, 84, 20)
  square(700, 84, 20)
  square(720, 84, 20)
  square(740, 84, 20)
  square(760, 84, 20)

    fill(149, 69, 6)
  square(580, 104, 20)
  square(600, 104, 20)
  square(620, 104, 20)
  
    fill(249, 195, 149)
  square(640, 104, 20)
  square(660, 104, 20)
  square(680, 104, 20)
    fill("black")
  square(700, 104, 20)
   fill(249, 195, 149)
  square(720, 104, 20)

    fill(149, 69, 6)
  square(560, 124, 20)
    fill(249, 195, 149)
  square(580, 124, 20)
    fill(149, 69, 6)
  square(600, 124, 20)
    fill(249, 195, 149)
  square(620, 124, 20)
  square(640, 124, 20)
  square(660, 124, 20)
  square(680, 124, 20)
    fill("black")
  square(700, 124, 20)
    fill(249, 195, 149)
  square(720, 124, 20)
  square(740, 124, 20)
  square(760, 124, 20)

    fill(149, 69, 6)
  square(560, 144, 20)
  fill(249, 195, 149)
  square(580, 144, 20)
    fill(149, 69, 6)
  square(600, 144, 20)
  square(620, 144, 20)
    fill(249, 195, 149)
  square(640, 144, 20)
  square(660, 144, 20)
  square(680, 144, 20)
  square(700, 144, 20)
    fill("black")
  square(720, 144, 20)
    fill(249, 195, 149)
  square(740, 144, 20)
  square(760, 144, 20)
  square(760, 144, 20)
  square(780, 144, 20)

    fill(149, 69, 6)
  rect(x-40, y, pixelsize*2, pixelsize*1)
    fill(249, 195, 149)
  rect(x, y, pixelsize*5, pixelsize*1)
    fill("black")
  rect(x+100, y, pixelsize*4, pixelsize*1)

  fill(249, 195, 149)
  rect(x, y+20, pixelsize*8, pixelsize*1)







}

