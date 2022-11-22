// variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 16;
let raio = diametro/2;

// velocidade da bolinha
let velocidadeXBolinha = 8;
let velocidadeYBolinha = 8;

// variáveis da raquete
let xRaquete = 5;
let yRaquete = 160;
let larRaquete = 12;
let altRaquete = 80;

// variáveis do oponente
let xRaqueteOpon = 585;
let yRaqueteOpon = 160;
let velocidadeYOpon;
let chanceErro = 0

// placar do jogo
let meusPontos = 0;
let pontosOpon = 0;

let colidiu = false

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(1, 32, 48);
  mostraBolinha();
  moveBolinha();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOpon, yRaqueteOpon);
  moveRaquete();
  moveRaqueteOpon();
  // moveRaqueteOpon();
  colisaoRaqueteLib(xRaquete, yRaquete);
  colisaoRaqueteLib(xRaqueteOpon, yRaqueteOpon);
  incluiPlacar();
  marcaPonto();
  //bolinhaNaoFicaPresa()
}

function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function moveBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
  
  if (xBolinha + raio+2 >= width || xBolinha - raio-2 <= 0) {
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio+2 >= height || yBolinha - raio-2 <= 0) {
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(x,y) {
  rect(x, y, larRaquete, altRaquete);
}

function mostraRaqueteOpon() {
  rect(xRaqueteOpon, yRaqueteOpon, larRaquete, altRaquete);
}

function moveRaquete() {
  if (keyIsDown(87) && (yRaquete - xRaquete > 0)){
    yRaquete -= 10;
  }
  if (keyIsDown(83) && (yRaquete + xRaquete + altRaquete < height)){
    yRaquete += 10;
  }
}

function moveRaqueteOpon() {
  if (keyIsDown(UP_ARROW) && (yRaqueteOpon - 5 > 0)){
    yRaqueteOpon -= 10;
  }
  if (keyIsDown(DOWN_ARROW) && (yRaqueteOpon + altRaquete + 5 < height)){
    yRaqueteOpon += 10;
  }
}

function colisaoRaquete() {
  if ((xBolinha - raio < xRaquete + larRaquete) && (yBolinha - raio < yRaquete + altRaquete) && (yBolinha + raio > yRaquete)) {
    velocidadeXBolinha *= -1;
  }
}

function colisaoRaqueteLib(xRaq, yRaq) {
  colidiu = collideRectCircle(xRaq, yRaq, larRaquete, altRaquete, xBolinha, yBolinha, raio);
  if(colidiu) {
    velocidadeXBolinha *= -1;
  }
}

function incluiPlacar() {
  stroke(255)
  textSize(16)
  textAlign(CENTER)
  fill(color(235, 132, 5))
  rect(180, 12, 40, 25)
  fill(color(235, 132, 5))
  rect(380, 12, 40, 25)
  fill(255)
  text(meusPontos, 200, 30)
  text(pontosOpon, 400, 30)
}

function marcaPonto() {
  if (xBolinha > 588) {
    meusPontos += 1;
    if (yBolinha >= yRaqueteOpon && yBolinha <= yRaqueteOpon + altRaquete) {
      xBolinha = 520
    }
  }
  if (xBolinha < 12) {
    pontosOpon += 1;
    if (yBolinha >= yRaquete && yBolinha <= yRaquete + altRaquete) {
      xBolinha = 50
    }
  }
}


function bolinhaNaoFicaPresa(){
    if (xBolinha + raio < 0){
    console.log('bolinha ficou presa');
    xBolinha = 300;
    }
}
