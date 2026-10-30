let energy = localStorage.getItem("energy") ?? 200;
let happiness = localStorage.getItem("happiness") ?? 200;
let hunger = localStorage.getItem("hunger") ?? 200;
let hygiene = localStorage.getItem("hygiene") ?? 200;

let img;
let pandaEating = false;
let pandaSleeping = false;
let eatingTimeout;
let sleepingTimeout;
let pandaPlaying = false;
let pandaFailing = false;
let playingTimeout;
let EatingTimeout;
let pandaWashing = false;
let washingTimeout;
let pandaSad = false;
let pandaDying = false;


function setup() {
  createCanvas(800, 700);
  pandaEat.pause();
  pandaEat.reset();
  pandaPlay.pause();
  pandaPlay.reset();
  pandaFail.pause();
  pandaFail.reset();
  pandaSleep.pause();
  pandaSleep.reset();
  pandaWash.pause();
  pandaWash.reset();


  setInterval(stats, 1000);
}

function preload() {

  panda = loadImage('panda_animation/normal.gif')
  pandaEat = loadImage('panda_animation/eating.gif')
  pandaPlay = loadImage('panda_animation/Play.gif')
  pandaFail = loadImage('panda_animation/playFail.gif')
  pandaSleep = loadImage('panda_animation/sleep.gif')
  pandaSad = loadImage('panda_animation/sad.gif')
  pandaWash = loadImage('panda_animation/wash.gif')
  pandaDying = loadImage('panda_animation/dying.gif')

}

function draw() {
  background('#acdbe0');


  stats()
  actions()
    image(
    pandaEating
      ? pandaEat
      : pandaSleeping
        ? pandaSleep
        : pandaFailing
          ? pandaFail
          : pandaPlaying
            ? pandaPlay
            : isPandaDead()
              ? pandaDying
              : isPandaSad()
                ? pandaSad
                : panda,
    250,
    200,
    500,
    500,
  );
  image(
    pandaEating
      ? pandaEat
      : pandaSleeping
        ? pandaSleep
        : pandaWashing
          ? pandaWash
          : pandaFailing
            ? pandaFail
            : pandaPlaying
              ? pandaPlay
              : isPandaDead()
                ? pandaDying
                : isPandaSad()
                  ? pandaSad
                  : panda,
    250,
    200,
    500,
    500,
  );
  fixDrawing()

  localStorage.setItem("energy", energy);
  localStorage.setItem("happiness", happiness);
  localStorage.setItem("hunger", hunger);
  localStorage.setItem("hygiene", hygiene);
}

function stats() {

  energy -= 0.01;
  if (energy <= 0) {
    energy = 0
  }

  // energy
  // Gain more by: eating, washing up
  // Lose more by: being sad (less happiness)
  fill("white")
  rect(20, 30, 200, 30, 10)
  fill(255, 145, 239) // pink
  rect(20, 30, energy, 30, 10)

  happiness -= 0.007;
  if (happiness <= 0) {
    happiness = 0
  }

  // happiness
  // Gain more by: washing up
  // Lose more by: hyienge and energy being low
  fill("white")
  rect(20, 70, 200, 30, 10)
  fill(255, 249, 61) // yellow
  rect(20, 70, happiness, 30, 10)

  hunger -= 0.02;
  if (hunger <= 0) {
    hunger = 0
  }

  // hunger
  // gain more by: eating
  // lose more by: with time-  
  fill("white")
  rect(20, 110, 200, 30, 10)
  fill(171, 255, 61) // green
  rect(20, 110, hunger, 30, 10)


  hygiene -= 0.03;
  if (hygiene <= 0) {
    hygiene = 0
  }

  // hygiene
  // gain more by: washing up
  // lose more by: eating and with time- 
  fill("white")
  rect(20, 150, 200, 30, 10)
  fill(61, 184, 255) // blue
  rect(20, 150, hygiene, 30, 10)

}

function actions() {
  const x = 300;
  const colors = [
    [255, 145, 239],
    [255, 249, 61],
    [171, 255, 61],
    [61, 184, 255]
  ];
  const labels = ["Sleep", "Play", "Feed", "Wash"];

  for (let i = 0; i < labels.length; i++) {
    fill(colors[i]);
    rect(x + i * 110, 30, 100, 100, 10);
  }

  fill("black");
  textSize(18);
  textAlign(CENTER, CENTER);
  for (let i = 0; i < labels.length; i++) {
    text(labels[i], x + i * 110 + 50, 80);
  }
}

function mousePressed() {
  if (pandaSleeping || pandaEating || pandaPlaying || pandaWashing) return;

  const x = 300;
  const y = 30;
  const buttonWidth = 100;
  const buttonHeight = 100;
  const gap = 10;

  if (mouseY < y || mouseY > y + buttonHeight) return;

  let button = -1;
  for (let i = 0; i < 4; i++) {
    const buttonX = x + i * (buttonWidth + gap);
    if (mouseX >= buttonX && mouseX <= buttonX + buttonWidth) {
      button = i;
      break;
    }
  }
  if (button === -1) return;
  if (button === 0 && energy >= 50) return;
  if (button === 1 && energy < 20) return;

  // all these things make the animation stop
  // after certain amout of seconds and 
  // restarts where the gifs begings so when
  // you press it again, it starts playing the gif
  pandaSleeping = button === 0;
  pandaEating = button === 2;
  pandaPlaying = button === 1;
  pandaWashing = button === 3;
  pandaFailing = pandaPlaying && random() < 0.25; //a change that the fail animation will play
  clearTimeout(eatingTimeout);
  clearTimeout(sleepingTimeout);
  clearTimeout(playingTimeout);
  clearTimeout(washingTimeout);

  if (pandaSleeping) {
    pandaSleep.reset();
    pandaSleep.play();
    sleepingTimeout = setTimeout(() => {
      pandaSleeping = false;
      pandaSleep.pause();
      pandaSleep.reset();
    }, 3600);
  } else {
    pandaSleep.pause();
    pandaSleep.reset();
  }

  if (pandaWashing) {
    pandaWash.reset();
    pandaWash.play();
    washingTimeout = setTimeout(() => {
      pandaWashing = false;
      pandaWash.pause();
      pandaWash.reset();
    }, 1600);
  } else {
    pandaWash.pause();
    pandaWash.reset();
  }

  if (pandaEating) {
    pandaEat.reset();
    pandaEat.play();
    eatingTimeout = setTimeout(() => {
      pandaEating = false;
      pandaEat.pause();
      pandaEat.reset();
    }, 5500);
  } else {
    pandaEat.pause();
    pandaEat.reset();
  }

  if (pandaPlaying) {
    if (pandaFailing) {
      happiness -= 100;
      if (happiness < 0) happiness = 0;
      pandaFail.reset();
      pandaFail.play();
    } else {
      pandaPlay.reset();
      pandaPlay.play();
    }

    playingTimeout = setTimeout(() => {
      pandaPlaying = false;
      pandaPlay.pause();
      pandaPlay.reset();
      pandaFail.pause();
      pandaFail.reset();
      pandaFailing = false;
    }, 2300);
  }  else {
    pandaPlay.pause();
    pandaPlay.reset();
    pandaFail.pause();
    pandaFail.reset();
  }

  if (button === 0) {
    energy += 200;
    happiness += 20;
    if (energy > 200) energy = 200;
    if (happiness > 200) happiness = 200
  } else if (button === 1) {
    happiness += 75;
    energy -= 25;
    if (energy < 0) energy = 0;
    if (happiness > 200) happiness = 200;
    if (energy > 200) energy = 200;
  } else if (button === 2) {
    hunger += 200;
    energy += 2;
    happiness += 50;
    if (energy > 200) energy = 200;
    if (hunger > 200) hunger = 200;
    if (happiness > 200) happiness = 200;
  } else {
    hygiene += 50;
    energy += 1;
    if (energy > 200) energy = 200;
    if (hygiene > 200) hygiene = 200;
    happiness += 10;
    if (happiness > 200) happiness = 200;
  }

}

function isPandaSad() {
  if (happiness < 100) {
    return true;
  }
  return false;
}

function isPandaDead() {
  if (happiness < 25) {
    return true;
  }
  return false;
}

function fixDrawing() {
  // this is just pure for my gif, where i made 
  // a mistake with drawing and forgetting to color
  // specific pixels.

  fill('#bde6eb')
  noStroke()
  rect(540, 280, 50, 60)

  fill('#b9e1e5')
  rect(560, 230, 50, 50)

  fill('#aedbe0')
  rect(570, 200, 50, 40)
}
