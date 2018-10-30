//botones ingredientes
//boton champiñones
var posXbot0 = 35;
var posYbot0 = 30;
tamBot0 = 50;
//boton sardinas
var posXbot1 = 95;
var posYbot1 = 35;
tamBot1 = 50;
//boton camarones
var posXbot2 = 155;
var posYbot2 = 35;
tamBot2 = 50;
//boton aceitunas
var posXbot3 = 215;
var posYbot3 = 35;
tamBot3 = 50;
//boton peperoni
var posXbot4 = 275;
var posYbot4 = 35;
tamBot4 = 50;

//seleccionar ingredientes
var ingredienteSel = 0;

//ingredientes
var champis2 = [];
var anchoas = [];
var camarones = [];
var aceitunas = [];
var pepperoni = [];

var estado = 0

var idealChampis = 0;
var idealAnchoas = 0; 
var idealCamarones = 0;
var idealAceitunas = 0;
var idealPepperoni = 0;





function preload() {

  //cargar fotos ingredientes y fondo
  miChampi = loadImage('pizzeria/champi.png');
  miAnchos = loadImage('pizzeria/anchoas.png');
  miGamba = loadImage('pizzeria/gamba.png');
  miPerro = loadImage('pizzeria/perro.png');
  miAceituna = loadImage('pizzeria/olives.png');
  miPepperoni = loadImage('pizzeria/peperoni.png');
  miPizza = loadImage('pizzeria/masapizza.png');
  miFondo = loadImage('pizzeria/pizzeriaFondo.jpg');
  perdiste= loadImage('pizzeria/perdiste.jpg')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  }

function draw() {    
  
  	if (estado == 0) {
		background(220);
    image(miFondo,0,0,  width, height);
    fill(255);
    textSize(30);
		text("Haz click para empezar", width / 2 - 120, 50);
    }  
    
  else if (estado == 1) {
  //pizza de  fondo
  background(155, 0, 0);
  image(miPizza, -100, 80, 550 * width / 400, 350 * width / 400);
         
//boton champiñones
  fill(204, 122, 122);
  stroke(255);
  ellipse(65,55,50,50)
  image(miChampi, 35,30,60,60);
//boton anchoas
  fill(204, 122, 122);
  stroke(255);
  ellipse(123,55,50,50)
  image(miAnchos, 100, 35, 45, 45)
////boton camarones
  fill(204, 122, 122);
  stroke(255);
  ellipse(180,55,50,50)
  image(miGamba, 155, 30, 50, 50)
//boton aceitunas
  fill(204, 122, 122);
  stroke(255);
  ellipse(245, 55, 50, 50)
  image(miAceituna, 215, 30, 60, 60)
//boton pepperoni
  fill(204, 122, 122);
  stroke(255);
  ellipse(300, 55, 50, 50)
  image(miPepperoni, 275, 30, 50, 50)
  
//funcion, se  muestran ingredientes  
//aparecen champiñones
  for (var i = 0; i < champis2.length; i=i+1 ){
    champis2 [i].mostrar();
  }
//aparecen anchoas
  for (var i = 0; i < anchoas.length; i=i+1 ){
    anchoas[i].mostrar();
  }
//aparecen camarones
    for (var i = 0; i < camarones.length; i=i+1 ){
    camarones[i].mostrar();
 }
   for (var i = 0; i < aceitunas.length; i=i+1 ){
   aceitunas[i].mostrar();
 }
    for (var i = 0; i < pepperoni.length; i=i+1 ){
   pepperoni[i].mostrar();
  }

//posicion de boton champiñon
  if (mouseX > posXbot0 && mouseX < posXbot0 + tamBot0 &&
    mouseY > posYbot0 && mouseY < posYbot0 + tamBot0) {
    ingredienteSel = 1;
  }
  
//posicion de boton anchoas
  if (mouseX > posXbot1 && mouseX < posXbot1 + tamBot1 &&
    mouseY > posYbot1 && mouseY < posYbot1 + tamBot1) {
    ingredienteSel = 2;
  }  
  
// posicion de boton camaron
    if (mouseX > posXbot2 && mouseX < posXbot2 + tamBot2 &&
    mouseY > posYbot2 && mouseY < posYbot2 + tamBot2) {
    ingredienteSel = 3;
    }
// posicion de boton aceituna
    if (mouseX > posXbot3 && mouseX < posXbot3 + tamBot3 &&
    mouseY > posYbot3 && mouseY < posYbot3 + tamBot3) {
    ingredienteSel = 4;
    }
// posicion de boton aceituna
    if (mouseX > posXbot4 && mouseX < posXbot4 + tamBot4 &&
    mouseY > posYbot4 && mouseY < posYbot4 + tamBot4) {
    ingredienteSel = 5;
    } 
    
    if(champis2.length > idealChampis){   
      idealChampis = random(1,5)
      estado = 3
      champis2.length = 0
    }
    if(anchoas.length > idealAnchoas){ 
      idealAnchoas = random(1,5)
    estado = 3
      anchoas.length = 0
    }  
    if(camarones.length > idealCamarones){  
      idealCamarones = random(1,5)
      estado = 3  
      camarones.length = 0
    }
      if(aceitunas.length > idealAceitunas){   
        idealAceitunas = random(1,5)
      estado = 3  
        aceitunas.length = 0
    }  
      if(pepperoni.length > idealPepperoni){   
        idealPepperoni = random(1,5)
      estado = 3  
        pepperoni.length = 0
    }  
    
      
      
	} else if (estado == 2) {
		background(220);
		text("Ganó", width / 2, height / 2);

	} else if (estado == 3) {
    image(perdiste,0,0,  width, height);
    fill(255)
    textSize(25)
		text("Perdiste", width / 2 - 50, height / 2);
    textSize(15)
    text("haz click para  jugar otra vez", width / 2 - 100, height / 2 + 50);
  }
    
  }
     
function mouseReleased() {
  //delimitar espacio
if (mouseX > 100 && mouseY > 100) {
  
  if (ingredienteSel == 1) {
    champis2[champis2.length] = new champiPos(mouseX, mouseY);
  }
  if (ingredienteSel == 2) {
    anchoas[anchoas.length] = new anchoasPos(mouseX, mouseY);
  }
  if (ingredienteSel == 3) {
    camarones[camarones.length] = new camaronPos(mouseX, mouseY);
  }
  if (ingredienteSel == 4) {
  aceitunas[aceitunas.length] = new aceitunaPos(mouseX, mouseY);
  }
  if (ingredienteSel == 5) {
  pepperoni[pepperoni.length] = new pepperoniPos(mouseX, mouseY);
}
}
}


//funcion que se activa si se acaba el toque en la pantalla
function mousePressed() {
  //comenzar el juego cuando se está en el estado inicial
  if (estado == 0) {
    estado = 1;
  }
  
  //reiniciar el juego cuando ya se perdió
  if (estado == 3) {
    estado = 1;
  }
  
}

//funciones de especies(ingredientes)
//funcion champiñon
function champiPos(pX, pY) {

  //variables de posicion, el champiñon
  //se crea en una posicion aleatoria en X y Y
  this.x = pX;
  this.y = pY;

  //variable de tamano aleatorio entre 30 y 50
  this.tam = random(50, 100);

  //funcion que dibuja champiñon
  this.mostrar = function() {
  image(miChampi, this.x, this.y, this.tam, this.tam);
  }
}

//funcion anchoas
function anchoasPos(pX, pY) {

  this.x = pX;
  this.y = pY;

  this.tam = random(50, 100);

  this.mostrar= function() {
  image(miAnchos, this.x, this.y, this.tam, this.tam);
  }
}

//funcion camaron
function camaronPos(pX, pY) {

  this.x = pX;
  this.y = pY;

  //variable de tamano aleatorio entre 30 y 50
  this.tam = random(50, 100);

  this.mostrar = function() {
  image(miGamba, this.x, this.y, this.tam, this.tam);
  }
}

//funcion aceituna
function aceitunaPos(pX, pY) {

  this.x = pX;
  this.y = pY;

  this.tam = random(50, 100);

  this.mostrar = function() {
  image(miAceituna, this.x, this.y, this.tam, this.tam);
  }
}

//funcion pepperoni
function pepperoniPos(pX, pY) {

  this.x = pX;
  this.y = pY;

  this.tam = random(50, 100);

  this.mostrar = function() {
  image(miPepperoni, this.x, this.y, this.tam, this.tam);
  }
}