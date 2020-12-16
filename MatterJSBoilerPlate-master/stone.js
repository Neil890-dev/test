class Stone{
    constructor(x,y,r){
        var options = {
            restitution: 0.1
        }

        this.y=y
        this.x=x
        this.r=r 
        this.image=loadImage("stone.png")
        this.body=Bodies.circle(this.x,this.y,this.r,options)
        World.add(world,this.body)
    }

    display(){
        var stonepos=this.body.position
        push ()
        imageMode(CENTER)
        rectMode(CENTER)
        this.image(this.image,0,0,this.r*2,this.r*2)
        translate(stonepos.x,stonepos.y)
        pop ()
    }

}