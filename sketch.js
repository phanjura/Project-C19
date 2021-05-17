var PLAY = 1;
var END = 0;
var gameState = PLAY;

var score = 0;



var ground,groundImg;






function preload(){
  
  groundImg = loadImage("background coding.jpg")

  }

function setup() {
  createCanvas(1000, 1500);
  
  ground= createSprite(300,100,600,200);
   
}

function draw() {
  background(180);
  
  ground.addImage(groundImg);
    
    
  drawSprites();
}

