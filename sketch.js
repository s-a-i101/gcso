var car,wall
var speed,weight




function setup() {
speed= random(55,90);
weight= random(400,1500);

car=createSprite(50,200,50,50);
car.velocityX=speed;
wall=createSprite(1500,200,60,height/2);



  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {


if(car.X-wall.x===car.widht/2-wall.x/2){
  car.shapeColour="red";
  wall.shapeColour="red";
  car.velocityX=0;


}
else {
  car.shapeColour="green";
  wall.shapeColour="green";
}






  background(255,255,255);  
  drawSprites();
}