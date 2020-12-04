//var box1, box2, box3
var ground;
var paper
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}


function setup() {
	createCanvas(1500, 700);

	engine = Engine.create();
	world = engine.world;

bottomBase = new Wall(1200,655,200,15)
leftWall = new Wall(1090,575,20,180);
rightWall =new Wall(1300,575,20,180)

paper1 = new Paper(100,100,20)

Engine.run


	Engine.run(engine);
  
}


function draw() {
  background(0);
  paper1.display();
  leftWall.display();
  rightWall.display();
  bottomBase.display();


 
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyFroce(paper1.body,paper1.body.position,{x:1230,y:70})
	}
}



