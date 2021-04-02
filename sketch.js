const Engine = Matter.Engine ;
const World = Matter.World ;
const Bodies = Matter.Bodies ;

var engine , world , obj1 ;
var obj2 ;

function setup() {
  createCanvas(800,400);
  
engine = Engine.create ();
world = engine.world ;


box1 = new box (140,40,50,50);
box2 = new box (101,100,50,70);
G1 = new Ground (00,390,800,10);


}

function draw() {
  background("yellow");  
  
Engine.update (engine);

box1.display();
box2.display();
G1.display();





}