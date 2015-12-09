var cnv;


function setup() {
  cnv = createCanvas(windowWidth-17,windowWidth-17);
  cnv.parent("canvas_here");
}

function draw() {
  background(200);
  angleMode(DEGREES);
  // fill(0);
  noFill();

  push();
  translate(width/2, height/2);

  stroke(0);
  strokeWeight(3);
  ellipse(0,0, 100,100);
  strokeWeight(8);
  stroke(255, 0, 0);
  arc(0, 0, 100,100, (app.relativeAngle - 2) ,(app.relativeAngle + 2) );


  strokeWeight(2);
  stroke(0, 0, 0);

  push();
  rotate(90);
  noStroke();
  textAlign(RIGHT);
  fill(0, 0 ,0 );
  text("destination: ", 0 + 9, + width/2 - 33);

  textAlign(LEFT);
  fill(255, 0 ,0 );
  text(app.destination, 0 + 10, + width/2 -33);
  
  fill(0);
  textAlign(CENTER);
  text("0°", 0, 0 - 70);
  text("180°", 0, 0 + 78);
  textAlign(RIGHT);
  text("90°", 0 + 90, 4);
  textAlign(LEFT);
  text("270°", 0 - 90, 4);
  pop();

  pop();


  // textAlign(CENTER);
  // text("north", width/2, height/2 - 70);
  // text("south", width/2, height/2 + 70);
  // textAlign(RIGHT);
  // text("east", width/2 + 90, height/2);
  // textAlign(LEFT);
  // text("west", width/2 - 90, height/2);

  // textAlign(CENTER);
  // text("270°", width/2, height/2 - 70);
  // text("90°", width/2, height/2 + 70);
  // textAlign(RIGHT);
  // text("0°", width/2 + 90, height/2);
  // textAlign(LEFT);
  // text("180°", width/2 - 90, height/2);


  // textAlign(LEFT);
  // text("black: your heading", width/2 - 90, height/2 + 95);
  // text("destination: " + app.destination, width/2 - 90, height/2 + 110);


  // ----

  // ellipse(width/2,height/2, 100,100);
  // strokeWeight(8);
  // stroke(0, 128);
  // arc(width/2, height/2, 100,100, (app.compassAngle - 2) - 90,(app.compassAngle + 2) - 90);
  // stroke(0, 0, 255, 128);
  // arc(width/2, height/2, 100,100, (app.gpsAngle - 2) - 90,(app.gpsAngle + 2) - 90);

  // // stroke(0, 0, 0, 200);
  // // arc(width/2, height/2, 100,100, (0 - 2) - 90,(0 + 2) - 90);
  
  // stroke(255, 0, 0, 128);
  // arc(width/2, height/2, 100,100, (app.relativeAngle - 2) - 90,(app.relativeAngle + 2) - 90);

  // stroke(255, 0, 0);
  // arc(width/2, height/2, 100,100, (app.relativeAngle_tilt - 2) - 90,(app.relativeAngle_tilt + 2) - 90);
  
  // stroke(0, 0, 0);
  // arc(width/2, height/2, 100,100, (app.compassAngle_tilt - 2) - 90,(app.compassAngle_tilt + 2) - 90);

  // ----

  // ellipse(width/2,height/2, 100,100);
  // strokeWeight(8);
  // stroke(0, 128);
  // arc(width/2, height/2, 100,100, (app.compassAngle - 2) ,(app.compassAngle + 2) );
  // stroke(0, 0, 255, 128);
  // arc(width/2, height/2, 100,100, (app.gpsAngle - 2) ,(app.gpsAngle + 2) );

  // stroke(0, 0, 0, 200);
  // arc(width/2, height/2, 100,100, (0 - 2) - 90,(0 + 2) - 90);
  
  // stroke(255, 0, 0);
  // arc(width/2, height/2, 100,100, (app.relativeAngle - 2) ,(app.relativeAngle + 2) );

  // stroke(255, 0, 0);
  // arc(width/2, height/2, 100,100, (app.relativeAngle_tilt - 2) ,(app.relativeAngle_tilt + 2) );
  
  // stroke(0, 0, 0);
  // arc(width/2, height/2, 100,100, (app.compassAngle_tilt - 2) ,(app.compassAngle_tilt + 2) );

}