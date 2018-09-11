var i=0
//herramientas figuras
//Boton 1
var posXbot0=40;
var posYbot0=20;
tamBot0=10;
//Boton 2
var posXbot1=80;
var posYbot1=20;
tamBot1=10;
//Boton 3
var posXbot2=120;
var posYbot2=20;
tamBot2=10;
//Boton 4
var posXbot3=160;
var posYbot3=20;
tamBot3=10;
//Boton 5
var posXbot4=200;
var posYbot4=20;
tamBot4=10;
//Boton 6
var posXbot5=240;
var posYbot5=20;
tamBot5=10;
//Boton 7
var posXbot6=280;
var posYbot6=20;
tamBot6=10;
//Boton 8
var posXbot7=320;
var posYbot7=20;
tamBot7=10;
//Boton 9
var posXbot8=360;
var posYbot8=20;
tamBot8=10;
//Boton 10
var posXbot9=440;
var posYbot9=20;
tamBot9=10;

//herramientas color
//Boton 1
var posXbot11=30;
var posYbot11=375;
tamBot11=10;
//Boton 2
var posXbot12=60;
var posYbot12=375;
tamBot12=10;
//Boton 3
var posXbot13=90;
var posYbot13=375;
tamBot13=10;
//Boton 5
var posXbot14=120;
var posYbot14=375;
tamBot14=10;
//Boton 6
var posXbot15=150;
var posYbot15=375;
tamBot15=10;
//Boton 7
var posXbot16=180;
var posYbot16=375;
tamBot16=10;
//Boton 8
var posXbot17=210;
var posYbot17=375;
tamBot17=10;
//Boton 9
var posXbot18=240;
var posYbot18=375;
tamBot18=10;
//Boton 10
var posXbot19=270;
var posYbot19=375;
tamBot19=10;
//boton 11
var posXbot20=300;
var posYbot20=375;
tamBot20=10;

//Herramienta
var herSelect = 0;
//Color
var colSelect = 0;

function setup() {
createCanvas(400, 400);
background(220);
stroke(1)
}

function draw() {
strokeWeight(0)
  //herramientas figuras  
  
   //herramienta 1
fill(255);
  strokeWeight(1)
stroke (255);
ellipse(posXbot0+ (tamBot0/2) , posYbot0+(tamBot0/2), 30,30); 
  
noFill();
  stroke(0);
  ellipse(45,25,15,15)
  ellipse(45,25,10,10)
  ellipse(45,25,5,5)
  
        
  //herramienta 2
fill(255);
stroke (255);
ellipse(posXbot1+ (tamBot1/2) , posYbot1+(tamBot1/2), 30,30); 
  
    noFill();
stroke(0);
quad(85,20,90,25,85,30,80,25)
  
  //herramienta 3
 fill(255);
stroke (255);
ellipse(posXbot2+ (tamBot2/2) , posYbot2+(tamBot2/2), 30,30); 

stroke (0);
  line(116,27,133,27)
  line(116,20,133,20)
  line(124,15,124,33)

  //herramienta 4
  fill(255);
  stroke (255);
  ellipse(posXbot3+ (tamBot3/2) , posYbot3+(tamBot3/2), 30,30);
  
  //herramienta 5
fill(255);
stroke (255);
ellipse(posXbot4+ (tamBot4/2) , posYbot4+(tamBot4/2), 30,30); 
  
  fill(0);
  ellipse(204,25,13,13)
  ellipse(210,25,9,9)
  
  //herramienta 6
fill(255);
stroke (255);
ellipse(posXbot5+ (tamBot5/2) , posYbot5+(tamBot5/2), 30,30);
  
  stroke (0);
  line(240,18,240,30)
  line(245,19,245,28)
  line(250,20,250,26)
  
  //herramienta 7
fill(255);
stroke (255);
ellipse(posXbot6+ (tamBot6/2) , posYbot6+(tamBot6/2), 30,30);
  fill(0);
  stroke (0);
    arc(285, 25, 10, 10, PI, TWO_PI+HALF_PI);
  
  //herramienta 8
fill(255);
stroke (255);
ellipse(posXbot7+ (tamBot7/2) , posYbot7+(tamBot7/2), 30,30);
  
  //herramienta 9
fill(255);
stroke (255);
ellipse(posXbot8+ (tamBot8/2) , posYbot8+(tamBot8/2), 30,30);
  fill(0);
stroke (0);
  ellipse(325,25,2,2)
  
  //herramienta 10
fill(255);
stroke (255);
ellipse(posXbot9+ (tamBot9/2) , posYbot9+(tamBot9/2), 30,30); 
  
  stroke(0);
quad(360,20,365,25,360,30,355,25)
quad(365,20,370,25,365,30,360,25)
quad(370,20,375,25,370,30,365,25)
  
//herramientas colores
  //amarillo
fill(255,255,0);
stroke (255,255,0);
ellipse(posXbot11+ (tamBot11/2) , posYbot11+(tamBot11/2), 20,20); 
  //verde
fill(155,255,28);
stroke (155,255,28);
ellipse(posXbot12+ (tamBot12/2) , posYbot12+(tamBot12/2), 20,20); 
  //azul claro
fill(0,255,201);
stroke (0,255,201);
ellipse(posXbot13+ (tamBot13/2) , posYbot13+(tamBot13/2), 20,20); 
  //azul
fill(0,189,255);
stroke (0,189,255);
ellipse(posXbot14+ (tamBot14/2) , posYbot14+(tamBot14/2), 20,20); 
  //morado
fill(164,100,246);
stroke (164,100,246);
ellipse(posXbot15+ (tamBot15/2) , posYbot15+(tamBot15/2), 20,20); 
  //rosado
fill(255,134,248);
stroke (255,134,248);
ellipse(posXbot16+ (tamBot16/2) , posYbot16+(tamBot16/2), 20,20);
  //rojo
fill(255,26,50);
stroke (255,26,50);
ellipse(posXbot17+ (tamBot17/2) , posYbot17+(tamBot17/2), 20,20);
  //naranja
fill(255,189,93);
stroke (255,189,93);
ellipse(posXbot18+ (tamBot18/2) , posYbot18+(tamBot18/2), 20,20);
  //negro
fill(0);
stroke (0);
ellipse(posXbot19+ (tamBot19/2) , posYbot19+(tamBot19/2), 20,20);
  //blanco
fill(255);
stroke (255);
ellipse(posXbot20+ (tamBot20/2) , posYbot20+(tamBot20/2), 20,20);
 
if (mouseIsPressed) {
if (colSelect == 0){
fill(0,0,0);
stroke(0,0,0);
}
  
//herramientas colores
  //amarillo
if (colSelect == 11){
fill(255,255,0);
stroke (255,255,0);
}  
if (mouseX > posXbot11 && mouseX < posXbot11 + tamBot11 &&
mouseY > posYbot11 && mouseY < posYbot11 + tamBot11) {
colSelect = 11;
}
  //verde
if (colSelect == 12){
fill(155,255,28);
stroke (155,255,28);
}  
if (mouseX > posXbot12 && mouseX < posXbot12 + tamBot12 &&
mouseY > posYbot12 && mouseY < posYbot12 + tamBot12) {
colSelect = 12;
}
  //azul claro
if (colSelect == 13){
fill(0,255,201);
stroke (0,255,201);
}  
if (mouseX > posXbot13 && mouseX < posXbot13 + tamBot13 &&
mouseY > posYbot13 && mouseY < posYbot13 + tamBot13) {
colSelect = 13;
}  
  //azul 
if (colSelect == 14){
fill(0,189,255);
stroke (0,189,255);
}  
if (mouseX > posXbot14 && mouseX < posXbot14 + tamBot14 &&
mouseY > posYbot14 && mouseY < posYbot14 + tamBot14) {
colSelect = 14;
}  
  //morado
if (colSelect == 15){
fill(164,100,246);
stroke (164,100,246);
}  
if (mouseX > posXbot15 && mouseX < posXbot15 + tamBot15 &&
mouseY > posYbot15 && mouseY < posYbot15 + tamBot15) {
colSelect = 15;
} 
  //rosado
if (colSelect == 16){
fill(255,134,248);
stroke (255,134,248);
}  
if (mouseX > posXbot16 && mouseX < posXbot16 + tamBot16 &&
mouseY > posYbot16 && mouseY < posYbot16 + tamBot16) {
colSelect = 16;
} 
  //rojo
if (colSelect == 17){
fill(255,26,50);
stroke (255,26,50);
}  
if (mouseX > posXbot17 && mouseX < posXbot17 + tamBot17 &&
mouseY > posYbot17 && mouseY < posYbot17 + tamBot17) {
colSelect = 17;
} 
  //naranja
if (colSelect == 18){
fill(255,189,93);
stroke (255,189,93);
}  
if (mouseX > posXbot18 && mouseX < posXbot18 + tamBot18 &&
mouseY > posYbot18 && mouseY < posYbot18 + tamBot18) {
colSelect = 18;
} 
  //negro
if (colSelect == 19){
fill(0);
stroke (0);
}  
if (mouseX > posXbot19 && mouseX < posXbot19 + tamBot19 &&
mouseY > posYbot19 && mouseY < posYbot19 + tamBot19) {
colSelect = 19;
}  
  //blanco
if (colSelect == 20){
fill(255);
stroke (255);
}  
if (mouseX > posXbot20 && mouseX < posXbot20 + tamBot20 &&
mouseY > posYbot20 && mouseY < posYbot19 + tamBot19) {
colSelect = 20;
} 
  
//herramientas figuras
  //1
if (mouseX > posXbot0 && mouseX < posXbot0 + tamBot0 &&
mouseY > posYbot0 && mouseY < posYbot0 + tamBot0) {
herSelect = 0;
} 
 if (herSelect == 0) {
  noFill();
  strokeWeight(1);
  ellipse(200, 200, (100)*3, mouseY);  
}  
  //2
if (mouseX > posXbot1 && mouseX < posXbot1 + tamBot1 &&
mouseY > posYbot1 && mouseY < posYbot1 + tamBot1) {
herSelect = 1;
}
if (herSelect == 1) {
  noFill();
  strokeWeight(1);
beginShape(QUAD_STRIP); 
vertex(mouseX, 150); 
vertex(190, mouseY);
vertex(mouseY, 150); 
vertex(210, mouseY); 
vertex(mouseX, 210); 
endShape();
}
    //3
if (mouseX > posXbot2 && mouseX < posXbot2 + tamBot2 &&
mouseY > posYbot2 && mouseY < posYbot2 + tamBot2) {
herSelect = 2;
}
  if (herSelect == 2){
beginShape(QUADS);
vertex(200, mouseY);
vertex(200, 245);
vertex(220, 245);
vertex(220, mouseY);
vertex(235, mouseY);
vertex(235, 245);
vertex(255, 245);
vertex(255, mouseY);
vertex(mouseX, 200);
vertex(245, 200);
vertex(245, 220);
vertex(mouseX, 220);
vertex(mouseX, 235);
vertex(245, 235);
vertex(245, 255);
vertex(mouseX, 255);
endShape();
}
  
  //4
if (mouseX > posXbot3 && mouseX < posXbot3 + tamBot3 &&
mouseY > posYbot3 && mouseY < posYbot3 + tamBot3) {
herSelect = 3;
} 
  if (herSelect == 3){
arc(200,200,mouseY, mouseX, mouseX, mouseX);
  }
  
  //5
if (mouseX > posXbot4 && mouseX < posXbot4 + tamBot4 &&
mouseY > posYbot4 && mouseY < posYbot4 + tamBot4) {
herSelect = 4;
}  
    if (herSelect == 4){
    strokeWeight(0);
  var weight = dist(mouseX, mouseY, pmouseX, pmouseY);
  strokeWeight(weight);
  line(mouseX, mouseY, pmouseX, pmouseY);
    ellipse(mouseX, mouseY, 10, 10);
    }
  
  //6
if (mouseX > posXbot5 && mouseX < posXbot5 + tamBot5 &&
mouseY > posYbot5 && mouseY < posYbot5 + tamBot5) {
herSelect = 5;
}  
  if (herSelect == 5){
arc(mouseX, mouseY, 3 ,mouseX, QUARTER_PI, PI+QUARTER_PI);
  }
    
  //7
if (mouseX > posXbot6 && mouseX < posXbot6 + tamBot6 &&
mouseY > posYbot6 && mouseY < posYbot6 + tamBot6) {
herSelect = 6;
}  
    if (herSelect == 6){
arc(mouseX, mouseY, 80 ,mouseX, QUARTER_PI + 10, PI+QUARTER_PI + 10);
  }
  
  //8
if (mouseX > posXbot7 && mouseX < posXbot7 + tamBot7 &&
mouseY > posYbot7 && mouseY < posYbot7 + tamBot7) {
herSelect = 7;
}  
  if (herSelect == 7){
  translate(mouseX, mouseY);
  beginShape(POINTS);
vertex(30, 20);
vertex(85, 20);
vertex(85, 75);
vertex(30, 75);
endShape();
  }
  
  //9
if (mouseX > posXbot8 && mouseX < posXbot8 + tamBot8 &&
mouseY > posYbot8 && mouseY < posYbot8 + tamBot8) {
herSelect = 8;
}  
 if (herSelect == 8){
  noFill();
  strokeWeight(1)
translate(mouseX, mouseY);
vertex(57.5, 50);
vertex(57.5, 15); 
vertex(92, 50); 
vertex(57.5, 85); 
vertex(22, 50); 
vertex(57.5, 15); 
endShape();
 }
  
  //10
  if (mouseX > posXbot9 && mouseX < posXbot9 + tamBot9 &&
mouseY > posYbot9 && mouseY < posYbot9 + tamBot9) {
herSelect = 9;
}
  if (herSelect == 9){
  translate(mouseX, mouseY);
  beginShape();
vertex(20, 20);
vertex(40, 20);
vertex(40, 40);
vertex(60, 40);
vertex(60, 60);
vertex(20, 60);
endShape(CLOSE);
  }
}
}