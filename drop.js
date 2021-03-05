class drop{
    constructor(x,y){
        var options={
            friction : 1.0,
            density : 1.0,
            //restitution : 1.0
        }
        this.body = Bodies.circle(x,y,10,options);
        this.radius = 8;
        World.add(world,this.body);
    }

    updateY(){
        if(this.body.position.y > height){
          Matter.Body.setPosition(this.body,{x:random(0, 650), y:random(0, 650)});
        }
      }

    display(){
        strokeWeight(1);
        stroke("blue");
        fill("blue");
        ellipseMode(CENTER);
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius)

       
    }
}