class Tree{
    constructor(x,y){
        var options ={
            isStatic:true
        }

        this.y=y
        this.x=x
        this.image=loadImage("tree.png")
        this.body=Bodies.rectangle(this.x,this.y,200,200,options)
        World.add(world,this.body)

    }

    display(){
        var treepos=this.body.position
        push ()
        imageMode(CENTER)
        rectMode(CENTER)
        this.image(this.image,0,0)
        translate(treepos.x,treepos.y)
        pop ()
    }
}
