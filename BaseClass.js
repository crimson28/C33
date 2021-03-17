class BaseClass{

    constructor(x,y,width,height,angle){

        var options = {

            restitution : 0.8,
            friction: 1,
            density: 1
        }
        this.body = Bodies.rectangle(x,y,width,height, options);

        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/base.png");

        World.add(world,this.body);

    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;
        
        //Capture the new settings
        push();
        //to change the 0 of the axis to a given x and y position
        translate(pos.x,pos.y);
        //rotate angle
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        //revert to the original settings
        pop();
    }
}