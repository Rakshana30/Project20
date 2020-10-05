var car1,car2,car3,car4;
var speed,weight;
var border1,border2,border3;
var wall1,wall2,wall3,wall4;

function setup() {
  createCanvas(1600,400);
speed = random(55,90);
weight = random(1,1);


border1 = createSprite(100,100,3000,10);
border1.shapeColor = "white"; 

border2 = createSprite(200,200,3000,10);
border2.shapeColor = "white"; 

border3 = createSprite(300,300,3000,10);
border3.shapeColor = "white"; 

wall1 = createSprite(1570,50,20,60);
wall1.shapeColor = color(70,70,70);

wall2 = createSprite(1570,150,20,60);
wall2.shapeColor = color(70,70,70);

wall3 = createSprite(1570,250,20,60)
wall3.shapeColor = color(70,70,70);

wall4 = createSprite(1570,350,20,60);
wall4.shapeColor = color(70,70,70);

car1 = createSprite(30,50,20,20);  
car1.shapeColor = "white";

car2 = createSprite(30,150,20,20);
car2.shapeColor = "white";

car3 = createSprite(30,250,20,20);
car3.shapeColor = "white";

car4 = createSprite(30,350,20,20);
car4.shapeColor = "white";


}

function draw() {
  background(0,0,0);  

  car1.velocityX = speed;  
  car2.velocityX = speed; 
  car3.velocityX = speed;  
  car4.velocityX = speed;  
  
 
if (car1.x - wall1.x < wall1.width/2 + car1.width/2
  && wall1.x - car1.x < car1.width/2 + wall1.width/2
  && wall1.y - car1.y < car1.height/2 + wall1.height/2
  && car1.y - wall1.y < wall1.height/2 + car1.height/2){
    car1.velocityX = 0;
    car1.shapeColor = color(255,0,0);
  }  
  
if (car2.x - wall2.x < wall2.width/2 + car2.width/2
    && wall2.x - car2.x < wall2.width/2 + car2.width/2
    && car2.y - wall2.y < wall2.height/2 + car2.height/2
    && wall2.y - car2.y < wall2.height/2 + car2.height/2) {
      car2.velocityX = 0; 
      car2.shapeColor = color(0,255,0);
    }
  
if (car3.x - wall3.x < wall3.width/2 + car3.width/2
      && wall3.x - car3.x < wall3.width/2 + car3.width/2
      && car3.y - wall3.y < wall3.height/2 + car3.height/2
      && wall3.y - car3.y < wall3.height/2 + car3.height/2){
        car3.velocityX = 0;
        car3.shapeColor = color(230,230,0);
      }
  
if (car4.x - wall4.x < wall4.width/2 + car4.width/2
        && wall4.x - car4.x < wall4.width/2 + car4.width/2
        && car4.y - wall4.y < wall4.height/2 + car4.height/2
        && wall4.y - car4.y < wall4.height/2 + car4.height/2){
           car4.velocityX = 0;
          car4.shapeColor = color(255,100,0);
        }

       // if(wall1.x-car2.x<(car.width === wall1.width/2)){
          
          //var deformation = 0.5*weight*speed*speed/22509;
    
      //if(deformation<180){
             
     // }
    
      //if(deformation<180 && deformation>100){
       // car1.shapeColor = color(230,230,0);
      //}
    
      //if(deformation>100){
        //car1.shapeColor = color(0,255,0); 
      //}
    //}
    



 
  drawSprites();
}