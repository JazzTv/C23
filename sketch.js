const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, box;
var ground;
var box2;

var x, y,width1,height1;

function setup() {
  createCanvas(600,600);

  engine = Engine.create();
  world = engine.world;

 box = new Box (200,200,50,70);
 box2 = new Box (220,150,50,70);
 ground  = new Ground (width/2,height - 10,width,height/20);
  
}

function draw() {
  background(220,255,255);  

  Engine.update(engine)

 
  box.display ();
  box2.display ();
  ground.display();
  
  
}