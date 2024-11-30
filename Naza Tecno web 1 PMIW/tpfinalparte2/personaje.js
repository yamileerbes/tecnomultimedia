class Personaje {
  constructor() {
    this.posX = width/2;
    this.posY = height - 100;
    this.tamaño = 70;
    this.velocidadX = 0;
    this.velocidadY = 0;
    this.gravedad = 0.8;
    this.saltando = false;
  }

  dibujar() {
    image(imgP, this.posX, this.posY, this.tamaño, this.tamaño);
  }

  salto() {
    if (this.posY === height - 70) {
      this.velocidadY = -9;  // Velocidad del salto
      this.saltando = true;
        if (!saltoPlaying) {
      songSalto.play(); // reproducir el sonido del salto una sola vez
      saltoPlaying = true; 
    }

    }
  }
  finSalto() {
    this.saltando = false;  // desactiva el salto prolongado

  }

  mover() {
    // desplaza horizontal
    this.posX += this.velocidadX;
    this.posX = constrain(this.posX, 0, width - this.tamaño);

    // desplaza vertical
    this.posY += this.velocidadY;

    // si estamos en el aire y salto prolongado, incrementa el salto
    if (this.saltando && this.velocidadY < 0) {
      this.velocidadY -= 0.6; //  fuerza del salto prolongado
    }

    this.velocidadY += this.gravedad;

    // limitar la posición en el suelo
    if (this.posY > height - 70) {
      this.posY = height - 70;
      this.velocidadY = 0;
      this.saltando = false; // desactiva salto al tocar el suelo
         saltoPlaying = false; // permite volver areproducir el sonido
    }
  }
}
