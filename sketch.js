const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world;
var ground;
var polygon;
var slingShot;
var stand1,stand2;

function preload(){
  polygonImg=loadImage("polygon.png");
}
function setup(){
    var canvas = createCanvas(900,400);
   engine = Engine.create();
   world = engine.world;
  
  ground = new Ground();
  blueBox1 = new blueBox(300,275,30,40);
  blueBox2 = new blueBox(330,275,30,40);
  blueBox3 = new blueBox(360,275,30,40);
  blueBox4 = new blueBox(390,275,30,40);
  blueBox5 = new blueBox(420,275,30,40);
  blueBox6 = new blueBox(450,275,30,40);
  blueBox7 = new blueBox(480,275,30,40);

  pinkBox8 = new pinkBox(330,235,30,40);
  pinkBox9 = new pinkBox(360,235,30,40);
  pinkBox10 = new pinkBox(390,235,30,40);
  pinkBox11 = new pinkBox(420,235,30,40);
  pinkBox12 = new pinkBox(450,235,30,40);
  greenBox13 = new greenBox(360,195,30,40);
  greenBox14 = new greenBox(390,195,30,40);

  greenBox15 = new greenBox(420,195,30,40);
  blueBox16 = new blueBox(390,155,30,40);
  blueBox17 = new blueBox(640,175,30,40);
  blueBox18 = new blueBox(670,175,30,40);
  blueBox19 = new blueBox(700,175,30,40);
  blueBox20 = new blueBox(730,175,30,40);
  blueBox21 = new blueBox(760,175,30,40);
  greenBox22 = new greenBox(670,135,30,40);
  greenBox23 = new greenBox(700,135,30,40);
  greenBox24 = new greenBox(730,135,30,40);
  pinkBox25 = new pinkBox(700,95,30,40);

  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);

polygon = Bodies.circle(50,200,20);
World.add(world,polygon);

slingShot = new Slingshot(this.polygon,{x:100,y:200});

Engine.run(engine);
}


function draw(){
  background(56,44,44);
  Engine.update(engine);
ground.display();
stand1.display();
stand2.display();
strokeWeight(2);
  stroke(15);

fill("skyblue");
  blueBox1.display();
  blueBox2.display();
  blueBox3.display();
  blueBox4.display();
  blueBox5.display();
  blueBox6.display();
  blueBox7.display();

  pinkBox8.display();
  pinkBox9.display(); 
  pinkBox10.display();
  pinkBox11.display();
  pinkBox12.display();
  greenBox13.display();
  greenBox14.display();

  greenBox15.display();
  blueBox16.display();
  blueBox17.display();
  blueBox18.display();
  blueBox19.display();
  blueBox20.display();
  blueBox21.display();

  greenBox22.display();
  greenBox23.display();
  greenBox24.display();
  pinkBox25.display();
 
  slingShot.display();

imageMode(CENTER)
image(polygonImg ,polygon.position.x,polygon.position.y,40,40);
} 
function mouseDragged(){
  Matter.Body.setPosition(this.polygonImg,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}