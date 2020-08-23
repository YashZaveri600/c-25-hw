
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3;
var ground;
var ball;
function preload(){


paper=loadImage("paper.png");
dustbin=loadImage("dustbingreen.png");
{
	
}
}
function setup() {
	 createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	var ground_options={
		isStatic:true
	}
ground=Bodies.rectangle(400,690,800,50,ground_options)
World.add(world,ground)	
	Engine.run(engine);
  box1=Bodies.rectangle(540,620,20,100,ground_options);
  World.add(world,box1);
  box2=Bodies.rectangle(650,660,200,20,ground_options);
  World.add(world,box2);
  box3=Bodies.rectangle(760,620,20,100,ground_options);
  World.add(world,box3);
  var options={
	  isStatic:false,
	  restitution:0.3,
	  friction:0.5,
	  density:1.2
  }
  ball=Bodies.circle(120,660,20,options);
  World.add(world,ball)
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  text(mouseX+","+mouseY,mouseX,mouseY);
  fill("red");
 rect(ground.position.x,ground.position.y,800,50);
 rect(box1.position.x,box1.position.y,20,100);
 rect(box2.position.x,box2.position.y,200,20);
 rect(box3.position.x,box3.position.y,20,100);
imageMode(CENTER);
image(paper,ball.position.x,ball.position.y,50,50);
image(dustbin,650,550,260,240);
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:58,y:-58});
	}
}



