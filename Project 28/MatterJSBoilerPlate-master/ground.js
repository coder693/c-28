class ground
{
    constructor(x,y,width,height)
    {
        var options={
            isStatic:true
            
          }
        
        this.object=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.object);
        this.width=width;
        this.height=height
    }
    display()
    {
        rectMode(CENTER);
        fill("green");
        rect(this.object.position.x,this.object.position.y,this.width,this.height);
        
     }

}