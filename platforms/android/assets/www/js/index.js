var app = {
    
    // Application Constructor
    initialize: function() {
        this.bindEvents();
        /////////////////
        //this is APP
        /////////////////
    },
    watchId: null,
    watchIdOrientation: null,
    compassAngle: 0,
    gpsAngle: 0,
    relativeAngle:0,
    player0: null,
    player45: null,
    player90: null,
    player135: null,
    player180: null,
    player225: null,
    player270: null,
    player315: null,



    // Bind Event Listeners
    // any listeners created in here will be constantly listening. 
    bindEvents: function() {
        /////////////////
        //this is APP
        /////////////////
        document.addEventListener('deviceready', this.onDeviceReady, false);
        // button.addEventListener('click', this.handleClick, false);
            //the player
        // var player = new Tone.Player({
        //   "url" : "js/test_sound.m4a",

        // }).toMaster();
        // var player = new Tone.Player("js/test_sound.m4a",playbackRate: 2).toMaster();
       
        //the player
        app.player0 = new Tone.Player({
          "url" : "js/yesterday/000.mp3",
          "loop": true,
          // "playbackRate" : (app.compassAngle - 0) * (7 - (-5)) / (360 - 0) + (- 5),
        }).toMaster();

        app.player45 = new Tone.Player({
          "url" : "js/yesterday/045.mp3",
          "loop": true,
          // "playbackRate" : (app.compassAngle - 0) * (7 - (-5)) / (360 - 0) + (- 5),
        }).toMaster();

        app.player90 = new Tone.Player({
          "url" : "js/yesterday/090.mp3",
          "loop": true,
          // "playbackRate" : (app.compassAngle - 0) * (7 - (-5)) / (360 - 0) + (- 5),
        }).toMaster();


        app.player135 = new Tone.Player({
          "url" : "js/yesterday/135.mp3",
          "loop": true,
          // "playbackRate" : (app.compassAngle - 0) * (7 - (-5)) / (360 - 0) + (- 5),
        }).toMaster();

        app.player180 = new Tone.Player({
          "url" : "js/yesterday/180.mp3",
          "loop": true,
          // "playbackRate" : (app.compassAngle - 0) * (7 - (-5)) / (360 - 0) + (- 5),
        }).toMaster();

        app.player225 = new Tone.Player({
          "url" : "js/yesterday/225.mp3",
          "loop": true,
          // "playbackRate" : (app.compassAngle - 0) * (7 - (-5)) / (360 - 0) + (- 5),
        }).toMaster();

        app.player270 = new Tone.Player({
          "url" : "js/yesterday/270.mp3",
          "loop": true,
          // "playbackRate" : (app.compassAngle - 0) * (7 - (-5)) / (360 - 0) + (- 5),
        }).toMaster();

        app.player315 = new Tone.Player({
          "url" : "js/yesterday/315.mp3",
          "loop": true,
          // "playbackRate" : (app.compassAngle - 0) * (7 - (-5)) / (360 - 0) + (- 5),
        }).toMaster();


        Tone.Buffer.onload = function(){
          // print(app.player0.playbackRate);
          app.player0.start();
          app.player45.start();
          app.player90.start();
          app.player135.start();
          app.player180.start();
          app.player225.start();
          app.player270.start();
          app.player315.start();
          print("play");
        }

    },
    
    // var angle = 0,
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
      /////////////////
      //this is Channel
      /////////////////
      var options = { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true };
      var optionsOrientation = { frequency: 100};
      
      function success(position) {
        /////////////////
        //this is window
        /////////////////
        output.innerHTML =  "<b>Latitude:</b> " + position.coords.latitude + "<br><b>Longitude:</b> " + position.coords.longitude;
 

        //in relation to ITP:
        //north: 40.741564, -73.993177
        //east: 40.729109, -73.973264
        //south: 40.717466, -73.994421
        //west: 40.729825, -74.031797
        // between itp and union: 40.732378, -73.991332
        var dest_lat = 40.729109;
        var dest_lon = -73.973264;
        output1.innerHTML = "<b>Destination bearing:</b> " + String(app.getBearing(position.coords.latitude, position.coords.longitude, dest_lat, dest_lon));
        app.gpsAngle = app.getBearing(position.coords.latitude, position.coords.longitude, dest_lat, dest_lon);
      }

      function sucessOrientation(heading) { 
        // output2.innerHTML = "nothing";
        output2.innerHTML = "<b>Compass:</b> " + heading.magneticHeading;
        app.compassAngle = heading.magneticHeading;

        // app.player0.playbackRate = (app.compassAngle - 0) * (4 - (0)) / (360 - 0) + (0);


        if(app.gpsAngle >= app.compassAngle){
          app.relativeAngle = app.gpsAngle - app.compassAngle;
        }else{
          app.relativeAngle = (app.gpsAngle - app.compassAngle)+360;
        }

        // (app.relativeAngle - in_min) * (out_max - out_min) / (in_max - in_min) + out_min,

        var fade_span = 45;



        // if(app.relativeAngle >= 360 - fade_span){
        //   app.player0.set({
        //     "volume" : (app.relativeAngle - 315) * (0 - -55) / (360 - 315) + -55,
        //     // "volume" : -55,
        //   });
        // }

       

        // if(app.relativeAngle <= fade_span){
        //   var from = 0;
        //   var to = 45;
        //   var left_sound = 0;
        //   var right_sound = -55;
          
        //   app.player0.set({            
        //     "volume" : (app.relativeAngle - from) * (right_sound - left_sound) / (45 - from) + left_sound,
        //   });

        //   from = 0;
        //   to = 45;
        //   left_sound = -55;
        //   right_sound = 0;

        //   app.player45.set({
        //     "volume" : (app.relativeAngle - from) * (right_sound - left_sound) / (45 - from) + left_sound,
        //     // "volume" : -55,
        //   });
        // }



        var from = 0;
        var to = 0;
        var left_sound = 0;
        var right_sound = 0;
        

        app.player0.set({
            "volume" : -100,
        });
        app.player45.set({
            "volume" : -100,
        });
        app.player90.set({
            "volume" : -100,
        });
        app.player135.set({
            "volume" : -100,
        });
        app.player180.set({
            "volume" : -100,
        });
        app.player225.set({
            "volume" : -100,
        });
        app.player270.set({
            "volume" : -100,
        });
        app.player315.set({
            "volume" : -100,
        });


        if(app.relativeAngle >= 0 && app.relativeAngle <= 45){
          var secondAngle = 45;
          
          from = secondAngle - 45;
          to = secondAngle;
          left_sound = 0;
          right_sound = 1;

          // calculate a, mapping from 0 to 1
          var a = (app.relativeAngle - from) * (right_sound - left_sound) / (secondAngle - from) + left_sound;

          // 0 down
          app.player0.set({
            "volume" : app.player0.gainToDb(app.player0.equalPowerScale(1-a)),
            // "volume" : -55,
          });

          //45 up
          app.player45.set({
            "volume" : app.player45.gainToDb(app.player45.equalPowerScale(a)),
            // "volume" : -55,
          });


        }


        if(app.relativeAngle >= 45 && app.relativeAngle <= 90){
          var secondAngle = 90;
          
          from = secondAngle - 45;
          to = secondAngle;
          left_sound = 0;
          right_sound = 1;

          // calculate a, mapping from 0 to 1
          var a = (app.relativeAngle - from) * (right_sound - left_sound) / (secondAngle - from) + left_sound;

          // 45 down
          app.player45.set({
            "volume" : app.player45.gainToDb(app.player45.equalPowerScale(1-a)),
            // "volume" : -55,
          });

          //90 up
          app.player90.set({
            "volume" : app.player90.gainToDb(app.player90.equalPowerScale(a)),
            // "volume" : -55,
          });



        }


        if(app.relativeAngle >= 90 && app.relativeAngle <= 135){
          var secondAngle = 135;

          from = secondAngle - 45;
          to = secondAngle;
          left_sound = 0;
          right_sound = 1;

          // calculate a, mapping from 0 to 1
          var a = (app.relativeAngle - from) * (right_sound - left_sound) / (secondAngle - from) + left_sound;

          // 90 down
          app.player90.set({
            "volume" : app.player90.gainToDb(app.player90.equalPowerScale(1-a)),
            // "volume" : -55,
          });

          //135 up
          app.player135.set({
            "volume" : app.player135.gainToDb(app.player135.equalPowerScale(a)),
            // "volume" : -55,
          });

        }


        if(app.relativeAngle >= 135 && app.relativeAngle <= 180){
          var secondAngle = 180;

          from = secondAngle - 45;
          to = secondAngle;
          left_sound = 0;
          right_sound = 1;

          // calculate a, mapping from 0 to 1
          var a = (app.relativeAngle - from) * (right_sound - left_sound) / (secondAngle - from) + left_sound;

          // 135 down
          app.player135.set({
            "volume" : app.player135.gainToDb(app.player135.equalPowerScale(1-a)),
            // "volume" : -55,
          });

          //180 up
          app.player180.set({
            "volume" : app.player180.gainToDb(app.player180.equalPowerScale(a)),
            // "volume" : -55,
          });

        }


        if(app.relativeAngle >= 180 && app.relativeAngle <= 225){
          var secondAngle = 225;

          from = secondAngle - 45;
          to = secondAngle;
          left_sound = 0;
          right_sound = 1;

          // calculate a, mapping from 0 to 1
          var a = (app.relativeAngle - from) * (right_sound - left_sound) / (secondAngle - from) + left_sound;

          // 180 down
          app.player180.set({
            "volume" : app.player180.gainToDb(app.player180.equalPowerScale(1-a)),
            // "volume" : -55,
          });

          //225 up
          app.player225.set({
            "volume" : app.player225.gainToDb(app.player225.equalPowerScale(a)),
            // "volume" : -55,
          });

        }


        if(app.relativeAngle >= 225 && app.relativeAngle <= 270){
          var secondAngle = 270;

          from = secondAngle - 45;
          to = secondAngle;
          left_sound = 0;
          right_sound = 1;

          // calculate a, mapping from 0 to 1
          var a = (app.relativeAngle - from) * (right_sound - left_sound) / (secondAngle - from) + left_sound;

          // 225 down
          app.player225.set({
            "volume" : app.player225.gainToDb(app.player225.equalPowerScale(1-a)),
            // "volume" : -55,
          });

          //270 up
          app.player270.set({
            "volume" : app.player270.gainToDb(app.player270.equalPowerScale(a)),
            // "volume" : -55,
          });

        }


        if(app.relativeAngle >= 270 && app.relativeAngle <= 315){
          var secondAngle = 315;

          from = secondAngle - 45;
          to = secondAngle;
          left_sound = 0;
          right_sound = 1;

          // calculate a, mapping from 0 to 1
          var a = (app.relativeAngle - from) * (right_sound - left_sound) / (secondAngle - from) + left_sound;

          // 270 down
          app.player270.set({
            "volume" : app.player270.gainToDb(app.player270.equalPowerScale(1-a)),
            // "volume" : -55,
          });

          //315 up
          app.player315.set({
            "volume" : app.player315.gainToDb(app.player315.equalPowerScale(a)),
            // "volume" : -55,
          });

        }
        if(app.relativeAngle >= 315 && app.relativeAngle <= 360){
          var secondAngle = 360;

          from = secondAngle - 45;
          to = secondAngle;
          left_sound = 0;
          right_sound = 1;

          // calculate a, mapping from 0 to 1
          var a = (app.relativeAngle - from) * (right_sound - left_sound) / (secondAngle - from) + left_sound;

          // 315 down
          app.player315.set({
            "volume" : app.player315.gainToDb(app.player315.equalPowerScale(1-a)),
            // "volume" : -55,
          });

          //0 up
          app.player0.set({
            "volume" : app.player0.gainToDb(app.player0.equalPowerScale(a)),
            // "volume" : -55,
          });

        }

        console.log("0: ");
        console.log(app.player0.get("volume"));
        console.log("45: ");
        console.log(app.player45.get("volume"));
        console.log("90: ");
        console.log(app.player90.get("volume"));
        console.log("135: ");
        console.log(app.player135.get("volume"));
        console.log("180: ");
        console.log(app.player180.get("volume"));
        console.log("225: ");
        console.log(app.player225.get("volume"));
        console.log("270: ");
        console.log(app.player270.get("volume"));
        console.log("360: ");
        console.log(app.player315.get("volume"));

        console.log("-------------");
        

        
        
        
        
        
        
        









       
       

        output3.innerHTML = "<b>Relative Angle:</b> " + app.relativeAngle;

      }

      app.watchId = navigator.geolocation.watchPosition(success, app.onError, options);
      app.watchIdOrientation = navigator.compass.watchHeading(sucessOrientation, app.onError, optionsOrientation);
    },


    onError: function(err) {
      alert('Something did not work: ' + err);
    },


    //location bearing:
    //from here: http://gis.stackexchange.com/questions/29239/calculate-bearing-between-two-decimal-gps-coordinates
  

    getBearing: function(startLat,startLong,endLat,endLong){
      function radians(n) {
        return n * (Math.PI / 180);
      }
      function degrees(n) {
        return n * (180 / Math.PI);
      }
      startLat = radians(startLat);
      startLong = radians(startLong);
      endLat = radians(endLat);
      endLong = radians(endLong);

      var dLong = endLong - startLong;

      var dPhi = Math.log(Math.tan(endLat/2.0+Math.PI/4.0)/Math.tan(startLat/2.0+Math.PI/4.0));
      if (Math.abs(dLong) > Math.PI){
        if (dLong > 0.0)
           dLong = -(2.0 * Math.PI - dLong);
        else
           dLong = (2.0 * Math.PI + dLong);
      }

      return (degrees(Math.atan2(dLong, dPhi)) + 360.0) % 360.0;
    }



};

/////////////////
//this is window
/////////////////
app.initialize();





