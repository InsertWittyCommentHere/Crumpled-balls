var paper, ground, paperImage, dustbinImage
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dustbinImage = loadImage('dustbin.png')
}

function setup() {
	createCanvas(1500, 900);

	ground = Bodies.rectangle(750, 850, 1500, 50, {isStatic:true})
	engine = Engine.create();
	world = engine.world;
	World.add(world, ground)

	//Create the Bodies Here.
	paper = new Paper(300, 800, 30)
	box1 = new Box(1310, 735, 20, 180)
	box2 = new Box(1190, 735, 20, 180)
	box3 = new Box(1250, 815, 100, 20)

	Engine.run(engine);
	console.log(box3)	
}


function draw() {
  imageMode(CENTER)
  rectMode(CENTER)
  ellipseMode(RADIUS)
  background(150, 150, 150)
  image(dustbinImage, 1250, 735, 120, 180)
  rect(ground.position.x, ground.position.y, 1500, 50)
  paper.display()


 
}
function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.Body, paper.Body.position, {x:85*9/4, y:-85*9/4})
	}
}



