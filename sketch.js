var paper, ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 900);

	ground = Bodies.rectangle(750, 850, 1500, 50, {isStatic:true})
	engine = Engine.create();
	world = engine.world;
	World.add(world, ground)

	//Create the Bodies Here.
	paper = new Paper(300, 800, 20)
	box1 = new Box(1310, 775, 20, 100)
	box2 = new Box(1190, 775, 20, 100)
	box3 = new Box(1250, 815, 100, 20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rect(ground.position.x, ground.position.y, 1500, 50)
  paper.display()
  box1.display()
  box2.display()
  box3.display()


 
}
function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.Body, paper.Body.position, {x:85, y:-85})
	}
}



