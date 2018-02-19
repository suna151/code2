function setup() {
	createCanvas(800,800)
	v = new Vehicle(createVector(width/2, height/2));
  b = new Vehicle(createVector(width/10, height/10));
  a = new Vehicle(createVector(width/3, height/3));
  x = new Vehicle(createVector(width/1, height/1));
  y = new Vehicle(createVector(width/5, height/5));
  z = new Vehicle(createVector(width/9, height/9));
  c = new Vehicle(createVector(width/6, height/6));
  d = new Vehicle(createVector(width/11, height/4));
  e = new Vehicle(createVector(width/11, height/3));
  f = new Vehicle(createVector(width/12, height/4));
  g = new Vehicle(createVector(width/14, height/5));

}


function draw() {
	background(188, 253, 255);

//draw a circle at the mouse position

	fill(200);
	stroke(0);
	strokeWeight(2);
//update and display vehicle
	v.seek(createVector(mouseX,mouseY));
	v.update();
	v.display();
  b.seek(createVector(mouseX,mouseY));
  b.update();
  b.display();
  a.seek(createVector(mouseX,mouseY));
  a.update();
  a.display();
  x.seek(createVector(mouseX,mouseY));
  x.update();
  x.display();
  y.seek(createVector(mouseX,mouseY));
  y.update();
  y.display();
  z.seek(createVector(mouseX,mouseY));
  z.update();
  z.display();
  c.seek(createVector(mouseX,mouseY));
  c.update();
  c.display();
  d.seek(createVector(mouseX,mouseY));
  d.update();
  d.display();
  e.seek(createVector(mouseX,mouseY));
  e.update();
  e.display();
  f.seek(createVector(mouseX,mouseY));
  f.update();
  f.display();
  g.seek(createVector(mouseX,mouseY));
  g.update();
  g.display();


}


//define vehicle class
class Vehicle {
	constructor(position){

// this is where we define our properties
	this.position = position;
	this.velocity = createVector(0,0);
	this.acceleration = createVector(0,0);
//r is our size
	this.r = 6;
	this.color = color (249, 209, 255);

	this.maxSpeed = 3;
}



seek(target) {
	//note that this.position is a vector
	//note that target is a vecctor
	//find the desired vector of travel
	// by subtracting position from target
	let desired = target.sub(this.position);

	desired.setMag(this.maxSpeed);

	//find the 'steering' vector
	let steer = desired.sub(this.velocity);

	this.applyForce(steer);
}
//applyForce
// this is how we move the car in a given direction
// with a given magnitude (vector)

applyForce(force) {
	this.acceleration.add(force);
	//note wthat we can do more physics simulation here
	//eg give the car mass and calcuate the acceleration
	//delta as A = F / M

}

//update
// "run simulation"
// update properties based on changes since last update



update(){
	//update velocity
	this.velocity.add(this.acceleration);
	//update position
	this.position.add(this.velocity);
	//reset acceleration
	this.acceleration.mult(0);
}

//display
display() {
	//draw a triangle rotated in the direction of velocity
	//get angle from veolcity
	let theta = this.velocity.heading() + HALF_PI;
	//set drawing properties
	fill(this.color);
	stroke(0);
	strokeWeight(1);
	//move center of the canvas to the vehicle's position
	translate(this.position.x, this.position.y);
	//rotate the canvas to  the heading we calculated above
	rotate(theta);
	//draw the vehicle shape
	beginShape();
	vertex(0, -this.r*2);
	vertex(-this.r, this.r*2)
	vertex(this.r, this.r*2);
	endShape(CLOSE);



	//end transforms
	//resetMatrix();




}

}