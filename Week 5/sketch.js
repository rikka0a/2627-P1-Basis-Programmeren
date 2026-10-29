let img;

function preload (){
  panda = loadImage('img/SV_BG.jpg');
  test = loadImage ('img/normal.gif')
}

function setup() {
  createCanvas(800, 700);
}

function draw() {
  background(220);

  image(panda, 0, 0, 800, 600);
  image(test, 250, 200, 500, 500)
 options()

}

function question(){
  
  // iea: when its wrong turn it to #883a0d
  // and if its right turn it to #fed288
    
  fill ('#f6bb6e')
rect (250, 70, 300, 200 , 20)
}

function options(){
  noStroke()
fill ('#502e0297')
rect (500, 350, 34, 32)
rect (470, 500, 34, 32)

}

// 10 vragen over stardew valley

// - 1. who does not like prismatic shard
// a. Shane
// b. Penny
// c. Hayley
// d. Lewis
// - 2. what egg is most expensive
// a. Dino egg
// b. Golden egg
// c. Void egg
// d. Ostrich Egg
// - 3. What days on summer does it always storm?
// a. 13, 26
// b. 14, 25
// c. 18, 19
// d 9, 15
// - 4. What does the ruby ring do?
// a. Gives you attack speed
// b. Increases attack by 10%
// c.  Increases critical strike chance by 10%
// d. Gives you +1 defense

