var spot = {
  x: 130,
  y: 14
}

var col = {
  r: 183,
  g: 563,
  b: 253
}
function setup() {
  createCanvas(600, 400);
  background(0);
}

function draw() {
  col.r = random(160, 235);
  col.g = 0;
  col.b = random(123, 200);
  
  spot.x = random(0, width);
  spot.y = random(0, height);
  noStroke();
  fill(col.r, col.g, col.b, 100);
  ellipse(spot.x, spot.y, 24, 24);
}
å