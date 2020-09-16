const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var platform1,platform2;
var polygon, slingShot,polygonImg;

function setup() {
  createCanvas(1200,500);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,height,1200,20);
  platform1 = new Ground(970, 230, 310, 18);
  platform2 = new Ground(580, 420, 350, 18);

  block1 = new Block(500,410,40,50);
  block2 = new Block(510,410,40,100);
  block3 = new Block(540,410,40,50);
  block4 = new Block(570,410,40,50);
  block5 = new Block(600,410,40,50);
  block6 = new Block(630,410,40,50);
  block7 = new Block(660,410,40,50);
  block8 = new Block(690,410,40,50);
  
  block9 = new Block(865,220,35,45);
  block10 = new Block(895,220,35,45);
  block11 = new Block(925,220,35,45);
  block12 = new Block(955,220,35,45);
  block13 = new Block(985,220,35,75);
  block14 = new Block(1015,220,35,45);
  block15 = new Block(1045,220,35,45);
  block16 = new Block(1075,220,35,75);

  block18 = new Block(540,360,40,50);
  block19 = new Block(570,370,40,70);
  block22 = new Block(660,370,40,50);
  block23 = new Block(690,370,40,100);

  block24 = new Block(925,180,35,45);
  block25 = new Block(955,180,35,45);
  block26 = new Block(985,180,35,45);
  block27 = new Block(1015,180,35,45);
  block28 = new Block(1045,180,35,45);
  block33 = new Block(895,180,35,75);

  block29 = new Block(600,330,60,70);
  block30 = new Block(650,330,56,70);
  block31 = new Block(540,330,50,70);
  block32 = new Block(460,330,40,90);

  block34 = new Block(955,150,35,40);
  block35 = new Block(985,140,35,50);
  block36 = new Block(1015,140,35,40);
  block37 = new Block(1045,140,35,20);


  block41 = new Block(875,130,35,162);
 
  block44 = new Block(965,100,35,80);
  block45 = new Block(992,110,35,40);
  block46 = new Block(1022,100,35,80);
  block47 = new Block(1052,100,35,100);
  block48 = new Block(1082,135,35,135);

  block50 = new Block(510,180,40,49);
  block52 = new Block(720,230,40,70);
  block53 = new Block(620,200,40,49);
  block54 = new Block(670,160,48,100);

  polygon = new Polygon(100,100,30,30);
  slingshot = new SlingShot(polygon.body,{x:150, y:150});

}

function draw() {
  background(53,67,77);
  Engine.update(engine);
  fill("black");

  ground.display(); 
  fill("brown"); 

  platform1.display();
  platform2.display();
  fill(251,132,29);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  fill(2,134,169);
  block18.display();
  block19.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block33.display();
 fill("green");
 block29.display();
 block30.display();
 block31.display();
 block32.display();
 block34.display();
 block35.display();
 block36.display();
 block37.display();
 fill("red");

 block41.display();
 block44.display();
 block45.display();
 block46.display();
 block47.display();
 block48.display();

 fill("yellow");
 block50.display();
 block52.display();
 block53.display();
 block54.display();

 slingshot.display();
 polygon.display();


}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
  if( keyCode === 32){
     slingshot.attach(polygon.body);
  }
}