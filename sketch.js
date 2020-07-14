var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var ball, ground1;
var box1, box2, box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);

	ball = new Paper (100,687,60);
	Engine.run(engine);
	ground1 = new Ground (400,690,800,40);
	
	//box1.scale = 0.5;
	launcher = new Launcher(ball.body, {x:100, y:200});
	box2  = new Dustbin2(500,510,20,300);
	box3 = new Dustbin2(710,510,20,300);
	box1 = new Dustbin (600,520,100,0);
}


function draw() {
  rectMode(CENTER);
  background(255);
  ball.scale = 0.5;
  
   ball.display();
   ground1.display();
   
   launcher.display();
   box2.display();
   box3.display();
   box1.display();
  drawSprites();
 
}
// function keyPressed(){
// 	if (keyCode === UP_ARROW){
// 	Matter.Body.applyForce(ball.body, ball.body.position,{x:500,y:-1095})
// 	}
// }
function mouseDragged(){
	Matter.Body.setPosition(ball.body,{x:mouseX, y:mouseY});
}
function mouseReleased(){
	launcher.Fly();
}
