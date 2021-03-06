class Ball{
    constructor(x,y,r){
        var options={
            restitution:0.8,
            friction:1.0,
            density:1.0
        }
        this.x=x
        this.y=y
        this.r=r
        this.body=Bodies.circle(this.x,this.y,this.r/2,options);
        World.add(world,this.body);

    }
    display(){
        push ()
        var pos =this.body.position
        translate (pos.x,pos.y);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop ()
    }

}