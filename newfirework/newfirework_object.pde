class FireworkParticle {
  color fireworkColor;
  PVector position;
  PVector velocity;
  PVector acceleration;
  float alpha;
  int size;
  
  FireworkParticle(PVector position, color fireworkColor) {
    reset(position, fireworkColor);
  }
  
  void reset(PVector position, color fireworkColor) {
    this.position = new PVector(position.x + random(-100,125) , position.y+random(-125,232));
    this.fireworkColor = fireworkColor;
    
    this.velocity = new PVector(random(-1.2, 1.2), random(-1, 1));
    this.acceleration = new PVector(0, random(0, 0.04));
    
    this.size = 5;
    this.alpha = 255;
  }
  
  void update() {
    velocity.add(acceleration);
    position.add(velocity);
    
    alpha--;
  }
  
  void draw() {
    noStroke();
    fill(fireworkColor, alpha);
    rect(position.x, position.y, 12+size, 12+size);
  }
}