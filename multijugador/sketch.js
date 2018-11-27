//el juego, es un juego de memoria. Para pasar de nivel debes poner en la pizza los
//ingredientes que te indeique la receta. 
//botones ingredientes
//boton champiñones

var posXbot0 = 65;
var posYbot0 = 50;
var tamBot0 = 50;
//boton sardinas
var posXbot1 = 130;
var posYbot1 = 50;
var tamBot1 = 50;
//boton camarones
var posXbot2 = 195;
var posYbot2 = 50;
var tamBot2 = 50;
//boton aceitunas
var posXbot3 = 260;
var posYbot3 = 50;
var tamBot3 = 50;
//boton peperoni
var posXbot4 = 325;
var posYbot4 = 50;
var tamBot4 = 50;
//boton tomate
var posXbot6 = 390;
var posYbot6 = 50;
var tamBot6 = 50;
//boton pimenton
var posXbot7 = 455;
var posYbot7 = 50;
var tamBot7 = 50;

//boton terminar
var posXbot5 = 550;
var posYbot5 = 50;
var tamBot5 = 60;

//boton borrar
var posXbot8 = 55;
var posYbot8 = 190;
var tamBot8 = 30;

//botones seleccion jugador
//1 jugador
var posXbot9 = 450;
var posYbot9 = 520;
var tamBot9 = 30;
//2 jugadores
var posXbot10 = 600;
var posYbot10 = 520;
var tamBot10 = 30;

//Boton para saber quien es el  jugador 1
var posXbot11 = 620;
var posYbot11 = 550;
var tamBot11 = 30;
//Boton para continuar despues de escoger personaje
var posXbot12 = 620;
var posYbot12 = 450;
var tamBot12 = 30;

//seleccionar ingredientes
var ingredienteSel = 0;

//ingredientes
var champis2 = [];
var anchoas = [];
var camarones = [];
var aceitunas = [];
var pepperoni = [];
var tomate = [];
var pimenton = [];

var estado = 0;

//numero de ingredientes puestos en la pizza
var numChampis = 0;
var numAnchoas = 0;
var numCamarones = 0;
var numAceitunas = 0;
var numPepperoni = 0;
var numTomate = 0;
var numPimenton = 0;
//numero de ingredientes que deben ir sobre la pizza
var idealChampis = 0;
var idealAnchoas = 0;
var idealCamarones = 0;
var idealAceitunas = 0;
var idealPepperoni = 0;
var idealTomate = 0;
var idealPimenton = 0;

//numero de ingredientes puestos en la pizza multijug
var numChampis2 = 0;
var numAnchoas2 = 0;
var numCamarones2 = 0;
var numAceitunas2 = 0;
var numPepperoni2 = 0;
var numTomate2 = 0;
var numPimenton2 = 0;
//numero de ingredientes que deben ir sobre la pizza multijug
var idealChampis2 = 0;
var idealAnchoas2 = 0;
var idealCamarones2 = 0;
var idealAceitunas2 = 0;
var idealPepperoni2 = 0;
var idealTomate2 = 0;
var idealPimenton2 = 0;
//numero de ingredientes puestos en la pizza multijug
var numChampis3 = 0;
var numAnchoas3 = 0;
var numCamarones3 = 0;
var numAceitunas3 = 0;
var numPepperoni3 = 0;
var numTomate3 = 0;
var numPimenton3 = 0;
//numero de ingredientes que deben ir sobre la pizza multijug
var idealChampis3 = 0;
var idealAnchoas3 = 0;
var idealCamarones3 = 0;
var idealAceitunas3 = 0;
var idealPepperoni3 = 0;
var idealTomate3 = 0;
var idealPimenton3 = 0;

var jugador1 = 1

function preload() {

  //cargar fotos ingredientes y fondo
  miChampi = loadImage('pizzeria/champi.png');
  miAnchos = loadImage('pizzeria/anchoas.png');
  miGamba = loadImage('pizzeria/gamba.png');
  miAceituna = loadImage('pizzeria/olives.png');
  miPepperoni = loadImage('pizzeria/peperoni.png');
  miTomate = loadImage('pizzeria/tomate.png');
  miPimenton = loadImage('pizzeria/pepper.png');
  miPizza = loadImage('pizzeria/masapizza.png');
  nivel2 = loadImage('pizzeria/nivel2.jpg');
  miFondo = loadImage('pizzeria/pizzeriaFondo.png');
  miMantel = loadImage('pizzeria/mantel.png');
  perdiste = loadImage('pizzeria/perdiste.jpg');
  confeti = loadImage('pizzeria/confetti.png');
  perder = loadSound('pizzeria/perder.mp3');
  ganar = loadSound('pizzeria/ganar-1.mp4');
  ganar2 = loadSound('pizzeria/ganar.mp4');
  miCancion = loadSound('pizzeria/music.mp4');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //para que cada vez que pase por los siguientes estados el numero de ingredientes
  //vuelva a 0 
  //receta nivel 1
  if (estado == 5) {

    numChampis = 0;
    numAnchoas = 0;
    numCamarones = 0;

    champis2.length = 0;
    anchoas.length = 0;
    camarones.length = 0;

  }
  //receta  nivel 2
  if (estado == 9) {

    numChampis = 0;
    numAnchoas = 0;
    numCamarones = 0;
    numAceitunas = 0;
    numPepperoni = 0;

    champis2.length = 0;
    anchoas.length = 0;
    camarones.length = 0;
    aceitunas.length = 0;
    pepperoni.length = 0;
  }
  //receta nivel 3
  if (estado == 4) {

    numChampis = 0;
    numAnchoas = 0;
    numCamarones = 0;
    numAceitunas = 0;
    numPepperoni = 0;
    numTomate = 0;
    numPimenton = 0;

    champis2.length = 0;
    anchoas.length = 0;
    camarones.length = 0;
    aceitunas.length = 0;
    pepperoni.length = 0;
    tomate.length = 0;
    pimenton.length = 0;
  }

}

function draw() {

  if (estado == 0) {
    //intoduccion, click para musica, click para estado 4.  

    if (mouseIsPressed == true) {
      if (miCancion.isPlaying() == false) {
        miCancion.play();
      }
    }

    background(220);
    image(miFondo, 0, 0, width, height);
    textSize(40);
    strokeWeight(3)
    stroke(198, 55, 23);
    noStroke();
    textFont('Economica');
    fill(255, 255, 204);
    text("Haz feliz a tus clientes con tu memoria", width / 2 - 180, height / 2 + 280);
    textSize(25);
    text("Click para  continuar", width / 2 - 180, height / 2 + 230);
    textFont('Pattaya');
    textSize(80);
    fill(198, 55, 23);
    text("Pizza-Mind", width / 2 - 150, 100);

  } else if (estado == 11) {
    //instrucciones
    image(miFondo, 0, 0, width, height);
    fill(244, 200, 66);
    noStroke();
    rect(width / 2 - 270, height / 2 - 270, 600, 600);
    fill(255);
    textFont('Courgette');
    textSize(60);
    stroke(0);
    strokeWeight(5);
    text("Instrucciones", width / 2 - 200, height / 2 - 180);
    textSize(30);
    fill(0);
    noStroke();
    text("Este es un juego de memoria", width / 2 - 220, height / 2 - 90);
    text("memoriza los ingredientes en la receta", width / 2 - 220, height / 2 + 10);
    text("para poder pasar al siguiente nivel.", width / 2 - 220, height / 2 + 120);

    //un jugador boton
    textSize(25);
    fill(214, 119, 4);
    stroke(255, 209, 61);
    ellipse(posXbot9, posYbot9, 50, 50);
    fill(0);
    textFont('Economica');
    noStroke();
    text("1", posXbot9 - 5, posYbot9 - 15, 45, 45);
    text("Un jugador", posXbot9 - 50, posYbot9 + 50);


    if (mouseX > posXbot9 - (tamBot9 / 2) && mouseX < posXbot9 - (tamBot9 / 2) + tamBot9 &&
      mouseY > posYbot9 - (tamBot9 / 2) && mouseY < posYbot9 - (tamBot9 / 2) + tamBot9) {
      stroke(198, 55, 23);
      noFill();
      ellipse(posXbot9, posYbot9, 50, 50)
    }

    //dos jugadores boton
    fill(214, 119, 4);
    stroke(255, 209, 61);
    ellipse(posXbot10, posYbot10, 50, 50);
    fill(0);
    textFont('Economica');
    noStroke();
    text("2", posXbot10 - 7, posYbot10 - 15, 45, 45);
    text("Dos jugadores", posXbot10 - 50, posYbot10 + 50);


    if (mouseX > posXbot10 - (tamBot10 / 2) && mouseX < posXbot10 - (tamBot10 / 2) + tamBot10 &&
      mouseY > posYbot10 - (tamBot10 / 2) && mouseY < posYbot10 - (tamBot10 / 2) + tamBot10) {
      stroke(198, 55, 23);
      noFill();
      ellipse(posXbot10, posYbot10, 50, 50)
    }


  } else if (estado == 6) {
    //receta del primer nivel un jugador.


    if (mouseIsPressed == true) {
      if (miCancion.isPlaying() == false) {
        miCancion.play();
      }
    }

    image(miFondo, 0, 0, width, height);
    fill(255, 255, 204)
    rect(width / 2 - 180, height / 2 - 200, 400, 500);
    fill(0);
    textFont('Courgette');
    textSize(50);
    text("Receta", width / 2 - 110, height / 2 - 125);
    textSize(33);
    text(idealChampis, width / 2 - 120, height / 2 - 50);
    text("Champiñones", width / 2 - 90, height / 2 - 50);
    text(idealAnchoas, width / 2 - 120, height / 2);
    text("Anchoas", width / 2 - 90, height / 2);
    text(idealCamarones, width / 2 - 120, height / 2 + 50);
    text("Camarones", width / 2 - 90, height / 2 + 50);

  } else if (estado == 7) {
    //nivel1
    //juego
    //pizza de  fondo
    image(miMantel, 0, 0, width, height);
    image(miPizza, -10, 120, 550 * width / 530, 350 * width / 530);

    //boton champiñones
    strokeWeight(4)
    fill(214, 119, 4);
    stroke(255, 209, 61);
    ellipse(posXbot0, posYbot0, 50, 50);
    image(miChampi, 35, 25, 60, 60);

    //boton anchoas
    fill(214, 119, 4);
    stroke(255, 209, 61);
    ellipse(posXbot1, posYbot1, 50, 50);
    image(miAnchos, 109, 28, 45, 45);
    ////boton camarones
    fill(214, 119, 4);
    stroke(255, 209, 61);
    ellipse(posXbot2, posYbot2, 50, 50);
    image(miGamba, 170, 25, 50, 50);

    //boton terminar
    fill(255, 21, 0);
    stroke(255, 209, 61);
    ellipse(posXbot5, posYbot5, 60, 60);
    noStroke();
    fill(0);
    textFont('Economica');
    textSize(28);
    text("Terminar", posXbot5 + 40, posYbot5 + 10);

    //boton borrar
    fill(214, 119, 4);
    stroke(255, 209, 61);
    ellipse(posXbot8, posYbot8, 50, 50);
    noStroke();
    fill(0);
    textFont('Economica');
    textSize(20);
    text("Borrar ingredientes", posXbot8 + 40, posYbot8 + 5);

    textSize(20);
    noStroke();
    text("Selecciona el ingrediente haciendo click sobre el mismo", 40, 100);
    text("y después haz click sobre la pizza para ponerlo.", 40, 125);

    //funcion, se  muestran ingredientes  
    //aparecen champiñones
    for (var i = 0; i < champis2.length; i = i + 1) {
      champis2[i].mostrar();
    }
    //aparecen anchoas
    for (var i = 0; i < anchoas.length; i = i + 1) {
      anchoas[i].mostrar();
    }
    //aparecen camarones
    for (var i = 0; i < camarones.length; i = i + 1) {
      camarones[i].mostrar();
    }


    //posicion de boton champiñon
    if (mouseX > posXbot0 - (tamBot0 / 2) && mouseX < posXbot0 - (tamBot0 / 2) + tamBot0 &&
      mouseY > posYbot0 - (tamBot0 / 2) && mouseY < posYbot0 - (tamBot0 / 2) + tamBot0) {
      stroke(198, 55, 23)
      noFill();
      ellipse(posXbot0, posYbot0, 50, 50)
      ingredienteSel = 1;
    }

    //posicion de boton anchoas
    if (mouseX > posXbot1 - (tamBot1 / 2) && mouseX < posXbot1 - (tamBot1 / 2) + tamBot1 &&
      mouseY > posYbot1 - (tamBot1 / 2) && mouseY < posYbot1 - (tamBot1 / 2) + tamBot1) {
      stroke(198, 55, 23);
      noFill();
      ellipse(posXbot1, posYbot1, 50, 50)
      ingredienteSel = 2;
    }

    // posicion de boton camaron
    if (mouseX > posXbot2 - (tamBot2 / 2) && mouseX < posXbot2 - (tamBot2 / 2) + tamBot2 &&
      mouseY > posYbot2 - (tamBot2 / 2) && mouseY < posYbot2 - (tamBot2 / 2) + tamBot2) {
      stroke(198, 55, 23);
      noFill();
      ellipse(posXbot2, posYbot2, 50, 50)
      ingredienteSel = 3;
    }

  } else if (estado == 8) {
    //introduccion segundo nivel

    miCancion.pause();

    background(220)
    image(nivel2, 0, 0, width, height);
    fill(130, 219, 255);
    textSize(23);
    fill(46, 132, 219);
    noStroke();
    textFont('Pattaya');
    textSize(55);
    text("Nivel 2", width / 2 - 70, 130);


  } else if (estado == 9) {
    //segunda receta que se debe hacer

    if (mouseIsPressed == true) {
      if (miCancion.isPlaying() == false) {
        miCancion.play();
      }
    }

    image(nivel2, 0, 0, width, height);

    fill(255, 255, 204)
    rect(width / 2 - 180, height / 2 - 200, 400, 500);
    fill(0);
    textFont('Courgette');
    textSize(50);
    text("Receta", width / 2 - 110, height / 2 - 125);
    textSize(33);
    text(idealChampis, width / 2 - 120, height / 2 - 50);
    text("Champiñones", width / 2 - 90, height / 2 - 50);
    text(idealAnchoas, width / 2 - 120, height / 2);
    text("Anchoas", width / 2 - 90, height / 2);
    text(idealCamarones, width / 2 - 120, height / 2 + 50);
    text("Camarones", width / 2 - 90, height / 2 + 50);
    text(idealAceitunas, width / 2 - 120, height / 2 + 100);
    text("Aceitunas", width / 2 - 90, height / 2 + 100);
    text(idealPepperoni, width / 2 - 120, height / 2 + 150);
    text("Pepperonis", width / 2 - 90, height / 2 + 150);

  } else if (estado == 10) {
    // segundo nivel
    //juego
    //pizza de  fondo
    image(miMantel, 0, 0, width, height);
    image(miPizza, -10, 120, 550 * width / 530, 350 * width / 530);


    //boton champiñones
    fill(214, 119, 4);
    stroke(255, 209, 61);
    strokeWeight(4);
    ellipse(posXbot0, posYbot0, 50, 50);
    image(miChampi, 35, 25, 60, 60);
    //boton anchoas
    fill(214, 119, 4);
    stroke(255, 209, 61);
    ellipse(posXbot1, posYbot1, 50, 50);
    image(miAnchos, 109, 28, 45, 45);
    ////boton camarones
    fill(214, 119, 4);
    stroke(255, 209, 61);
    ellipse(posXbot2, posYbot2, 50, 50);
    image(miGamba, 170, 25, 50, 50);
    //boton aceitunas
    fill(214, 119, 4);
    stroke(255, 209, 61);
    ellipse(posXbot3, posYbot3, 50, 50);
    image(miAceituna, 230, 23, 55, 55);
    //boton pepperoni
    fill(214, 119, 4);
    stroke(255, 209, 61);
    ellipse(posXbot4, posYbot4, 50, 50);
    image(miPepperoni, 300, 25, 50, 50);


    //boton terminar
    fill(255, 21, 0);
    stroke(255, 209, 61);
    ellipse(posXbot5, posYbot5, 60, 60);
    noStroke();
    fill(0);
    textFont('Economica');
    textSize(28);
    text("Terminar", posXbot5 + 40, posYbot5 + 10);

    //boton borrar
    fill(214, 119, 4);
    stroke(255, 209, 61);
    ellipse(posXbot8, posYbot8, 50, 50);
    noStroke();
    fill(0);
    textFont('Economica');
    textSize(20);
    text("Borrar ingredientes", posXbot8 + 40, posYbot8 + 5);

    //funcion, se  muestran ingredientes  
    //aparecen champiñones
    for (var i = 0; i < champis2.length; i = i + 1) {
      champis2[i].mostrar();

    }
    //aparecen anchoas
    for (var i = 0; i < anchoas.length; i = i + 1) {
      anchoas[i].mostrar();
    }
    //aparecen camarones
    for (var i = 0; i < camarones.length; i = i + 1) {
      camarones[i].mostrar();
    }
    //aparecen aceitunas
    for (var i = 0; i < aceitunas.length; i = i + 1) {
      aceitunas[i].mostrar();
    }
    //aparecen pepperonis
    for (var i = 0; i < pepperoni.length; i = i + 1) {
      pepperoni[i].mostrar();
    }

    //posicion de boton champiñon
    if (mouseX > posXbot0 - (tamBot0 / 2) && mouseX < posXbot0 - (tamBot0 / 2) + tamBot0 &&
      mouseY > posYbot0 - (tamBot0 / 2) && mouseY < posYbot0 - (tamBot0 / 2) + tamBot0) {
      stroke(198, 55, 23);
      noFill();
      ellipse(posXbot0, posYbot0, 50, 50);
      ingredienteSel = 1;
    }

    //posicion de boton anchoas
    if (mouseX > posXbot1 - (tamBot1 / 2) && mouseX < posXbot1 - (tamBot1 / 2) + tamBot1 &&
      mouseY > posYbot1 - (tamBot1 / 2) && mouseY < posYbot1 - (tamBot1 / 2) + tamBot1) {
      stroke(198, 55, 23);
      noFill();
      ellipse(posXbot1, posYbot1, 50, 50);
      ingredienteSel = 2;
    }

    // posicion de boton camaron
    if (mouseX > posXbot2 - (tamBot2 / 2) && mouseX < posXbot2 - (tamBot2 / 2) + tamBot2 &&
      mouseY > posYbot2 - (tamBot2 / 2) && mouseY < posYbot2 - (tamBot2 / 2) + tamBot2) {
      stroke(198, 55, 23)
      noFill();
      ellipse(posXbot2, posYbot2, 50, 50);
      ingredienteSel = 3;
    }
    // posicion de boton aceituna
    if (mouseX > posXbot3 - (tamBot3 / 2) && mouseX < posXbot3 - (tamBot3 / 2) + tamBot3 &&
      mouseY > posYbot3 - (tamBot3 / 2) && mouseY < posYbot3 - (tamBot3 / 2) + tamBot3) {
      stroke(198, 55, 23);
      noFill();
      ellipse(posXbot3, posYbot3, 50, 50);
      ingredienteSel = 4;
    }
    // posicion de boton pepperoni
    if (mouseX > posXbot4 - (tamBot4 / 2) && mouseX < posXbot4 - (tamBot4 / 2) + tamBot4 &&
      mouseY > posYbot4 - (tamBot4 / 2) && mouseY < posYbot4 - (tamBot4 / 2) + tamBot4) {
      stroke(198, 55, 23);
      noFill();
      ellipse(posXbot4, posYbot4, 50, 50);
      ingredienteSel = 5;
    }

  } else if (estado == 5) {
    //introduccion tercer nivel

    miCancion.pause();

    background(220);
    image(nivel2, 0, 0, width, height);
    fill(130, 219, 255);
    textSize(23);
    fill(46, 132, 219);
    noStroke();
    textFont('Pattaya');
    textSize(55);
    text("Nivel 3", width / 2 - 70, 130);


  } else if (estado == 4) {
    //tercera receta que se debe hacer

    if (mouseIsPressed == true) {
      if (miCancion.isPlaying() == false) {
        miCancion.play();
      }
    }

    image(nivel2, 0, 0, width, height);

    fill(255, 255, 204);
    rect(width / 2 - 180, height / 2 - 200, 400, 500);
    fill(0);
    textFont('Courgette');
    textSize(50);
    text("Receta", width / 2 - 110, height / 2 - 125);
    textSize(33);
    text(idealChampis, width / 2 - 120, height / 2 - 50);
    text("Champiñones", width / 2 - 90, height / 2 - 50);
    text(idealAnchoas, width / 2 - 120, height / 2);
    text("Anchoas", width / 2 - 90, height / 2);
    text(idealCamarones, width / 2 - 120, height / 2 + 50);
    text("Camarones", width / 2 - 90, height / 2 + 50);
    text(idealAceitunas, width / 2 - 120, height / 2 + 100);
    text("Aceitunas", width / 2 - 90, height / 2 + 100);
    text(idealPepperoni, width / 2 - 120, height / 2 + 150);
    text("Pepperonis", width / 2 - 90, height / 2 + 150);
    text(idealTomate, width / 2 - 120, height / 2 + 200);
    text("Tomates", width / 2 - 90, height / 2 + 200);
    text(idealPimenton, width / 2 - 120, height / 2 + 250);
    text("Pimentón", width / 2 - 90, height / 2 + 250);

  } else if (estado == 1) {

    // tercer nivel
    //juego
    //pizza de  fondo
    image(miMantel, 0, 0, width, height);
    image(miPizza, -10, 120, 550 * width / 530, 350 * width / 530);


    //boton champiñones
    fill(214, 119, 4);
    stroke(255, 209, 61);
    strokeWeight(4);
    ellipse(posXbot0, posYbot0, 50, 50);
    image(miChampi, 35, 25, 60, 60);

    //boton anchoas
    fill(214, 119, 4);
    stroke(255, 209, 61);
    ellipse(posXbot1, posYbot1, 50, 50);
    image(miAnchos, 109, 28, 45, 45);
    ////boton camarones
    fill(214, 119, 4);
    stroke(255, 209, 61);
    ellipse(posXbot2, posYbot2, 50, 50);
    image(miGamba, 170, 25, 50, 50);
    //boton aceitunas
    fill(214, 119, 4);
    stroke(255, 209, 61);
    ellipse(posXbot3, posYbot3, 50, 50);
    image(miAceituna, 230, 23, 55, 55);
    //boton pepperoni
    fill(214, 119, 4);
    stroke(255, 209, 61);
    ellipse(posXbot4, posYbot4, 50, 50);
    image(miPepperoni, 300, 25, 50, 50);
    //boton tomate
    fill(214, 119, 4);
    stroke(255, 209, 61);
    ellipse(posXbot6, posYbot6, 50, 50);
    image(miTomate, 375, 33, 30, 30);
    //boton pimenton
    fill(214, 119, 4);
    stroke(255, 209, 61);
    ellipse(posXbot7, posYbot7, 50, 50);
    image(miPimenton, 435, 35, 40, 25);

    //boton terminar
    fill(255, 21, 0);
    stroke(255, 209, 61);
    ellipse(posXbot5, posYbot5, 60, 60);
    noStroke();
    fill(0);
    textFont('Economica');
    textSize(28);
    text("Terminar", posXbot5 + 40, posYbot5 + 10);

    //boton borrar
    fill(214, 119, 4);
    stroke(255, 209, 61);
    ellipse(posXbot8, posYbot8, 50, 50);
    noStroke();
    fill(0);
    textFont('Economica');
    textSize(20);
    text("Borrar ingredientes", posXbot8 + 40, posYbot8 + 5);

    //funcion, se  muestran ingredientes  
    //aparecen champiñones
    for (var i = 0; i < champis2.length; i = i + 1) {
      champis2[i].mostrar();

    }
    //aparecen anchoas
    for (var i = 0; i < anchoas.length; i = i + 1) {
      anchoas[i].mostrar();
    }
    //aparecen camarones
    for (var i = 0; i < camarones.length; i = i + 1) {
      camarones[i].mostrar();
    }
    for (var i = 0; i < aceitunas.length; i = i + 1) {
      aceitunas[i].mostrar();
    }
    //aparecen pepperonis
    for (var i = 0; i < pepperoni.length; i = i + 1) {
      pepperoni[i].mostrar();
    }
    //aparecen . tomates
    for (var i = 0; i < tomate.length; i = i + 1) {
      tomate[i].mostrar();
    }
    //aparecen pimentones
    for (var i = 0; i < pimenton.length; i = i + 1) {
      pimenton[i].mostrar();
    }

    //posicion de boton champiñon
    if (mouseX > posXbot0 - (tamBot0 / 2) && mouseX < posXbot0 - (tamBot0 / 2) + tamBot0 &&
      mouseY > posYbot0 - (tamBot0 / 2) && mouseY < posYbot0 - (tamBot0 / 2) + tamBot0) {
      stroke(198, 55, 23);
      noFill();
      ellipse(posXbot0, posYbot0, 50, 50);
      ingredienteSel = 1;
    }

    //posicion de boton anchoas
    if (mouseX > posXbot1 - (tamBot1 / 2) && mouseX < posXbot1 - (tamBot1 / 2) + tamBot1 &&
      mouseY > posYbot1 - (tamBot1 / 2) && mouseY < posYbot1 - (tamBot1 / 2) + tamBot1) {
      stroke(198, 55, 23);
      noFill();
      ellipse(posXbot1, posYbot1, 50, 50);
      ingredienteSel = 2;
    }

    // posicion de boton camaron
    if (mouseX > posXbot2 - (tamBot2 / 2) && mouseX < posXbot2 - (tamBot2 / 2) + tamBot2 &&
      mouseY > posYbot2 - (tamBot2 / 2) && mouseY < posYbot2 - (tamBot2 / 2) + tamBot2) {
      stroke(198, 55, 23);
      noFill();
      ellipse(posXbot2, posYbot2, 50, 50);
      ingredienteSel = 3;
    }
    // posicion de boton aceituna
    if (mouseX > posXbot3 - (tamBot3 / 2) && mouseX < posXbot3 - (tamBot3 / 2) + tamBot3 &&
      mouseY > posYbot3 - (tamBot3 / 2) && mouseY < posYbot3 - (tamBot3 / 2) + tamBot3) {
      stroke(198, 55, 23);
      noFill();
      ellipse(posXbot3, posYbot3, 50, 50);
      ingredienteSel = 4;
    }
    // posicion de boton pepperoni
    if (mouseX > posXbot4 - (tamBot4 / 2) && mouseX < posXbot4 - (tamBot4 / 2) + tamBot4 &&
      mouseY > posYbot4 - (tamBot4 / 2) && mouseY < posYbot4 - (tamBot4 / 2) + tamBot4) {
      stroke(198, 55, 23);
      noFill();
      ellipse(posXbot4, posYbot4, 50, 50);
      ingredienteSel = 5;
    } // posicion de boton tomate
    if (mouseX > posXbot6 - (tamBot6 / 2) && mouseX < posXbot6 - (tamBot6 / 2) + tamBot6 &&
      mouseY > posYbot6 - (tamBot6 / 2) && mouseY < posYbot6 - (tamBot6 / 2) + tamBot6) {
      stroke(198, 55, 23);
      noFill();
      ellipse(posXbot6, posYbot6, 50, 50);
      ingredienteSel = 6;
    }
    // posicion de boton pimenton
    if (mouseX > posXbot7 - (tamBot7 / 2) && mouseX < posXbot7 - (tamBot7 / 2) + tamBot7 &&
      mouseY > posYbot7 - (tamBot7 / 2) && mouseY < posYbot7 - (tamBot7 / 2) + tamBot7) {
      stroke(198, 55, 23);
      noFill();
      ellipse(posXbot7, posYbot7, 50, 50);
      ingredienteSel = 7;
    }

    //si se escoge multijugador

  } else if (estado == 13) {
    //instrucciones de multijugador

    image(miFondo, 0, 0, width, height);
    fill(244, 200, 66);
    noStroke();
    rect(width / 2 - 270, height / 2 - 270, 600, 600);
    fill(255);
    textFont('Courgette');
    textSize(50);
    stroke(0);
    strokeWeight(5);
    text("Instrucciones", width / 2 - 120, height / 2 - 180);
    textSize(27);
    fill(0);
    noStroke();
    textFont('Economica');
    text("Los  dos jugadores deben mirar la", width / 2 - 120, height / 2 - 100);
    text("pantalla todo el tiempo. Primero el", width / 2 - 120, height / 2 - 50);
    text("jugador 1, pone los ingredientes en", width / 2 - 120, height / 2);
    text("la pizza. Después el jugador 2 hace", width / 2 - 120, height / 2 + 50);
    text("la misma pizza que el jugador 1. ", width / 2 - 120, height / 2 + 100);
    text("Gana el jugador 1 si el jugador 2 no", width / 2 - 120, height / 2 + 150);
    text("puede armar la pizza. Gana el juggador", width / 2 - 120, height / 2 + 200);
    text("2 si logra hacer la pizza.", width / 2 - 120, height / 2 + 250);

  } else if (estado == 12) {

    //escoger quien es el jugador 1 y dos

    image(miFondo, 0, 0, width, height);
    fill(244, 200, 66);
    noStroke();
    rect(width / 2 - 270, height / 2 - 270, 600, 600);
    textFont('Courgette');
    textSize(30);
    stroke(0);
    strokeWeight(4);
    fill(255);
    text("Escoge quien es el jugador 1", width / 2 - 200, height / 2 - 180);
    textSize(20);
    fill(0);
    noStroke();
    textFont('Economica');
    text("El jugador 1 es el maestro que enseña a hacer pizza.", width / 2 - 200, height / 2 - 100);
    text("El jugador 2 es  el aprendiz. ", width / 2 - 200, height / 2 - 50);
    text("Un jugador escoja el pepperoni y el otro un champiñon", width / 2 - 200, height / 2);
    text("Si sale el pepperoni, quien escogió el pepperoni será", width / 2 - 200, height / 2 + 50);
    text("el jugador 1 y viceversa.", width / 2 - 200, height / 2 + 100);

    //boton DETERMINAR JUGADORES
    fill(255, 21, 0);
    stroke(255, 209, 61);
    ellipse(posXbot11, posYbot11, 40, 40);
    fill(0);
    text("Haz click para escoger", posXbot11 + 25, posYbot11);
    text("jugador 1", posXbot11 + 25, posYbot11 + 30);
    noStroke();
    fill(0);
    textFont('Economica');
    textSize(28);

    if (mouseIsPressed == true) {
      if (mouseX > posXbot11 - (tamBot11 / 2) && mouseX < posXbot11 - (tamBot11 / 2) + tamBot11 &&
        mouseY > posYbot11 - (tamBot11 / 2) && mouseY < posYbot11 - (tamBot11 / 2) + tamBot11) {
        stroke(198, 55, 23);
        noFill();
        ellipse(posXbot11, posYbot11, 50, 50);
        //plotnicoff

        if (jugador1 == 1) {
          image(miPepperoni, posXbot11 - 250, posYbot11 - 100, 150, 150)
        }

        if (jugador1 == 2) {
          image(miChampi, posXbot11 - 250, posYbot11 - 100, 150, 150)
        }
      }
    }

    //boton para estado turno jugador 1
    fill(255, 21, 0);
    stroke(255, 209, 61);
    ellipse(posXbot12, posYbot12, 40, 40);
    textSize(20);
    fill(0);
    noStroke();
    textFont('Economica');
    text("Empieza a jugar", posXbot12 + 25, posYbot12)
    noStroke();
    fill(0);
    textFont('Economica');
    textSize(28);


  } else if (estado == 14) {

    //turno jugador 1
    background(51, 153, 33);
    textSize(40);
    fill(0);
    noStroke();
    textFont('Economica');
    text("Jugador 1", width / 2 - 50, height / 2);
    textSize(25);
    text("(nivel 1)", width / 2 - 20, height / 2 + 50);

  } else if (estado == 15) {

    //turno jugador 2
    background(255, 80, 0);
    textSize(40);
    fill(0);
    noStroke();
    textFont('Economica');
    text("Jugador 2", width / 2 - 50, height / 2);
    textSize(25);
    text("(nivel 1)", width / 2 - 20, height / 2 + 50);

  } else if (estado == 21) {

    //turno jugador 1
    background(51, 153, 33);
    textSize(40);
    fill(0);
    noStroke();
    textFont('Economica');
    text("Jugador 1", width / 2 - 50, height / 2);
    textSize(25);
    text("(nivel 2)", width / 2 - 20, height / 2 + 50);

  } else if (estado == 22) {

    //turno jugador 2
    background(255, 80, 0);
    textSize(40);
    fill(0);
    noStroke();
    textFont('Economica');
    text("Jugador 2", width / 2 - 50, height / 2);
    textSize(25);
    text("(nivel 2)", width / 2 - 20, height / 2 + 50);

  } else if (estado == 19) {
    // multijugador
    //estado donde el jugador determina la receta (nivel 1)
    //juego
    //pizza de  fondo
    image(miMantel, 0, 0, width, height);
    image(miPizza, -10, 120, 550 * width / 700, 350 * width / 700);

    //boton champiñones
    fill(214, 119, 4);
    stroke(255, 209, 61);
    strokeWeight(4);
    ellipse(posXbot0, posYbot0, 50, 50);
    image(miChampi, 35, 25, 60, 60);
    //boton anchoas
    fill(214, 119, 4);
    stroke(255, 209, 61);
    ellipse(posXbot1, posYbot1, 50, 50);
    image(miAnchos, 109, 28, 45, 45);
    ////boton camarones
    //fill(214, 119, 4);
    //stroke(255, 209, 61);
    //ellipse(posXbot2, posYbot2, 50, 50);
    //image(miGamba, 170, 25, 50, 50);


    //boton terminar
    fill(255, 21, 0);
    stroke(255, 209, 61);
    ellipse(posXbot5, posYbot5, 60, 60);
    noStroke();
    fill(0);
    textFont('Economica');
    textSize(28);
    text("Terminar", posXbot5 + 40, posYbot5 + 10);

    //boton borrar
    fill(214, 119, 4);
    stroke(255, 209, 61);
    ellipse(posXbot8, posYbot8, 50, 50);
    noStroke();
    fill(0);
    textFont('Economica');
    textSize(20);
    text("Borrar ingredientes", posXbot8 + 40, posYbot8 + 5);

    //funcion, se  muestran ingredientes  
    //aparecen champiñones
    for (var i = 0; i < champis2.length; i = i + 1) {
      champis2[i].mostrar();
    }
    //aparecen anchoas
    for (var i = 0; i < anchoas.length; i = i + 1) {
      anchoas[i].mostrar();
    }
    //aparecen camarones
    for (var i = 0; i < camarones.length; i = i + 1) {
      camarones[i].mostrar();
    }


    //posicion de boton champiñon
    if (mouseX > posXbot0 - (tamBot0 / 2) && mouseX < posXbot0 - (tamBot0 / 2) + tamBot0 &&
      mouseY > posYbot0 - (tamBot0 / 2) && mouseY < posYbot0 - (tamBot0 / 2) + tamBot0) {
      stroke(198, 55, 23);
      noFill();
      ellipse(posXbot0, posYbot0, 50, 50);
      ingredienteSel = 1;
    }
    //posicion de boton anchoas
    if (mouseX > posXbot1 - (tamBot1 / 2) && mouseX < posXbot1 - (tamBot1 / 2) + tamBot1 &&
      mouseY > posYbot1 - (tamBot1 / 2) && mouseY < posYbot1 - (tamBot1 / 2) + tamBot1) {
      stroke(198, 55, 23);
      noFill();
      ellipse(posXbot1, posYbot1, 50, 50);
      ingredienteSel = 2;
    }
    // posicion de boton camaron
    if (mouseX > posXbot2 - (tamBot2 / 2) && mouseX < posXbot2 - (tamBot2 / 2) + tamBot2 &&
      mouseY > posYbot2 - (tamBot2 / 2) && mouseY < posYbot2 - (tamBot2 / 2) + tamBot2) {
      //stroke(198, 55, 23);
      noFill();
      ellipse(posXbot2, posYbot2, 50, 50);
      ingredienteSel = 3;
    }

  } else if (estado == 20) {

    // multijugador
    ///estado donde el jugador hace la pizza que el otro le puso a hacer (nivel 1)
    //juego
    //pizza de  fondo
    image(miMantel, 0, 0, width, height);
    image(miPizza, -10, 120, 550 * width / 700, 350 * width / 700);


    //boton champiñones
    fill(214, 119, 4);
    stroke(255, 209, 61);
    strokeWeight(4);
    ellipse(posXbot0, posYbot0, 50, 50);
    image(miChampi, 35, 25, 60, 60);
    //boton anchoas
    fill(214, 119, 4);
    stroke(255, 209, 61);
    ellipse(posXbot1, posYbot1, 50, 50);
    image(miAnchos, 109, 28, 45, 45);
    ////boton camarones
    //fill(214, 119, 4);
    //stroke(255, 209, 61);
    //ellipse(posXbot2, posYbot2, 50, 50);
    //image(miGamba, 170, 25, 50, 50);



    //boton terminar
    fill(255, 21, 0);
    stroke(255, 209, 61);
    ellipse(posXbot5, posYbot5, 60, 60);
    noStroke();
    fill(0);
    textFont('Economica');
    textSize(28);
    text("Terminar", posXbot5 + 40, posYbot5 + 10);

    //boton borrar
    fill(214, 119, 4);
    stroke(255, 209, 61);
    ellipse(posXbot8, posYbot8, 50, 50);
    noStroke();
    fill(0);
    textFont('Economica');
    textSize(20);
    text("Borrar ingredientes", posXbot8 + 40, posYbot8 + 5);

    //funcion, se  muestran ingredientes  
    //aparecen champiñones
    for (var i = 0; i < champis2.length; i = i + 1) {
      champis2[i].mostrar();
    }
    //aparecen anchoas
    for (var i = 0; i < anchoas.length; i = i + 1) {
      anchoas[i].mostrar();
    }
    //aparecen camarones
    for (var i = 0; i < camarones.length; i = i + 1) {
      camarones[i].mostrar();
    }


    //posicion de boton champiñon
    if (mouseX > posXbot0 - (tamBot0 / 2) && mouseX < posXbot0 - (tamBot0 / 2) + tamBot0 &&
      mouseY > posYbot0 - (tamBot0 / 2) && mouseY < posYbot0 - (tamBot0 / 2) + tamBot0) {
      stroke(198, 55, 23);
      noFill();
      ellipse(posXbot0, posYbot0, 50, 50);
      ingredienteSel = 1;
    }

    //posicion de boton anchoas
    if (mouseX > posXbot1 - (tamBot1 / 2) && mouseX < posXbot1 - (tamBot1 / 2) + tamBot1 &&
      mouseY > posYbot1 - (tamBot1 / 2) && mouseY < posYbot1 - (tamBot1 / 2) + tamBot1) {
      stroke(198, 55, 23);
      noFill();
      ellipse(posXbot1, posYbot1, 50, 50);
      ingredienteSel = 2;
    }

    // posicion de boton camaron
    //if (mouseX > posXbot2 - (tamBot2 / 2) && mouseX < posXbot2 - (tamBot2 / 2) + tamBot2 &&
      //mouseY > posYbot2 - (tamBot2 / 2) && mouseY < posYbot2 - (tamBot2 / 2) + tamBot2) {
      //stroke(198, 55, 23);
      //noFill();
      //ellipse(posXbot2, posYbot2, 50, 50);
      //ingredienteSel = 3;
    //}

  } else if (estado == 17) {
    // multijugador
    //estado donde el jugador determina la receta (nivel 2)
    //juego
    //pizza de  fondo
    image(miMantel, 0, 0, width, height);
    image(miPizza, -10, 120, 550 * width / 700, 350 * width / 700);

    //boton champiñones
    fill(214, 119, 4);
    stroke(255, 209, 61);
    strokeWeight(4);
    ellipse(posXbot0, posYbot0, 50, 50);
    image(miChampi, 35, 25, 60, 60);
    //boton anchoas
    fill(214, 119, 4);
    stroke(255, 209, 61);
    ellipse(posXbot1, posYbot1, 50, 50);
    image(miAnchos, 109, 28, 45, 45);
    ////boton camarones
    fill(214, 119, 4);
    stroke(255, 209, 61);
    ellipse(posXbot2, posYbot2, 50, 50);
    image(miGamba, 170, 25, 50, 50);
    //boton aceitunas
    fill(214, 119, 4);
    stroke(255, 209, 61);
    ellipse(posXbot3, posYbot3, 50, 50);
    image(miAceituna, 230, 23, 55, 55);
    //boton pepperoni
    fill(214, 119, 4);
    stroke(255, 209, 61);
    ellipse(posXbot4, posYbot4, 50, 50);
    image(miPepperoni, 300, 25, 50, 50);


    //boton terminar
    fill(255, 21, 0);
    stroke(255, 209, 61);
    ellipse(posXbot5, posYbot5, 60, 60);
    noStroke();
    fill(0);
    textFont('Economica');
    textSize(28);
    text("Terminar", posXbot5 + 40, posYbot5 + 10);

    //boton borrar
    fill(214, 119, 4);
    stroke(255, 209, 61);
    ellipse(posXbot8, posYbot8, 50, 50);
    noStroke();
    fill(0);
    textFont('Economica');
    textSize(20);
    text("Borrar ingredientes", posXbot8 + 40, posYbot8 + 5);

    //funcion, se  muestran ingredientes  
    //aparecen champiñones
    for (var i = 0; i < champis2.length; i = i + 1) {
      champis2[i].mostrar();
    }
    //aparecen anchoas
    for (var i = 0; i < anchoas.length; i = i + 1) {
      anchoas[i].mostrar();
    }
    //aparecen camarones
    for (var i = 0; i < camarones.length; i = i + 1) {
      camarones[i].mostrar();
    }
    for (var i = 0; i < aceitunas.length; i = i + 1) {
      aceitunas[i].mostrar();
    }
    //aparecen pepperonis
    for (var i = 0; i < pepperoni.length; i = i + 1) {
      pepperoni[i].mostrar();
    }


    //posicion de boton champiñon
    if (mouseX > posXbot0 - (tamBot0 / 2) && mouseX < posXbot0 - (tamBot0 / 2) + tamBot0 &&
      mouseY > posYbot0 - (tamBot0 / 2) && mouseY < posYbot0 - (tamBot0 / 2) + tamBot0) {
      stroke(198, 55, 23);
      noFill();
      ellipse(posXbot0, posYbot0, 50, 50);
      ingredienteSel = 1;
    }
    //posicion de boton anchoas
    if (mouseX > posXbot1 - (tamBot1 / 2) && mouseX < posXbot1 - (tamBot1 / 2) + tamBot1 &&
      mouseY > posYbot1 - (tamBot1 / 2) && mouseY < posYbot1 - (tamBot1 / 2) + tamBot1) {
      stroke(198, 55, 23);
      noFill();
      ellipse(posXbot1, posYbot1, 50, 50);
      ingredienteSel = 2;
    }
    // posicion de boton camaron
    if (mouseX > posXbot2 - (tamBot2 / 2) && mouseX < posXbot2 - (tamBot2 / 2) + tamBot2 &&
      mouseY > posYbot2 - (tamBot2 / 2) && mouseY < posYbot2 - (tamBot2 / 2) + tamBot2) {
      stroke(198, 55, 23);
      noFill();
      ellipse(posXbot2, posYbot2, 50, 50);
      ingredienteSel = 3;
    }
    // posicion de boton aceituna
    if (mouseX > posXbot3 - (tamBot3 / 2) && mouseX < posXbot3 - (tamBot3 / 2) + tamBot3 &&
      mouseY > posYbot3 - (tamBot3 / 2) && mouseY < posYbot3 - (tamBot3 / 2) + tamBot3) {
      stroke(198, 55, 23);
      noFill();
      ellipse(posXbot3, posYbot3, 50, 50);
      ingredienteSel = 4;
    }
    // posicion de boton pepperoni
    if (mouseX > posXbot4 - (tamBot4 / 2) && mouseX < posXbot4 - (tamBot4 / 2) + tamBot4 &&
      mouseY > posYbot4 - (tamBot4 / 2) && mouseY < posYbot4 - (tamBot4 / 2) + tamBot4) {
      stroke(198, 55, 23);
      noFill();
      ellipse(posXbot4, posYbot4, 50, 50);
      ingredienteSel = 5;
    }

  } else if (estado == 18) {

    // multijugador
    ///estado donde el jugador hace la pizza que el otro le puso a hacer (nivel 2)
    //juego
    //pizza de  fondo
    image(miMantel, 0, 0, width, height);
    image(miPizza, -10, 120, 550 * width / 700, 350 * width / 700);


    //boton champiñones
    fill(214, 119, 4);
    stroke(255, 209, 61);
    strokeWeight(4);
    ellipse(posXbot0, posYbot0, 50, 50);
    image(miChampi, 35, 25, 60, 60);
    //boton anchoas
    fill(214, 119, 4);
    stroke(255, 209, 61);
    ellipse(posXbot1, posYbot1, 50, 50);
    image(miAnchos, 109, 28, 45, 45);
    ////boton camarones
    fill(214, 119, 4);
    stroke(255, 209, 61);
    ellipse(posXbot2, posYbot2, 50, 50);
    image(miGamba, 170, 25, 50, 50);
    //boton aceitunas
    fill(214, 119, 4);
    stroke(255, 209, 61);
    ellipse(posXbot3, posYbot3, 50, 50);
    image(miAceituna, 230, 23, 55, 55);
    //boton pepperoni
    fill(214, 119, 4);
    stroke(255, 209, 61);
    ellipse(posXbot4, posYbot4, 50, 50);
    image(miPepperoni, 300, 25, 50, 50);


    //boton terminar
    fill(255, 21, 0);
    stroke(255, 209, 61);
    ellipse(posXbot5, posYbot5, 60, 60);
    noStroke();
    fill(0);
    textFont('Economica');
    textSize(28);
    text("Terminar", posXbot5 + 40, posYbot5 + 10);

    //boton borrar
    fill(214, 119, 4);
    stroke(255, 209, 61);
    ellipse(posXbot8, posYbot8, 50, 50);
    noStroke();
    fill(0);
    textFont('Economica');
    textSize(20);
    text("Borrar ingredientes", posXbot8 + 40, posYbot8 + 5);

    //funcion, se  muestran ingredientes  
    //aparecen champiñones
    for (var i = 0; i < champis2.length; i = i + 1) {
      champis2[i].mostrar();

    }
    //aparecen anchoas
    for (var i = 0; i < anchoas.length; i = i + 1) {
      anchoas[i].mostrar();
    }
    //aparecen camarones
    for (var i = 0; i < camarones.length; i = i + 1) {
      camarones[i].mostrar();
    }
    for (var i = 0; i < aceitunas.length; i = i + 1) {
      aceitunas[i].mostrar();
    }
    //aparecen pepperonis
    for (var i = 0; i < pepperoni.length; i = i + 1) {
      pepperoni[i].mostrar();
    }

    //posicion de boton champiñon
    if (mouseX > posXbot0 - (tamBot0 / 2) && mouseX < posXbot0 - (tamBot0 / 2) + tamBot0 &&
      mouseY > posYbot0 - (tamBot0 / 2) && mouseY < posYbot0 - (tamBot0 / 2) + tamBot0) {
      stroke(198, 55, 23);
      noFill();
      ellipse(posXbot0, posYbot0, 50, 50);
      ingredienteSel = 1;
    }

    //posicion de boton anchoas
    if (mouseX > posXbot1 - (tamBot1 / 2) && mouseX < posXbot1 - (tamBot1 / 2) + tamBot1 &&
      mouseY > posYbot1 - (tamBot1 / 2) && mouseY < posYbot1 - (tamBot1 / 2) + tamBot1) {
      stroke(198, 55, 23);
      noFill();
      ellipse(posXbot1, posYbot1, 50, 50);
      ingredienteSel = 2;
    }

    // posicion de boton camaron
    if (mouseX > posXbot2 - (tamBot2 / 2) && mouseX < posXbot2 - (tamBot2 / 2) + tamBot2 &&
      mouseY > posYbot2 - (tamBot2 / 2) && mouseY < posYbot2 - (tamBot2 / 2) + tamBot2) {
      stroke(198, 55, 23);
      noFill();
      ellipse(posXbot2, posYbot2, 50, 50);
      ingredienteSel = 3;
    }
    // posicion de boton aceituna
    if (mouseX > posXbot3 - (tamBot3 / 2) && mouseX < posXbot3 - (tamBot3 / 2) + tamBot3 &&
      mouseY > posYbot3 - (tamBot3 / 2) && mouseY < posYbot3 - (tamBot3 / 2) + tamBot3) {
      stroke(198, 55, 23);
      noFill();
      ellipse(posXbot3, posYbot3, 50, 50);
      ingredienteSel = 4;
    }
    // posicion de boton pepperoni
    if (mouseX > posXbot4 - (tamBot4 / 2) && mouseX < posXbot4 - (tamBot4 / 2) + tamBot4 &&
      mouseY > posYbot4 - (tamBot4 / 2) && mouseY < posYbot4 - (tamBot4 / 2) + tamBot4) {
      stroke(198, 55, 23);
      noFill();
      ellipse(posXbot4, posYbot4, 50, 50);
      ingredienteSel = 5;
    }

  } else if (estado == 2) {

    miCancion.pause();

    //estado final de ganar
    //tune de ganar

    //numchampi y el numero deingredientes vuelve a 0
    numChampis = 0;
    numAnchoas = 0;
    numCamarones = 0;
    numAceitunas = 0;
    numPepperoni = 0;
    numTomate = 0;
    numPimenton = 0;

    champis2.length = 0;
    anchoas.length = 0;
    camarones.length = 0;
    aceitunas.length = 0;
    pepperoni.length = 0;
    tomate.length = 0;
    pimenton.length = 0;

    //background con foto
    background(220);
    text("Ganó", width / 2, height / 2);
    image(nivel2, 0, 0, width, height);
    fill(255)
    noStroke();
    textSize(25)
    text("GANASTE!", width / 2 - 50, height / 2);
    textSize(15)
    text("haz click para  jugar otra vez", width / 2 - 100, height / 2 + 50);
    image(confeti, 0, 0, width, height);


  } else if (estado == 23) {

    //estado final de ganar
    //tune de ganar

    //numchampi y el numero deingredientes vuelve a 0
    numChampis = 0;
    numAnchoas = 0;
    numCamarones = 0;
    numAceitunas = 0;
    numPepperoni = 0;
    numTomate = 0;
    numPimenton = 0;

    champis2.length = 0;
    anchoas.length = 0;
    camarones.length = 0;
    aceitunas.length = 0;
    pepperoni.length = 0;
    tomate.length = 0;
    pimenton.length = 0;

    //background con foto
    background(220);
    text("Ganó", width / 2, height / 2);
    image(nivel2, 0, 0, width, height);
    fill(0)
    noStroke();
    textSize(25)
    text("GANÓ EL APRENDIZ!", width / 2 - 50, height / 2 + 150);
    textSize(15)
    text("haz click para  jugar otra vez", width / 2 - 100, height / 2 + 200);
    text("Perdió el maestro", width / 2 - 100, height / 2 + 180);
    image(confeti, 0, 0, width, height);

  } else if (estado == 26) {

    //estado final de ganar
    //tune de ganar

    //numchampi y el numero deingredientes vuelve a 0
    numChampis = 0;
    numAnchoas = 0;
    numCamarones = 0;
    numAceitunas = 0;
    numPepperoni = 0;
    numTomate = 0;
    numPimenton = 0;

    champis2.length = 0;
    anchoas.length = 0;
    camarones.length = 0;
    aceitunas.length = 0;
    pepperoni.length = 0;
    tomate.length = 0;
    pimenton.length = 0;

    //background con foto
    background(220);
    text("Ganó", width / 2, height / 2);
    image(nivel2, 0, 0, width, height);
    fill(0)
    noStroke();
    textSize(25)
    text("GANÓ EL MAESTRO!", width / 2 - 50, height / 2 + 150);
    textSize(15)
    text("haz click para  jugar otra vez", width / 2 - 100, height / 2 + 200);
    text("PERDIÓ EL APRENDIZ", width / 2 - 100, height / 2 + 180);
    image(confeti, 0, 0, width, height);


  } else if (estado == 3) {

    miCancion.pause();
    //estado perder
    //tune de perder


    //numchampi y el numero deingredientes vuelve a 0

    numChampis = 0;
    numAnchoas = 0;
    numCamarones = 0;
    numAceitunas = 0;
    numPepperoni = 0;
    numTomate = 0;
    numPimenton = 0;

    champis2.length = 0;
    anchoas.length = 0;
    camarones.length = 0;
    aceitunas.length = 0;
    pepperoni.length = 0;
    tomate.length = 0;
    pimenton.length = 0;


    image(perdiste, 0, 0, width, height);
    fill(255);
    noStroke();
    textSize(25)
    text("Perdiste", width / 2 - 50, height / 2);
    textSize(15)
    text("haz click para  jugar otra vez", width / 2 - 100, height / 2 + 50);

  }
}



function mouseReleased() {

  //asigna valores en la receta de forma aleatoria en los diferentes niveles
  if (estado == 0) {
    jugador1 = floor(random(1, 3));
    idealChampis = floor(random(1, 5));
    idealAnchoas = floor(random(1, 5));
    idealCamarones = floor(random(1, 5));
    idealAceitunas = floor(random(1, 5));
    idealPepperoni = floor(random(1, 5));
    idealTomate = floor(random(1, 5));
    idealPimenton = floor(random(1, 5));

  }

  if (estado == 8) {
    idealChampis = floor(random(1, 6));
    idealAnchoas = floor(random(1, 6));
    idealCamarones = floor(random(1, 6));
    idealAceitunas = floor(random(1, 6));
    idealPepperoni = floor(random(1, 6));
    idealTomate = floor(random(1, 6));
    idealPimenton = floor(random(1, 6));

  }

  if (estado == 5) {
    idealChampis = floor(random(0, 7));
    idealAnchoas = floor(random(0, 7));
    idealCamarones = floor(random(0, 7));
    idealAceitunas = floor(random(0, 7));
    idealPepperoni = floor(random(0, 7));
    idealTomate = floor(random(0, 7));
    idealPimenton = floor(random(0, 7));

  }


  if (estado == 1) {
    //tercer nivel
    //boton borrar del tercer nivel
    if (mouseX > posXbot8 - (tamBot8 / 2) && mouseX < posXbot8 - (tamBot8 / 2) + tamBot8 &&
      mouseY > posYbot8 - (tamBot8 / 2) && mouseY < posYbot8 - (tamBot8 / 2) + tamBot8) {
      //ingredienteSel = 6;
      noFill();
      stroke(198, 55, 23);
      numChampis = 0;
      numAnchoas = 0;
      numCamarones = 0;
      numAceitunas = 0;
      numPepperoni = 0;
      numTomate = 0;
      numPimenton = 0;

      champis2.length = 0;
      anchoas.length = 0;
      camarones.length = 0;
      aceitunas.length = 0;
      pepperoni.length = 0;
      tomate.length = 0;
      pimenton.length = 0;


    }

    //if que determina cuando se  gana y cuando se pierde
    if (mouseX > posXbot5 - (tamBot5 / 2) && mouseX < posXbot5 - (tamBot5 / 2) + tamBot5 &&
      mouseY > posYbot5 - (tamBot5 / 2) && mouseY < posYbot5 - (tamBot5 / 2) + tamBot5) {
      //ingredienteSel = 6;
      noFill();
      stroke(198, 55, 23);
      ellipse(posXbot5, posYbot5, 60, 60);
      //si no se atina al numero deingredientes se pierde
      if (numChampis > idealChampis || numChampis < idealChampis ||
        numCamarones > idealCamarones || numCamarones < idealCamarones ||
        numAnchoas > idealAnchoas || numAnchoas < idealAnchoas ||
        numAceitunas > idealAceitunas || numAceitunas < idealAceitunas ||
        numPepperoni > idealPepperoni || numPepperoni < idealPepperoni ||
        numTomate > idealTomate || numTomate < idealTomate ||
        numPimenton > idealPimenton || numPimenton < idealPimenton) {

        print("perdiste");
        estado = 3;

        if (perder.isPlaying() == false) {
          perder.play();
        }
        //sino se gana
      } else if (numChampis == idealChampis ||
        numCamarones == idealCamarones ||
        numAnchoas == idealAnchoas ||
        numAceitunas == idealAceitunas ||
        numPepperoni == idealPepperoni ||
        numTomate == idealTomate ||
        numPimenton == idealPimenton
      ) {
        estado = 2;
        print("ganaste");

        if (ganar2.isPlaying() == false) {
          ganar2.play();
        }
      }
    }


    //delimitar espacio en el que se pueden poner ingredientes dentro de la pizza
    if (mouseX > 100 && mouseY > 100 && mouseX < 650 && mouseY < 650) {
      if (ingredienteSel == 1) {
        //si se espicha boton champi y despues se hace click sobre la pizza sale champi
        champis2[champis2.length] = new champiPos(mouseX, mouseY);
        numChampis = numChampis + 1;
      }
      //si se espicha boton anchoas y despues se hace click sobre la pizza sale anchoas
      if (ingredienteSel == 2) {
        stroke(198, 55, 23);
        anchoas[anchoas.length] = new anchoasPos(mouseX, mouseY);
        numAnchoas = numAnchoas + 1;
      }
      //si se espicha boton camarones y despues se hace click sobre la pizza sale camarones
      if (ingredienteSel == 3) {
        stroke(198, 55, 23)
        camarones[camarones.length] = new camaronPos(mouseX, mouseY);
        numCamarones = numCamarones + 1;
      }
      //si se espicha boton aceitunas y despues se hace click sobre la pizza sale aceitunas
      if (ingredienteSel == 4) {
        aceitunas[aceitunas.length] = new aceitunaPos(mouseX, mouseY);
        numAceitunas = numAceitunas + 1;
      }
      if (ingredienteSel == 5) {
        //si se espicha boton pepperoni y despues se hace click sobre la pizza sale pepperoni
        pepperoni[pepperoni.length] = new pepperoniPos(mouseX, mouseY);
        numPepperoni = numPepperoni + 1;
      }
      if (ingredienteSel == 6) {
        //si se espicha boton tomate y despues se hace click sobre la pizza sale tomate
        tomate[tomate.length] = new tomatePos(mouseX, mouseY);
        numTomate = numTomate + 1;
      }
      if (ingredienteSel == 7) {
        //si se espicha boton pimenton y despues se hace click sobre la pizza sale pimenton
        pimenton[pimenton.length] = new pimentonPos(mouseX, mouseY);
        numPimenton = numPimenton + 1;
      }
    }

  } else if (estado == 19) {
    //multijugador
    //donde el jugador determina la receta
    //nivel 1 multijugador
    if (mouseX > posXbot8 - (tamBot8 / 2) && mouseX < posXbot8 - (tamBot8 / 2) + tamBot8 &&
      mouseY > posYbot8 - (tamBot8 / 2) && mouseY < posYbot8 - (tamBot8 / 2) + tamBot8) {

      noFill();
      stroke(198, 55, 23);
      numChampis2 = 0;
      numAnchoas2 = 0;
      numCamarones2 = 0;

      champis2.length = 0;
      anchoas.length = 0;
      camarones.length = 0;

    }

    //if que determina cuando se  gana y cuando se pierde
    if (mouseX > posXbot5 - (tamBot5 / 2) && mouseX < posXbot5 - (tamBot5 / 2) + tamBot5 &&
      mouseY > posYbot5 - (tamBot5 / 2) && mouseY < posYbot5 - (tamBot5 / 2) + tamBot5) {
      noFill();
      stroke(198, 55, 23);
      ellipse(posXbot5, posYbot5, 60, 60);

      //si no se atina al numero deingredientes se pierde
      if (numChampis2 > idealChampis2 || numChampis2 < idealChampis2 ||
        numCamarones2 > idealCamarones2 || numCamarones2 < idealCamarones2 ||
        numAnchoas2 > idealAnchoas2 || numAnchoas2 < idealAnchoas2) {

        estado = 26;

        if (ganar2.isPlaying() == false) {
          ganar2.play();
        }
        //sino se gana
      } else if (numChampis2 == idealChampis2 ||
        numCamarones2 == idealCamarones2 ||
        numAnchoas2 == idealAnchoas2
      ) {
        estado = 15;

      }
    }

    //delimitar espacio en el que se pueden poner ingredientes dentro de la pizza
    if (mouseX > 100 && mouseY > 100 && mouseX < 650 && mouseY < 650) {
      if (ingredienteSel == 1) {
        //si se espicha boton champi y despues se hace click sobre la pizza sale champi
        champis2[champis2.length] = new champiPos(mouseX, mouseY);
        numChampis2 = numChampis2 + 1;
        idealChampis2 = idealChampis2 + 1;
      }
      //si se espicha boton anchoas y despues se hace click sobre la pizza sale anchoas
      if (ingredienteSel == 2) {
        stroke(198, 55, 23);
        anchoas[anchoas.length] = new anchoasPos(mouseX, mouseY);
        numAnchoas2 = numAnchoas2 + 1;
        idealAnchoas2 = idealAnchoas2 + 1;
      }
      //si se espicha boton camarones y despues se hace click sobre la pizza sale camarones
      //if (ingredienteSel == 3) {
        //camarones[camarones.length] = new camaronPos(mouseX, mouseY);
        //numCamarones2 = numCamarones2 + 1;
        //idealCamarones2 = idealCamarones2 + 1
      //}

    }

  } else if (estado == 20) {
    //multijugador
    //nivel 2
    //donde el jugador copia la receta del jugador 1
    //boton borrar del tercer nivel
    if (mouseX > posXbot8 - (tamBot8 / 2) && mouseX < posXbot8 - (tamBot8 / 2) + tamBot8 &&
      mouseY > posYbot8 - (tamBot8 / 2) && mouseY < posYbot8 - (tamBot8 / 2) + tamBot8) {
      //ingredienteSel = 6;
      noFill();
      stroke(198, 55, 23);
      numChampis2 = 0;
      numAnchoas2 = 0;
      numCamarones2 = 0;

      champis2.length = 0;
      anchoas.length = 0;
      camarones.length = 0;

    }

    //if que determina cuando se  gana y cuando se pierde
    if (mouseX > posXbot5 - (tamBot5 / 2) && mouseX < posXbot5 - (tamBot5 / 2) + tamBot5 &&
      mouseY > posYbot5 - (tamBot5 / 2) && mouseY < posYbot5 - (tamBot5 / 2) + tamBot5) {
      //ingredienteSel = 6;
      noFill();
      stroke(198, 55, 23);
      ellipse(posXbot5, posYbot5, 60, 60);
      //si no se atina al numero deingredientes se pierde
      if (idealChampis3 > idealChampis2 || idealChampis3 < idealChampis2 ||
        idealCamarones3 > idealCamarones2 || idealCamarones3 < idealCamarones2 ||
        idealAnchoas3 > idealAnchoas2 || idealAnchoas3 < idealAnchoas2) {

        estado = 26;

        if (ganar2.isPlaying() == false) {
          ganar2.play();
        }
        //sino se gana
      } else if (idealChampis3 == idealChampis2 ||
        idealCamarones3 == idealCamarones2 ||
        idealAnchoas3 == idealAnchoas2
      ) {
        estado = 21;

      }
    }

    //delimitar espacio en el que se pueden poner ingredientes dentro de la pizza
    if (mouseX > 100 && mouseY > 100 && mouseX < 650 && mouseY < 650) {
      if (ingredienteSel == 1) {
        //si se espicha boton champi y despues se hace click sobre la pizza sale champi
        champis2[champis2.length] = new champiPos(mouseX, mouseY);
        numChampis3 = numChampis3 + 1;
        idealChampis3 = idealChampis3 + 1;
      }
      //si se espicha boton anchoas y despues se hace click sobre la pizza sale anchoas
      if (ingredienteSel == 2) {
        stroke(198, 55, 23);
        anchoas[anchoas.length] = new anchoasPos(mouseX, mouseY);
        numAnchoas3 = numAnchoas3 + 1;
        idealAnchoas3 = idealAnchoas3 + 1;
      }
      //si se espicha boton camarones y despues se hace click sobre la pizza sale camarones
      if (ingredienteSel == 3) {
        stroke(198, 55, 23)
        camarones[camarones.length] = new camaronPos(mouseX, mouseY);
        numCamarones3 = numCamarones3 + 1;
        idealCamarones3 = idealCamarones3 + 1
      }

    }

  } else if (estado == 17) {
    //multijugador
    //nivel 2
    //donde el jugador determina la receta
    if (mouseX > posXbot8 - (tamBot8 / 2) && mouseX < posXbot8 - (tamBot8 / 2) + tamBot8 &&
      mouseY > posYbot8 - (tamBot8 / 2) && mouseY < posYbot8 - (tamBot8 / 2) + tamBot8) {

      noFill();
      stroke(198, 55, 23);
      numChampis2 = 0;
      numAnchoas2 = 0;
      numCamarones2 = 0;
      numAceitunas2 = 0;
      numPepperoni2 = 0;


      champis2.length = 0;
      anchoas.length = 0;
      camarones.length = 0;
      aceitunas.length = 0;
      pepperoni.length = 0;
        


    }

    //if que determina cuando se  gana y cuando se pierde
    if (mouseX > posXbot5 - (tamBot5 / 2) && mouseX < posXbot5 - (tamBot5 / 2) + tamBot5 &&
      mouseY > posYbot5 - (tamBot5 / 2) && mouseY < posYbot5 - (tamBot5 / 2) + tamBot5) {
      noFill();
      stroke(198, 55, 23);
      ellipse(posXbot5, posYbot5, 60, 60);

      //si no se atina al numero deingredientes se pierde
      if (numChampis2 > idealChampis2 || numChampis2 < idealChampis2 ||
        numCamarones2 > idealCamarones2 || numCamarones2 < idealCamarones2 ||
        numAnchoas2 > idealAnchoas2 || numAnchoas2 < idealAnchoas2 ||
        numAceitunas2 > idealAceitunas2 || numAceitunas2 < idealAceitunas2 ||
        numPepperoni2 > idealPepperoni2 || numPepperoni2 < idealPepperoni2) {

        estado = 22;

        if (ganar2.isPlaying() == false) {
          ganar2.play();
        }
        //sino se gana
      } else if (numChampis2 == idealChampis2 ||
        numCamarones2 == idealCamarones2 ||
        numAnchoas2 == idealAnchoas2 ||
        numAceitunas2 == idealAceitunas2 ||
        numPepperoni2 == idealPepperoni2
      ) {
        estado = 22;

      }
    }

    //delimitar espacio en el que se pueden poner ingredientes dentro de la pizza
    if (mouseX > 100 && mouseY > 100 && mouseX < 650 && mouseY < 650) {
      if (ingredienteSel == 1) {
        //si se espicha boton champi y despues se hace click sobre la pizza sale champi
        champis2[champis2.length] = new champiPos(mouseX, mouseY);
        numChampis2 = numChampis2 + 1;
        idealChampis2 = idealChampis2 + 1;
      }
      //si se espicha boton anchoas y despues se hace click sobre la pizza sale anchoas
      if (ingredienteSel == 2) {
        stroke(198, 55, 23);
        anchoas[anchoas.length] = new anchoasPos(mouseX, mouseY);
        numAnchoas2 = numAnchoas2 + 1;
        idealAnchoas2 = idealAnchoas2 + 1;
      }
      //si se espicha boton camarones y despues se hace click sobre la pizza sale camarones
      if (ingredienteSel == 3) {
        stroke(198, 55, 23)
        camarones[camarones.length] = new camaronPos(mouseX, mouseY);
        numCamarones2 = numCamarones2 + 1;
        idealCamarones2 = idealCamarones2 + 1
      }
      //si se espicha boton aceitunas y despues se hace click sobre la pizza sale aceitunas
      if (ingredienteSel == 4) {
        aceitunas[aceitunas.length] = new aceitunaPos(mouseX, mouseY);
        numAceitunas2 = numAceitunas2 + 1;
        idealAceitunas2 = idealAceitunas2 + 1;
      }
      if (ingredienteSel == 5) {
        //si se espicha boton pepperoni y despues se hace click sobre la pizza sale pepperoni
        pepperoni[pepperoni.length] = new pepperoniPos(mouseX, mouseY);
        numPepperoni2 = numPepperoni2 + 1;
        idealPepperoni2 = idealPepperoni + 1;
      }

    }

  } else if (estado == 18) {
    //multijugador
    //nivel 2 jugador 2
    //boton borrar del tercer nivel
    if (mouseX > posXbot8 - (tamBot8 / 2) && mouseX < posXbot8 - (tamBot8 / 2) + tamBot8 &&
      mouseY > posYbot8 - (tamBot8 / 2) && mouseY < posYbot8 - (tamBot8 / 2) + tamBot8) {
      //ingredienteSel = 6;
      noFill();
      stroke(198, 55, 23);
      numChampis2 = 0;
      numAnchoas2 = 0;
      numCamarones2 = 0;
      numAceitunas2 = 0;
      numPepperoni2 = 0;

      champis2.length = 0;
      anchoas.length = 0;
      camarones.length = 0;
      aceitunas.length = 0;
      pepperoni.length = 0;

    }

    //if que determina cuando se  gana y cuando se pierde
    if (mouseX > posXbot5 - (tamBot5 / 2) && mouseX < posXbot5 - (tamBot5 / 2) + tamBot5 &&
      mouseY > posYbot5 - (tamBot5 / 2) && mouseY < posYbot5 - (tamBot5 / 2) + tamBot5) {
      //ingredienteSel = 6;
      noFill();
      stroke(198, 55, 23);
      ellipse(posXbot5, posYbot5, 60, 60);
      //si no se atina al numero deingredientes se pierde
      if (idealChampis3 > idealChampis2 || idealChampis3 < idealChampis2 ||
        idealCamarones3 > idealCamarones2 || idealCamarones3 < idealCamarones2 ||
        idealAnchoas3 > idealAnchoas2 || idealAnchoas3 < idealAnchoas2 ||
        idealAceitunas3 > idealAceitunas2 || idealAceitunas3 < idealAceitunas2 ||
        idealPepperoni3 > idealPepperoni2 || idealPepperoni3 < idealPepperoni2) {

        estado = 26;
//plotnicoff
        if (ganar2.isPlaying() == false) {
          ganar2.play();
        }
        //sino se gana
      } else if (idealChampis3 == idealChampis2 ||
        idealCamarones3 == idealCamarones2 ||
        idealAnchoas3 == idealAnchoas2 ||
        idealAceitunas3 == idealAceitunas2 ||
        idealPepperoni3 == idealPepperoni2
      ) {
        estado = 23;


      }
    }

    //delimitar espacio en el que se pueden poner ingredientes dentro de la pizza
    if (mouseX > 100 && mouseY > 100 && mouseX < 650 && mouseY < 650) {
      if (ingredienteSel == 1) {
        //si se espicha boton champi y despues se hace click sobre la pizza sale champi
        champis2[champis2.length] = new champiPos(mouseX, mouseY);
        numChampis3 = numChampis3 + 1;
        idealChampis3 = idealChampis3 + 1;
      }
      //si se espicha boton anchoas y despues se hace click sobre la pizza sale anchoas
      if (ingredienteSel == 2) {
        stroke(198, 55, 23);
        anchoas[anchoas.length] = new anchoasPos(mouseX, mouseY);
        numAnchoas3 = numAnchoas3 + 1;
        idealAnchoas3 = idealAnchoas3 + 1;
      }
      //si se espicha boton camarones y despues se hace click sobre la pizza sale camarones
      if (ingredienteSel == 3) {
        stroke(198, 55, 23)
        camarones[camarones.length] = new camaronPos(mouseX, mouseY);
        numCamarones3 = numCamarones3 + 1;
        idealCamarones3 = idealCamarones3 + 1
      }
      //si se espicha boton aceitunas y despues se hace click sobre la pizza sale aceitunas
      if (ingredienteSel == 4) {
        aceitunas[aceitunas.length] = new aceitunaPos(mouseX, mouseY);
        numAceitunas3 = numAceitunas3 + 1;
        idealAceitunas3 = idealAceitunas3 + 1;
      }
      if (ingredienteSel == 5) {
        //si se espicha boton pepperoni y despues se hace click sobre la pizza sale pepperoni
        pepperoni[pepperoni.length] = new pepperoniPos(mouseX, mouseY);
        numPepperoni3 = numPepperoni3 + 1;
        idealPepperoni3 = idealPepperoni3 + 1;
      }

    }
    //esta parte se  usa  para  determinar el orden del juego
    //primero estado 0 (intro), si se hace click va a estado 6 (receta)
  } else if (estado == 0) {
    setup();
    estado = 11; //(receta)
    //estado primera receta, si se hace click va a estado 5 primer nivel
  } else if (estado == 11) {
    //boton para solo un jugador
    if (mouseX > posXbot9 - (tamBot9 / 2) && mouseX < posXbot9 - (tamBot9 / 2) + tamBot9 &&
      mouseY > posYbot9 - (tamBot9 / 2) && mouseY < posYbot9 - (tamBot9 / 2) + tamBot9) {
      noFill();
      ellipse(posXbot9, posYbot9, 50, 50);
      setup();
      estado = 6; //(receta)
    }
    //boton para jugar dos personas
    if (mouseX > posXbot10 - (tamBot10 / 2) && mouseX < posXbot10 - (tamBot10 / 2) + tamBot10 &&
      mouseY > posYbot10 - (tamBot10 / 2) && mouseY < posYbot10 - (tamBot10 / 2) + tamBot10) {
      noFill();
      ellipse(posXbot10, posYbot10, 50, 50);
      setup();
      estado = 13;
    }
    //estado instrucciones multijugador, si se hace click va a estado turno jugador 1
  } else if (estado == 13) {
    estado = 12;
  } else if (estado == 12) {
    //estado turno jugador 1,  si se hace click va a estado juego multijugador 

    if (mouseX > posXbot12 - (tamBot12 / 2) && mouseX < posXbot12 - (tamBot12 / 2) + tamBot12 &&
      mouseY > posYbot12 - (tamBot12 / 2) && mouseY < posYbot12 - (tamBot12 / 2) + tamBot12) {
      noFill();
      ellipse(posXbot12, posYbot12, 50, 50);
      setup();
      estado = 14;
    }
  } else if (estado == 14) {
    estado = 19;
    numChampis2 = 0;
    numAnchoas2 = 0;
    numCamarones2 = 0;
    numAceitunas2 = 0;
    numPepperoni2 = 0;
    numTomate2 = 0;
    numPimenton2 = 0;

    champis2.length = 0;
    anchoas.length = 0;
    camarones.length = 0;
    aceitunas.length = 0;
    pepperoni.length = 0;
    tomate.length = 0;
    pimenton.length = 0;

    idealChampis2 = 0;
    idealAnchoas2 = 0;
    idealCamarones2 = 0;
    idealAceitunas2 = 0;
    idealPepperoni2 = 0;
    idealTomate2 = 0;
    idealPimenton2 = 0;

    //estado receta multijugador, si se hace click va a estado juego multijugador
  } else if (estado == 15) {
    estado = 20;
    numChampis2 = 0;
    numAnchoas2 = 0;
    numCamarones2 = 0;
    numAceitunas2 = 0;
    numPepperoni2 = 0;
    numTomate2 = 0;
    numPimenton2 = 0;

    champis2.length = 0;
    anchoas.length = 0;
    camarones.length = 0;
    aceitunas.length = 0;
    pepperoni.length = 0;
    tomate.length = 0;
    pimenton.length = 0;

    idealChampis3 = 0;
    idealAnchoas3 = 0;
    idealCamarones3 = 0;
    idealAceitunas3 = 0;
    idealPepperoni3 = 0;
    idealTomate3 = 0;
    idealPimenton3 = 0;

    //nivel 2 jugador 1 pasa a estado juego
  } else if (estado == 21) {
    estado = 17;

    numChampis2 = 0;
    numAnchoas2 = 0;
    numCamarones2 = 0;
    numAceitunas2 = 0;
    numPepperoni2 = 0;
    numTomate2 = 0;
    numPimenton2 = 0;

    champis2.length = 0;
    anchoas.length = 0;
    camarones.length = 0;
    aceitunas.length = 0;
    pepperoni.length = 0;
    tomate.length = 0;
    pimenton.length = 0;

    idealChampis2 = 0;
    idealAnchoas2 = 0;
    idealCamarones2 = 0;
    idealAceitunas2 = 0;
    idealPepperoni2 = 0;
    idealTomate2 = 0;
    idealPimenton2 = 0;

    //nivel 2 jugador 2 pasa  a estado juego
  } else if (estado == 22) {
    estado = 18;

    numChampis2 = 0;
    numAnchoas2 = 0;
    numCamarones2 = 0;
    numAceitunas2 = 0;
    numPepperoni2 = 0;
    numTomate2 = 0;
    numPimenton2 = 0;

    champis2.length = 0;
    anchoas.length = 0;
    camarones.length = 0;
    aceitunas.length = 0;
    pepperoni.length = 0;
    tomate.length = 0;
    pimenton.length = 0;

    idealChampis3 = 0;
    idealAnchoas3 = 0;
    idealCamarones3 = 0;
    idealAceitunas3 = 0;
    idealPepperoni3 = 0;
    idealTomate3 = 0;
    idealPimenton3 = 0;

    //nivel 3 jugador 2 pasa  a estado juego
  } else if (estado == 24) {
    estado = 16;

    numChampis2 = 0;
    numAnchoas2 = 0;
    numCamarones2 = 0;
    numAceitunas2 = 0;
    numPepperoni2 = 0;
    numTomate2 = 0;
    numPimenton2 = 0;

    champis2.length = 0;
    anchoas.length = 0;
    camarones.length = 0;
    aceitunas.length = 0;
    pepperoni.length = 0;
    tomate.length = 0;
    pimenton.length = 0;

    idealChampis3 = 0;
    idealAnchoas3 = 0;
    idealCamarones3 = 0;
    idealAceitunas3 = 0;
    idealPepperoni3 = 0;
    idealTomate3 = 0;
    idealPimenton3 = 0;



    //estado primera receta, si se hace click va a estado 5 primer nivel
  } else if (estado == 6) {
    estado = 7;
  }
  //estado intro segundo nivel si se hace click sale receta 2 nivel
  else if (estado == 8) {
    setup();
    estado = 9;
    // estado receta segundo  nivel, si se hace click va al segndo nivel    
  } else if (estado == 9) {
    setup();
    estado = 10;
    //estado intro tercer nivel si se hace click sale receta 2 nivel
  } else if (estado == 5) {
    setup();
    estado = 4;
    // estado receta tercer  nivel, si se hace click va al segndo nivel    
  } else if (estado == 4) {
    setup();
    estado = 1;
    //estado perder, si se hace click reinicia el juego
  } else if (estado == 3) {
    estado = 0;
    //estado ganar, si se hace click reinicia el juego
  } else if (estado == 2) {
    estado = 0;
  } else if (estado == 26) {
    estado = 0;
  } else if (estado == 23) {
    estado = 0;
  } else if (estado == 10) {
    //segundo nivel
    //boton borrar del segundo nivel
    if (mouseX > posXbot8 - (tamBot8 / 2) && mouseX < posXbot8 - (tamBot8 / 2) + tamBot8 &&
      mouseY > posYbot8 - (tamBot8 / 2) && mouseY < posYbot8 - (tamBot8 / 2) + tamBot8) {
      //ingredienteSel = 6;
      noFill();
      stroke(198, 55, 23);
      numChampis = 0;
      numAnchoas = 0;
      numCamarones = 0;
      numAceitunas = 0;
      numPepperoni = 0;

      champis2.length = 0;
      anchoas.length = 0;
      camarones.length = 0;
      aceitunas.length = 0;
      pepperoni.length = 0;

    }

    //if que determina cuando se  gana y cuando se pierde
    if (mouseX > posXbot5 - (tamBot5 / 2) && mouseX < posXbot5 - (tamBot5 / 2) + tamBot5 &&
      mouseY > posYbot5 - (tamBot5 / 2) && mouseY < posYbot5 - (tamBot5 / 2) + tamBot5) {
      //ingredienteSel = 6;
      noFill();
      stroke(198, 55, 23);
      ellipse(posXbot5, posYbot5, 60, 60);
      //si no se atina al numero deingredientes se pierde
      if (numChampis > idealChampis || numChampis < idealChampis ||
        numCamarones > idealCamarones || numCamarones < idealCamarones ||
        numAnchoas > idealAnchoas || numAnchoas < idealAnchoas ||
        numAceitunas > idealAceitunas || numAceitunas < idealAceitunas ||
        numPepperoni > idealPepperoni || numPepperoni < idealPepperoni
      ) {

        print("perdiste");
        estado = 3;

        if (perder.isPlaying() == false) {
          perder.play();
        }

      } else if (numChampis == idealChampis ||
        numCamarones == idealCamarones ||
        numAnchoas == idealAnchoas ||
        numAceitunas == idealAceitunas ||
        numPepperoni == idealPepperoni
      ) {
        estado = 5;
        print("ganaste");

        if (ganar.isPlaying() == false) {
          ganar.play();
        }
      }
    }


    //delimitar espacio donde se pueden poneringredientes para que salgan dentro de la pizza
    if (mouseX > 100 && mouseY > 100 && mouseX < 650 && mouseY < 650) {
      if (ingredienteSel == 1) {
        //si se espicha boton champi y despues se hace click sobre la pizza sale champi
        champis2[champis2.length] = new champiPos(mouseX, mouseY);
        numChampis = numChampis + 1;
      }
      if (ingredienteSel == 2) {
        //si se espicha boton anchoas y despues se hace click sobre la pizza sale anchoas
        stroke(198, 55, 23);
        anchoas[anchoas.length] = new anchoasPos(mouseX, mouseY);
        numAnchoas = numAnchoas + 1;
      }
      if (ingredienteSel == 3) {
        //si se espicha boton camarones y despues se hace click sobre la pizza sale camarones
        stroke(198, 55, 23);
        camarones[camarones.length] = new camaronPos(mouseX, mouseY);
        numCamarones = numCamarones + 1
      }
      if (ingredienteSel == 4) {
        //si se espicha boton aceitunas y despues se hace click sobre la pizza sale aceitunas
        aceitunas[aceitunas.length] = new aceitunaPos(mouseX, mouseY);
        numAceitunas = numAceitunas + 1;
      }
      if (ingredienteSel == 5) {
        //si se espicha boton pepperoni y despues se hace click sobre la pizza sale pepperonis
        pepperoni[pepperoni.length] = new pepperoniPos(mouseX, mouseY);
        numPepperoni = numPepperoni + 1;
      }
    }
    //estado nivel 3
  } else if (estado == 7) {

    if (mouseX > posXbot8 - (tamBot8 / 2) && mouseX < posXbot8 - (tamBot8 / 2) + tamBot8 &&
      mouseY > posYbot8 - (tamBot8 / 2) && mouseY < posYbot8 - (tamBot8 / 2) + tamBot8) {
      //ingredienteSel = 6;
      noFill();
      stroke(198, 55, 23);
      numChampis = 0;
      numAnchoas = 0;
      numCamarones = 0;
      numAceitunas = 0;
      numPepperoni = 0;
      numTomate = 0;
      numPimenton = 0;

      champis2.length = 0;
      anchoas.length = 0;
      camarones.length = 0;
      aceitunas.length = 0;
      pepperoni.length = 0;
      tomate.length = 0;
      pimenton.length = 0;

    }

    if (mouseX > posXbot5 - (tamBot5 / 2) && mouseX < posXbot5 - (tamBot5 / 2) + tamBot5 &&
      mouseY > posYbot5 - (tamBot5 / 2) && mouseY < posYbot5 - (tamBot5 / 2) + tamBot5) {
      //ingredienteSel = 6;
      noFill();
      stroke(198, 55, 23);
      ellipse(posXbot5, posYbot5, 60, 60);
      if (numChampis > idealChampis || numChampis < idealChampis ||
        numCamarones > idealCamarones || numCamarones < idealCamarones ||
        numAnchoas > idealAnchoas || numAnchoas < idealAnchoas
      ) {
        print("perdiste");
        estado = 3;

        if (perder.isPlaying() == false) {
          perder.play();
        }
      } else if (numChampis == idealChampis ||
        numCamarones == idealCamarones ||
        numAnchoas == idealAnchoas
      ) {
        estado = 8;
        print("ganaste");
        if (ganar.isPlaying() == false) {
          ganar.play();
        }

      }

    }

    if (mouseX > 100 && mouseY > 100 && mouseX < 650 && mouseY < 650) {
      if (ingredienteSel == 1) {
        champis2[champis2.length] = new champiPos(mouseX, mouseY);
        numChampis = numChampis + 1;

      }
      if (ingredienteSel == 2) {
        stroke(198, 55, 23)
        anchoas[anchoas.length] = new anchoasPos(mouseX, mouseY);
        numAnchoas = numAnchoas + 1;
      }
      if (ingredienteSel == 3) {
        stroke(198, 55, 23)
        camarones[camarones.length] = new camaronPos(mouseX, mouseY);
        numCamarones = numCamarones + 1;
      }

    }

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

  this.mostrar = function() {
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

//funcion tomate
function tomatePos(pX, pY) {

  this.x = pX;
  this.y = pY;

  this.tam = random(30, 50);

  this.mostrar = function() {
    image(miTomate, this.x, this.y, this.tam, this.tam);
  }
}

//funcion pimenton
function pimentonPos(pX, pY) {

  this.x = pX;
  this.y = pY;

  this.tam = random(30, 60);

  this.mostrar = function() {
    image(miPimenton, this.x, this.y, this.tam, this.tam);
  }
}