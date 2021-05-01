class helicopter {
    constructor(x,y,width,height);

    var options = {
        restitution=1.0
    }
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.w= width;
    this.h=height;
    World.add=(world,this.body);
    console.log(this.body);
    }
display(){
    if{keycode===LEFT_ARROW){
        helicopterSprite.x=helicopterSprite.x-20;
    }
        Matter.Body.translate(packageBody,{x:-20,y;0})
    }
    if(Keycode===DOWN_ARROW){
        Matter.Body.setStatic(packageBody,false);
    }
}