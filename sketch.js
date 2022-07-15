
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine
let world

var ball
var groundObj
var left
var right



function preload()
{
	
}

function setup() {
	createCanvas(1500, 1500);
	engine = Engine.create(); 
	
	world = engine.world;

	//Create the Bodies Here.
    groundObj = new Ground (width/2,670,width,20)
    left = new Ground (1100,600,20,120)
	right = new Ground (1300,600,20,120)

ball_options = {
	isStatic : false,
	restitution : 0.3,
	friction : 0,
	density : 1.2
}

ball = Bodies.circle (100,10,20,ball_options)
World.add (world,ball)

  
	Engine.run(engine);
	
  
}


function draw() {
	background("pink");
	fill ("green")
	stroke ("black")
	strokeWeight (2.6)
	groundObj.display ()
    left.display ()
    right.display ()
	ellipse (ball.position.x,ball.position.y,20)

  rectMode(CENTER);
  ellipseMode (RADIUS)


  
  
 // drawSprites();
 
	

 
}

function keyPressed () {
	if ( keyCode === UP_ARROW) {
		Matter.Body.applyForce (ball,{x:0,y:0},{x:60,y:-3})
		}
		}


