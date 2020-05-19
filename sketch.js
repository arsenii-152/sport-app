let extraCanvas;

function setup() {
  createCanvas(3840, 2160);
  extraCanvas = createGraphics(width, height);
  extraCanvas.clear();
}

function draw() {
  background('#FF7D7D');
  image(extraCanvas, 0, 0);

  if (mouseIsPressed) {
   extraCanvas.fill(random(0, 255), random(0, 255), random(0, 255));
    extraCanvas.rect(mouseX, mouseY, 50, 50);
  } else {
    extraCanvas.fill(100, 0, 10);
    extraCanvas.rect(mouseX, mouseY, 50, 50, 10);
  }
}
