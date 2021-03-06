var rabit, rabitImg
var food; carrotimg
var meat;

function preload(){
  rabitImg = loadImage("rabit.png")
}

function setup() {
  createCanvas(1500,400);
  rabit = createSprite(80, 315, 50, 50);
  rabit.addImage(rabitImg)
  rabit.scale = 0.3
}
function draw() {
  background(0); 
  food()
  drawSprites();
}

function food(){
  carot = createSprite(1500,100);
  carot.velocityX = -3
  carrot.addImage(carrotImg)
}