let cubeX1 = 90;
let cubeX2 = 250;
let cubeX3 = 410;
let lineY1 = 90;
let lineY2 = 250;
let lineY3 = 410;
let player1 = "#d4b9ff"
let player2 = "#a4eaff"
let currentplayer = player1
let cube1Clicked = false
let cubeColor = "#ffd8fa"


let img;
let img2;
let img3;
let img4;

function preload (){
  img = loadImage('picture/cute.png')
  img2 = loadImage('picture/UwU.png')
  img3 = loadImage('picture/cornerRU.png')
  img4 = loadImage ('picture/cornerLU.png')
}

function setup() {
  createCanvas(700, 700);
}

function draw() {
  background(220);

  image(img, 0, 0, 700, 700)
  image(img2, 580, 580, 110, 110)

  TicTacToeBase()
  image(img3, 490, 490, 100, 100)
  image(img4, 60, 490, 100, 100)

  TictactToeCube(cubeX1, lineY1)
  TictactToeCube(cubeX2, lineY1)
  TictactToeCube(cubeX3, lineY1)
  TictactToeCube(cubeX1, lineY2)
  TictactToeCube(cubeX2, lineY2)
  TictactToeCube(cubeX3, lineY2)
  TictactToeCube(cubeX1, lineY3)
  TictactToeCube(cubeX2, lineY3)
  TictactToeCube(cubeX3, lineY3)

  noFill()
  stroke(0)
  circle(mouseX, mouseY, 10)

}

function TicTacToeBase (){
  fill ("#c8e8e1")
square (75, 75, 500, 10)


}

function TictactToeCube (x, y){
if (cube1Clicked == true){
  cubeColor = "red"
}
  fill(cubeColor)
  square(x, y, 150, 10)
}

function mousePressed (){
console.log ("click")
cube1Clicked = true
}
