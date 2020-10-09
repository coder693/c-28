class mango {
    constructor(x,y,radius)
    {
        var options = {
            isStatic:true,
            'restitution':0,
            'friction':1,
          
        }
        this.body = Bodies.circle(x,y,radius);
        this.radius = radius;
        this.image=loadImage("mango.png");
        
        
        World.add(world, this.body); 
        
        

    }
    
    display()
    {
        //fill("pink");
        imageMode(CENTER);
        
        push();
        translate(this.body.position.x, this.body.position.y);
        
        image(this.image,600,550,this.radius);
        pop();
          
        
      
        
    }
}