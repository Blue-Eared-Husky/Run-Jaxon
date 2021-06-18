var runner,runnerAnim;
var path, pathImg;
var edges,edge1,edge2;

function preload(){
  runnerAnim = loadAnimation("Runner-1.png", "Runner-2.png");
  pathImg = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);

  path = createSprite(200,200,10,10);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;

  runner = createSprite(200,365,10,10);
  runner.addAnimation("running", runnerAnim);
  runner.scale = 0.05;
  runner.depth = 10;

  edges = createGroup();
  edge1 = createSprite(400,200,90,400);
  edge1.visible = false;
  edges.add(edge1);
  edge2 = createSprite(0,200,105,400);
  edge2.visible = false;
  edges.add(edge2);
}

function draw() {
  background(0);
  if (keyWentDown("left")){
    runner.velocityX = -10;
  }
  if (keyWentDown("right")){
    runner.velocityX = 10;
  }
  runner.collide(edges);

  if (path.y>400){
    path.y = height/2;
  }

  drawSprites();
}
