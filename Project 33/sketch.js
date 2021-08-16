var back, snow2, snow3, snow4, snow5, boyImg, boy, snow2Img, snow3Img, snow4Img, snow5Img

function preload(){
  back = loadImage("snow1.jpg");
  snow2Img = loadImage("snow2.jpg");
  snow3Img= loadImage("snow3.jpg");
  snow4Img = loadImage("snow4.webp");
  snow5Img = loadImage("snow5.webp");
  boyImg = loadImage("boy2.png");
}

function setup() {
  createCanvas(800,400);

  boy = createSprite(400, 300, 50, 50);
  boy. addImage(boyImg);
  snow3 = createSprite(500, 200, 10, 10);
  snow3.addImage(snow3Img);
  snow4 = createSprite(600, 200, 10, 10);
  snow4.addImage(snow4Img);
  snow4.scale = 0.5;
  snow5 = createSprite(700, 200, 10, 10);
  snow5.addImage(snow5Img);
  snow5.scale = 0.5;

}

function draw() {
  background(back);  
  drawSprites();
}