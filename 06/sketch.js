var song;
var amp;
var boton;
var lineaAmp = [];
var miFotico;
var miFotico1;
var miFuentica;
var col
var sliderRate;
var sliderPan;

var i=0
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

//Herramienta
var herSelect = 0;
//Color
var colSelect = 0;

function toggleSong() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}

function preload() {
 song = loadSound("cancion.mp3", loaded);
  miFotico = loadImage('assets/panda1.png');
  miFotico1 = loadImage('assets/Panda2.png');
  miFuentica = loadFont('assets/JosefinSlab-Regular.ttf');
  song.setVolume(0.5);
  sliderRate = createSlider(0, 1.5, 1, 0.01);
  sliderPan = createSlider(-1, 1, 0, 0.01);
    //miFotico = loadImage('assets/panda1.jpg');
    //miFotico = loadImage('assets/panda2.jpg');

}

function loaded() {
  song.play();
}


function setup() {
  createCanvas(500, 500);
  //boton start para poner la cancion y se oprime para poner
  //pausa tambien
  
  
  
  boton = createButton('start');
  boton.mousePressed(toggleSong);
  amp = new p5.Amplitude();
}

function draw() {
  background(50,100,200);
  
      //fondo degradado
  
  var altorect=5;
  for(var posy = 0; posy < height; posy=posy+altorect) {
	noStroke();
  fill(posy, 0, posy);
  rect(0, posy, width, altorect);
  }
    
  
  
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
  
 if (mouseIsPressed) { 
 //amarillo
if (colSelect == 11){
fill(255,255,0);
background(255,255,0);
}  
if (mouseX > posXbot11 && mouseX < posXbot11 + tamBot11 &&
mouseY > posYbot11 && mouseY < posYbot11 + tamBot11) {
colSelect = 11;
}
  //verde
if (colSelect == 12){
fill(155,255,28);
background(155,255,28);
}  
if (mouseX > posXbot12 && mouseX < posXbot12 + tamBot12 &&
mouseY > posYbot12 && mouseY < posYbot12 + tamBot12) {
colSelect = 12;
}
  //azul claro
if (colSelect == 13){
fill(0,255,201);
background(0,255,201);
}  
if (mouseX > posXbot13 && mouseX < posXbot13 + tamBot13 &&
mouseY > posYbot13 && mouseY < posYbot13 + tamBot13) {
colSelect = 13;
}  
  //azul 
if (colSelect == 14){
fill(0,189,255);
background(0,189,255);
}  
if (mouseX > posXbot14 && mouseX < posXbot14 + tamBot14 &&
mouseY > posYbot14 && mouseY < posYbot14 + tamBot14) {
colSelect = 14;
}  
  //morado
if (colSelect == 15){
fill(164,100,246);
background(164,100,246); 
}  
if (mouseX > posXbot15 && mouseX < posXbot15 + tamBot15 &&
mouseY > posYbot15 && mouseY < posYbot15 + tamBot15) {
colSelect = 15;
} 
  //rosado
if (colSelect == 16){
fill(255,134,248);
background(255,134,248);
}  
if (mouseX > posXbot16 && mouseX < posXbot16 + tamBot16 &&
mouseY > posYbot16 && mouseY < posYbot16 + tamBot16) {
colSelect = 16;
} 

  //rojo
if (colSelect == 17){
fill(255,26,50);
background(255,26,50);
}  
if (mouseX > posXbot17 && mouseX < posXbot17 + tamBot17 &&
mouseY > posYbot17 && mouseY < posYbot17 + tamBot17) {
colSelect = 17;
} 
 }  
  
    var vol = amp.getLevel();
  lineaAmp.push(vol);
  stroke(255);
  noFill(); 
  
  
  
  //push y pop para crear ondas de amplitud que van con musica
  
  push();
  var currentY = map(vol, 1, 1, height, 1);
  translate(0, height  - currentY);
    beginShape();
  for (var i = 0; i < lineaAmp.length; i++) {
    var y = map(lineaAmp[i], 0, 1, 300, 0);
    vertex(i, y);
  }
  endShape();
  pop();
  
   //linea que dice donde va la musica para en ejeX 450 
  
  if (lineaAmp.length > 450) {
    lineaAmp.splice(0, 1);
  }
  
  stroke(0, 0, 0);
  strokeWeight (2) 
  line(lineaAmp.length, 0, lineaAmp.length, height); 

  
  //fotos

  //if(mouseIsPressed){
  //image(miFotico, mouseX, mouseY, 20, 20);
  
  song.pan(sliderPan.value());
  song.rate(sliderRate.value());
  
  fill(255);
  noStroke();
  ellipse (65,35, 100,30);
  
    fill(255);
  noStroke();
  ellipse (200,35, 100,30); 
  
  //panda aburrido
  image(miFotico, 300, 300, 110, 130);
  
  //panda feliz cuando click
  if(mouseIsPressed){
  image(miFotico1, 285, 270, 150,170);
  }
  
  //texto
    fill(255);
  textFont(miFuentica);
  textSize(20);
  text("Cambia el color del fondo", 20, 350);
  
      fill(255);
  textFont(miFuentica);
  textSize(20);
  text("Haz click para que ", 280, 450);
  
        fill(255);
  textFont(miFuentica);
  textSize(20);
  text("  el panda no se aburra ", 250, 475);
  
          fill(0);
  textFont(miFuentica);
  textSize(20);
  text(" Rapidez ", 24, 40);
  
            fill(0);
  textFont(miFuentica);
  textSize(20);
  text(" PAN", 173, 40);

}
