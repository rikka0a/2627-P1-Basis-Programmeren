let img;

function preload (){
  img = loadImage('img/SV_BG.jpg');
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(220);

  image(img, 0, 0, 800, 600);

  question()
  options()
}

function question(){
  
  // iea: when its wrong turn it to #883a0d
  // and if its right turn it to #fed288
    
  fill ('#f6bb6e')
rect (250, 70, 300, 200 , 20)
}

function options(){

  rect (100, 300, 250, 100, 20)
  rect (100, 300, 250, 100, 20)
  rect (100, 300, 250, 100, 20)
  rect (100, 300, 250, 100, 20)
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