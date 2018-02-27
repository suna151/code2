function setup() {
  createCanvas(500, 500);
  background(0);
    fill(255, 0, 0);
  rect(100, 100, 100, 100);
  	fill(255,238,0);
  rect(200,200,100,100);
  	fill(0, 0, 255);
  rect(300,300,100,100);
  }

var value = (255,0,0);
function draw() {
  fill(value);
  rect(25, 25, 50, 50);
}

//couldn't figure out how to get color to change

function mousePressed() {
  if (value === (255,0,0)) {
    value = (255,0,0);
  } else {
    value = (0,255,0);
  }
}