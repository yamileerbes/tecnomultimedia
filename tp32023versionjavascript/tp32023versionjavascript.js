//Yamile Nazarena Erbes 94700/7
//Ray Bradbury "El Ruido de un trueno"





let fotos = [];
let textos = [];
let estado;
//let imagenes = 19;
let fuente;
function preload (){
 fotos = [20];
  fotos[0]= loadImage ("/data/imagen0.jpg");
  fotos[1]= loadImage ("/data/imagen1.jpg");
  fotos[2]= loadImage ("/data/imagen2.jpg");
  fotos[3]= loadImage ("/data/imagen3.jpg");
  fotos[4]= loadImage ("/data/imagen4.jpg");
  fotos[5]= loadImage ("/data/imagen5.jpg");
  fotos[6]= loadImage ("/data/imagen6orig.jpg");
  fotos[7]= loadImage ("/data/imagen7orig.jpg");
  fotos[8]= loadImage ("/data/imagen8orig.jpg");
  fotos[9]= loadImage ("/data/imagen9.jpg");
  fotos[10]= loadImage ("/data/imagen10.jpg");
  fotos[11]= loadImage ("/data/imagen11.jpg");
  fotos[12]= loadImage ("/data/imagen12.jpg");
  fotos[13]= loadImage ("/data/imagen6alt1.jpg");
  fotos[14] = loadImage ("/data/imagen7alt1.jpg");
  fotos[15] = loadImage ("/data/imagen8alt1.jpg") ;
  fotos[16] = loadImage ("/data/imagen7alt2.jpg") ;
  fotos[17] = loadImage ("/data/imagen8alt2.jpg") ;
  fotos[18] = loadImage ("/data/imagenfinal13.jpg");
  fuente = loadFont ("/data/CascadiaMono-Roman-17.vlw");
   textos[0] = "Ansioso y emocionado Eckels, un cazador, decide pagar un safari hasta la época jurásica para cazar un Tiranosaurio Rex, siendo esta la aventura más intensa que se le pudiera ofrecer a un hombre. Más no iría solo, junto a él subiendo por la máquina del tiempo se encuentra Travis, el jefe del safari, su asistente, Lesperance, y otro cazador, Kramer. Ya estando dentro, el jefe alza la voz. ";
  textos[1] = "Voy a enunciar cuales son las reglas; 1. No salir del sendero. 2. Solo disparar cuando se le indique. 3. Solo disparar en contra del animal que hemos venido a cazar. Si rompen alguna de estas reglas sufrirán la mayor pena que se les pueda dar. ¿Lo entienden? -. ";
  textos[2] = "Verán, no tenemos intención de cambiar el futuro. Este mundo no es el nuestro. Al gobierno no le gusta que estemos aquí. Podemos matar inadvertidamente un animal importante, un pájaro, aun una flor, destruyendo así un eslabón importante en la evolución de las especies. Digamos que usted pisa y mata un ratón, todos los hijos que de ese individuo saldrían jamás nacerían, por lo que el zorro que iba a cazarlos y comerlos a muerto de hambre al no encontrarlos y así el que se alimentara del zorro. El pie que ha puesto sobre el ratón desencadenará así un terremoto, y sus efectos sacudirán nuestra tierra y nuestros destinos a través del tiempo, hasta sus raíces. Así que le repito, no pise fuera, respete las reglas ¡No se salga del sendero! -. ";

  textos[3] = "La máquina se sacude indicando la reciente llegada de los cuatro hombres del futuro, preparados con sus armas dan los primeros pasos hacia este mundo desconocido. El silencio del asombro por la magnitud se rompió con el jadeo de sorpresa que Lesperance soltó. ";
  textos[4] = "Travis con voz sobria habla. -Ahí está, su Alteza Real -. Pero más que emocionarlo, tal es la belleza, tamaño y potencia de la bestia que Eckels empieza a dudar de lograrlo, balbucea.- Hemos sido unos locos... No es posible matarlo. - . - ¡Silencio! -. inquirió Travis - Una pesadilla -. El cazador se lamentaba, advirtiendo su propia muerte a manos del monstruo que habían venido a cazar por elección. - ¡He dicho que a callar! -. La paciencia del jefe tambaleo, llamando la atención del animal. ";

  textos[5] = "¡Habían hecho mucho ruido! La bestia los había escuchado y con unos movimientos de sus enormes extremidades logra recorrer los 100 metros que los separaban.  ";

  /* camino principal huye*/
  textos[6] = " Eckels aturdido corrió sin mirar atrás, sus piernas temblaban y suplicaba por ayuda murmurando en el tono que le permitía el nudo en su garganta.   ";
  textos[7] = " En el camino Eckels, entre el sudor y el pavor de la muerte cercana sale del sendero y termina por embarrarse las botas por accidente entre la flora autóctona de la era, a lo lejos los disparos de los demás se dejan de escuchar y el sonido de toneladas de carne cayendo al suelo es lo único que retumba.";
  textos[8] = " De alguna manera el silencio condujo hasta la máquina, se sentó sabiendo que había roto una de las reglas, el terror de la amenaza de muerte se convirtió en nerviosismo y culpa por entender que lo que hizo puede tener graves consecuencias, aunque, ¿Qué es lo peor que puede hacer un poco de barro? Los demás arriban a la maquina. ";
  textos[9] = "¡Tú no volverás en la máquina del tiempo! ¡Te dejaremos aquí! -. Espeto Travis furioso al llegar junto con los demás, apretaba con marcada rabia su arma -- ¡Miren sus botas! El condenado salió del sendero... ¡Dios sabe lo que le ha hecho al tiempo! -.   -   ¡Pagare lo que sea! -. Suplicaba Eckels. - ¡Solo traje un poco de barro en los zapatos! ¡No va a pasar nada! ¿Qué quieres que haga? -. Estaba desesperado. ";
  textos[10] = "Travis, luego de charlar con Lesperance, permite que el cazador se quede y viaje con ellos hacia el futuro. El viaje es tenso y la incomodidad palpable. Todos estaban expectantes a lo que encontrarían al regresar.";

  textos[11] = "Al llegar se dirigieron a la oficina en donde Eckels había realizado el pago, a simple vista todo parecía normal, pero al observar el cartel... el idioma había cambiado ";
  textos[12] = "Eckels cayó al piso ante el espeluznante descubrimiento, desesperado mete sus dedos en el barro de su bota y de él cae una mariposa prehistórica muerta. No se movió. Con los ojos cerrados, esperó estremeciéndose. Oyó que Travis gritaba; oyó que Travis preparaba el rifle, alzaba el seguro, ya apuntaba y entonces se escuchó...  ";
  textos[13] = "El ruido de un trueno. \n Ray Bradbury\n adaptado por Yamile Nazarena Erbes\n94700/7\n Tecnología Multimedial Comisión 1 2023";

  /*camino secundario 1 pelea*/
  textos[14]="Eckels reúne fuerza y, empuñando su arma con euforia comienza a disparar, la adrenalina por el miedo a perder su vida provoca que cierre sus ojos mientras las balas son escupidas por el fusil.";
  textos[15]="Con el tiranosaurio caído se dio paso a un audible silencio, poco tardaron en el cuándo se dieron cuenta que a quien le dio Eckels con su ataque no fue al temible animal, sino que, al que le había dado fue al asistente del jefe, Lesperance. Este yacía en el piso muerto.  ";
  textos[16]="Travis, enfurecido por la rabia de perder a un cercano, decide que Eckels se quedara en el pasado a su suerte, no permitiéndole subir a la máquina del tiempo. ";

  /*camino secundario 2 huye huevo*/
  textos[17]="En el camino Eckels, entre el sudor y el pavor de la muerte cercana sale del sendero y termina por romper el huevo de un nido de dinosaurio por accidente. ";
  textos[18]="Para su mala suerte, el dinosaurio que puso ese huevo vio lo que paso y, en venganza, se cobra la vida del cazador.  ";
}

function setup () {
  size (600, 600);
  fotos = img.resize(600,600);
  
  //textos = new String[20];
  estado = 0;
}


function draw () {


  if ( estado == 0 ) {
    Pantalla ( fotos[0], textos[0] );
    botonpresionado( 500, 540, 80, 40, "siguiente");
    verde(500, 540, 80, 40);
  } else if ( estado == 1 ) {
    Pantalla ( fotos[1], textos[1] );
    verde(500, 540, 80, 40);
    botonpresionado( 100, 540, 80, 40, "saber \n más");
    verde(500, 540, 80, 40);
    botonpresionado( 500, 540, 80, 40, "siguiente");
  } else if ( estado == 2 ) {
    Pantalla ( fotos[2], textos[2] );
    botonpresionado( 500, 540, 80, 40, "siguiente");
    verde(500, 540, 80, 40);
  } else if ( estado == 3) {
    Pantalla ( fotos[3], textos[3] );
    botonpresionado( 500, 540, 80, 40, "siguiente");
    verde(500, 540, 80, 40);
  } else if ( estado == 4 ) {
    Pantalla ( fotos[4], textos[4] );
    botonpresionado( 500, 540, 80, 40, "siguiente");
    verde(500, 540, 80, 40);
  } else if ( estado == 5 ) {
    Pantalla ( fotos[5], textos[5] );
    rojo(500, 540, 80, 40);
    botonpresionado( 500, 540, 80, 40, "huir");
    rojo(100, 540, 80, 40);
    botonpresionado( 100, 540, 80, 40, "pelear");
  } else if ( estado == 6 ) {
    Pantalla ( fotos[6], textos[6] );
    rojo(500, 540, 80, 40);
    botonpresionado( 500, 540, 80, 40, " ir por;\n derecha");
    rojo(100, 540, 80, 40);
    botonpresionado( 100, 540, 80, 40, "ir por:\n izquierda");
  } else if ( estado == 7 ) {
    Pantalla ( fotos[7], textos[7] );
    botonpresionado( 500, 540, 80, 40, "siguiente");
    rojo(500, 540, 80, 40);
  } else if ( estado == 8 ) {
    Pantalla ( fotos[8], textos[8] );
    rojo(500, 540, 80, 40);
    botonpresionado( 500, 540, 80, 40, "siguiente");
  } else if ( estado == 9 ) {
    Pantalla ( fotos[9], textos[9] );
    rojo(500, 540, 80, 40);
    botonpresionado( 500, 540, 80, 40, "siguiente");
  } else if ( estado == 10 ) {
    Pantalla ( fotos[10], textos[10] );
    rojo(500, 540, 80, 40);
    botonpresionado( 500, 540, 80, 40, "siguiente");
  } else if ( estado == 11) {
    Pantalla ( fotos[11], textos[11] );
    rojo(500, 540, 80, 40);
    botonpresionado( 500, 540, 80, 40, "siguiente");
  } else if ( estado == 12) {
    Pantalla ( fotos[12], textos[12] );
    rojo(500, 540, 80, 40);
    botonpresionado( 500, 540, 80, 40, "siguiente");
  } else if ( estado == 13 ) {
    Pantalla ( fotos[18], textos[13] );
    botonpresionado( 500, 540, 80, 40, "Volver al \n inicio");
    verde(500, 540, 80, 40);
  } else if ( estado == 14 ) {
    Pantalla ( fotos[13], textos[14] );
    rojo(500, 540, 80, 40);
    botonpresionado( 500, 540, 80, 40, "siguiente");
  } else if ( estado == 15 ) {
    Pantalla ( fotos[14], textos[15] );
    rojo(500, 540, 80, 40);
    botonpresionado( 500, 540, 80, 40, "siguiente");
  } else if ( estado == 16) {
    Pantalla ( fotos[15], textos[16] );
    verde(500, 540, 80, 40);
    botonpresionado( 500, 540, 80, 40, "ver creditos");
    verde(100, 540, 80, 40);
    botonpresionado( 100, 540, 80, 40, "volver al \n pasado");
  } else if ( estado == 17) {
    Pantalla ( fotos[16], textos[17] );
    rojo(500, 540, 80, 40);
    botonpresionado( 500, 540, 80, 40, "siguiente");
  } else if ( estado == 18 ) {
    Pantalla ( fotos[17], textos[18] );
    verde(100, 540, 80, 40);
    botonpresionado( 100, 540, 80, 40, "Volver al \n pasado");
    verde(500, 540, 80, 40);
    botonpresionado( 500, 540, 80, 40, "ver creditos");
  }
}

function botonpresionado ( x, y, ancho, alto, texto) {

  rectMode(CENTER);
  rect(x, y, ancho, alto);
  textAlign(CENTER, CENTER);
  fill(0);
  text(texto, x, y);
}


function colisionando (x, y,  ancho,  alto) {
  let colisiona;
  if (mouseX>x-ancho/2 && mouseX<x+ancho/2 && mouseY>y-alto/2 && mouseY<y+alto/2) {
    colisiona= true;
  } else {
    colisiona= false;
  }
  return colisiona;
}


function Pantalla(  fot,  texto) {
  push();
  imageMode(CORNER);
  image(fot, 0, 0, 750, 600);
  noStroke();
  fill(130, 175, 127, 80);
  rectMode(CORNER);
  rect(0, 50, width, 200, 20);
  fill(130, 175, 127, 150);
  rect(50, 75, 500, 170, 20);
  fill(0);

  textLeading(20);
  textAlign(CENTER, CENTER);
  text( texto, 50, 75, 490, 165);
  pop();
}

function rojo( x,  y,  ancho,  alto) {
  if (colisionando(x, y, ancho, alto)) {
    fill( color(222, 43, 57));
  } else {
    fill(color(206, 62, 72));
  }
}
function verde( x,  y,  ancho,  alto) {
  if (colisionando(x, y, ancho, alto)) {
    fill( color(83, 206, 75));
  } else {
    fill(color(130, 242, 122));
  }
}

function mousePressed() {

  if (estado == 0) {
    if (colisionando(500, 540, 80, 40)) {

      estado = 1 ;
    }
  } else if (estado == 1) {
    if (colisionando(100, 540, 80, 40)) {

      estado = 2 ;
    }
    if (colisionando(500, 540, 80, 40)) {

      estado = 3 ;
    }
  } else if (estado == 2) {
    if (colisionando(500, 540, 80, 40)) {

      estado = 3 ;
    }
  } else if (estado == 3) {
    if (colisionando(500, 540, 80, 40)) {

      estado = 4 ;
    }
  } else if (estado == 4) {
    if (colisionando(500, 540, 80, 40)) {

      estado = 5 ;
    }
  } else if (estado == 5) {
    if (colisionando(500, 540, 80, 40)) {

      estado = 6 ;                         //opcion huir
    }
    if (colisionando(100, 540, 80, 40)) {  //opcion pelear

      estado = 14 ;
    }
  } else if (estado == 6) {
    if (colisionando(500, 540, 80, 40)) {

      estado = 7 ;
    }
    if (colisionando(100, 540, 80, 40)) {

      estado = 17 ;
    }
  } else if (estado == 7) {
    if (colisionando(500, 540, 80, 40)) {

      estado = 8 ;
    }
  } else if (estado == 8) {
    if (colisionando(500, 540, 80, 40)) {

      estado = 9 ;
    }
  } else if (estado == 9) {
    if (colisionando(500, 540, 80, 40)) {

      estado = 10 ;
    }
  } else if (estado == 10) {
    if (colisionando(500, 540, 80, 40)) {

      estado = 11 ;
    }
  } else if (estado == 11) {
    if (colisionando(500, 540, 80, 40)) {

      estado = 12 ;
    }
  } else if (estado == 12) {
    if (colisionando(500, 540, 80, 40)) {

      estado = 13 ;
    }
  } else if (estado == 13) {
    if (colisionando(500, 540, 80, 40)) {
      estado = 0;
    }
  } else if (estado == 14) {
    if (colisionando(500, 540, 80, 40)) {

      estado = 15 ;
    }
  } else if (estado == 15) {
    if (colisionando(500, 540, 80, 40)) {

      estado = 16 ;
    }
  } else if (estado == 16) {
    if (colisionando(500, 540, 80, 40)) {      //CREDITOS

      estado = 13 ;
    }
    if (colisionando(100, 540, 80, 40)) {        //VOLVER AL PASADO

      estado = 5 ;
    }
  } else if (estado == 17) {
    if (colisionando(500, 540, 80, 40)) {

      estado = 18 ;
    }
  } else if (estado == 18) {
    if (colisionando(500, 540, 80, 40)) {

      estado = 13 ;
    }
    if (colisionando(100, 540, 80, 40)) {        //VOLVER AL PASADO

      estado = 5 ;
    }
  }
}
