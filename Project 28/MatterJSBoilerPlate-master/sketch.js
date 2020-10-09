
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
var tree1,ground1,stone1,boyimg,constraint1
function preload()
{
	boyimg=loadImage("boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree1=new tree(600,500,200,500)
	ground1=new ground(400,670,800,10);
	stone1=new stone(90,550,40,40)
	boy=createSprite(100,600,30,30)
	
	boy.addImage(boyimg)
	boy.scale=0.1
	mango1=new mango(600,400,50,50)
	mango2=new mango(600,400,50,50)
	constraint1=new chain(stone1,boy); 
	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
	rectMode(CENTER);
  background("white");
  tree1.display();
  ground1.display();
  stone1.display();
  mango1.display();
  mango2.display();
  detectCollision(stone1,mango1)
  detectCollision(stone1,mango2)

  drawSprites();
 
}
function mouseDragged(){
   
        Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
    
}
function keyPressed(){
	if(keyCode===32)
	{
		Matter.Body.setPosition(stone1.body,{x:235,y:420})
		chain.attach(stone1.body);

	}
}


function mouseReleased(){
    chain.fly();
   
}

function detectCollision(stone,mango){
mango1BodyPosition=mango.Body.Position
stone1BodyPosition=stone.Body.Position
var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=mango.r+stone.r)
{
	Matter.Body.setStatic(mango.body,false);

}
}



