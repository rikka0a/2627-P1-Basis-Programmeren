let cloud1X = 100;
let cloud2X = 310;
let cloud3X = 550;
let cloud4X = -120;
let treeX = 60;
let leafX = 70;
let sunX = 700;


function setup() {
  createCanvas(800, 600);
}

function draw() {
  background("lightblue");

  //background//
    fill(76, 81, 82)
  triangle(600, 430, 250, 430, 400, 200)
    fill(120, 122, 122)
  triangle(800, 600, 200, 630, 650, 180)
  triangle(250, 500, 10, 500, 150, 300)

  road()


    sunX-= 1;
    if(sunX < -70){
    sunX = width + 70;
    }
   sun(sunX)
 

cloud1X+= 1.7;
if(cloud1X > width +40){
  cloud1X=-100;
}

  cloud(cloud1X, 150)


  cloud2X+= 1.5;
if(cloud2X > width +40){
  cloud2X=-100;
}

  cloud(cloud2X, 75)


    cloud3X+= 1.5;
if(cloud3X > width +40){
  cloud3X=-100;
}

  cloud(cloud3X, 100)

      cloud4X+= 1.5;
if(cloud4X > width +40){
  cloud4X=-100;
}

  cloud(cloud4X, 90)

    trees(treeX)
    trees(treeX+150)
    trees(treeX+350)
      treeLeaves(leafX)
      treeLeaves(leafX+150)
      treeLeaves(leafX+350)

}
  
function road(){
  let x = 50
  let y = 525
  let pixelsize = 20

  //road//
  noStroke();
    fill(41, 105, 41)
  rect(0, 430, 800) 
    fill(106, 212, 106)
  rect(0, 440, 800) 
    fill(96, 99, 99)
  rect(0, 450, 800)
    fill(131, 134, 135)
  rect(0, 460, 800)

    fill(189, 189, 189)
  rect(x-140, y, pixelsize*5, pixelsize*1)
  rect(x, y, pixelsize*5, pixelsize*1)
  rect(x+140, y, pixelsize*5, pixelsize*1)
  rect(x+280, y, pixelsize*5, pixelsize*1)
  rect(x+420, y, pixelsize*5, pixelsize*1)
  rect(x+560, y, pixelsize*5, pixelsize*1)
  rect(x+700, y, pixelsize*5, pixelsize*1)
}

function trees(x){

//Tree
let y = 345
let pixelsize = 20
  fill(133, 81, 49)
rect(x, y, pixelsize*1, pixelsize*5)
// isnt working yet??
}

function treeLeaves(x){

  fill(71, 166, 33)
  circle(x, 320, 90)

}

function cloud(x, y){

  //clouds//
    fill(232, 247, 255)
  circle(x, y, 50)
  circle(x + 35, y-10, 65)
  circle(x + 70, y, 50)
  
}

function sun (x){

  fill(255, 215, 84, 225)
circle(x, 90, 100)

}






