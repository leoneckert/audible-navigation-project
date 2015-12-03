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
          "url" : "js/000.mp3",
          "loop": true,
          // "playbackRate" : (app.compassAngle - 0) * (7 - (-5)) / (360 - 0) + (- 5),
        }).toMaster();

        app.player45 = new Tone.Player({
          "url" : "js/045.mp3",
          "loop": true,
          // "playbackRate" : (app.compassAngle - 0) * (7 - (-5)) / (360 - 0) + (- 5),
        }).toMaster();

        app.player90 = new Tone.Player({
          "url" : "js/090.mp3",
          "loop": true,
          // "playbackRate" : (app.compassAngle - 0) * (7 - (-5)) / (360 - 0) + (- 5),
        }).toMaster();


        app.player135 = new Tone.Player({
          "url" : "js/135.mp3",
          "loop": true,
          // "playbackRate" : (app.compassAngle - 0) * (7 - (-5)) / (360 - 0) + (- 5),
        }).toMaster();

        app.player180 = new Tone.Player({
          "url" : "js/180.mp3",
          "loop": true,
          // "playbackRate" : (app.compassAngle - 0) * (7 - (-5)) / (360 - 0) + (- 5),
        }).toMaster();

        app.player225 = new Tone.Player({
          "url" : "js/225.mp3",
          "loop": true,
          // "playbackRate" : (app.compassAngle - 0) * (7 - (-5)) / (360 - 0) + (- 5),
        }).toMaster();

        app.player270 = new Tone.Player({
          "url" : "js/270.mp3",
          "loop": true,
          // "playbackRate" : (app.compassAngle - 0) * (7 - (-5)) / (360 - 0) + (- 5),
        }).toMaster();

        app.player315 = new Tone.Player({
          "url" : "js/315.mp3",
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
        var dest_lat = 40.732378;
        var dest_lon = -73.991332;
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
        // down
        // from = secondAngle - 45;
        // to = secondAngle;
        // left_sound = 0;
        // right_sound = -55;

        // // up
        // from = secondAngle - 45;
        // to = secondAngle;
        // left_sound = -55;
        // right_sound = 0;

        


        if(app.relativeAngle >= 337.5 && app.relativeAngle <= 360 || app.relativeAngle >= 0 && app.relativeAngle <= 22.5){
          //play 0

          app.player0.set({
            "volume" : 1,
          });
          app.player45.set({
            "volume" : -55,
          });
          app.player90.set({
            "volume" : -55,
          });
          app.player135.set({
            "volume" : -55,
          });
          app.player180.set({
            "volume" : -55,
          });
          app.player225.set({
            "volume" : -55,
          });
          app.player270.set({
            "volume" : -55,
          });
          app.player315.set({
            "volume" : -55,
          });


        }


        if(app.relativeAngle >= 22.5 && app.relativeAngle <= 67.6){
          //play 45

          app.player0.set({
            "volume" : -55,
          });
          app.player45.set({
            "volume" : 1,
          });
          app.player90.set({
            "volume" : -55,
          });
          app.player135.set({
            "volume" : -55,
          });
          app.player180.set({
            "volume" : -55,
          });
          app.player225.set({
            "volume" : -55,
          });
          app.player270.set({
            "volume" : -55,
          });
          app.player315.set({
            "volume" : -55,
          });



        }


        if(app.relativeAngle >= 67.5 && app.relativeAngle <= 112.5){
          //play 90

          app.player0.set({
            "volume" : -55,
          });
          app.player45.set({
            "volume" : -55,
          });
          app.player90.set({
            "volume" : 1,
          });
          app.player135.set({
            "volume" : -55,
          });
          app.player180.set({
            "volume" : -55,
          });
          app.player225.set({
            "volume" : -55,
          });
          app.player270.set({
            "volume" : -55,
          });
          app.player315.set({
            "volume" : -55,
          });

        }


        if(app.relativeAngle >= 112.5 && app.relativeAngle <= 157.5){
          // play 135


          app.player0.set({
            "volume" : -55,
          });
          app.player45.set({
            "volume" : -55,
          });
          app.player90.set({
            "volume" : -55,
          });
          app.player135.set({
            "volume" : 1,
          });
          app.player180.set({
            "volume" : -55,
          });
          app.player225.set({
            "volume" : -55,
          });
          app.player270.set({
            "volume" : -55,
          });
          app.player315.set({
            "volume" : -55,
          });

        }


        if(app.relativeAngle >= 157.5 && app.relativeAngle <= 202.5){
          //play 180


          app.player0.set({
            "volume" : -55,
          });
          app.player45.set({
            "volume" : -55,
          });
          app.player90.set({
            "volume" : -55,
          });
          app.player135.set({
            "volume" : -55,
          });
          app.player180.set({
            "volume" : 1,
          });
          app.player225.set({
            "volume" : -55,
          });
          app.player270.set({
            "volume" : -55,
          });
          app.player315.set({
            "volume" : -55,
          });

        }


        if(app.relativeAngle >= 202.5 && app.relativeAngle <= 247.5){
          //play 225


          app.player0.set({
            "volume" : -55,
          });
          app.player45.set({
            "volume" : -55,
          });
          app.player90.set({
            "volume" : -55,
          });
          app.player135.set({
            "volume" : -55,
          });
          app.player180.set({
            "volume" : -55,
          });
          app.player225.set({
            "volume" : 1,
          });
          app.player270.set({
            "volume" : -55,
          });
          app.player315.set({
            "volume" : -55,
          });

        }


        if(app.relativeAngle >= 247.5 && app.relativeAngle <= 292.5){
          //play 270


          app.player0.set({
            "volume" : -55,
          });
          app.player45.set({
            "volume" : -55,
          });
          app.player90.set({
            "volume" : -55,
          });
          app.player135.set({
            "volume" : -55,
          });
          app.player180.set({
            "volume" : -55,
          });
          app.player225.set({
            "volume" : -55,
          });
          app.player270.set({
            "volume" : 1,
          });
          app.player315.set({
            "volume" : -55,
          });

        }
        if(app.relativeAngle >= 292.5 && app.relativeAngle <= 337.5){
          //play 315



          app.player0.set({
            "volume" : -55,
          });
          app.player45.set({
            "volume" : -55,
          });
          app.player90.set({
            "volume" : -55,
          });
          app.player135.set({
            "volume" : -55,
          });
          app.player180.set({
            "volume" : -55,
          });
          app.player225.set({
            "volume" : -55,
          });
          app.player270.set({
            "volume" : -55,
          });
          app.player315.set({
            "volume" : 1,
          });
        }









       
       

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





