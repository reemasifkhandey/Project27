class Rope {
    constructor(bodyA, bodyB, OffsetX, OffsetY) {
      this.OffsetX=OffsetX
      this.OffsetY=OffsetY
      var options = {
        bodyA: bodyA,
        bodyB: bodyB,
        pointB:{x:this.OffsetX,y:this.OffsetY}
      };
  
     
      this.rope = Constraint.create(options);
      World.add(world, this.rope);
    }
  
        display() {
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        push();
        var Anchor1X = pointA.x;
        var Anchor1Y= pointA.y;
        
        var Anchor2X= pointB.x+this.OffsetX;
        var Anchor2Y= pointB.y+this.OffsetY;
        stroke(48, 22, 8);
        strokeWeight(4);
  
        line(Anchor1X, Anchor1Y, Anchor2X, Anchor2Y);
        pop();
    }
  }