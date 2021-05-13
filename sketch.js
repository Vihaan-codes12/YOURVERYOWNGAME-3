var Iguanodon, iguanodonImage
var Allosaurus, allosaurusImage;
var Brachiosaurus, brachiosaurusImage;
var Dilophosaurus, dilophosaurusImage;
var Pentaceratops, pentaceratopsImage;
var Pachycephalosaurus, pachycephalosaurusImage;
var Triceratops, triceratopsImage;
var Ankylosaurus, ankylosaurusImage;
var Giganotosaurus, giganotosaurusImage;
var Spinosaurus, spinosaurusImage;
var Stegosaurus, stegosaurusImage;
var Tyrannosaurus, tyrannosaurusImage;
var Amargasaurus, amargasaurusImage;
var Carnotaurus, carnotaurusImage;
var Ceratosaurus, ceratosaurusImage;
var Megaraptor, megaraptorImage;
var Saichania, saichaniaImage;
var Shunosaurus, shunosaurusImage;
var Siamosaurus, siamosaurusImage;
var Siamotyrannus, siamotyrannusImage;
var Suchomimus, suchomimusImage;
var Kentrosaurus, kentrosaurusImage;
var Torosaurus, torosaurusImage;

var gameState = 0;

function preload(){
  iguanodonImage = loadImage("DinosaursImages/Iguanodon.jpg");
  allosaurusImage = loadImage("DinosaursImages/Allosaurus.jpg");
  brachiosaurusImage = loadImage("DinosaursImages/Brachiosaurus.jpg");
  dilophosaurusImage = loadImage("DinosaursImages/Dilophosaurus.jpg")
  pentaceratopsImage = loadImage("DinosaursImages/Pentaceratops.jpg");
  pachycephalosaurusImage = loadImage("DinosaursImages/Pachycephalosaurus.jpg");
  triceratopsImage = loadImage("DinosaursImages/Triceratops.jpg");
  ankylosaurusImage = loadImage("DinosaursImages/Ankylosaurus.jpg");
  giganotosaurusImage = loadImage("DinosaursImages/Giganotosaurus.jpg");
  spinosaurusImage = loadImage("DinosaursImages/Spinosaurus.jpg");
  stegosaurusImage = loadImage("DinosaursImages/Stegosaurus.jpg");
  tyrannosaurusImage = loadImage("DinosaursImages/Tyrannosaurus.jpg");
  amargasaurusImage = loadImage("DinosaursImages/Amargasaurus.jpg");
  carnotaurusImage = loadImage("DinosaursImages/Carnotaurus.jpg");
  ceratosaurusImage = loadImage("DinosaursImages/Ceratosaurus.jpg");
  megaraptorImage = loadImage("DinosaursImages/Megaraptor.jpg");
  saichaniaImage = loadImage("DinosaursImages/Saichania.jpg");
  shunosaurusImage = loadImage("DinosaursImages/Shunosaurus.jpg");
  siamosaurusImage = loadImage("DinosaursImages/Siamosaurus.jpg");
  siamotyrannusImage = loadImage("DinosaursImages/Siamotyrannus.jpg");
  suchomimusImage = loadImage("DinosaursImages/Suchomimus.jpg");
  torosaurusImage = loadImage("DinosaursImages/Torosaurus.jpg");
  kentrosaurusImage = loadImage("DinosaursImages/Kentrosaurus.jpg");
 
}

function setup() {
  createCanvas(1300,400);

  Iguanodon = createSprite(1250,30,40,40);
  Iguanodon.addImage(iguanodonImage);
  Iguanodon.scale = 0.1;
  Allosaurus = createSprite(1150,30,40,40);
  Allosaurus.addImage(allosaurusImage);
  Allosaurus.scale = 0.1;
  Brachiosaurus = createSprite(1050,30,40,40);
  Brachiosaurus.addImage(brachiosaurusImage);
  Brachiosaurus.scale = 0.07;
  Dilophosaurus = createSprite(950,30,40,40);
  Dilophosaurus.addImage(dilophosaurusImage);
  Dilophosaurus.scale = 0.1;
  Pentaceratops = createSprite(850,30,40,40);
  Pentaceratops.addImage(pentaceratopsImage);
  Pentaceratops.scale = 0.1;
  Pachycephalosaurus = createSprite(450,30,40,40);
  Pachycephalosaurus.addImage(pachycephalosaurusImage);
  Pachycephalosaurus.scale = 0.1;
  Triceratops = createSprite(350,30,40,40);
  Triceratops.addImage(triceratopsImage);
  Triceratops.scale = 0.1;
  Ankylosaurus = createSprite(250,30,40,40);
  Ankylosaurus.addImage(ankylosaurusImage);
  Ankylosaurus.scale = 0.1;
  Giganotosaurus = createSprite(150,30,40,40);
  Giganotosaurus.addImage(giganotosaurusImage);
  Giganotosaurus.scale = 0.1;
  Spinosaurus = createSprite(50,30,40,40);
  Spinosaurus.addImage(spinosaurusImage);
  Spinosaurus.scale = 0.3;
  Stegosaurus = createSprite(1250,110,40,40);
  Stegosaurus.addImage(stegosaurusImage);
  Stegosaurus.scale = 0.1;
  Tyrannosaurus = createSprite(1150,110,40,40);
  Tyrannosaurus.addImage(tyrannosaurusImage);
  Tyrannosaurus.scale = 0.15;
  Amargasaurus = createSprite(1050,110,40,40);
  Amargasaurus.addImage(amargasaurusImage);
  Amargasaurus.scale = 0.1;
  Carnotaurus = createSprite(950,110,40,40);
  Carnotaurus.addImage(carnotaurusImage);
  Carnotaurus.scale = 0.1;
  Ceratosaurus = createSprite(850,110,40,40);
  Ceratosaurus.addImage(ceratosaurusImage);
  Ceratosaurus.scale = 0.1;
  Megaraptor = createSprite(750,110,40,40);
  Megaraptor.addImage(megaraptorImage);
  Megaraptor.scale = 0.1;
  Saichania = createSprite(650,110,40,40);
  Saichania.addImage(saichaniaImage);
  Saichania.scale = 0.15;
  Shunosaurus = createSprite(550,110,40,40);
  Shunosaurus.addImage(shunosaurusImage);
  Shunosaurus.scale = 0.3;
  Siamosaurus = createSprite(450,110,40,40);
  Siamosaurus.addImage(siamosaurusImage);
  Siamosaurus.scale = 0.13;
  Siamotyrannus = createSprite(350,110,40,40);
  Siamotyrannus.addImage(siamotyrannusImage);
  Siamotyrannus.scale = 0.1;
  Suchomimus = createSprite(250,110,40,40);
  Suchomimus.addImage(suchomimusImage);
  Suchomimus.scale = 0.1;
  Kentrosaurus = createSprite(150,110,40,40);
  Kentrosaurus.addImage(kentrosaurusImage);
  Kentrosaurus.scale = 0.1;
  Torosaurus = createSprite(50,110,40,40);
  Torosaurus.addImage(torosaurusImage);
  Torosaurus.scale = 0.1;

  
}

function draw() {
  background("cyan");  
  drawSprites();

  textSize(25);
  fill("red");
  text("Choose a dino, and play!", 500,50);

  textSize(10);
  fill("blue");
  text("Iguanodon", 1230,65);

  textSize(10);
  fill("red");
  text("Stegosaurus", 1220,145);

  textSize(10);
  fill("brown");
  text("Allosaurus", 1125, 65);

  textSize(10);
  fill("green");
  text("Tyrannosaurus", 1120, 145);

  textSize(10);
  fill("black");
  text("Brachiosaurus", 1020, 70);

  textSize(10);
  fill("white");
  text("Amargasaurus", 1020,145);

  textSize(10);
  fill("yellow");
  text("Dilophosaurus", 915,70);

  text(10);
  fill("black");
  text("Carnotaurus", 922,145);

  text(10);
  fill("orange");
  text("Pentaceratops", 820,70);

  textSize(10);
  fill("brown");
  text("Ceratosaurus", 820,145);

  textSize(10);
  fill("purple");
  text("Megaraptor", 725,150);  

  textSize(11);
  fill("yellow");
  text("Saichania", 625,145);

  textSize(10);
  fill("blue");
  text("Shunosaurus", 520,145);

  textSize(10);
  fill("gray");
  text("Pachycephalosaurus", 410,65);

  textSize(10);
  fill("purple");
  text("Siamosaurus", 420,145);

  textSize(10);
  fill("lime");
  text("Triceratops", 325,65);

  text(10);
  fill("orange");
  text("Siamotyrannus", 320,145);

  textSize(10);
  fill("red");
  text("Ankylosaurus", 220,65);

  textSize(10);
  fill("blue");
  text("Suchomimus", 220,145);

  textSize(10);
  fill("brown");
  text("Giganotosaurus", 125,65);

  textSize(10);
  fill("yellow");
  text("Kentrosaurus", 120,145);

  textSize(13);
  fill("green");
  text("Spinosaurus", 15,70);

  textSize(12);
  fill("pink");
  text("Torosaurus", 20,150);

  textSize(27);
  fill("orange");
  text("You are on a mission to fight your opponents to save the dinosaurs from going mad! GOOD LUCK!", 30,250);

  textSize(30);
  fill("blue");
  text("Click the RIGHT ARROW to start playing!", 400,350);


  if(keyDown (RIGHT_ARROW)){
    gameState = 1;
  }

  if(keyDown (LEFT_ARROW)){
    gameState = 0;
  }

  if(gameState === 1){
    background("pink");
  }
}

