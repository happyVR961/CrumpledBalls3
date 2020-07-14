

class Paper {
constructor(x, y, radius) {
     var options = {
        'restitution':0.3,
     'friction':1.2,
         'density':1.2
    }
    this.body = Bodies.circle(x, y, radius, options);
    this.radius = radius;
    //this.height = height;
   this.image = loadImage("paper.png");
    World.add(world, this.body);
  }
  display(){
    //var angle = this.body.angle;
    // push();
    // translate(this.body.position.x, this.body.position.y);
    // rotate(angle);
    imageMode (CENTER);
    //fill("brown")
    image(  this.image, this.body.position.x , this.body.position.y, this.radius, this.radius);
   // pop();
  }
}