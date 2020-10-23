var car,wall;
var speed,weight;
var deformation;

function setup() {
  createCanvas(1600,400);
  
  speed = random(20,50)
  weight = random(400,1500)

  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  car.shapeColor = "white"

  wall = createSprite(1500, 200, 60, height/2)
  wall.shapeColor = "#505050"
}

function draw() {
  background("black");

  if(car.isTouching(wall)){
  car.collide(wall);

    deformation = (0.5 * weight * speed*speed)/2250
    
    if(deformation<100){
      car.shapeColor = "green"
    }else if(deformation<180 && deformation>100){
      car.shapeColor = "yellow"
    }else{
      car.shapeColor = "red"
    }
  }

  drawSprites();
}