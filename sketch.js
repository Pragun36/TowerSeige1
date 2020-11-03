const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12;
var platform1,platform2;
var ground;

function setup(){
createCanvas(600,600);
engine = Engine.create();
world = engine.world;

box1 = new Box(500,495,30,30);
box2 = new Box(500,465,30,30);
box3 = new Box(500,435,30,30);
box4 = new Box(470,480,30,30);
box5 = new Box(470,450,30,30);
box6 = new Box(440,465,30,30);
//box7 = new Box(500,500,30,30);
//box8 = new Box(500,500,30,30);
//box9 = new Box(500,500,30,30);
//box10 = new Box(500,500,30,30);
//box11 = new Box(500,500,30,30);
//box12 = new Box(500,500,30,30);


platform1 = new Platform(550,490,10,100);
//platform2
}

function draw() {
background("white");  
Engine.update(engine);







box1.display();
box2.display();
box3.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
platform1.display();}