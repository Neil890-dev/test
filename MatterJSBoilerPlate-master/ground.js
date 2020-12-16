class Ground
{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.x=x
        this.y=y
        this.width=width
        this.height=height
        this.body=Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body)
    }
    display(){
        var groundPos=this.body.position
        push()
        rectMode(CENTER)
        translate(groundPos.x, groundPos.y)
        rect(0,0,this.width, this.h);
        pop()
    }
}