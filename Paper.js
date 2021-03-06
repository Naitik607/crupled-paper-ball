 class Paper{
     constructor(x,y,radius){
         var options={
             isStatic:false,
             restitution:0.3,
             friction:0.5,
             density:1.2
         }
        this.body = Bodies.circle(x,y,radius,options)
        this.x=x
        this.y=y;
        this.radius=radius;
        World.add(world,this.body)

     }
     display(){
         push();
         var pos= this.body.position
         translate(this.body.position.x, this.body.position.y,20,20);
        ellipseMode(RADIUS)
        fill("pink")
        ellipse(pos.x,pos.y,this.radius,this.radius);
        pop();
     }
 }