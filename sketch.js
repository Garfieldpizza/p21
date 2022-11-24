const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball
var button1, button2, button3

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);


  var bounce = {
    restitution:0.95
  }
  ball = Bodies.circle(200, 200, 20, bounce)
  World.add(world, ball)

  button1 = createImg("right.png")
  button1.position(20, 25)
  button1.size(50, 50)
  button1.mouseClicked(horizontal)

  button2 = createImg("up.png")
  button2.position(20,75)
  button2.size(50, 50)
  button2.mouseClicked(vertical)
  
}
function vertical(){
  Matter.Body.applyForce(ball,{x:0,y:0}, {x:0, y:-0.05})
}

function horizontal(){
  Matter.Body.applyForce(ball,{x:0,y:0}, {x:0.05, y:0})
}



function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);

  ellipse(ball.position.x, ball.position.y, 20, 20)
}

