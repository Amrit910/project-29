function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}

var ground, box1, box2;
var box3, box4, box5;
var box6, box7, box8;
var box9, box10, box11;
var box12, box13, box14;

box1 = new Block(330,365,30,40);
box2 = new Block(360,365,30,40);
box3 = new Block(390,235,30,40);
box4 = new Block(420,235,30,40);
box5 = new Block(450,235,30,40);
box6 = new Block(360,195,30,40);
box7 = new Block(390,195,30,40);
box8 = new Block(420,195,30,40);
box9 = new Block(390,155,30,40);

Matter.Body.Polygon(200,200,20,10);
polygon = Bodies.circle(50,200,20);

World.add(world, polygon);

slingshot = new slingshot(this.polygon,{x:100 y:200})

function mouseDragged(){
  ellipse(mouseX, mouseY);
  return false;

  if (value === 0) {
    value 235;
  }else{
    value=0;
  }
  }


} 

function mouseReleased(){
  fly();
  ellipse(mouseX, mouseY);
  return false;

  if (value === 0) {
    value 235;
  }else{
    value=0;
  }
  }

}