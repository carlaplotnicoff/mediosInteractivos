var miSegundo;
var miMinuto;
var miHora;
var colR = 204;
var colG = 204;
var colB = 204;
var colRmediodia =204;
var colGmediodia = 255;
var colBmediodia = 255;
var colRtarde =	0;
var colGtarde = 136;
var colBtarde = 204;
var colRnoche =	5;
var colGnoche = 1;
var colBnoche = 151;
var tamanoenYpersiana = 100;
var colBsol= 179;
var sizeSolx = 40;
var sizeSoly = 40;
var solmedioDia = 330;
var transpLuz = 0; 
var transpLuna = 0; 
var manual = 1;
var lunaX = 40
var lunaY = 40
var tamanoenYpersiananoche = 0;
var transpLuzNoche = 255
var transpZ = 1

function setup() {
  createCanvas(600, 600);
}

function draw() {
  
  //variables
  miSegundo = second ();
  miMinuto = minute ();
  miHora = hour ();
  
  //cielo que cambia 
background(colR, colG ,colB);


//MONTANAS
      noStroke()
  fill(45, 134, 45)
  ellipse(10,300,300,300)
  ellipse(200,300,450,400)
  ellipse(400,300,400,350)
  ellipse(500,300,450,380)
  
  //pasto
  noStroke()
  fill(57, 172, 57)
  rect(0,250,600,500)
  
  //casa 
  noStroke()
  fill(255, 238, 204)
  rect(170,270,250,150)
  
  //puerta
  noStroke()
  fill(153, 77, 0)
  rect(320,320,80,100)
  
  //marco ventana
  stroke(128, 43, 0)
  strokeWeight(5)
  noFill()
  rect(194,290,100,100)
  
  //techo
  noStroke()
   fill(179, 0, 0)
 beginShape();
  vertex(135, 270);
  vertex(170, 230);
  vertex(415, 230);
  vertex(455, 270);
  endShape();
  

//ventana
noStroke()
fill(153, 230, 255)
rect(195,290,100,100) 

//if manana: persiana suben, cielo gris, sale el sol
  
if( miHora >= 6 && miHora < 12){  
  
//cambio de luz en la manana de gris a azul claro
  if (colR <= 204)
  {
    colR = colR+ 1/20;
  }
  
  if (colG <= 255)
  {
    colG = colG + 1/20;
  }

    if (colB <= 255)
  {
    colB = colB + 1/20;
  }

  //persiana que sube, disminuye en eje y
  if(tamanoenYpersiana > 0 ){
  fill(255);
  tamanoenYpersiana = tamanoenYpersiana - 1/50;
  rect(195,290,100,tamanoenYpersiana);
    
  //SOL que crece y se vuelve mas amarillo
  if(colBsol >= 0)
  {
  colBsol = colBsol - 1/100
  fill(255, 255, colBsol)
  ellipse(330,90,sizeSolx,sizeSoly) 
  }
    
  else if(colBsol <= 0)
  {
    fill(255,255,0)
  ellipse(330,90,70,70) 
  }
    
 
    sizeSolx = sizeSolx + 1/100
    sizeSoly = sizeSoly + 1/100
}
}

  
//medio dia, else if, repeticion por el background, cielo azul oscuro,
//sol se mueve a derecha
  
else if( miHora >= 12 && miHora < 16){  
  background (colRmediodia, colGmediodia ,colBmediodia)

//MONTANAS
      noStroke()
  fill(45, 134, 45)
  ellipse(10,300,300,300)
  ellipse(200,300,450,400)
  ellipse(400,300,400,350)
  ellipse(500,300,450,380)
  
  noStroke()
  fill(57, 172, 57)
  rect(0,250,600,500)
  
  //casa 
  noStroke()
  fill(255, 238, 204)
  rect(170,270,250,150)
  
  //puerta
  noStroke()
  fill(153, 77, 0)
  rect(320,320,80,100)
  
  //marco ventana
  stroke(128, 43, 0)
  strokeWeight(5)
  noFill()
  rect(194,290,100,100)
  
  //techo
  noStroke()
   fill(179, 0, 0)
 beginShape();
  vertex(135, 270);
  vertex(170, 230);
  vertex(415, 230);
  vertex(455, 270);
  endShape();
  

//ventana
noStroke()
fill(153, 230, 255)
rect(195,290,100,100) 

  
    if (colRmediodia >= 0)
  {
    colRmediodia = colRmediodia - 1/30;
  }
  if (colGmediodia >= 136)
  {
    colGmediodia = colGmediodia - 1/30;
  }
    if (colBmediodia >= 204)
  {
    colBmediodia = colBmediodia - 1/30;
  }
  
  fill(255, 255, 100)
  ellipse(solmedioDia,70,85,85) 
    solmedioDia = solmedioDia + 1/30
  translate(solmedioDia,30)
}
  
//tarde: luna empieza a salir, se baja persiana 
  
else if( miHora >= 16 && miHora < 20){  
  
  background (colRtarde, colGtarde ,colBtarde)

//MONTANAS
      noStroke()
  fill(45, 134, 45)
  ellipse(10,300,300,300)
  ellipse(200,300,450,400)
  ellipse(400,300,400,350)
  ellipse(500,300,450,380)
  
  noStroke()
  fill(57, 172, 57)
  rect(0,250,600,500)
  
  //casa 
  noStroke()
  fill(255, 238, 204)
  rect(170,270,250,150)
  
  //puerta
  noStroke()
  fill(153, 77, 0)
  rect(320,320,80,100)
  
  //marco ventana
  stroke(128, 43, 0)
  strokeWeight(5)
  noFill()
  rect(194,290,100,100)
  
  //techo
  noStroke()
   fill(179, 0, 0)
 beginShape();
  vertex(135, 270);
  vertex(170, 230);
  vertex(415, 230);
  vertex(455, 270);
  endShape();
  

//ventana
noStroke()
fill(153, 230, 255)
rect(195,290,100,100) 
  
    if (colRtarde >= 0)
  {
    colRtarde = colRtarde - 1/150;
  }
  if (colGtarde >= 37)
  {
    colGtarde = colGtarde - 1/150;
  }
    if (colBtarde >= 154)
  {
    colBtarde = colBtarde - 1/150;
  }
  
  //luces adentro
  fill (255,252,154,transpLuz)
  transpLuz = transpLuz + 0.1/5
   beginShape();
  vertex(194,290);
  vertex(205, 290);
  vertex(298, 390);
  vertex(250, 390);
  endShape();
  
  //luna
  fill(255,255,255,transpLuna)
  transpLuna = transpLuna + 0.1/5
  ellipse(450,65,50,50)
  
}
  
  //noche
  
else if( miHora < 6 && miHora > 20){  
  background (colRnoche, colGnoche ,colBnoche)
  
//MONTANAS
      noStroke()
  fill(45, 134, 45)
  ellipse(10,300,300,300)
  ellipse(200,300,450,400)
  ellipse(400,300,400,350)
  ellipse(500,300,450,380)
  
  noStroke()
  fill(57, 172, 57)
  rect(0,250,600,500)

  
  //casa 
  noStroke()
  fill(255, 238, 204)
  rect(170,270,250,150)
  
  //puerta
  noStroke()
  fill(153, 77, 0)
  rect(320,320,80,100)
  
  //marco ventana
  stroke(128, 43, 0)
  strokeWeight(5)
  noFill()
  rect(194,290,100,100)
  
  //techo
  noStroke()
   fill(179, 0, 0)
 beginShape();
  vertex(135, 270);
  vertex(170, 230);
  vertex(415, 230);
  vertex(455, 270);
  endShape();
  

//ventana
noStroke()
fill(153, 230, 255)
rect(195,290,100,100) 
  
    if (colRnoche > 0)
  {
    colRnoche = colRnoche - 1/150;
  }
  if (colGnoche > 0)
  {
    colGnoche = colGnoche - 1/150;
  }
    if (colBnoche > 0)
  {
    colBnoche = colBnoche - 1/150;
  }
  
//luna
  fill(255,255,255)
  ellipse(450,65,lunaX,lunaY)
  lunaX = lunaX + 1/300
  lunaY = lunaY + 1/300
  
      
    //luces adentro
  fill (255,252,154,transpLuzNoche)
  transpLuzNoche = transpLuzNoche - 1/50
   beginShape();
  vertex(194,290);
  vertex(205, 290);
  vertex(298, 390);
  vertex(250, 390);
  endShape();
  }
  
    //if (transpZ >= 1){  
    //noFill();
    //stroke(0,0,0,transpZ)
    //transpZ = transpZ + 1
    
    //strokeWeight(2)
    //beginShape();
  //vertex(130,325);
  //vertex(140, 325);
  //vertex(135, 340);
  //vertex(145, 340);
  //endShape();
    
  //beginShape();
  //vertex(115,300);
  //vertex(125, 300);
  //vertex(120, 315);
  //vertex(130, 315);
  //endShape();

    //beginShape();
  //vertex(95,290);
  //vertex(105, 290);
  //vertex(100, 305);
  //vertex(110, 305);
  //endShape(); 
 // }
  
  
    //persiana que baja, aumenta en eje y
  if(tamanoenYpersiananoche >= 0  && tamanoenYpersiananoche <= 200){
  fill(255);
  tamanoenYpersiananoche = tamanoenYpersiananoche + 1/300;
  rect(195,290,100,tamanoenYpersiananoche);
}
  
}