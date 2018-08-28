var plo = 400;
var cof= 385;
function setup() {
  createCanvas(360,400);
  
}
function draw() {
  background(256);

  fill(0)

  
  
//cuadrado negro (fila abajo, lado izquierdo)  
  
  // fila 1
  plo =400;
  cof=385;
  triangle(15,cof,15,plo,0,plo) 
  triangle(30,cof,30,plo,15,plo) 
  triangle(30,cof,45,cof,30,plo)  
  triangle(45,cof,60,cof,45,plo)  
  triangle(75,cof,75,plo,60,plo)  
  triangle(90,cof,90,plo,75,plo)  
  triangle(90,cof,105,cof,90,plo)  
  triangle(105,cof,120,cof,105,plo)
  
  //fila 2
 plo =385;
 cof=370;
  triangle(15,cof,15,plo,0,plo)  
  triangle(15,cof,30,cof,15,plo)  
  triangle(30,cof,45,cof,30,plo)  
  triangle(75,cof,75,plo,60,plo)  
  triangle(75,cof,90,cof,75,plo)  
  triangle(60,cof,60,plo,45,plo)  
  triangle(90,cof,105,cof,90,plo)  
  triangle(120,cof,120,plo,105,plo)
  
  //fila 3
 plo =370;
 cof=355;
  
  triangle(0,cof,15,cof,0,plo) 
  triangle(15,cof,30,cof,15,plo)  
  triangle(45,cof,45,plo,30,plo)  
  triangle(60,cof,60,plo,45,plo)  
  triangle(60,plo,75,cof,60,cof)  
  triangle(75,plo,90,cof,75,cof)  
  triangle(105,cof,105,plo,90,plo)  
  triangle(120,cof,120,plo,105,plo)
  
 //fila 4
 plo =355;
 cof=340;
  
  triangle(0,cof,15,cof,0,plo)  
  triangle(30,cof,30,plo,15,plo)  
  triangle(45,cof,45,plo,30,plo)  
  triangle(45,plo,60,cof,45,cof)  
  triangle(60,cof,75,cof,60,plo)  
  triangle(75,plo,90,cof,90,plo)  
  triangle(90,plo,105,cof,105,plo)  
  triangle(105,cof,120,cof,105,plo)
  
  //fila 5
 plo =340;
 cof=325;
  triangle(15,cof,15,plo,0,plo)  
  triangle(30,cof,30,plo,15,plo)  
  triangle(30,cof,45,cof,30,plo)  
  triangle(45,cof,60,cof,45,plo) 
  triangle(75,cof,75,plo,60,plo)  
  triangle(90,cof,90,plo,75,plo)  
  triangle(90,cof,105,cof,90,plo)  
  triangle(105,cof,120,cof,105,plo)
  
  //fila 6
  
 plo =325;
 cof=310;
  triangle(15,cof,15,plo,0,plo)  
  triangle(15,cof,30,cof,15,plo)  
  triangle(30,cof,45,cof,30,plo)  
  triangle(75,cof,75,plo,60,plo)  
  triangle(75,cof,90,cof,75,plo)  
  triangle(60,cof,60,plo,45,plo)  
  triangle(90,cof,105,cof,90,plo)  
  triangle(120,cof,120,plo,105,plo)
  
  
  //fila 7
  
 plo =310;
 cof=295;
  triangle(0,cof,15,cof,0,plo)  
  triangle(15,cof,30,cof,15,plo)  
  triangle(45,cof,45,plo,30,plo)  
  triangle(60,cof,60,plo,45,plo)  
  triangle(60,plo,75,cof,60,cof)  
  triangle(75,plo,90,cof,75,cof)  
  triangle(105,cof,105,plo,90,plo)  
  triangle(120,cof,120,plo,105,plo)
  
  //fila 8
  
  plo =295;
  cof=280;
   triangle(0,cof,15,cof,0,plo)  
   triangle(30,cof,30,plo,15,plo)  
   triangle(45,cof,45,plo,30,plo) 
   triangle(45,plo,60,cof,45,cof)  
   triangle(60,cof,75,cof,60,plo)  
   triangle(75,plo,90,cof,90,plo)  
   triangle(90,plo,105,cof,105,plo)  
   triangle(105,cof,120,cof,105,plo)
  
//cuadro negro (fila arriba, lado izquierdo)
  translate(0,-240)
  noStroke()
  
  // fila 1
  
 plo =400;
 cof=385;
  triangle(15,cof,15,plo,0,plo)  
  triangle(30,cof,30,plo,15,plo)  
  triangle(30,cof,45,cof,30,plo)  
  triangle(45,cof,60,cof,45,plo)  
  triangle(75,cof,75,plo,60,plo)  
  triangle(90,cof,90,plo,75,plo)  
  triangle(90,cof,105,cof,90,plo)  
  triangle(105,cof,120,cof,105,plo)
  
  //fila 2
  
 plo =385;
 cof=370;
  triangle(15,cof,15,plo,0,plo)  
  triangle(15,cof,30,cof,15,plo)  
  triangle(30,cof,45,cof,30,plo)  
  triangle(75,cof,75,plo,60,plo)  
  triangle(75,cof,90,cof,75,plo)  
  triangle(60,cof,60,plo,45,plo)  
  triangle(90,cof,105,cof,90,plo)  
  triangle(120,cof,120,plo,105,plo) 
  
  //fila 3
  
 plo =370;
 cof=355;
  triangle(0,cof,15,cof,0,plo) 
  triangle(15,cof,30,cof,15,plo)  
  triangle(45,cof,45,plo,30,plo)  
  triangle(60,cof,60,plo,45,plo)
  triangle(60,plo,75,cof,60,cof)  
  triangle(75,plo,90,cof,75,cof)  
  triangle(105,cof,105,plo,90,plo)  
  triangle(120,cof,120,plo,105,plo)
  
  //fila 4
  
 plo =355;
 cof=340;
  triangle(0,cof,15,cof,0,plo) 
  triangle(30,cof,30,plo,15,plo) 
  triangle(45,cof,45,plo,30,plo)   
  triangle(45,plo,60,cof,45,cof) 
  triangle(60,cof,75,cof,60,plo) 
  triangle(75,plo,90,cof,90,plo) 
  triangle(90,plo,105,cof,105,plo)  
  triangle(105,cof,120,cof,105,plo)
  
  //fila 5
  
  plo =340;
  cof=325;
  triangle(15,cof,15,plo,0,plo)  
  triangle(30,cof,30,plo,15,plo)  
  triangle(30,cof,45,cof,30,plo)  
  triangle(45,cof,60,cof,45,plo)  
  triangle(75,cof,75,plo,60,plo)  
  triangle(90,cof,90,plo,75,plo)  
  triangle(90,cof,105,cof,90,plo)  
  triangle(105,cof,120,cof,105,plo)
  
  //fila 6
  
 plo =325;
 cof=310;
  triangle(15,cof,15,plo,0,plo)  
  triangle(15,cof,30,cof,15,plo)  
  triangle(30,cof,45,cof,30,plo)  
  triangle(75,cof,75,plo,60,plo) 
  triangle(75,cof,90,cof,75,plo) 
  triangle(60,cof,60,plo,45,plo)  
  triangle(90,cof,105,cof,90,plo)  
  triangle(120,cof,120,plo,105,plo)
  
  //fila 7
  
 plo =310;
 cof=295;
  triangle(0,cof,15,cof,0,plo)  
  triangle(15,cof,30,cof,15,plo)  
  triangle(45,cof,45,plo,30,plo)  
  triangle(60,cof,60,plo,45,plo)  
  triangle(60,plo,75,cof,60,cof)  
  triangle(75,plo,90,cof,75,cof)  
  triangle(105,cof,105,plo,90,plo)  
  triangle(120,cof,120,plo,105,plo)
  
  //fila 8
  
   plo =295;
   cof=280;
    triangle(0,cof,15,cof,0,plo)  
    triangle(30,cof,30,plo,15,plo)  
    triangle(45,cof,45,plo,30,plo)  
    triangle(45,plo,60,cof,45,cof)  
    triangle(60,cof,75,cof,60,plo)  
    triangle(75,plo,90,cof,90,plo)  
    triangle(90,plo,105,cof,105,plo)  
    triangle(105,cof,120,cof,105,plo)
  
   
//cuadro amarillo (fila mitad, centro)
  translate(120,120)
  noStroke()
  fill(244, 194, 66)
  
  // fila 1
  
  plo =400;
  cof=385;
   triangle(15,cof,15,plo,0,plo)  
   triangle(30,cof,30,plo,15,plo)  
   triangle(30,cof,45,cof,30,plo) 
   triangle(45,cof,60,cof,45,plo)  
   triangle(75,cof,75,plo,60,plo)  
   triangle(90,cof,90,plo,75,plo)  
   triangle(90,cof,105,cof,90,plo)  
   triangle(105,cof,120,cof,105,plo)
  
  //fila 2
  
  plo =385;
  cof=370;
   triangle(15,cof,15,plo,0,plo)  
   triangle(15,cof,30,cof,15,plo) 
   triangle(30,cof,45,cof,30,plo)  
   triangle(75,cof,75,plo,60,plo)  
   triangle(75,cof,90,cof,75,plo)  
   triangle(60,cof,60,plo,45,plo)  
   triangle(90,cof,105,cof,90,plo)  
   triangle(120,cof,120,plo,105,plo) 

  
  //fila 3
  
  plo =370;
  cof=355;  
   triangle(0,cof,15,cof,0,plo)   
   triangle(15,cof,30,cof,15,plo)
   triangle(45,cof,45,plo,30,plo) 
   triangle(60,cof,60,plo,45,plo)  
   triangle(60,plo,75,cof,60,cof)  
   triangle(75,plo,90,cof,75,cof)  
   triangle(105,cof,105,plo,90,plo)  
   triangle(120,cof,120,plo,105,plo)
  
    //fila 4
  
 plo =355;
 cof=340;
    triangle(0,cof,15,cof,0,plo)  
    triangle(30,cof,30,plo,15,plo)  
    triangle(45,cof,45,plo,30,plo)  
    triangle(45,plo,60,cof,45,cof)  
    triangle(60,cof,75,cof,60,plo) 
    triangle(75,plo,90,cof,90,plo)  
    triangle(90,plo,105,cof,105,plo)  
    triangle(105,cof,120,cof,105,plo)
  
  //fila 5
  
 plo =340;
 cof=325;
  triangle(15,cof,15,plo,0,plo)  
  triangle(30,cof,30,plo,15,plo)  
  triangle(30,cof,45,cof,30,plo)  
  triangle(45,cof,60,cof,45,plo)  
  triangle(75,cof,75,plo,60,plo)  
  triangle(90,cof,90,plo,75,plo)  
  triangle(90,cof,105,cof,90,plo)  
  triangle(105,cof,120,cof,105,plo)
  
  //fila 6
  
 plo =325;
 cof=310;
  triangle(15,cof,15,plo,0,plo)
  triangle(15,cof,30,cof,15,plo)  
  triangle(30,cof,45,cof,30,plo)  
  triangle(75,cof,75,plo,60,plo)  
  triangle(75,cof,90,cof,75,plo)  
  triangle(60,cof,60,plo,45,plo)  
  triangle(90,cof,105,cof,90,plo)  
  triangle(120,cof,120,plo,105,plo)  
  
  //fila 7
  
 plo =310;
 cof=295;
  triangle(0,cof,15,cof,0,plo) 
  triangle(15,cof,30,cof,15,plo)
  triangle(45,cof,45,plo,30,plo)  
  triangle(60,cof,60,plo,45,plo)  
  triangle(60,plo,75,cof,60,cof)  
  triangle(75,plo,90,cof,75,cof)  
  triangle(105,cof,105,plo,90,plo)  
  triangle(120,cof,120,plo,105,plo)
  
  //fila 8
  
   plo =295;
   cof=280;
    triangle(0,cof,15,cof,0,plo)  
    triangle(30,cof,30,plo,15,plo)  
    triangle(45,cof,45,plo,30,plo)
    triangle(45,plo,60,cof,45,cof)  
    triangle(60,cof,75,cof,60,plo)  
    triangle(75,plo,90,cof,90,plo)  
    triangle(90,plo,105,cof,105,plo)  
    triangle(105,cof,120,cof,105,plo)  
  
//cuadro amarillo (fila arriba, lado derecho)
  
  translate(120,-120)
  noStroke()
  fill(244, 194, 66)
  
  // fila 1
  
 plo =400;
 cof=385;
  triangle(15,cof,15,plo,0,plo)  
  triangle(30,cof,30,plo,15,plo)  
  triangle(30,cof,45,cof,30,plo)  
  triangle(45,cof,60,cof,45,plo)  
  triangle(75,cof,75,plo,60,plo)  
  triangle(90,cof,90,plo,75,plo)  
  triangle(90,cof,105,cof,90,plo)  
  triangle(105,cof,120,cof,105,plo)
  
  //fila 2
  
 plo =385;
 cof=370;
  triangle(15,cof,15,plo,0,plo)  
  triangle(15,cof,30,cof,15,plo)  
  triangle(30,cof,45,cof,30,plo)  
  triangle(75,cof,75,plo,60,plo)  
  triangle(75,cof,90,cof,75,plo)  
  triangle(60,cof,60,plo,45,plo)  
  triangle(90,cof,105,cof,90,plo)  
  triangle(120,cof,120,plo,105,plo) 

  
  //fila 3
  
 plo =370;
 cof=355;  
  triangle(0,cof,15,cof,0,plo)  
  triangle(15,cof,30,cof,15,plo)  
  triangle(45,cof,45,plo,30,plo)  
  triangle(60,cof,60,plo,45,plo)  
  triangle(60,plo,75,cof,60,cof)  
  triangle(75,plo,90,cof,75,cof)  
  triangle(105,cof,105,plo,90,plo)  
  triangle(120,cof,120,plo,105,plo)
  
    //fila 4
  
 plo =355;
 cof=340;
    triangle(0,cof,15,cof,0,plo)  
    triangle(30,cof,30,plo,15,plo)  
    triangle(45,cof,45,plo,30,plo)  
    triangle(45,plo,60,cof,45,cof)  
    triangle(60,cof,75,cof,60,plo)  
    triangle(75,plo,90,cof,90,plo)  
    triangle(90,plo,105,cof,105,plo)  
    triangle(105,cof,120,cof,105,plo)
  
  //fila 5
  
 plo =340;
 cof=325;
    triangle(15,cof,15,plo,0,plo)
    triangle(30,cof,30,plo,15,plo)
    triangle(30,cof,45,cof,30,plo)
    triangle(45,cof,60,cof,45,plo)
    triangle(75,cof,75,plo,60,plo)
    triangle(90,cof,90,plo,75,plo)
    triangle(90,cof,105,cof,90,plo)
    triangle(105,cof,120,cof,105,plo)
  
  //fila 6
  
 plo =325;
 cof=310;  
    triangle(15,cof,15,plo,0,plo)
    triangle(15,cof,30,cof,15,plo)
    triangle(30,cof,45,cof,30,plo)
    triangle(75,cof,75,plo,60,plo)
    triangle(75,cof,90,cof,75,plo)
    triangle(60,cof,60,plo,45,plo)
    triangle(90,cof,105,cof,90,plo)
    triangle(120,cof,120,plo,105,plo)
  
  
  //fila 7
  
  plo =310;
  cof=295;
   triangle(0,cof,15,cof,0,plo)
   triangle(15,cof,30,cof,15,plo)
   triangle(45,cof,45,plo,30,plo)
   triangle(60,cof,60,plo,45,plo)
   triangle(60,plo,75,cof,60,cof)
   triangle(75,plo,90,cof,75,cof)
   triangle(105,cof,105,plo,90,plo)
   triangle(120,cof,120,plo,105,plo)
  
  //fila 8
  
   plo =295;
   cof=280; 
    triangle(0,cof,15,cof,0,plo)  
    triangle(30,cof,30,plo,15,plo)  
    triangle(45,cof,45,plo,30,plo)  
    triangle(45,plo,60,cof,45,cof)  
    triangle(60,cof,75,cof,60,plo)  
    triangle(75,plo,90,cof,90,plo)  
    triangle(90,plo,105,cof,105,plo)  
    triangle(105,cof,120,cof,105,plo)
  
//cuadro negro (fila abajo, lado azquierdo)
  translate(0,240)
  fill(0)
  noStroke()
  
   // fila 1
  
  plo =400;
  cof=385;
  triangle(15,cof,15,plo,0,plo)  
  triangle(30,cof,30,plo,15,plo)  
  triangle(30,cof,45,cof,30,plo)
  triangle(45,cof,60,cof,45,plo)  
  triangle(75,cof,75,plo,60,plo)  
  triangle(90,cof,90,plo,75,plo)  
  triangle(90,cof,105,cof,90,plo)  
  triangle(105,cof,120,cof,105,plo)
  
  //fila 2
  
 plo =385;
 cof=370;
  triangle(15,cof,15,plo,0,plo)  
  triangle(15,cof,30,cof,15,plo)  
  triangle(30,cof,45,cof,30,plo)  
  triangle(75,cof,75,plo,60,plo)  
  triangle(75,cof,90,cof,75,plo)  
  triangle(60,cof,60,plo,45,plo)  
  triangle(90,cof,105,cof,90,plo)  
  triangle(120,cof,120,plo,105,plo) 

  
  //fila 3
 
 plo =370;
 cof=355;
  triangle(0,cof,15,cof,0,plo)  
  triangle(15,cof,30,cof,15,plo)  
  triangle(45,cof,45,plo,30,plo)  
  triangle(60,cof,60,plo,45,plo)  
  triangle(60,plo,75,cof,60,cof)  
  triangle(75,plo,90,cof,75,cof)  
  triangle(105,cof,105,plo,90,plo)  
  triangle(120,cof,120,plo,105,plo)
  
    //fila 4
 plo =355;
 cof=340;
  
    triangle(0,cof,15,cof,0,plo)  
    triangle(30,cof,30,plo,15,plo)  
    triangle(45,cof,45,plo,30,plo)  
    triangle(45,plo,60,cof,45,cof)  
    triangle(60,cof,75,cof,60,plo)  
    triangle(75,plo,90,cof,90,plo)  
    triangle(90,plo,105,cof,105,plo)  
    triangle(105,cof,120,cof,105,plo)
  
  //fila 5
  plo =340;
  cof=325;
  triangle(15,cof,15,plo,0,plo)  
  triangle(30,cof,30,plo,15,plo)  
  triangle(30,cof,45,cof,30,plo)  
  triangle(45,cof,60,cof,45,plo)  
  triangle(75,cof,75,plo,60,plo)  
  triangle(90,cof,90,plo,75,plo)  
  triangle(90,cof,105,cof,90,plo)  
  triangle(105,cof,120,cof,105,plo)
  
  //fila 6
  
 plo =325;
 cof=310;
  
  triangle(15,cof,15,plo,0,plo)  
  triangle(15,cof,30,cof,15,plo)  
  triangle(30,cof,45,cof,30,plo)  
  triangle(75,cof,75,plo,60,plo)  
  triangle(75,cof,90,cof,75,plo)  
  triangle(60,cof,60,plo,45,plo)  
  triangle(90,cof,105,cof,90,plo)  
  triangle(120,cof,120,plo,105,plo)
  
  
  //fila 7
  
 plo =310;
 cof=295; 
  triangle(0,cof,15,cof,0,plo)  
  triangle(15,cof,30,cof,15,plo)  
  triangle(45,cof,45,plo,30,plo)  
  triangle(60,cof,60,plo,45,plo)  
  triangle(60,plo,75,cof,60,cof)  
  triangle(75,plo,90,cof,75,cof)  
  triangle(105,cof,105,plo,90,plo) 
  triangle(120,cof,120,plo,105,plo)
  
  //fila 8
  
   plo =295;
   cof=280; 
    triangle(0,cof,15,cof,0,plo) 
    triangle(30,cof,30,plo,15,plo)  
    triangle(45,cof,45,plo,30,plo)  
    triangle(45,plo,60,cof,45,cof)  
    triangle(60,cof,75,cof,60,plo)  
    triangle(75,plo,90,cof,90,plo)  
    triangle(90,plo,105,cof,105,plo)  
    triangle(105,cof,120,cof,105,plo)
 
//cuadro negro (fila abajo, mitad)
  translate(-120,0)
  
    //fila 1
  
  plo =400;
  cof=385;
  
  triangle(0,cof,15,plo,0,plo)
  triangle(15,cof,30,plo,15,plo) 
  triangle(30,cof,45,cof,45,plo)  
  triangle(45,cof,60,cof,60,plo)   
  triangle(60,cof,75,plo,60,plo)
  triangle(75,cof,90,plo,75,plo)
  triangle(90,cof,105,cof,105,plo) 
  triangle(105,cof,120,cof,120,plo) 
  
  //fila 2
  
 plo =385;
 cof=370;
  
  triangle(0,cof,15,cof,15,plo)
  triangle(15,cof,30,plo,15,plo)
  triangle(30,cof,45,plo,30,plo)
  triangle(45,cof,60,cof,60,plo)
  triangle(60,cof,75,cof,75,plo)
  triangle(75,cof,90,plo,75,plo)
  triangle(90,cof,105,plo,90,plo)
  triangle(105,cof,120,cof,120,plo)

  //fila 3
  
  plo =370;
  cof=355;
  
  triangle(0,cof,15,cof,15,plo)
  triangle(15,cof,30,cof,30,plo)
  triangle(30,cof,45,plo,30,plo)
  triangle(45,cof,60,plo,45,plo)
  triangle(60,cof,75,cof,75,plo)
  triangle(75,cof,90,cof,90,plo)
  triangle(90,cof,105,plo,90,plo)
  triangle(105,cof,120,plo,105,plo)
  
  //fila 4
  
 plo =355;
 cof=340;
  
  triangle(0,cof,15,plo,0,plo)
  triangle(15,cof,30,cof,30,plo)
  triangle(30,cof,45,cof,45,plo)
  triangle(45,cof,60,plo,45,plo)
  triangle(60,cof,75,plo,60,plo)
  triangle(75,cof,90,cof,90,plo)
  triangle(90,cof,105,cof,105,plo)
  triangle(105,cof,120,plo,105,plo)
  
    //fila 5
  
  plo =340;
  cof=325;
  
  triangle(0,cof,15,plo,0,plo)
  triangle(15,cof,30,plo,15,plo) 
  triangle(30,cof,45,cof,45,plo)  
  triangle(45,cof,60,cof,60,plo)   
  triangle(60,cof,75,plo,60,plo)
  triangle(75,cof,90,plo,75,plo)
  triangle(90,cof,105,cof,105,plo) 
  triangle(105,cof,120,cof,120,plo) 
  
    //fila 6
  
  plo =325;
  cof=310;
  
  triangle(0,cof,15,cof,15,plo)
  triangle(15,cof,30,plo,15,plo)
  triangle(30,cof,45,plo,30,plo)
  triangle(45,cof,60,cof,60,plo)
  triangle(60,cof,75,cof,75,plo)
  triangle(75,cof,90,plo,75,plo)
  triangle(90,cof,105,plo,90,plo)
  triangle(105,cof,120,cof,120,plo)
  
    //fila 7
  
 plo =310;
 cof=295;
  
  triangle(0,cof,15,cof,15,plo)
  triangle(15,cof,30,cof,30,plo)
  triangle(30,cof,45,plo,30,plo)
  triangle(45,cof,60,plo,45,plo)
  triangle(60,cof,75,cof,75,plo)
  triangle(75,cof,90,cof,90,plo)
  triangle(90,cof,105,plo,90,plo)
  triangle(105,cof,120,plo,105,plo)
  
    //fila 8
  
   plo =295;
   cof=280;
  
  triangle(0,cof,15,plo,0,plo)
  triangle(15,cof,30,cof,30,plo)
  triangle(30,cof,45,cof,45,plo)
  triangle(45,cof,60,plo,45,plo)
  triangle(60,cof,75,plo,60,plo)
  triangle(75,cof,90,cof,90,plo)
  triangle(90,cof,105,cof,105,plo)
  triangle(105,cof,120,plo,105,plo)
  
//cuadro negro (fila mitad, lado izquierdo)
  translate(-120,-120)
  
    //fila 1
  
  plo =400;
  cof=385;
  
  triangle(0,cof,15,plo,0,plo)
  triangle(15,cof,30,plo,15,plo) 
  triangle(30,cof,45,cof,45,plo)  
  triangle(45,cof,60,cof,60,plo)   
  triangle(60,cof,75,plo,60,plo)
  triangle(75,cof,90,plo,75,plo)
  triangle(90,cof,105,cof,105,plo) 
  triangle(105,cof,120,cof,120,plo) 
  
  //fila 2
  
 plo =385;
 cof=370;
  
  triangle(0,cof,15,cof,15,plo)
  triangle(15,cof,30,plo,15,plo)
  triangle(30,cof,45,plo,30,plo)
  triangle(45,cof,60,cof,60,plo)
  triangle(60,cof,75,cof,75,plo)
  triangle(75,cof,90,plo,75,plo)
  triangle(90,cof,105,plo,90,plo)
  triangle(105,cof,120,cof,120,plo)

  //fila 3
  
  plo =370;
  cof=355;
  
  triangle(0,cof,15,cof,15,plo)
  triangle(15,cof,30,cof,30,plo)
  triangle(30,cof,45,plo,30,plo)
  triangle(45,cof,60,plo,45,plo)
  triangle(60,cof,75,cof,75,plo)
  triangle(75,cof,90,cof,90,plo)
  triangle(90,cof,105,plo,90,plo)
  triangle(105,cof,120,plo,105,plo)
  
  //fila 4
  
 plo =355;
 cof=340;
  
  triangle(0,cof,15,plo,0,plo)
  triangle(15,cof,30,cof,30,plo)
  triangle(30,cof,45,cof,45,plo)
  triangle(45,cof,60,plo,45,plo)
  triangle(60,cof,75,plo,60,plo)
  triangle(75,cof,90,cof,90,plo)
  triangle(90,cof,105,cof,105,plo)
  triangle(105,cof,120,plo,105,plo)
  
    //fila 5
  
  plo =340;
  cof=325;
  
  triangle(0,cof,15,plo,0,plo)
  triangle(15,cof,30,plo,15,plo) 
  triangle(30,cof,45,cof,45,plo)  
  triangle(45,cof,60,cof,60,plo)   
  triangle(60,cof,75,plo,60,plo)
  triangle(75,cof,90,plo,75,plo)
  triangle(90,cof,105,cof,105,plo) 
  triangle(105,cof,120,cof,120,plo) 
  
    //fila 6
  
  plo =325;
  cof=310;
  
  triangle(0,cof,15,cof,15,plo)
  triangle(15,cof,30,plo,15,plo)
  triangle(30,cof,45,plo,30,plo)
  triangle(45,cof,60,cof,60,plo)
  triangle(60,cof,75,cof,75,plo)
  triangle(75,cof,90,plo,75,plo)
  triangle(90,cof,105,plo,90,plo)
  triangle(105,cof,120,cof,120,plo)
  
    //fila 7
  
 plo =310;
 cof=295;
  
  triangle(0,cof,15,cof,15,plo)
  triangle(15,cof,30,cof,30,plo)
  triangle(30,cof,45,plo,30,plo)
  triangle(45,cof,60,plo,45,plo)
  triangle(60,cof,75,cof,75,plo)
  triangle(75,cof,90,cof,90,plo)
  triangle(90,cof,105,plo,90,plo)
  triangle(105,cof,120,plo,105,plo)
  
    //fila 8
  
   plo =295;
   cof=280;
  
  triangle(0,cof,15,plo,0,plo)
  triangle(15,cof,30,cof,30,plo)
  triangle(30,cof,45,cof,45,plo)
  triangle(45,cof,60,plo,45,plo)
  triangle(60,cof,75,plo,60,plo)
  triangle(75,cof,90,cof,90,plo)
  triangle(90,cof,105,cof,105,plo)
  triangle(105,cof,120,plo,105,plo)
  
//cuadro amarillo (fila arriba, mitad)
  
  translate(120,-120)
  fill(244, 194, 66)
    //fila 1
  plo =400;
  cof=385;
  
  triangle(0,cof,15,plo,0,plo)
  triangle(15,cof,30,plo,15,plo) 
  triangle(30,cof,45,cof,45,plo)  
  triangle(45,cof,60,cof,60,plo)   
  triangle(60,cof,75,plo,60,plo)
  triangle(75,cof,90,plo,75,plo)
  triangle(90,cof,105,cof,105,plo) 
  triangle(105,cof,120,cof,120,plo) 
  
  //fila 2
 plo =385;
 cof=370;
  
  triangle(0,cof,15,cof,15,plo)
  triangle(15,cof,30,plo,15,plo)
  triangle(30,cof,45,plo,30,plo)
  triangle(45,cof,60,cof,60,plo)
  triangle(60,cof,75,cof,75,plo)
  triangle(75,cof,90,plo,75,plo)
  triangle(90,cof,105,plo,90,plo)
  triangle(105,cof,120,cof,120,plo)

  //fila 3
  plo =370;
  cof=355;
  
  triangle(0,cof,15,cof,15,plo)
  triangle(15,cof,30,cof,30,plo)
  triangle(30,cof,45,plo,30,plo)
  triangle(45,cof,60,plo,45,plo)
  triangle(60,cof,75,cof,75,plo)
  triangle(75,cof,90,cof,90,plo)
  triangle(90,cof,105,plo,90,plo)
  triangle(105,cof,120,plo,105,plo)
  
  //fila 4
 plo =355;
 cof=340;
  
  triangle(0,cof,15,plo,0,plo)
  triangle(15,cof,30,cof,30,plo)
  triangle(30,cof,45,cof,45,plo)
  triangle(45,cof,60,plo,45,plo)
  triangle(60,cof,75,plo,60,plo)
  triangle(75,cof,90,cof,90,plo)
  triangle(90,cof,105,cof,105,plo)
  triangle(105,cof,120,plo,105,plo)
  
    //fila 5
  plo =340;
  cof=325;
  
  triangle(0,cof,15,plo,0,plo)
  triangle(15,cof,30,plo,15,plo) 
  triangle(30,cof,45,cof,45,plo)  
  triangle(45,cof,60,cof,60,plo)   
  triangle(60,cof,75,plo,60,plo)
  triangle(75,cof,90,plo,75,plo)
  triangle(90,cof,105,cof,105,plo) 
  triangle(105,cof,120,cof,120,plo) 
  
    //fila 6
  plo =325;
  cof=310;
  
  triangle(0,cof,15,cof,15,plo)
  triangle(15,cof,30,plo,15,plo)
  triangle(30,cof,45,plo,30,plo)
  triangle(45,cof,60,cof,60,plo)
  triangle(60,cof,75,cof,75,plo)
  triangle(75,cof,90,plo,75,plo)
  triangle(90,cof,105,plo,90,plo)
  triangle(105,cof,120,cof,120,plo)
  
    //fila 7
 plo =310;
 cof=295;
  
  triangle(0,cof,15,cof,15,plo)
  triangle(15,cof,30,cof,30,plo)
  triangle(30,cof,45,plo,30,plo)
  triangle(45,cof,60,plo,45,plo)
  triangle(60,cof,75,cof,75,plo)
  triangle(75,cof,90,cof,90,plo)
  triangle(90,cof,105,plo,90,plo)
  triangle(105,cof,120,plo,105,plo)
  
    //fila 8
   plo =295;
   cof=280;
  
  triangle(0,cof,15,plo,0,plo)
  triangle(15,cof,30,cof,30,plo)
  triangle(30,cof,45,cof,45,plo)
  triangle(45,cof,60,plo,45,plo)
  triangle(60,cof,75,plo,60,plo)
  triangle(75,cof,90,cof,90,plo)
  triangle(90,cof,105,cof,105,plo)
  triangle(105,cof,120,plo,105,plo)

//cuadro amarillo (fila derecha, mitad)
    //fila 1
  
  fill(244, 194, 66)
  translate(120,120)
  
  plo =400;
  cof=385;
  
  triangle(0,cof,15,plo,0,plo)
  triangle(15,cof,30,plo,15,plo) 
  triangle(30,cof,45,cof,45,plo)  
  triangle(45,cof,60,cof,60,plo)   
  triangle(60,cof,75,plo,60,plo)
  triangle(75,cof,90,plo,75,plo)
  triangle(90,cof,105,cof,105,plo) 
  triangle(105,cof,120,cof,120,plo) 
  
  //fila 2
 plo =385;
 cof=370;
  
  triangle(0,cof,15,cof,15,plo)
  triangle(15,cof,30,plo,15,plo)
  triangle(30,cof,45,plo,30,plo)
  triangle(45,cof,60,cof,60,plo)
  triangle(60,cof,75,cof,75,plo)
  triangle(75,cof,90,plo,75,plo)
  triangle(90,cof,105,plo,90,plo)
  triangle(105,cof,120,cof,120,plo)

  //fila 3
  plo =370;
  cof=355;
  
  triangle(0,cof,15,cof,15,plo)
  triangle(15,cof,30,cof,30,plo)
  triangle(30,cof,45,plo,30,plo)
  triangle(45,cof,60,plo,45,plo)
  triangle(60,cof,75,cof,75,plo)
  triangle(75,cof,90,cof,90,plo)
  triangle(90,cof,105,plo,90,plo)
  triangle(105,cof,120,plo,105,plo)
  
  //fila 4
 plo =355;
 cof=340;
  
  triangle(0,cof,15,plo,0,plo)
  triangle(15,cof,30,cof,30,plo)
  triangle(30,cof,45,cof,45,plo)
  triangle(45,cof,60,plo,45,plo)
  triangle(60,cof,75,plo,60,plo)
  triangle(75,cof,90,cof,90,plo)
  triangle(90,cof,105,cof,105,plo)
  triangle(105,cof,120,plo,105,plo)
  
    //fila 5
  plo =340;
  cof=325;
  
  triangle(0,cof,15,plo,0,plo)
  triangle(15,cof,30,plo,15,plo) 
  triangle(30,cof,45,cof,45,plo)  
  triangle(45,cof,60,cof,60,plo)   
  triangle(60,cof,75,plo,60,plo)
  triangle(75,cof,90,plo,75,plo)
  triangle(90,cof,105,cof,105,plo) 
  triangle(105,cof,120,cof,120,plo) 
  
    //fila 6
  plo =325;
  cof=310;
  
  triangle(0,cof,15,cof,15,plo)
  triangle(15,cof,30,plo,15,plo)
  triangle(30,cof,45,plo,30,plo)
  triangle(45,cof,60,cof,60,plo)
  triangle(60,cof,75,cof,75,plo)
  triangle(75,cof,90,plo,75,plo)
  triangle(90,cof,105,plo,90,plo)
  triangle(105,cof,120,cof,120,plo)
  
    //fila 7
 plo =310;
 cof=295;
  
  triangle(0,cof,15,cof,15,plo)
  triangle(15,cof,30,cof,30,plo)
  triangle(30,cof,45,plo,30,plo)
  triangle(45,cof,60,plo,45,plo)
  triangle(60,cof,75,cof,75,plo)
  triangle(75,cof,90,cof,90,plo)
  triangle(90,cof,105,plo,90,plo)
  triangle(105,cof,120,plo,105,plo)
  
    //fila 8
   plo =295;
   cof=280;
  
  triangle(0,cof,15,plo,0,plo)
  triangle(15,cof,30,cof,30,plo)
  triangle(30,cof,45,cof,45,plo)
  triangle(45,cof,60,plo,45,plo)
  triangle(60,cof,75,plo,60,plo)
  triangle(75,cof,90,cof,90,plo)
  triangle(90,cof,105,cof,105,plo)
  triangle(105,cof,120,plo,105,plo)
}