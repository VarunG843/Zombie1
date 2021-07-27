const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;

function setup()
{
  createCanvas(600,200);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;

  cliff1 = new Ground(550,150,100,50);
  cliff2 = new Ground(50,150,100,50);
  
  ground = new Ground(200,690,600,20);
  bridge = new Bridge(15,{x:50,y:150});

  jointPoint = new Ground(50,150,100,50);
  Matter.Composite.add(bridge.body,jointPoint);
  link = new Link(bridge, jointPoint);

  rectMode(CENTER);
  textSize(50)
  
}

function draw() 
{
  background(51);
  Engine.update(engine);
  
  ground.show();
  bridge.show();

  cliff1.show();
  cliff2.show();

  
  

 
   
}

















































// const Engine = Matter.Engine;
// const Render = Matter.Render;
// const World = Matter.World;
// const Bodies = Matter.Bodies;
// const Constraint = Matter.Constraint;
// const Body = Matter.Body;
// const Composites = Matter.Composites;
// const Composite = Matter.Composite;



// function setup() {
//   createCanvas(600,200);
//   engine = Engine.create();
//   world = engine.world;
//   frameRate(80);

//   cliff1 = new Ground(550,150,100,50);
//   cliff2 = new Ground(50,150,100,50);

//   bridge = new Bridge(12,{x:550,y:150},{x:50,y:150});
//   Matter.Composite.add(bridge.body, cliff1);
//   Matter.Composite.add(bridge.body, cliff2);
//   link = new Link(bridge, cliff1);
//   link = new Link(bridge, cliff2);
// }

// function draw() {
//   background(51);
//   Engine.update(engine);

//   cliff1.show();
//   cliff2.show();


// }
