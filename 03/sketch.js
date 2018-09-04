var estrella = 0
var lot = 0;
var tys = 400;
var vel = 0
var dir = 1;
var col=0

function setup() {
  createCanvas(400, 400);
    background(0);
  
  frameRate(15)
}

function draw() {
  
  strokeWeight(1);
    
    //eclipse
  if (frameCount > 0 && frameCount < 500){
  stroke(0)
    ellipse(lot, 150, 90, 90);
    
  fill (255, 225, 0,6)
  ellipse(tys, 150, 100, 100);
    lot=lot

  lot = lot + 1;
  tys = tys - 1;
}
  
      if (lot >= 100 && lot < 200){
    }

        //planeta
  fill(0,0,col,100)
  col= col + 1
  strokeWeight(1);
     ellipse(200,300,70+(sin(frameCount/10)*50),110);

  //anillo
  noFill();
  stroke(100,100,100,2);
  strokeWeight(8);
  ellipse(200,300,140+(sin(frameCount/10)*50),50);

  
  //estrellas del fondo
  strokeWeight(1);
  fill(256, 256, 256,10)
  ellipse(100,100,5,5)
   ellipse(150,250,5,5)
   ellipse(300,100,5,5)
   ellipse(100,300,5,5)
   ellipse(100,10,5,5)
   ellipse(10,100,5,5)
   ellipse(100,100,5,5)
   ellipse(300,280,5,5)
 
}