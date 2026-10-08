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
