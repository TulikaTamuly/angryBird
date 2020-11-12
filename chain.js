class chain{
    constructor(bodyA,bodyB){
        var options={
            bodyA: bodyA,
            bodyB:bodyB,
            stiffness:0.1,
            length:10
        
        }
        this.rubber=Constraint.create(options)
        World.add(world,this.rubber)
    }
    display(){
        var pos=this.rubber.bodyA.position
        var pose=this.rubber.bodyB.position
        line(pos.x,pos.y,pose.x,pose.y)
    }
}