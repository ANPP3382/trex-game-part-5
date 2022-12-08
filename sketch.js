
var trex ,trex_running;
var edges;
var ground, groundImg, invisible;
var nubeImg, nubes;
var obs1, obs2, obs3, obs4, obs5, obs6, obs1Img, obs2Img, obs3Img, obs4Img, obs5Img, obs6Img;
function preload(){  
 trex_running = loadAnimation("trex1.png","trex3.png", "trex4.png");
groundImg=loadImage("ground2.png");
nubeImg = loadImage("cloud.png")
obs1Img = loadImage("obstacle1.png");
obs2Img = loadImage("obstacle2.png")
obs3Img = loadImage("obstacle3.png")
obs4Img = loadImage("obstacle4.png")
obs5Img = loadImage("obstacle5.png")
obs6Img = loadImage("obstacle6.png")
}

function setup(){
  createCanvas(600,200)
  
  //crear sprite de Trex
  trex = createSprite(50, 70, 20, 50)
  edges = createEdgeSprites();
  trex.addAnimation("running", trex_running);
  trex.scale=0.5;
  
//Piso
ground= createSprite(180, 180, 600, 20);
ground.addImage(groundImg)
invisible=createSprite(200,190,600,10);
invisible.visible=false;

grupoNubes = createGroup();
grupoObs = createGroup();
}

function draw(){
  background("orange")
  ground.velocityX=-2; 
  if(ground.x < 0){ 
    ground.x=ground.width/2; 
  }
 
  if(keyDown("space") && trex.y>=100){
    trex.velocityY = -10
}
trex.velocityY=trex.velocityY +0.8;
 trex.collide(invisible); 


 
crearNubes();
crearObstaculos();
drawSprites();

}



//Función de nubes 
function crearNubes()
{ 
  if(frameCount % 60 === 0){
    var nube = createSprite(600,100,30,10); 
    nube.addImage(nubeImg)
    nube.scale = 0.5
    nube.y=Math.round(random(10, 100));
    nube.velocityX = -3
    nube.depth = trex.depth;
    trex.depth = trex.depth+3;
    nube.lifetime = 50;
  }
   
}


//Función de obstaculos
function crearObstaculos()
{
  if(frameCount % 60 === 0){
 var obs1 = createSprite(600, 150, 30, 10)
 var num = Math.round(random(1,6)); 
 switch(num){ 
  case 1:obs1.addImage(obs1Img); break; 
  case 2:obs1.addImage(obs2Img); break; 
  case 3:obs1.addImage(obs3Img); break; 
  case 4:obs1.addImage(obs4Img); break; 
  case 5:obs1.addImage(obs5Img); break;
  case 6:obs1.addImage(obs6Img); break; 
}


  obs1.scale = 0.5
  obs1.velocityX = -3
  obs1.lifetime = 250;
  grupoObs.add(obs1)

  } 

  
}




