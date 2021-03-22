const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Constraint= Matter.Constraint;

var engine,world;
var backgroundImg;
var score=0;

//var bg = "bg2.jpg";
var gameState="attach";

function preload(){
   getBackgroundImg();
  }
function setup(){

   var canvas= createCanvas(1400,650);

engine= Engine.create();
world= engine.world;

ground1= new Ground(650,500,300,20);
ground2= new Ground(1000,350,300,20);

block1= new Block(650,470,40,60,"chartreuse");
block2= new Block(610,470,40,60,"chartreuse");
block3= new Block(570,470,40,60,"chartreuse");
block4= new Block(530,470,40,60,"chartreuse");
block5= new Block(690,470,40,60,"chartreuse");
block6= new Block(730,470,40,60,"chartreuse");
block7= new Block(770,470,40,60,"chartreuse");

block8=  new Block(650,410,40,60,"yellow");
block9=  new Block(610,410,40,60,"yellow");
block10= new Block(570,410,40,60,"yellow");
block11= new Block(690,410,40,60,"yellow");
block12= new Block(730,410,40,60,"yellow");

block13=  new Block(650,350,40,60,"orange");
block14=  new Block(610,350,40,60,"orange");
block15=  new Block(690,350,40,60,"orange");

block16=  new Block(650,290,40,60,"crimson");

block17= new Block(1000,320,40,60,"violet");
block18= new Block(960,320,40,60,"violet");
block19= new Block(920,320,40,60,"violet");
block20= new Block(880,320,40,60,"violet");
block21= new Block(1040,320,40,60,"violet");
block22= new Block(1080,320,40,60,"violet");
block23= new Block(1120,320,40,60,"violet");

block28= new Block(1000,260,40,60,"indigo");
block24= new Block(1040,260,40,60,"indigo");
block25= new Block(1080,260,40,60,"indigo");
block26= new Block(960,260,40,60,"indigo");
block27= new Block(920,260,40,60,"indigo");

block29= new Block(1000,200,40,60,"blue");
block30= new Block(960,200,40,60,"blue");
block31= new Block(1040,200,40,60,"blue");

block32= new Block(1000,140,40,60,"chartreuse");

polygon= new Polygon(200,400,50);

launcher= new slingshot(polygon.body,{x:200, y:380})

ground3= new Ground(150,610,300,150);

//Engine.run(engine);

}
function draw(){

    if(backgroundImg)

        background(backgroundImg);
    

    Engine.update(engine);

ground1.display();
ground2.display();

block1.display();
block1.score();
block2.display();
block2.score();
block3.display();
block3.score();
block4.display();
block4.score();
block5.display();
block5.score();
block6.display();
block6.score();
block7.display();
block7.score();
block8.display();
block8.score();
block9.display();
block9.score();
block10.display();
block10.score();
block11.display();
block11.score();
block12.display();
block12.score();
block13.display();
block13.score();
block14.display();
block14.score();
block15.display();
block15.score();
block16.display();
block16.score();
block17.display();
block17.score();
block18.display();
block18.score();
block19.display();
block19.score();
block20.display();
block20.score();
block21.display();
block21.score();
block22.display();
block22.score();
block23.display();
block23.score();
block24.display();
block24.score();
block25.display();
block25.score();
block26.display();
block26.score();
block27.display();
block27.score();
block28.display();
block28.score();
block29.display();
block29.score();
block30.display();
block30.score();
block31.display();
block31.score();
block32.display();
block32.score();

polygon.display();
ground3.display();
launcher.display();


textSize(30);
fill("red");
text("Press 'Space' for second chance",100,50);

textSize(30);
fill("orange");
text("SCORE:"+score,1050,50);

textSize(20)
 fill("purple")
text("Hit each block to score 1 point",100,100);

}
function mouseDragged(){
    if(gameState !="fly" ){
       Matter.Body.setPosition(polygon.body, {x:mouseX, y:mouseY});
   }
   }
   function mouseReleased(){
       launcher.fly();
       gameState="fly";
   }
   function keyPressed(){
       if(keyCode === 32){
           Matter.Body.setPosition(polygon.body, {x:150, y:400})
           launcher.attach(polygon.body);
            gameState="attach";
       }


   }

  async function getBackgroundImg(){

    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>6 && hour<=18){
        bg = "bg1.png";
    }
    else{
        bg = "bg2.jpg";
    }

    backgroundImg = loadImage(bg);


}

