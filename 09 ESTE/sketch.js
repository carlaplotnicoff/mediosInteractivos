var micangrejoA;
var miEjercitoA = [];
var miMedusaA = [];
var miEjercitoB = [];
var miPez = [];
var miSegundo;
var x = 50;
var y = 50;

function preload() {

  miCangrejo = loadImage('especiesOceano/cangrejo.png');
  miPez = loadImage('especiesOceano/pez.png');
  miMedusa = loadImage('especiesOceano/medusa.png');
  miCaballito = loadImage('especiesOceano/caballito.png');
  miPulpo = loadImage('especiesOceano/pulpo.png');
  miEstrellita = loadImage('especiesOceano/estrellita.png');
  miTiburon = loadImage('especiesOceano/tiburon.png');
  miFondo = loadImage('especiesOceano/fondo.jpg');
  miFondo2 = loadImage('especiesOceano/oceano2.jpg');

}

function setup() {
  createCanvas(600, 600);

  miCangrejoA = new pececito();

  for (var i = 0; i < 100; i = i + 1) {
    var tempX = random(300, 600);
    var tempY = random(600, 200);

    miEjercitoA[i] = new pececito(tempX, tempY, 1);
  }    
  for (var i = 0; i < 100; i++) {        
    miMedusaA[i] = new medusita(random(300), random(height), 10);    
  }

  buttonPressed = false;
  buttonW = 335;
  buttonH = 100;
  textSize(buttonH);
  buttonX = (width-buttonW)/2;
  buttonY = (height-buttonH)/2;

}

function draw() {
image(miFondo, 0, 0, width, height);
  
    if (keyIsDown(LEFT_ARROW)) {
    x -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    x += 5;
  }
  if (keyIsDown(UP_ARROW)) {
    y -= 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    y += 5;
  }
  fill(255, 219, 140);
  noStroke();
  ellipse(x, y, 40, 30);
  image(miCangrejo, x,y, 70, 50)
  
  //las medusas se comen entre ellas y van creciendo a medida 
  //una se come a la otra
  
  for (var i = miMedusaA.length - 1; i >= 0; i--) {        
    miMedusaA[i].show();        
    miMedusaA[i].move();        
    miMedusaA[i].bounce();            
  }

  //los cangrejos se mueven en su lugar y cuando el tiburon pasa 
  //por encima se los come
  
  miCangrejoA.dibujarse();
  miCangrejoA.moverse();
  if (dist(mouseX, mouseY, miCangrejoA.x, miCangrejoA.y)) {
    miCangrejoA.morirse();
  }

  for (var i = 0; i < miEjercitoA.length; i = i + 1) {
    miEjercitoA[i].dibujarse();
    miEjercitoA[i].moverse();

    if (dist(mouseX, mouseY, miEjercitoA[i].x, miEjercitoA[i].y) < 20) {
      miEjercitoA[i].morirse();
    }
  } 
  
      //pulpos y caballitos de mar van pasando por el oceano 
  //cada segundo se mueven a la derecha
  
  miSegundo = second()*10;

  image(miPulpo, miSegundo, 100, 100, 80)
  image(miPulpo, miSegundo, 300, 100, 80)
  image(miPulpo, miSegundo, 500, 100, 80)
  
  
  if (buttonPressed) {
  } else {
    fill(0,104,120);
    image(miFondo2,0,0,  width, height);
    fill(0,214,242);
    rect(buttonX, buttonY, buttonW, buttonH);
    fill(0,104,120);
    textSize(65)
    text("EMPEZAR", buttonX+10, buttonY+buttonH-23);
    textSize(20)
    fill(0)
    text("Come 30 peces para ganar y evita las medusas",
    buttonX-30, buttonY+buttonH -120)
    
    }

}

function mousePressed() {
  if (mouseX > buttonX && mouseX < buttonX+buttonW && mouseY > buttonY && mouseY < buttonY+buttonH)
    buttonPressed = true;
}


function pececito(miX, miY) {
  // caraceristicas
  this.x = miX;
  this.y = miY;
  this.estaVivo = true;

  // habilidades
  this.dibujarse = function() {
    if (this.estaVivo == true) {
      image(miPez, this.x + 10, this.y - 10, 25, 20);

    }
  }

  this.moverse = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }

  this.morirse = function() {
    this.estaVivo = false;
  }
}

function medusita(x, y, r) {     
  this.x = x;    
  this.y = y;    
  this.r = r;    
  this.speedx = random(-0.3, 0.3);    
  this.speedy = random(-0.3, 0.3);     
  this.show = function() {        
    image(miMedusa, this.x, this.y, this.r * 4, 100, 80);    
  }

  this.move = function() {        
    this.x = this.x + this.speedx;        
    this.y = this.y + this.speedy;    
  }     
  this.bounce = function() {        
    if (this.x > width || this.x < 0) {            
      this.speedx = -this.speedx;        
    }        
    if (this.y > height || this.y < 0) {            
      this.speedy = -this.speedy;        
    }    
  }      
  this.eats = function(other) {        
    var d = dist(this.x, this.y, other.x, other.y);        
    if (d < this.r + other.r) {            
      this.r += other.r * 0.6;            
      return true;        
    } else {         
      return false;     
    }  
  }
}