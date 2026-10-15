let energy = 200;
let happiness = 200;
let hunger = 200;
let hygiene  = 200;

function setup() {
  createCanvas(800, 700);

  setInterval(stats, 1000);
}

function draw() {
  background(220);

  stats()
  actions()
}

function stats() {

  energy -= 0.01;
  if (energy <= 0){
    energy = 0
  }

// energy
// Gain more by: eating, washing up
// Lose more by: being sad (less happiness)
    fill ("white")
  rect (20, 30, 200, 30, 10) 
    fill (255, 145, 239) // pink
  rect (20, 30, energy, 30, 10)

// happiness
// Gain more by: washing up
// Lose more by: hyienge and energy being low
    fill("white")
  rect (20, 70, 200, 30, 10)
    fill(255, 249, 61) // yellow
  rect (20, 70, happiness, 30, 10)

  hunger -= 0.02;
  if (hunger <= 0){
    hunger = 0
  }

// hunger
// gain more by: eating
// lose more by: with time-  
    fill ("white")
  rect (20, 110, 200, 30, 10)
    fill (171, 255, 61) // green
  rect (20, 110, hunger, 30, 10)

 
  hygiene -= 0.03;
  if (hygiene <= 0){
    hygiene = 0
  }

// hygiene
// gain more by: washing up
// lose more by: eating and with time- 
    fill ("white")
  rect (20, 150, 200, 30, 10)
    fill (61, 184, 255) // blue
  rect (20, 150, hygiene, 30, 10)

}

function actions (){
  let x = 300 // just to make life easier
  
  // buttons
    fill (255, 145, 239) // pink
  rect (x, 30, 100, 100)
    fill(255, 249, 61) // yellow
  rect (x + 110, 30, 100, 100)
    fill (171, 255, 61) // green
  rect (x + 220, 30, 100, 100)
    fill (61, 184, 255) // blue
  rect (x + 330, 30, 100, 100)

  // text
  fill("black")
  textSize(30)
  text ("Feed", x + 237, 90)
  

}