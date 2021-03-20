const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var umbrella1;
var drops = [];
var maxDrops = 100;
var thunder, thunder1, thunder2, thunder3, thunder4;
var rand;
var thunderCreateFrame = 0;

function preload()
{
    thunder1 = loadImage("thunderbolt/1.png");
    thunder2 = loadImage("thunderbolt/2.png");
    thunder3 = loadImage("thunderbolt/3.png");
    thunder4 = loadImage("thunderbolt/4.png");
}

function setup()
{
    createCanvas(500, 700);
    engine = Engine.create();
    world = engine.world;

    umbrella1 = new umbrella(200, 500);

    for(var i = 0; i<maxDrops; i++)
    {
        drops.push(new drop(random(0, 500), random(0, 500)));
    }
}

function draw()
{
    Engine.update(engine);
    background(0);

    umbrella1.display();

    rand = Math.round(random(1, 4));
    if(frameCount % 100 === 0)
    {
        thunderCreateFrame = frameCount;
        thunder = createSprite(random(10, 370), random(10, 30), 10, 10);
        switch(rand)
        {
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break;
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = 0.5;
    } 

    if(thunderCreateFrame + 10 === frameCount && thunder)
    {
        thunder.destroy();
    }

    for(var i = 0; i < maxDrops; i++)
    {
        drops[i].display();
        drops[i].update();
    }

    drawSprites();
}