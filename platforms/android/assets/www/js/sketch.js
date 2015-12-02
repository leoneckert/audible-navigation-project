var cnv;

// var osc_gps;
// var osc_compass;

function setup() {
  cnv = createCanvas(200,220);
  // osc_gps = new p5.Oscillator();
  // osc_gps.setType('sine');
  // osc_gps.freq(240);
  // osc_gps.amp(0.5);
  // osc_gps.start();

  // osc_compass = new p5.Oscillator();
  // osc_compass.setType('sine');
  // osc_compass.freq(240);
  // osc_compass.amp(0.5);
  // osc_compass.start();
}

function draw() {
  background(255);
  angleMode(DEGREES);
  // fill(0);
  noFill();

  stroke(0);
  strokeWeight(1);
  // textAlign(CENTER);
  // text("north", width/2, height/2 - 70);
  // text("south", width/2, height/2 + 70);
  // textAlign(RIGHT);
  // text("east", width/2 + 90, height/2);
  // textAlign(LEFT);
  // text("west", width/2 - 90, height/2);

  textAlign(CENTER);
  text("0°", width/2, height/2 - 70);
  text("180°", width/2, height/2 + 70);
  textAlign(RIGHT);
  text("90°", width/2 + 90, height/2);
  textAlign(LEFT);
  text("270°", width/2 - 90, height/2);


  textAlign(LEFT);
  text("black: your heading", width/2 - 90, height/2 + 95);
  text("red: your destination", width/2 - 90, height/2 + 110);

  // if(app.compassAngle < 10 || app.compassAngle > 350){
  //   osc.amp(0.5);
  // }else{
  //   osc.amp(0);
  // }
  
  // var low = 120;
  // var high = 410;
  // osc_gps.pan(1);
  // osc_gps.freq(map(app.gpsAngle, 0, 360, low, high));

  // osc_compass.pan(-1);
  // osc_compass.freq(map(app.compassAngle, 0, 360, low, high));

  ellipse(width/2,height/2, 100,100);
  strokeWeight(8);
  // stroke(0, 128);
  // arc(width/2, height/2, 100,100, (app.compassAngle - 2) - 90,(app.compassAngle + 2) - 90);
  // stroke(0, 0, 255, 128);
  // arc(width/2, height/2, 100,100, (app.gpsAngle - 2) - 90,(app.gpsAngle + 2) - 90);

  stroke(0, 0, 0, 200);
  arc(width/2, height/2, 100,100, (0 - 2) - 90,(0 + 2) - 90);
  
  stroke(255, 0, 0, 128);
  arc(width/2, height/2, 100,100, (app.relativeAngle - 2) - 90,(app.relativeAngle + 2) - 90);


}