class SlingShot{
    constructor(bodyA, pointB){ //to make a sling shot between body and a point
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    fly(){//to make the bird fly when mouse is released
        this.sling.bodyA=null;
    }

    display(){
        if(this.sling.bodyA){//condition that take point A for body A only when body A is not null
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        
    
    }
}