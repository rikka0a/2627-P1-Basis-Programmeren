function setup() {
  createCanvas(400, 400);


}

function draw() {
  background(220);
  for (let i = 0; i < 5; i++){
    rect(50 + i*50, 50, 50, 50);
  }


  for (let i = 0; i < 3; i++){
    if (i == 0){
      fill ("red");
    }
    else if (i == 1){
      fill ("pink");
    }
    else if (i == 2){
      fill("green")
    }
    circle(50 + 100, 50 + i*65, 50,);

    
  }


}

