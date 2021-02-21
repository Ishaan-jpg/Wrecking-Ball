const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground;
var ball;
var box;
var string;

function setup(){
var canvas=createCanvas(3000,800);

engine = Engine.create();
world = engine.world;

ground = new Ground(0,height,6000,30);
ball = new Ball(1300,500,50);
box1 = new Box(1600,600,PI/2);
box2 = new Box(1600,500,PI/2);
box3 = new Box(1600,400,PI/2);
box4 = new Box(1600,300,PI/2);
box5 = new Box(1600,200,PI/2);
box6 = new Box(1600,100,PI/2);
box7 = new Box(1700,600,PI/2);
box8 = new Box(1700,500,PI/2);
box9 = new Box(1700,400,PI/2);
box10 = new Box(1700,300,PI/2);

string = new String(ball.body,{x:1300,y:150});
}
function draw(){
background(230)
Engine.update(engine);

ground.display();
ball.display();
string.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
}
function keyPressed(){
	if(keyCode==32){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:500,y:-45})
	}
}