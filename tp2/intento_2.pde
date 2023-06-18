

//Yamile Nazarena Erbes 94700/7
//comision 1










int cant = 13;
int tam;
PImage art;
float arteOptico;
float ancho;
float alto;


void setup() {

  size(800, 400);
  art = loadImage ("artoptico.jpeg");
  tam = 400/cant;

}


void draw () {
  

  background(255);
   
  arteOptico();
  image (art, 400, 0, 400, 400);
}


void arteOptico() {

  for (int x = 0; x<cant; x++) {
    for (int y = 0; y<cant; y++) {
      ancho = x*tam;
      alto = y*tam;
      rect (ancho, alto, tam, tam);
      if ( (x+y)%2==0) {
        fill(255);
      } else {
        fill(0);
      }

    }
  }
  
}
