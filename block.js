class Block{
    constructor(x,y,width,height,color){
        var options={
            friction: 0.5,
            density: 1,
            restitution: 0.1
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width= width;
        this.height= height;
        this.color= color;
        this.visiblity=255;
        World.add(world,this.body);
    }
    display(){
        if(this.body.speed<3){
        var p= this.body.position;
        push();
        rectMode(CENTER);
        var angle= this.body.angle;
        translate(p.x,p.y);
        rotate(angle);
        fill(this.color);
        rect(0,0,this.width,this.height);
        pop();
        }
        else{
            World.remove(world,this.body);
            push();
            this.visiblity=this.visiblity-2;
            tint(255,this.visiblity);
      // image(this.body,this.body.position.x,this.body.position.y,this.body.width,this.body.height);
            pop();
        }
     
    }
    score(){
        if(this.visiblity<0 && this.visiblity>-2){
           score=score+1;
        }
    }

}