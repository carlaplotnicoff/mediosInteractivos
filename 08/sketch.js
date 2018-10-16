var micangrejoA;
var miEjercitoA = [];
var miMedusaA = [];
var miEjercitoB = [];
var miPez = [];
var miSegundo;

var tiempo;
var vel;
var tam;
var mtam;

var w; //ancho de la pantalla
var h; //alto de la pantalla
var c; //variable para el color de fondo
var area; //area total de al pantalla

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

 //para la funcion de . agrandar y achiquitar pantalla
  
  w = windowWidth; //guarda el ancho de la pantalla en la variable w
  h = windowHeight; //guarda el alto de la pantalla en la variable h
  area = w * h; //area de la ventana es igual a ancho x alto
  c = color(179, 255, 255); //inicializa la variable de color de fondo

  //los peces
  
  tiempo = [0, 0]; //crea una lista de tiempo para guardar el tiempo entre dos clics
  vel = 0; //velocidad inicial es cero

  //tamaño inicial es 10px
  tam = 10;
  mtam = 10;

  //tamaño del texto
  textSize(10);
  
  //cangrejos
  miCangrejoA = new cangrejito();

  for (var i = 0; i < 100; i = i + 1) {
    var tempX = random(300, 600);
    var tempY = random(600, 200);

    miEjercitoA[i] = new cangrejito(tempX, tempY, 1);
  }    
  
  //medusas
  for (var i = 0; i < 50; i++) {        
    miMedusaA[i] = new medusita(random(300), random(height), 10);    
  }
}

function draw() {
  background(c); //fondos que cambian
  text("1. Cambie el tamaño de la pantalla", 30, 30);
  fill(255, 224, 102)
  rect(0,400,width,height)
  //image(miFondo, 0, 0, width, height);

  //pez que crece con funcion de tiempo

  var vel = 60000 / (tiempo[1] - tiempo[0]);

  if (millis() - tiempo[1] > 200) {
    vel = 0;
  }

  //texto de la pantalla
  fill(255);
  noStroke();
  text("2. Haz que crezcan los peces", 30, 55);

  //floor() redondea el numero de vel a un valor entero
  text(floor(vel) + " clics por minuto", 45, 80);

  //revisa que la velocidad no sea infinita (es decir que no exista) y que sea mayor a 200 clics por segundo
  if (vel != Infinity && floor(vel) > 200) {

    //tamano del pez
    //aumenta el tamaño del pez dependiendo de los clics por minuto
    tam += vel / 200;

  } else if (tam > 10) { //si la velocidad es menor a 200 y el tamaño del pez es mayor a 10

    //disminuye el tamaño del pez
    tam -= 3;

  } else {

    //establece 30 como el tamaño mínimo para el pez
    tam = 20;

  }

  //esta parte del codigo permite suavizar el cambio de tamaño del pez
  var dif = tam - mtam; //resta del tamaño actual del pez con el nuevo tamaño

  //si el pez debe cambiar de tamaño lo hace pero de manera suave
  if (abs(dif) > 1.0) {
    mtam = mtam + dif / 8.0;
  }

  //pintar los peces
  image(miPez, 200, 100, mtam, mtam);
  image(miPez, 150, 100, mtam, mtam);
  image(miPez, 100, 150, mtam, mtam);
  image(miPez, 100, 200, mtam, mtam);
  image(miPez, 100, 100, mtam, mtam);
  image(miPez, 200, 200, mtam, mtam);
  image(miPez, 150, 150, mtam, mtam);
  image(miPez, 200, 150, mtam, mtam);
  image(miPez, 150, 200, mtam, mtam);

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

  image(miTiburon, mouseX - 100 / 2, mouseY - 80 / 2, 100, 80)

  //estrellas de mar en esquina superior derecha del oceanoo

  image(miEstrellita, 420, 20, 80, 60)
  image(miEstrellita, 450, 80, 100, 80)
  image(miEstrellita, 360, 80, 50, 40)

  //pulpos y caballitos de mar van pasando por el oceano 
  //cada segundo se mueven a la derecha

  miSegundo = second() * 10;

  image(miCaballito, miSegundo, 20, 50, 60)
  image(miPulpo, miSegundo, 100, 100, 80)
  image(miCaballito, miSegundo, 200, 90, 60)
  image(miPulpo, miSegundo, 300, 100, 80)
  image(miCaballito, miSegundo, 400, 90, 60)
  image(miPulpo, miSegundo, 500, 100, 80)

}

//funcion que se activa cuando cambia el tamaño de la ventana del navegador
function windowResized() {

  //si la ventana es agrandada
  if (windowWidth * windowHeight > area) {

    //el color de fondo es azul clarito, marea suave
    c = color(204, 229, 255);
  } else { //si la ventana se hace más pequeña

    //el color de fondo es azul oscuro marea alta
    c = color(0, 0, 102);
  }

  //se actualiza el nuevo tamano de la pantalla  en las variables w y h
  w = windowWidth;
  h = windowHeight;
  area = w * h; //se recalcula el area de la pantalla

  //se cambia el tamano del canvas para que sea del nuevo tamano de la pantalla
  resizeCanvas(w, h);
}

//funcion que se llama cuando se hace clic
function mouseClicked() {

  //el tiempo del segundo clic se corre a la segunda posicion
  tiempo[0] = tiempo[1];

  //se guarda el tiempo del primer clic en el arreglo
  tiempo[1] = millis();
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