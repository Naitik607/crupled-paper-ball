
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
 var paper;
var container1;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,height,800,20);
	container1 = new Container(600,650,200,20)
	paper = new Paper(10,650,PI/2)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
//displaying Objects
  ground.display();
  container1.display();
  paper.display();


  // drawing objects on screen
  drawSprites();
 
}

/*function keyPressed(){
	if(keyCode === UP_ARROW){

	}

}*/



