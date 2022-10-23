var path,boy,cash,diamonds,jewelry,sword;
var pathImg,boyImg,obtaclesImg,swordImg;
var treasureCollection = 0;
var cashG,diamondsG,jewelryG,swordGroup;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  obstaclesImg = loadImage("obstacle2.png");
  swordImg = loadImage("sword.png");
  endImg =loadAnimation("gameOver.png");
}

function setup(){
  
  createCanvas(400,600);
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;


//creating boy running
boy = createSprite(70,580,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
  
  

obstaclesG=new Group();
swordGroup=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  
    createObstacles();
    createSword();

 
    else if (obstaclesG.isTouching(boy)) {
      obstaclesG.destroyEach();
      treasureCollection=treasureCollection+100;
    }

      // treasureCollection=+ 150;
      // treasureCollection= 150;
      // treasureCollection= treasureCollection - 150;
       treasureCollection= treasureCollection + 150;
      
    }else{
      if(swordGroup.isTouching(boy)) {
        gameState=END;
        
        // boy.addAnimation(endImg);
         boy.addAnimation("SahilRunning",endImg);
        // boy.addAnimation("SahilRunning");
        // boy.addAnimation(SahilRunning,endImg);

        boy.x=200;
        boy.y=300;
        boy.scale=0.6;
        
        // obstaclesG.destroyEach;
        // swordGroup.destroyEach;

        // obstaclesG.destroy();
        // swordGroup.destroy();
        
         obstaclesG.destroyEach();
         swordGroup.destroyEach();
        
        // obstaclesGdestroyEach();
        // swordGroupdestroyEach();
        
        obstaclesG.setVelocityYEach(0);
        swordGroup.setVelocityYEach(0);
     
    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,10,30);
  }





function createObstacles() {
  if (World.frameCount % 320 == 0) {
  var obstacles = createSprite(Math.round(random(50, 350),40, 10, 10));
  obstacles.addImage(obstaclesImg);
  obstacles.scale=0.03;
  obstacles.velocityY = 3;
  obstacles.lifetime = 150;
  obstaclesG.add(obstacles);
}
}