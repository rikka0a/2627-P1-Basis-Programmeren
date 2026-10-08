let img;
let optionClicked = false;
let optionButton;

function preload (){
  img = loadImage('img/SV_BG.jpg');
}

function setup() {
  createCanvas(800, 600);
  
  optionButton = createButton('hi');
  optionButton.position(100, 300);
  optionButton.size(250, 100);
  optionButton.style('border-radius', '20px');
  optionButton.style('border', 'none');
  optionButton.style('font-size', '24px');
  optionButton.style('background-color', '#f6bb6e');
  optionButton.mousePressed(() => {
    optionClicked = !optionClicked;
    optionButton.style('background-color', optionClicked ? '#fed288' : '#f6bb6e');
  });
}

function draw() {
  background(220);

  image(img, 0, 0, 800, 600);

  question()
}

function question(){
  
  // iea: when its wrong turn it to #883a0d
  // and if its right turn it to #fed288
    
  fill ('#f6bb6e')
rect (250, 70, 300, 200 , 20)
}
