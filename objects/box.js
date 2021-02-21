class Box{
    constructor(x,y,angle){
        var options={
            isStatic: false,
            restitution: 0.3,
            friction: 1.0,
            density: 0.5
        }
        this.x=x
        this.y=y
        this.width=100
        this.height=100
        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        World.add(world,this.body)
        Matter.Body.setAngle(this.body, angle);

    }
    display(){
        var pos =this.body.position
        push ();
        translate (pos.x,pos.y);
        rectMode(CENTER)
        fill ("green")
        rotate(this.body.angle);
        rect(0,0,this.width,this.height)
        pop ();
    }
}