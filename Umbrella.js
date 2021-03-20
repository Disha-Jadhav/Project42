class umbrella
{
    constructor(x, y)
    {
        var options = 
        {
            isStatic: true
        }
        this.x = x;
        this.y = y;
        this.r = 50;
        this.image = loadImage("WalkingFrame/walking_1.png", "WalkingFrame/walking_2.png", 
                               "WalkingFrame/walking_3.png", "WalkingFrame/walking_4.png",
                               "WalkingFrame/walking_5.png", "WalkingFrame/walking_6.png",
                               "WalkingFrame/walking_7.png", "WalkingFrame/walking_8.png");
        this.body = Bodies.circle(x, y, 50, options);
        World.add(world, this.body);
    }

    display() 
    {
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y+70, 300, 300);
    }
}