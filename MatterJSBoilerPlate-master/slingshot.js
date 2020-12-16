class Sling{
    constructor(body,stick){
        var option = {
            bodyA: body,
            pointB: stick,
            stiffness: 0.05
        }
        this.bodyA=body
        this.pointB=stick
        this.slingshot=Constraint.create(option)
        World.add(world,this.slingshot)
    }
        attach(body){
            this.slingshot.bodyA=body
        }
            
        fly(){
            this.slingshot.bodyA=null
        }
        

    
}