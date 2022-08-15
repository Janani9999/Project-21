
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
var lwall;
var rwall;

function preload() {

}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	var ball_options = {
		isStatic: false,
		restitution: 0.7,
		friction: 0,
		density: 0.5
	}

	ball = Bodies.circle(200, 30, 15, ball_options)
	World.add(world, ball)

	ground=new Ground(500,490,1000,20)
	lwall=new Ground(600,450,20,180)
	rwall=new Ground(800,420,20,120)
}


function draw() {
	rectMode(CENTER);
	ellipseMode(RADIUS);
	background("black");
	fill("white")
	ellipse(ball.position.x, ball.position.y, 15, 15)
	
	lwall.show()
    ground.show()
    rwall.show() 

	drawSprites();

}


function keyPressed() {
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball, {x:0,y:0}, {x:10.6,y:7.6})	
	}
}


