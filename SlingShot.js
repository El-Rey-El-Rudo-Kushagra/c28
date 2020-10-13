class SlingShot{
    constructor(bodyA, B){
        var options = {
            bodyA: bodyA,
            pointB: B,
            stiffness: 0.04,
            length: 15
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
        if (this.sling.bodyA!=null){
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }

    fly(){
    this.sling.bodyA=null;
    }
}