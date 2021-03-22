class Polygon{
    constructor(x,y,r){
        var options={
            isStatic: false,
            friction: 0.1,
            density: 0.8,
            restitution:0
        }
        this.body= Bodies.circle(x,y,r,options);
        this.r=r;
        this.image= loadImage("polygon.png");
        World.add(world,this.body);
    }
    display(){
        var p= this.body.position;
        var angle= this.body.angle;

        push();
        translate(p.x,p.y);
        rotate(angle);
        strokeWeight(5);
        stroke("black")
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop();
    }
    

}