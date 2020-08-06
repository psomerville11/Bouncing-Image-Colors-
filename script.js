let dvdImage;
let r, g, b



function setup() {
  createCanvas(800, 600);
  // We only want to load the logo once.

dvdImage = loadImage(
    "https://cdn.glitch.com/eaea72a4-ac6d-4777-b76e-f37d75959aa5%2Fdvd.jpeg?1515761833387"
  );
}
  mastervelocity = 5;
  x = 50;
  y = 50;
  xVelocity = mastervelocity
  yVelocity = mastervelocity 
  imgwidth = 200;
  imgheight = 150;
  pickColor();


function pickColor() {
  r = random(100, 256);
  g = random(100, 256);
  b = random(100, 256);
}

function draw() {
  background(220);
  tint(r, g, b);
  x += xVelocity;

  if (x > width - imgwidth) {
    xVelocity = -mastervelocity;
    pickColor();
  } else if (x < 0) {
    xVelocity = mastervelocity;
    pickColor();
  }

  if (y > height - imgheight) {
    yVelocity = -mastervelocity;
    pickColor();
  } else if (y < 0) {
    yVelocity = mastervelocity;
    pickColor();
  }
  y += yVelocity;
  
  // Draw the logo at the new position.
  image(dvdImage, x, y, imgwidth, imgheight);}
