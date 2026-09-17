let cloud1X = 100;
let cloud2X = 310;
let cloud3X = 550;
let cloud4X = -120;
let treeX = 60;
let leafX = 70;
let sunX = 700;
let carspeed = 2;
let carsuperspeed = 4;
let car1X = 50;
let car2X = 250;
let car3X = 500;
let car4X = 390;
let testX = 50
let explosion = false
let stopLightColor = 0

let img;

function preload (){
  img = loadImage('picture/boom.png')
}


function setup() {
  createCanvas(800, 600);
}

function keyPressed() {
  if (keyCode === ENTER) {
    stopLightColor = (stopLightColor + 1) % 3;
  }
}

function draw() {
  background("lightblue");
  

  //background//
    fill(76, 81, 82)
  triangle(600, 430, 250, 430, 400, 200)
    fill(120, 122, 122)
  triangle(800, 600, 200, 630, 650, 180)
  triangle(250, 500, 10, 500, 150, 300)

  stopLight()
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



          car4X += carsuperspeed;
          if (car4X > width - 150) {
            car4X = -1200;
            explosion = true
            
          }
car4(car4X)
          car1X += carspeed;
          if (car1X > width + 120) {
            car1X = -120;
          }
car1(car1X)
          car2X += carspeed;
          if (car2X > width + 120) {
            car2X = -120;
          }
car2(car2X)
          car1(car1X)
          car3X += carspeed;
          if (car3X > width + 120) {
            car3X = -120;
          }
car3(car3X)

          //testX += 7;
          if (testX > width + 10) {
            testX = -120; 
            explosion = false
             }
          if (explosion == true) { 
            testX += 6;
            image(img, 650, 350, 150, 150);
          }

        else { textX = -1200

        }
          console.log(car4X)


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
// isnt working yet?? Fixed
}

function treeLeaves(x){

  fill(71, 166, 33)
circle(x, 320, 90)

}

function stopLight (){
  
  fill("black")
  rect(525, 375, 15, 60)
  rect(507, 280, 50, 100)

    fill(stopLightColor === 0 ? "red" : "darkred")
  circle(532, 300, 25)
    fill(stopLightColor === 1 ? "orange" : "darkorange")
  circle(532, 330, 25)
    fill(stopLightColor === 2 ? "green" : "darkgreen")
  circle(532, 360, 25)

}

function cloud(x, y){

  //clouds//
    fill(232, 247, 255)
  circle(x, y, 50)
  circle(x + 35, y-10, 65)
  circle(x + 70, y, 50)

  
}

function sun(x){

  fill(255, 215, 84, 225)
circle(x, 90, 100)
}

function car1(x){
  fill(255, 48, 83) //red car color
rect(x, 490, 95, 50)
rect(x, 530, 120, 40)
  fill(48, 43, 44) //wheel color
circle(x+25, 570, 30)
circle(x+90, 570, 30)
  fill(180, 211, 212) //window color
rect(x+20, 510, 60, 20)

}


function car2(x){
  fill(32, 147, 150) //blue car color
rect(x, 500, 95, 50)
rect(x, 540, 120, 40)
  fill(48, 43, 44) //wheel color
circle(x+25, 580, 30)
circle(x+90, 580, 30)
  fill(180, 211, 212) //window color
rect(x+20, 520, 60, 20)

}

function car3(x){
  fill(255, 171, 238) //pink car color
rect(x, 495, 95, 50)
rect(x, 535, 120, 40)
  fill(48, 43, 44) //wheel color
circle(x+25, 575, 30)
circle(x+90, 575, 30)
  fill(180, 211, 212) //window color
rect(x+20, 515, 60, 20)

}

function car4(x){
  fill(107, 47, 145) //purple car color
rect(x, 405, 95, 50)
rect(x, 440, 120, 40)
  fill(48, 43, 44) //wheel color
circle(x+25, 480, 30)
circle(x+90, 480, 30)
  fill(180, 211, 212) //window color
rect(x+20, 420, 60, 20)

}




