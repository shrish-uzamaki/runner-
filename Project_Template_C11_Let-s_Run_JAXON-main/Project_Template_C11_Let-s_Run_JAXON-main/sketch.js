var runner, runner_running, runner_collided;
var path, pathImage;



function preload(){
  //pre-load images
  runner_running = loadAnimation("Runner-1.png","Runner-1.png");
  
  pathImage = loadImage("path.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here

  runner = createSprite(200,160,20,50);
  runner.addAnimation("running", runner_running);
  runner.scale = 0.5;
  
  path = createSprite(200,200);
  ground.addImage(pathImage);
  ground.velocityY = 4;
  
  
}

function draw() {
  background(0);

  if (path.y < 400){
    path.y = height/2;
  }

  if(keyDown("left")&& runner.x >= -10) {
    runner.velocityX = -13;
}

if(keyDown("right")&& runner.x >= 10) {
  runner.velocityX = 13;
}
drawSprites();
}
