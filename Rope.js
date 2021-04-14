class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            length: 300
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(myWorld, this.sling);
    }

    display(){

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            
            strokeWeight(3);
            stroke(48,22,8);
            line(pointB.x , pointB.y, pointA.x , pointA.y);   
            pop();
        }
    }
    
}