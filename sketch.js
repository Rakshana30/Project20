wall = createSprite(1500,200,60,200);
wall.shapeColor = color(70,70,70);

car = createSprite(200,200,50,50);  
car.velocityX = speed;
car.shapeColor = "white";

}

function draw() {
  background(0,0,0);  

    
  

  
       if(wall.x-car.x<(car.width === wall.width/2)){
          
          var deformation = 0.5*weight*speed*speed/22509;
    
      if(deformation<180){
        car.velocityX = 0;
        car.shapeColor = color(0,255,0);      
      }
    
      if(deformation<180 && deformation>100){
        car.velocityX = 0;
        car.shapeColor = color(230,230,0);
      }
    
      if(deformation>100){
        car.velocityX = 0;
        car.shapeColor = color(0,255,0); 
      }
    }
    



 
  drawSprites();
}

  




 
  
