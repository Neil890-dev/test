
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var trre, stone, ground, slingshot
var m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12
var world
var boy

function preload()
{
	boy = loadImage("boy.png")
}

function setup() {
	createCanvas(1400, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone = new Stone (230,420,30)

	m1 = new Mango(1200,130,30)
	m2 = new Mango(1100,100,40)
	m3 = new Mango(1150,140,30)
	m4 = new Mango(1000,90,40)
	m5 = new Mango(1100,80,30)
	m6 = new Mango(1000,250,30)
	m7 = new Mango(900,170,30)
	m8 = new Mango(900,150,40)
	m9 = new Mango(1020,200,30)
	m10 = new Mango(1200,70,30)
	m11 = new Mango(1100,100,30)
	m12 = new Mango(1150,50,40)

	ground = new Ground(width/2,500,width,20)
	tree = new Tree(1000,580)
	slingshot = new Sling(stone.body,{x:240,y:460})

  Engine.run(engine);
  
  
}


function draw() {
  Engine.update(engine)
  rectMode(CENTER);
  background('blue')
  textSize(20)
  textFont("Arial")
  text("Press space for new stone",50,50)
  image(boy, 200, 400, 200, 300)

  m1.display()
  m2.display()
  m3.display()
  m4.display()
  m5.display()
  m6.display()
  m7.display()
  m8.display()
  m9.display()
  m10.display()
  m11.display()
  m12.display()
  tree.display()
  stone.display()
  ground.display()
  slingshot.display()

  detectollision(stone,m1)
  detectollision(stone,m2)
  detectollision(stone,m3)
  detectollision(stone,m4)
  detectollision(stone,m5)
  detectollision(stone,m6)
  detectollision(stone,m7)
  detectollision(stone,m8)
  detectollision(stone,m9)
  detectollision(stone,m10)
  detectollision(stone,m11)
  detectollision(stone,m12)

  drawSprites();
 
}



function mouseReleased(){
	slingshot.fly();
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY})
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:230,y:420})
		slingshot.attach(stone.body)
	}
}

function detectollision(sstone,mmango){
	mangoBodyPosition=mmango.body.position
	stoneBodyPosition=sstone.body.position
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=mmango.r+sstone.r)
	{
		Matter.Body.setStatic(mmango.body,false)
	}
}