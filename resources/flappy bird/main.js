// take canvas as a 2d drawing space
let cvs = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

//time variables
let previousFrameTime;
let deltaTime;

//images

let bird = new Image();
let bg = new Image();
let pipeUp = new Image();
let pipeDown = new Image();
let ground = new Image();

//image sources

bird.src = 'img/birdMid.png';
bg.src = 'img/bg.png';
pipeUp.src = 'img/pipeNorth.png';
pipeDown.src = 'img/pipeSouth.png';
ground.src = 'img/fg.png';

//gap between pipes

let gap = 85;

//score

let score = 0;

//bird position

let bX = 10;
let bY = 150;

//gravity force

let gForce = 2;



let pipes = [];

pipes[0] = {
  x: cvs.width,
  y: 0
}

//draw function
function draw() {
  //draw game objects
  ctx.drawImage(bg, 0, 0);
  ctx.drawImage(bird, bX, bY);

  //gravity exerted on a bird
  bY += gForce;

  //game loop
  for (let i = 0; i < pipes.length; i++) {
    c = pipeUp.height + gap;

    ctx.drawImage(pipeUp, pipes[i].x, pipes[i].y);
    ctx.drawImage(pipeDown, pipes[i].x, pipes[i].y + c);

    pipes[i].x--;

    if (pipes[i].x == 100) {
      pipes.push({
        x:  cvs.width,
        y:  Math.floor(Math.random()*pipeUp.height) - pipeUp.height
      })
    }

    if (pipes[i].x == 5) {
      score++;
      console.log(score);
    }

    if (bX + bird.width >= pipes[i].x && bX <= pipes[i].x + pipeUp.width && (bY <= pipes[i].y + pipeUp.height || bY+bird.height >= pipes[i].y + c) || bY + bird.height >=  cvs.height - ground.height) 
    {
      window.location.reload();
    }
  }
  
  ctx.drawImage(ground, 0, cvs.height - ground.height);
}

//requests browser to update animation
function update() {
  draw();
}

function frame() {
  let thisFrameTime = Date.now();
  deltaTime = thisFrameTime - previousFrameTime;

  update();

  previousFrameTime = thisFrameTime;
  window.requestAnimationFrame(frame);
}


previousFrameTime = Date.now();
window.requestAnimationFrame(frame);


//controls
document.addEventListener('keydown', function(e) {
  if (e.keyCode == 32) {
    bY -= 40;
  }
});
