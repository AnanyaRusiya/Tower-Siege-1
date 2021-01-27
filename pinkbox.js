class  pinkBox{
    constructor(x, y, width, height) {
        var options = {
           // isStatic: false,
            restitution: 0.4,
            frictions: 0.0,
          //  density:0.02
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
        display(){
        var pos = this.body.position;
        strokeWeight(2);
        stroke(2);
        fill("pink");
        rect(pos.x, pos.y, this.width, this.height);

    }
} 