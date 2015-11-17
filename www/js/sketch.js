var cnv;

function setup() {
  cnv = createCanvas(200,200);
}

function draw() {
  angle = map(mouseX, 0, width, 0, 360);
  background(255);
  angleMode(DEGREES);
  // fill(0);
  noFill();

  stroke(0);
  strokeWeight(1);
  textAlign(CENTER);
  text("north", width/2, height/2 - 70);
  text("south", width/2, height/2 + 70);
  textAlign(RIGHT);
  text("east", width/2 + 90, height/2);
  textAlign(LEFT);
  text("east", width/2 - 90, height/2);

  ellipse(width/2,height/2, 100,100);
  strokeWeight(8);
  arc(width/2, height/2, 100,100, (app.angle - 2) - 90,(app.angle + 2) - 90);
}