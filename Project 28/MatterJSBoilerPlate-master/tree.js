class tree
{
    constructor(x,y,width,height)
    {
        var options={
            isStatic:true
            
          }
        
        this.object=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.object);
        this.image=loadImage("tree.png");
        this.width=width;
        this.height=height
    }
    display()
    {
        
        
        imageMode(CENTER);
        image(this.image,600,450, this.width, this.height);
     }

}