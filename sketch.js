var tom, racoon;
var rr;
var road,roadImage;
var cash, cashImage, cG;
var diamonds,diamondsImage, dG;
var jewels,jewelsImage, jG;
var x, y;



function preload(){
roadImage = loadImage("Road.png");
cashImage = loadImage("cash.png");
diamondsImage = loadImage("diamonds.png");
jewelsImage = loadImage("jwell.png");
}

function setup(){
   createCanvas(displayWidth,displayHeight);
   road = createSprite(width/2,200);
   road.addImage(roadImage);
   road.velocityY=4;
   tom = createSprite(width/2,height-20, 50, 50);
   tom.shapeColor= "red";
   racoon = createSprite(200,height-520,50,50);
   racoon.shapeColor="blue";
   
  
   cG = new Group();
   dG = new Group();
   jG = new Group();
   
}

function draw (){
background(roadImage)
if(road.y>height){
  road.y= height/2;
}
if(keyIsDown(RIGHT_ARROW)){
tom.velocityX=4;
tom.velocityY=0;
}
if(keyIsDown(LEFT_ARROW)){
  tom.velocityX=-4;
  tom.velocityY=0;
  }

  console.log(racoon.x);
  // moving the racoon along the xaxis
  if(racoon.x > width){

      racoon.x = racoon.x-5;
    } else {
      racoon.x = racoon.x + 5;
    }
  // for (var i= 0; i<=width;i=i+5){
  //   racoon.x= i;
  // }
  // for (var j=width; j=0; i=i-5){
  //   racoon.x= j;
  // }
//  if(World.frameCount%300==0){
//      rr=random(0,displayWidth);
//      racoon.x= rr;  
//    }
// createEdgeSprites();
//   racoon.bounceOff(edges);
//for(var i= 0;i<=width;i++){
//}

 //rr = racoon.x;
// if(rr == 200){
//   rr=rr+5;
// }




//racoonmotion();
spawnCash();
spawnDiamonds();
spawnJwells();
drawSprites();
}

function racoonmotion(){
  
}

function spawnCash(){
  if(World.frameCount%200==0){
     var cash = createSprite(Math.round(random(50,width-50),40,10,10));
     cash.addImage(cashImage);
     cash.scale= 0.15;
     cash.velocityY=3;
     cash.lifetime=300;
     cG.add(cash);
  }
}

function spawnDiamonds(){
  if(World.frameCount%300==0){
     var diamonds = createSprite(Math.round(random(50,width-50),40,10,10));
     diamonds.addImage(diamondsImage);
     diamonds.scale= 0.1;
     diamonds.velocityY=3;
     diamonds.lifetime=300;
     dG.add(diamonds);
  }
}

function spawnJwells(){
  if(World.frameCount%400==0){
     var jewels = createSprite(Math.round(random(50,width-50),40,10,10));
     jewels.addImage(jewelsImage);
     jewels.scale= 0.3;
     jewels.velocityY=3;
     jewels.lifetime=300;
     jG.add(jewels);
  }
}














