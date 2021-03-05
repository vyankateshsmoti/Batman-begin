const Engine = Matter.Engine;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine,world;
var maxdrops = 100;
var drops=[];

var umbrella;

var thunder_1,thunder_2,thunder_3;

function preload(){
    thunder_1 = loadImage("thunderbolt/1.png");
    thunder_2 = loadImage("thunderbolt/2.png");
    thunder_3 = loadImage("thunderbolt/3.png");
    
}

function setup(){
  canvas = createCanvas(500,550);
  engine = Engine.create();
  world = engine.world

  umbrella = new boy(200,430);   

  if(frameCount % 150 ===0){

  for(var i = 0 ; i<maxdrops ;i++){
      drops.push(new drop(random(0,400),random(0,400) ));
  }
}
  
    
}

function draw(){
    
    background("black");
    Engine.update(engine)

    var rand = Math.round(random(1,3));
    if(frameCount % 80 === 0){
        var thunder = createSprite(random(10,400),random(10,30),20,20);
        switch(rand){
            case 1 : thunder.addImage("thunderbolt/1.png",thunder_1);
            break;
            case 2 : thunder.addImage("thunderbolt/2.png",thunder_2);
            break;
            case 3 : thunder.addImage("thunderbolt/3.png",thunder_3);
            break;

        }
        thunder.scale = random(0.3,0.5);
        thunder.lifetime = 2;
    }
    umbrella.display();
    
   

   for(var i = 0; i<maxdrops; i++){
    drops[i].display();
    drops[i].updateY();
    
}
drawSprites();
}   

