class Mango{
    contructor(x,y,radius){
        var options={
            isStatic:true
    }
    this.y=y
    this.x=x
    this.r=radius
    this.image=loadImage("mango.png")
    this.body=Bodies.circle(x,y,radius,options)
    World.add(world,this.body)
    }
    display(){
        var mangopos=this.body.position
        push()
        translate(mangopos.x,mangopos.y)
        imageMode(CENTER)
        image(this.image,0,0,this.r*2,this.r*2)
        pop()
    }

}

