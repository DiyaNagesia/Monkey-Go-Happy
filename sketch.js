
var monkey , monkey_running , ground;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score;
var survivalTime=0;

function preload(){
  
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")       
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.17
   
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4
   ground.x = ground.width/2
  console.x = (ground.x);

  SurvivalTime = 0;

   obstacleGroup = createGroup();
   bananaGroup = createGroup();

}

function draw() {
  background("white");

  if (ground.x < 0){
      ground.x = ground.width/2;
  }

  if (keyDown("space")&& monkey.y >= 140) {
      monkey.velocityY = -12;
      
      }
  
     monkey.velocityY = monkey.velocityY + 0.8
  
     monkey.collide(ground);
  
  stroke("white");
  textSize(20)
  fill("white")
  text("Score: "+ score,500,50)
  
  if(obstacleGroup.isTouching(monkey)){ 
    ground.velocityX = 0; 
    monkey.velocityY = 0; 
    obstacleGroup.setVelocityXEach(0);
    bananaGroup.setVelocityXEach(0);
    obstacleGroup.setLifetimeEach(-1);
    bananaGroup.setLifetimeEach(-1);
  }
 
  
  stroke("black")
  textSize(20)
  fill("black")
  SurvivalTime = Math.ceil(frameCount/frameRate())
  text ("Survival Time: "+ SurvivalTime,100,50)
  
  spawnBanana();
  obstacle();
drawSprites();
}

function obstacle(){
  if (frameCount % 300 === 0) {
      var obstacle = createSprite(400,320,10,40);
       obstacle.addImage(obstacleImage);
        obstacle.scale = 0.2
        obstacle.setlifeTime = 300;
        obstacle.velocityX = -3;
        obstacleGroup.add(obstacle)
    
      }
  
}

function spawnBanana(){
  if (frameCount % 80 === 0){
   var banana = createSprite(400,165,10,40);
    banana.y = Math.round(random(50,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    bananaGroup.add(banana)

    
}
}




