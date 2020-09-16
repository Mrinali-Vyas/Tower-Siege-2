class Block {
  constructor(x, y, width, height) {
    var options = {
        'restitution':1,
        'friction':0.5,
        'density':0.2
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.Visiblity = 255;

    World.add(world, this.body);
  }
  display(){
 
    if(this.body.speed < 8){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
    translate(pos.x, pos.y);
    strokeWeight(6);
    stroke("black");
    rotate(angle);
    rectMode(CENTER);
    rect(0, 0, this.width, this.height);
    pop();
     }
     else{
       World.remove(world, this.body);
       push();
       this.Visiblity = this.Visiblity - 5;
       tint(255,this.Visiblity);
       rect(this.body,this.body.position.x,this.body.position.y,50,50);
       pop();
     }
     
    
  }
};