class Polygon {
  constructor(x, y,width,height) {
    var options = {
        'restitution':1,
        'friction':0.8,
        'density':0.5
    }
  this.body = Bodies.rectangle(x,y,width,height,options);
  this.width = width;
  this.height = height;      
  this.x = x;
  this.y = y;
    World.add(world, this.body);
  }
  display(){
     
      push();
      translate(this.body.position.x, this.body.position.y);
      strokeWeight(6);
      stroke("black");
      fill("red");
      rectMode(CENTER);
      rect(this.x,this.y,this.width,this.height);
      pop();
  }
};
