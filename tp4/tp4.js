//Yamile Nazarena Erbes
// 94700/7
//comision 1

let anchob=[];
let largob=[];
let ab, lb;
let x, y, px, py, tam;
let cant = 10;
let barrera = [];
let dispara;


function setup() {
  createCanvas(400, 400);

  ab = 50;
  lb = 20;
  tam= 20;
  x = width/2;
  y= height-15;
  px=x;
  py=y;
  dispara = false;
  for (let i = 0; i<width; i++) {
    for (let j = 0; j<cant; j++) {
      anchob[i] = ab*i;
      largob[j]= lb*j;
    }
  }
}


function draw() {
  background(20);
  for (let i = 0; i<width; i++) {
    for (let j = 0; j<cant; j++) {
      barra(anchob[i], largob[j], ab, lb)
    }

    if (anchob[i]>width-ab || largob[i]<0) {
      barrera[i] *= -1;
    }
    if (contacto(px, py, tam, anchob[i], largob[i], ab, lb)) {
      dispara = false;
      seTocan = true;
    }
  }

  nave(x, y, 70, 20);
  bala(px, py, tam);

  if (dispara) {
    py-=8

      if (py<=0) {
      py+=8
    }
  }
}

function barra (x, y, ancho, alto) {
  stroke (5);
  rect(x, y, ancho, alto);
}

function nave (x, y, ancho, alto) {
  push();

  rectMode(CENTER);
  rect(x, y, ancho, alto);
  pop();
}

function bala(x, y, tam) {
  push();
  fill(255, 0, 0);
  circle(x, y, tam);
  pop();
}
function keyPressed() {

  if (key==="a") {
    x= x-20
      if (px <= 200 || px >= 200 && py === height-15) {
      px = px -20
    }
    if (x < 0 && py === height-15) {
      px = width
        x = width
    } else if (x<0 && py != height-15) {
      x = width
    }
  } else if (key==="d") {
    x = x+20
      if (px <= 200 || px >= 200 && py === height-15) {
      px = px +20
    }
    if (x > 400 && py === height-15) {
      px = 0
        x = 0
    } else if (x>400 && py != height-15) {
      x = 0
    }
  } else if (key==="w") {
    dispara = true
  }
}
function contacto(px, py, tam, anchob, largob, ab, lb) { // revisa el contacto entre ball y la plataforma
  let seTocan = px>anchob && px<anchob+ab && py+tam/2>largob && py<largob+ab ;
  return seTocan;
}
