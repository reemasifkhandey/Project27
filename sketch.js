
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var roof,rope,rope2,rope3,rope4,rope5,bob1,bob2,bob3,bob4,bob5;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,200,400,30);
  
  bob1= new Bob(400,500,30);
  bob2= new Bob(330,500,30);
  bob3= new Bob(260,500,30);
  bob4= new Bob(470,500,30);
  bob5= new Bob(540,500,30);

	rope = new Rope(bob1.body,roof.body,5,0);
  rope2 = new Rope(bob2.body,roof.body,-70,0);
  rope3 = new Rope(bob3.body,roof.body,-140,0);
  rope4= new Rope(bob4.body,roof.body,70,0);
  rope5 = new Rope(bob5.body,roof.body,140,0);
  
	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background("pink");
  roof.display();

  rope.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  drawSprites();
  
 
}
function keyPressed(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(bob3.body,bob3.body.position,{x:-70,y:-70})
}
}


