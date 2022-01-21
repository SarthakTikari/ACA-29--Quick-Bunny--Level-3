var  edges,bunny, carrot, ob1, ob2,ob3,ob4,ob5,ob6,ob7,ob8,ob9,ob10;
var score=5;


function preload(){
  gardenImage = loadImage("images/background.jpg")
  bunnyimg= loadImage("images/bunnyImg.png")
  carroti= loadImage("images/carrot.png")
  snakeimg= loadImage("images/snake.png")
  brick= loadImage("images/bricksnew.jpg")
}




function setup() {
  createCanvas(1370,640);


  var bg= createSprite(350,185)
  bg.addImage(gardenImage);
  bg.scale=1.70
  bunny=createSprite(290,580,20,20);
  bunny.addImage(bunnyimg);
  bunny.scale=0.4
  carrot=createSprite(1270,40,50,50);
  carrot.addImage(carroti);
  carrot.scale=0.18
  ob1=createSprite(0,200,20,10);
  ob1.addImage(brick);
  ob1.scale=0.23
  ob2=createSprite(240,200,220,20);
  ob2.addImage(brick);
  ob2.scale=0.23
  ob3=createSprite(570,200,190,20);
  ob3.addImage(brick);
  ob3.scale=0.23
  ob4=createSprite(900,200,190,20);
  ob4.addImage(brick);
  ob4.scale=0.23
  ob11=createSprite(1150,200,180,20)
  ob11.addImage(brick);
  ob11.scale=0.23
  ob5=createSprite(1380,200,140,20);
  ob5.addImage(brick);
  ob5.scale=0.23
  ob2.velocityX=-1.8;
  ob3.velocityX=1.8;
  ob4.velocityX=1.8;
  ob11.velocityX=1.8;
  ob6=createSprite(0,300,90,20);
  ob6.addImage(brick);
  ob6.scale=0.23
  ob7=createSprite(240,300,220,20);
  ob7.addImage(brick);
  ob7.scale=0.23
  ob8=createSprite(570,300,190,20);
  ob8.addImage(brick);
  ob8.scale=0.23
  ob9=createSprite(900,300,190,20);
  ob9.addImage(brick);
  ob9.scale=0.23
  ob12=createSprite(1150,300,180,20)
  ob12.addImage(brick);
  ob12.scale=0.23
  ob10=createSprite(1380,300,140,20);
  ob10.addImage(brick);
  ob10.scale=0.23
  ob7.velocityX=1.8;
  ob8.velocityX=1.8;
  ob9.velocityX=1.8;
  ob12.velocityX=1.8;
  edges=createEdgeSprites();

 snakeGroup = new Group();






}
function draw() {
  background("green");  
  bunny.shapeColor="white"
  carrot.shapeColor="pink"
  ob1.shapeColor="brown"
  ob2.shapeColor="brown"
  ob3.shapeColor="brown"
  ob4.shapeColor="brown"
  ob5.shapeColor="brown"
  ob6.shapeColor="brown"
  ob7.shapeColor="brown"
  ob8.shapeColor="brown"
  ob9.shapeColor="brown"
  ob10.shapeColor="brown"
  ob11.shapeColor="brown"
  ob12.shapeColor="brown"

  bunny.bounceOff(edges[0]);
  bunny.bounceOff(edges[1]);
  bunny.bounceOff(edges[2]);
  bunny.bounceOff(edges[3]);

  if(ob2.isTouching(ob1)){
    ob2.velocityX=1.8
  }
  
  if(ob2.isTouching(ob3)){
    ob2.velocityX=-1.8
  }
  if(ob3.isTouching(ob4)){
    ob3.velocityX=-1.8
  }
  if(ob3.isTouching(ob2)){
    ob3.velocityX=1.8
  }

  
  if(ob7.isTouching(ob8)){
    ob7.velocityX=-1.8
  }
  if(ob7.isTouching(ob6)){
    ob7.velocityX=1.8
  }
  if(ob8.isTouching(ob9)){
    ob8.velocityX=-1.8
  }
  if(ob8.isTouching(ob7)){
    ob8.velocityX=1.8
  }
  if(ob9.isTouching(ob12)){
    ob9.velocityX=-1.8
  }
  if(ob9.isTouching(ob8)){
    ob9.velocityX=1.8
  }
  if(keyDown("up")){
    bunny.y=bunny.y-4;
  }
  if(keyDown("down")){
    bunny.y=bunny.y+4;
  }
  if(keyDown("right")){
    bunny.x=bunny.x+4;
  }
  if(keyDown("left")){
    bunny.x=bunny.x-4;
  }
  if(bunny.isTouching(ob6)){
    bunny.x=290;
    bunny.y=580;
    score=score-1
  }
  if(bunny.isTouching(ob7)){
    bunny.x=290;
    bunny.y=580;
    score=score-1
  }
  if(bunny.isTouching(ob8)){
    bunny.x=290;
    bunny.y=580;
    score=score-1
  }
  if(bunny.isTouching(ob9)){
    bunny.x=290;
    bunny.y=580;
    score=score-1
  }
  if(bunny.isTouching(ob10)){
    bunny.x=290;
    bunny.y=580;
    score=score-1
  }
  if(bunny.isTouching(ob1)){
    bunny.x=290;
    bunny.y=580;
    score=score-1
  }
  if(bunny.isTouching(ob2)){
    bunny.x=290;
    bunny.y=580;
    score=score-1
  }
  if(bunny.isTouching(ob3)){
    bunny.x=290;
    bunny.y=580;
    score=score-1
  }
  if(bunny.isTouching(ob4)){
    bunny.x=290;
    bunny.y=580;
    score=score-1
  }
  if(bunny.isTouching(ob5)){
    bunny.x=290;
    bunny.y=580;
    score=score-1
  }
  if(bunny.isTouching(carrot)){
    bunny.x=290;
    bunny.y=580;
    score=score+1
  }
  if(ob4.isTouching(ob3)){
    ob4.velocityX=1
  }
  if(ob4.isTouching(ob11)){
    ob4.velocityX=-1
  }
  if(ob11.isTouching(ob5)){
    ob11.velocityX=-1
  }
  if(ob11.isTouching(ob4)){
    ob11.velocityX=1
  }
  if(ob12.isTouching(ob10)){
    ob12.velocityX=-1
  }
  if(ob12.isTouching(ob9)){
    ob12.velocityX=1
  }




 

    generateSnake()

  
  for(var i=0; i< snakeGroup.length; i++){
    var temp = snakeGroup.get(i);
    if(bunny.isTouching(temp)){
      bunny.x=290;
      bunny.y=580;
      score=score-1
    }
  }
  


  drawSprites()
  stroke("red");
  noFill();

  textSize(20)
  text("Chances Remaining: "+score,300,20)


}



function generateSnake(){
if(frameCount % 50 ===0){
  var snake = createSprite(1380, random(136,470), random(30,120),5);
  snake.velocityX = random(-1,-4);
  snake.addImage(snakeimg);
  snake.scale=0.35
  snake.shapeColor="yellow";

  snakeGroup.add(snake)
  if(snake.isTouching(ob1)){
    snake.destroy()
  }
  if(snake.isTouching(ob2)){
    snake.destroy()
  }
  if(snake.isTouching(ob3)){
    snake.destroy()
  }
  if(snake.isTouching(ob4)){
    snake.destroy()
  }
  if(snake.isTouching(ob5)){
    snake.destroy()
  }
  if(snake.isTouching(ob6)){
    snake.destroy()
  }
  if(snake.isTouching(ob7)){
    snake.destroy()
  }
  if(snake.isTouching(ob8)){
    snake.destroy()
  }
  if(snake.isTouching(ob9)){
    snake.destroy()
  }
  if(snake.isTouching(ob10)){
    snake.destroy();
  }

  
}
}