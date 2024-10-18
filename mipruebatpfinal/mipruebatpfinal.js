let imagIntro = [], imagActual = 0, imagSokka=[], imagAang=[], imagAangB=[];
let camino = 'intro';
let flecha;
let dialogos;
let dialogosCS;
let dialogosCA;
let dialogosCAB
  let diaDelCamActual= 'intro';
let dialogoActual = 0;
let creditos = false;


function preload() {
  dialogos = loadStrings('data/intro.txt');
  dialogosCS = loadStrings('data/sokka.txt');
  dialogosCA = loadStrings('data/aang.txt');
  dialogosCAB = loadStrings('data/aang(1).txt');
  flecha = loadImage ('data/flechaBlanca.png');
  imagIntro = [
    loadImage('data/intro/avatarIntro.jpeg'),
    loadImage('data/intro/foto1.jpeg'),
    loadImage('data/intro/foto2.jpeg'),
    loadImage('data/intro/foto3.jpg'),
    loadImage('data/separados1.jpeg')
  ];

  imagSokka = [
    loadImage('data/Sokka/cs3.jpeg'),
    loadImage('data/Sokka/cs4.jpeg'),
    loadImage('data/Sokka/cs5.jpg'),
    loadImage('data/Sokka/cs6.jpg'),
    loadImage('data/Sokka/cs7.jpg'),
    loadImage('data/Sokka/cs8.jpg'),
    loadImage('data/Sokka/cs9.jpg'),
    loadImage('data/Sokka/cs10.jpg'),
    loadImage('data/Sokka/cs11.jpg'),
    loadImage('data/Sokka/cs12.jpg')
  ];

  imagAang = [
    loadImage('data/aang(1)/aang2.jpg'),
    loadImage('data/aang(1)/aang3.jpg'),
    loadImage('data/aang(1)/aang4.jpg'),
    loadImage('data/aang(1)/aang5.jpg'),
    loadImage('data/aang(1)/aang6.jpg'),
    loadImage('data/aang(1)/aang7.jpg'),
    loadImage('data/aang(1)/aang8.jpg'),
    loadImage('data/aang(1)/separadoss.jpeg')
  ];
  imagAangB = [
    loadImage('data/aang(2)/aangBifu1.jpeg'),
    loadImage('data/aang(2)/aangBifu2.jpeg'),
    loadImage('data/aang(2)/aangBifu3.jpeg'),
    loadImage('data/aang(2)/aangBifu4.jpeg'),
    loadImage('data/aang(2)/aangBifu5.jpeg'),
    loadImage('data/aang(2)/aangBifu6.jpeg'),
    loadImage('data/aang(2)/aangBifu7.jpeg'),
    loadImage('data/aang(2)/aangBifu8.jpeg'),
    loadImage('data/aang(2)/aangBifu9.jpeg')
  ];
}

function setup() {
  createCanvas(640, 480);
}


function draw() {
  background(0);
  let imagen = tomaImagenActual();
  let texto = tomaDialogo();

  if (imagen) {
    image(imagen, 0, 0, 640, 480);
  }
  if (texto) {
    fill(255);
    text(texto, 50, 50);
  }
  image(flecha, 0, 0, 50, 20);
  if (camino === 'intro' && imagActual === imagIntro.length - 1) {
    dibujarBoton(100, 400, 150, 40, "Seguir a Aang");
    dibujarBoton(350, 400, 150, 40, "Seguir a Sokka");
  }
  if (camino === 'sokka' && imagActual === imagSokka.length - 1 || 
        camino === 'aang' && imagActual === imagAang.length - 1 || 
        camino === 'aangB' && imagActual === imagAangB.length - 1) {
      creditos = true;
    } if (creditos){
    return dibujaCreditos();
    }
    
}
