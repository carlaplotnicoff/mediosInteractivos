var micangrejoA;
var miEjercitoA = [];
var miMedusaA = [];
var miEjercitoB = [];
var miPez = [];
var miSegundo;

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

  miCangrejoA = new cangrejito();

  for (var i = 0; i < 100; i = i + 1) {
    var tempX = random(300, 600);
    var tempY = random(600, 200);

    miEjercitoA[i] = new cangrejito(tempX, tempY, 1);
  }    
  for (var i = 0; i < 50; i++) {        
    miMedusaA[i] = new medusita(random(300), random(height), 10);    
  }



}

function draw() {
image(miFondo, 0, 0, width, height);
  
  //las medusas se comen entre ellas y van creciendo a medida 
  //una se come a la otra
  
  for (var i = miMedusaA.length - 1; i >= 0; i--) {        
    miMedusaA[i].show();        
    miMedusaA[i].move();        
    miMedusaA[i].bounce();         
    for (var j = miMedusaA.length - 1; j >= 0; j--) {            
      if (j != i && miMedusaA[i] && miMedusaA[i].eats(miMedusaA[j])) {                
        miMedusaA.splice(j, 1);            
      }        
    }    
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

  //tiburon es el mouse que se come a los cangrejos
  
  image(miTiburon, mouseX, mouseY, 100, 80)

  //estrellas de mar en esquina superior derecha del oceanoo
  
  image(miEstrellita, 420, 20, 80, 60)
  image(miEstrellita, 450, 80, 100, 80)
  image(miEstrellita, 360, 80, 50, 40)
  
  //pulpos y caballitos de mar van pasando porr el oceano 
  //cada segundo se mueven a la derecha
  
  miSegundo = second()*10;

  image(miCaballito, miSegundo, 20, 50, 60)
  image(miPulpo, miSegundo, 100, 100, 80)
  image(miCaballito, miSegundo, 200, 90, 60)
  image(miPulpo, miSegundo, 300, 100, 80)
  image(miCaballito, miSegundo, 400, 90, 60)
  image(miPulpo, miSegundo, 500, 100, 80)
  
}


function cangrejito(miX, miY) {
  // caraceristicas
  this.x = miX;
  this.y = miY;
  this.estaVivo = true;

  // habilidades
  this.dibujarse = function() {
    if (this.estaVivo == true) {
      image(miCangrejo, this.x + 10, this.y - 10, 25, 20);

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