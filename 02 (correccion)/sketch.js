var c=0;
var d=0;
var e=50;
var f=50;

function setup() {
  createCanvas(400,400);
}

function draw() {
  //fondo blanco
  background(256);
  //cuadros amarillos
  fill(244, 209, 66)
  noStroke()
  for(var it=0; it<=350; it=it+50){
    //Triangulos en diagonal desde esquina inf. izquierda 
    triangle(c,400,50,400,50,350)
    triangle(c+it,350+it,e+it,350+it,50+it,300+it);
    triangle(c+it,250+it,c+it,300+it,e+it,250+it);
    triangle(c+it,200+it,c+it,250+it,e+it,200+it);
    triangle(c+it,200+it,e+it,200+it,e+it,150+it);
    triangle(c+it,200+it,e+it,200+it,e+it,150+it);
    triangle(c+it,150+it,e+it,150+it,e+it,100+it);
    triangle(c+it,100+it,c+it,50+it,e+it,d+50+it);
    triangle(c+it,d+it,c+it,d+it+50,c+it+50,d+it);
    triangle(50+it,f+it,100+it,f+it,100+it,d+it);
    triangle(100+it,f+it,150+it,f+it,150+it,d+it);
    triangle(150+it,f+it,150+it,d+it,200+it,d+it);
    triangle(200+it,f+it,200+it,d+it,250+it,d+it);
    triangle(250+it,f+it,300+it,f+it,300+it,d+it);
    triangle(300+it,f+it,350+it,f+it,350+it,d+it);
    triangle(350,f,350,d,400,d);
  }
}