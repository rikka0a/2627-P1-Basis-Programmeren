let cubeX1 = 90;
let cubeX2 = 250;
let cubeX3 = 410;
let lineY1 = 90;
let lineY2 = 250;
let lineY3 = 410;
let player1 = "#d4b9ff"
let player2 = "#a4eaff"
let currentplayer = 1
let cube1Clicked = false
let cubeColor = "#ffd8fa"

//0: leeg
//1: speler 1
//2: speler 2
let board = [
  0, 0, 0,
  0, 0, 0,
  0, 0, 0
];


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

  TictactToeCube(cubeX1, lineY1, 0)
  TictactToeCube(cubeX2, lineY1, 1)
  TictactToeCube(cubeX3, lineY1, 2)
  TictactToeCube(cubeX1, lineY2, 3)
  TictactToeCube(cubeX2, lineY2, 4)
  TictactToeCube(cubeX3, lineY2, 5)
  TictactToeCube(cubeX1, lineY3, 6)
  TictactToeCube(cubeX2, lineY3, 7)
  TictactToeCube(cubeX3, lineY3, 8)

  noFill()
  stroke(0)
  circle(mouseX, mouseY, 10)

}

function TicTacToeBase (){
  fill ("#c8e8e1")
square (75, 75, 500, 10)


}

function TictactToeCube (x, y, number){
if (cube1Clicked == true){
 
}

if(board[number] == 0)
{
  fill("#ffd8fa");
}
else if(board[number] == 1)
{
  fill("#d4b9ff");
}
else
{
  fill("#a4eaff");
}

  square(x, y, 150, 10)
}

function mousePressed (){
console.log ("click")

let clicked = false;

if (mouseX > cubeX1 && mouseX < cubeX1 + 150 &&
    mouseY > lineY1 && mouseY < lineY1 + 150 && board[0] == 0) {
  board[0] = currentplayer;
  clicked = true;
}
else if (mouseX > cubeX2 && mouseX < cubeX2 + 150 &&
         mouseY > lineY1 && mouseY < lineY1 + 150 && board[1] == 0) {
  board[1] = currentplayer;
  clicked = true;
}
else if (mouseX > cubeX3 && mouseX < cubeX3 + 150 &&
         mouseY > lineY1 && mouseY < lineY1 + 150 && board[2] == 0) {
  board[2] = currentplayer;
  clicked = true;
}
else if (mouseX > cubeX1 && mouseX < cubeX1 + 150 &&
         mouseY > lineY2 && mouseY < lineY2 + 150 && board[3] == 0) {
  board[3] = currentplayer;
  clicked = true;
}
else if (mouseX > cubeX2 && mouseX < cubeX2 + 150 &&
         mouseY > lineY2 && mouseY < lineY2 + 150 && board[4] == 0) {
  board[4] = currentplayer;
  clicked = true;
}
else if (mouseX > cubeX3 && mouseX < cubeX3 + 150 &&
         mouseY > lineY2 && mouseY < lineY2 + 150 && board[5] == 0) {
  board[5] = currentplayer;
  clicked = true;
}
else if (mouseX > cubeX1 && mouseX < cubeX1 + 150 &&
         mouseY > lineY3 && mouseY < lineY3 + 150 && board[6] == 0) {
  board[6] = currentplayer;
  clicked = true;
}
else if (mouseX > cubeX2 && mouseX < cubeX2 + 150 &&
         mouseY > lineY3 && mouseY < lineY3 + 150 && board[7] == 0) {
  board[7] = currentplayer;
  clicked = true;
}
else if (mouseX > cubeX3 && mouseX < cubeX3 + 150 &&
         mouseY > lineY3 && mouseY < lineY3 + 150 && board[8] == 0) {
  board[8] = currentplayer;
  clicked = true;
}

if (clicked) {
  currentplayer = currentplayer == 1 ? 2 : 1;
}
}