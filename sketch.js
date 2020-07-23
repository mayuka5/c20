
var movingrect,fixedrect;
var b1,b2;

function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(200, 200, 50, 80);
  movingrect=createSprite(400, 200, 80, 50);

  fixedrect.shapeColor="green";
  movingrect.shapeColor="green";

  b1=createSprite(600, 100, 50, 80);
  b2=createSprite(600, 300, 80, 50);
  b1.velocityY=+5;
  b2.velocityY=-5;
}

function draw() {

  background(0); 
  
  movingrect.x=mouseX;
  movingrect.y=mouseY;
  
  if(movingrect.x-fixedrect.x <fixedrect.width/2+movingrect.width/2
  &&fixedrect.x-movingrect.x <fixedrect.width/2+movingrect.width/2
  &&movingrect.y-fixedrect.y <fixedrect.height/2+movingrect.height/2
  &&fixedrect.y-movingrect.y <fixedrect.height/2+movingrect.height/2){
    fixedrect.shapeColor="red";
  movingrect.shapeColor="red";
  }
  else{
    fixedrect.shapeColor="green";
  movingrect.shapeColor="green";
  }

  if(b2.x-b1.x <b1.width/2+b2.width/2
    &&b1.x-b2.x <b1.width/2+b2.width/2){
     b1.velocityX=b1.velocityX*(-1); 
     b2.velocityX=b2.velocityX*(-1); 
    }

    if(b2.y-b1.y <b1.height/2+b2.height/2
    &&b1.y-b2.y <b1.height/2+b2.height/2){
      b1.velocityY=b1.velocityY*(-1); 
      b2.velocityY=b2.velocityY*(-1); 
    }











  drawSprites();
}