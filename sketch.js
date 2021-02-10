
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,bin,bin1,binImage;
var world;

function preload(){
	binImage = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	bin1 = createSprite(1200, 550, 200, 250);
	bin1.addImage(binImage);
	bin1.scale = 0.7;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paper1 = new Paper(350,500);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  if(keyDown("t")){
	Matter.Body.applyForce(paper1.body , paper1.body.position,{x:75 , y:-100});
  }

  groundObject.display();
  dustbinObj.display();

  drawSprites();

  paper1.display();

}

