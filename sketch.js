var obj1,obj2
var bullet,wall;
var speed,weight;
var thickness;
var a,b;
function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50,200, 90, 30);
  bullet.shapeColor = color("white");
  thickness = random(22,83);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
  speed = random(103,321);
  weight = random(30,52);
  
  
}

function draw() {
  background("black"); 
  bullet.velocityX = speed;
  if (hasCollided(bullet,wall)) {
    bullet.velocityX = 0;
   var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

  if(damage > 10){
    bullet.shapeColor = color(255,0,0);
  }
  if(damage <10){
    bullet.shapeColor = color(0,255,0);
  }
  }
  drawSprites();
}
function hasCollided(a,b){
  bulletRightEdge = a.x + a.width;
  wallLeftEdge = b.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true;
 }
 return false;
}