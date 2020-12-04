class Wall{
    constructor(x,y,width,height){
        var options = {
            isStatic : true,

        }
this.wall=Bodies.rectangle(x,y,width,height,options)
World.add(world,this.wall);

this.width = width;
this.height= height;
    }
    display(){
        var pos = this.wall.position;
        fill("red");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height)
    }
}