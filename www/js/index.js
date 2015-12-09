var app = {

    //variable we need:
    watchId: null,
    watchIdOrientation: null,
    compassAngle: 0,
    compassAngle_tilt: 0,
    gpsAngle: 0,
    relativeAngle:0,
    relativeAngle_tilt:0,
    player0: null,
    player45: null,
    player90: null,
    player135: null,
    player180: null,
    player225: null,
    player270: null,
    player315: null,
    //in relation to ITP:
    //north: 40.741564, -73.993177
    //east: 40.729109, -73.973264
    //south: 40.717466, -73.994421
    //west: 40.729825, -74.031797
    // between itp and union, grace church: 40.731994, -73.991089
    dest_lat: 51.484902,
    dest_lon: -0.035803,
    destination: "london",
    show_info: false,
    show_destinations: false,
    


    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    
    // Bind Event Listeners
    // any listeners created in here will be constantly listening. 
    bindEvents: function() {
        // device ready and buttons:
       
        // document.getElementById("select_destination").addEventListener('click', app.show_maps, false);
        // document.getElementById("back_to_compass").addEventListener('click', app.show_compass, false);

        // document.getElementById("back_to_compass").style.display = "none";
        // document.getElementById("destinations").style.display = "none";
        
        document.addEventListener('deviceready', this.onDeviceReady, false);
        

        document.getElementById("itp").addEventListener('click', app.itp, false);
        document.getElementById("timessquare").addEventListener('click', app.timessquare, false);
        document.getElementById("brooklyn").addEventListener('click', app.brooklyn, false);
        document.getElementById("philadelphia").addEventListener('click', app.philadelphia, false);
        document.getElementById("losangeles").addEventListener('click', app.losangeles, false);
        document.getElementById("london").addEventListener('click', app.london, false)
        document.getElementById("lima").addEventListener('click', app.lima, false);
        document.getElementById("vancouver").addEventListener('click', app.vancouver, false);
        document.getElementById("barcelona").addEventListener('click', app.barcelona, false);



        document.getElementById("hide_show_info").addEventListener('click', app.hide_show_info, false);

        document.getElementById("change_destination").addEventListener('click', app.change_destination, false);

        
        
        
        // document.addEventListener('deviceready', this.initialize_music, false);
       
        //i dont know if it better to start the songs all in the deviceready function...no, it just keeps breaking
        // load all tracks:
        app.player0 = new Tone.Player({
          "url" : "js/yesterday/000.mp3",
          "loop": true,
        }).toMaster();

        app.player45 = new Tone.Player({
          "url" : "js/yesterday/045.mp3",
          "loop": true,
        }).toMaster();

        app.player90 = new Tone.Player({
          "url" : "js/yesterday/090.mp3",
          "loop": true,
        }).toMaster();

        app.player135 = new Tone.Player({
          "url" : "js/yesterday/135.mp3",
          "loop": true,
        }).toMaster();

        app.player180 = new Tone.Player({
          "url" : "js/yesterday/180.mp3",
          "loop": true,
        }).toMaster();

        app.player225 = new Tone.Player({
          "url" : "js/yesterday/225.mp3",
          "loop": true,
        }).toMaster();

        app.player270 = new Tone.Player({
          "url" : "js/yesterday/270.mp3",
          "loop": true,
        }).toMaster();

        app.player315 = new Tone.Player({
          "url" : "js/yesterday/315.mp3",
          "loop": true,
        }).toMaster();

        //start buffer and songs:
        Tone.Buffer.onload = function(){
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
        

        var options = { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true };
        var optionsOrientation = { frequency: 100};
          
        function success(position) {
            /////////////////
            //this is window
            /////////////////
            output.innerHTML =  "<b>Latitude:</b> " + position.coords.latitude + "<br><b>Longitude:</b> " + position.coords.longitude;

            output1.innerHTML = "<b>Destination bearing:</b> " + String(app.getBearing(position.coords.latitude, position.coords.longitude, app.dest_lat, app.dest_lon));
            app.gpsAngle = app.getBearing(position.coords.latitude, position.coords.longitude, app.dest_lat, app.dest_lon);
        }

        function sucessOrientation(heading) { 
            // output2.innerHTML = "nothing"
            //the follwoing lines are to always add 90 degrees as the app will be used in landscape mode
            var tempAngle = heading.magneticHeading + 90;
            if(tempAngle >= 360){
                tempAngle = tempAngle - 360;
            }

            app.compassAngle_tilt = tempAngle;
            output2.innerHTML = "<b>Compass:</b> " + app.compassAngle_tilt;
            // output2.innerHTML = "<b>Compass:</b> " + heading.magneticHeading;
            app.compassAngle = heading.magneticHeading;


            if(app.gpsAngle >= app.compassAngle_tilt){
                app.relativeAngle = app.gpsAngle - app.compassAngle_tilt;
            }else{
                app.relativeAngle = (app.gpsAngle - app.compassAngle_tilt)+360;
            }

            output3.innerHTML = "<b>Relative Angle:</b> " + app.relativeAngle;
           
            app.angleToVolume();
  
  
        }

        app.watchId = navigator.geolocation.watchPosition(success, app.onError, options);
        app.watchIdOrientation = navigator.compass.watchHeading(sucessOrientation, app.onError, optionsOrientation);
        
    },

    // show_maps: function(){
    //     document.getElementById("output").style.display = "none";
    //     document.getElementById("output1").style.display = "none";
    //     document.getElementById("output2").style.display = "none";
    //     document.getElementById("output3").style.display = "none";
    //     document.getElementById("canvas_here").style.display = "none";
    //     document.getElementById("select_destination").style.display = "none";

    //     document.getElementById("destinations").style.display = "block";
    //     document.getElementById("back_to_compass").style.display = "block";        
    // },

    // show_compass: function(){
    //     document.getElementById("output").style.display = "block";
    //     document.getElementById("output1").style.display = "block";
    //     document.getElementById("output2").style.display = "block";
    //     document.getElementById("output3").style.display = "block";
    //     document.getElementById("canvas_here").style.display = "block";
    //     document.getElementById("select_destination").style.display = "block";

    //     document.getElementById("back_to_compass").style.display = "none";
    //     document.getElementById("destinations").style.display = "none";
    // },

    // selectDestination: function(){

    // },


    angleToVolume: function(){
            //all sound to zero
            var from = 0;
            var to = 0;
            var left_sound = 0;
            var right_sound = 1;
            

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
                

                // calculate a, mapping from 0 to 1
                var a = (app.relativeAngle - from) * (right_sound - left_sound) / (secondAngle - from) + left_sound;

                // 0 down
                app.player0.set({
                    "volume" : app.player0.gainToDb(app.player0.equalPowerScale(1-a)),
                });

                //45 up
                app.player45.set({
                    "volume" : app.player45.gainToDb(app.player45.equalPowerScale(a)),
                });
            }


            if(app.relativeAngle >= 45 && app.relativeAngle <= 90){
                var secondAngle = 90;
                  
                from = secondAngle - 45;
                to = secondAngle;
        

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
         
                // calculate a, mapping from 0 to 1
                var a = (app.relativeAngle - from) * (right_sound - left_sound) / (secondAngle - from) + left_sound;

                // 90 down
                app.player90.set({
                    "volume" : app.player90.gainToDb(app.player90.equalPowerScale(1-a)) - (app.relativeAngle-90) * 0.15,
                    // "volume" : -55,
                });

                //135 up
                app.player135.set({
                    "volume" : app.player135.gainToDb(app.player135.equalPowerScale(a)) - (app.relativeAngle-90) * 0.15,
                    // "volume" : -55,
                });

            }


            if(app.relativeAngle >= 135 && app.relativeAngle <= 180){
                var secondAngle = 180;

                from = secondAngle - 45;
                to = secondAngle;
              

                  // calculate a, mapping from 0 to 1
                var a = (app.relativeAngle - from) * (right_sound - left_sound) / (secondAngle - from) + left_sound;

                  // 135 down
                app.player135.set({
                    "volume" : app.player135.gainToDb(app.player135.equalPowerScale(1-a)) - (app.relativeAngle-90) * 0.15,
                    // "volume" : -55,
                });

                //180 up
                app.player180.set({
                    "volume" : app.player180.gainToDb(app.player180.equalPowerScale(a)) - (app.relativeAngle-90) * 0.15,
                    // "volume" : -55,
                });

            }


            if(app.relativeAngle >= 180 && app.relativeAngle <= 225){
                var secondAngle = 225;

                from = secondAngle - 45;
                to = secondAngle;
         
                // calculate a, mapping from 0 to 1
                var a = (app.relativeAngle - from) * (right_sound - left_sound) / (secondAngle - from) + left_sound;

                // 180 down
                app.player180.set({
                    "volume" : app.player180.gainToDb(app.player180.equalPowerScale(1-a)) - ((90 - (app.relativeAngle-180)) * 0.15),
                    // "volume" : -55,
                });

                //225 up
                app.player225.set({
                    "volume" : app.player225.gainToDb(app.player225.equalPowerScale(a))  - ((90 - (app.relativeAngle-180)) * 0.15),
                    // "volume" : -55,
                });

            }


            if(app.relativeAngle >= 225 && app.relativeAngle <= 270){
                var secondAngle = 270;

                from = secondAngle - 45;
                to = secondAngle;


                // calculate a, mapping from 0 to 1
                var a = (app.relativeAngle - from) * (right_sound - left_sound) / (secondAngle - from) + left_sound;

                // 225 down
                app.player225.set({
                    "volume" : app.player225.gainToDb(app.player225.equalPowerScale(1-a))  - ((90 - (app.relativeAngle-180)) * 0.15),
                    // "volume" : -55,
                 });

                //270 up
                app.player270.set({
                    "volume" : app.player270.gainToDb(app.player270.equalPowerScale(a))  - ((90 - (app.relativeAngle-180)) * 0.15),
                    // "volume" : -55,
                });

            }


            if(app.relativeAngle >= 270 && app.relativeAngle <= 315){
                var secondAngle = 315;

                from = secondAngle - 45;
                to = secondAngle;


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

            // console.log("0: ");
            // console.log(app.player0.get("volume"));
            // console.log("45: ");
            // console.log(app.player45.get("volume"));
            // console.log("90: ");
            // console.log(app.player90.get("volume"));
            // console.log("135: ");
            // console.log(app.player135.get("volume"));
            // console.log("180: ");
            // console.log(app.player180.get("volume"));
            // console.log("225: ");
            // console.log(app.player225.get("volume"));
            // console.log("270: ");
            // console.log(app.player270.get("volume"));
            // console.log("360: ");
            // console.log(app.player315.get("volume"));

            console.log("-------------");
    },

    

    itp: function(){
        app.dest_lat = 40.729543;
        app.dest_lon = -73.993594;
        app.destination = "ITP, New York";
        return false;
    },

    timessquare: function(){
        app.dest_lat = 40.758765;
        app.dest_lon = -73.985174;
        app.destination = "Times Square";
        return false;
    },

    brooklyn: function(){
        app.dest_lat = 40.699242;
        app.dest_lon = -73.922103;
        app.destination = "Home, Brooklyn";
        return false;
    },

    philadelphia: function(){
        app.dest_lat = 39.960999; 
        app.dest_lon = -75.169540;
        app.destination = "Philadelphia";
        return false;
    },

    losangeles: function(){
        app.dest_lat = 34.037822;
        app.dest_lon = -118.181056;
        app.destination = "Los Angeles";
        return false;
    },

    london: function(){
        app.dest_lat = 51.484902;
        app.dest_lon = -0.035803;
        app.destination = "London";
        return false;
    },

    lima: function(){
        app.dest_lat = -12.048459; 
        app.dest_lon = -77.042268;
        app.destination = "Lima";
        return false;
    },

    vancouver: function(){
        app.dest_lat = 49.278060; 
        app.dest_lon = -123.117392;
        app.destination = "Vancouver";
        return false;
    },

    barcelona: function(){
        app.dest_lat = 41.389617; 
        app.dest_lon = 2.186188;
        app.destination = "Barcelona";
        return false;
    },







    hide_show_info: function(){
        if(app.show_info == true){
            document.getElementById("info").style.display = "none";
            app.show_info = false;
        }else{
            document.getElementById("info").style.display = "block";
            app.show_info = true;
        }
        return false;

    },

    change_destination: function(){
        if(app.show_destinations == true){
            document.getElementById("destinations").style.display = "none";
            app.show_destinations = false;
        }else{
            document.getElementById("destinations").style.display = "block";
            app.show_destinations = true;
        }
        return false;

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
                if (dLong > 0.0){
                    dLong = -(2.0 * Math.PI - dLong);
                }else{
                    dLong = (2.0 * Math.PI + dLong);
                }
            }

            return (degrees(Math.atan2(dLong, dPhi)) + 360.0) % 360.0;
    }


};

/////////////////
//this is window
/////////////////
app.initialize();




// --------------------------


// //googlemaps:

// var app = {
    
//     // Application Constructor
//     initialize: function() {
//         this.bindEvents();
//         /////////////////
//         //this is APP
//         /////////////////
//     },
//     watchId: null,
//     watchIdOrientation: null,

//     // Bind Event Listeners
//     // any listeners created in here will be constantly listening. 
//     bindEvents: function() {
//         /////////////////
//         //this is APP
//         /////////////////
//         document.addEventListener('deviceready', this.onDeviceReady, false);
//         findme.addEventListener('click', this.handleClick, false);
//     },
    
//     // The scope of 'this' is the event. In order to call the 'receivedEvent'
//     // function, we must explicitly call 'app.receivedEvent(...);'
//     onDeviceReady: function() {
      
//       function success(location) {
//         var msg = ["Current your location:\n",
//           "latitude:" + location.latLng.lat,
//           "longitude:" + location.latLng.lng,
//           "speed:" + location.speed,
//           "time:" + location.time,
//           "bearing:" + location.bearing].join("\n");

//         map.addMarker({
//           'position': location.latLng,
//           'title': msg
//         }, function(marker) {
//           marker.showInfoWindow();
//         });
//       }

    
//       map.getMyLocation(success, app.onError);
//     },


//     onError: function(err) {
//       alert('you FAILED! DIE!' + err);
//     },


//     handleClick: function() {
//       /////////////////
//       //this is Button
//       /////////////////
//       app.readLocation();
//     },


//     readLocation: function() {
//       /////////////////
//       //this is APP
//       /////////////////
//       // function onSuccess(location) {
//       //   var msg = ["Current your location:\n",
//       //     "latitude:" + location.latLng.lat,
//       //     "longitude:" + location.latLng.lng,
//       //     "speed:" + location.speed,
//       //     "time:" + location.time,
//       //     "bearing:" + location.bearing].join("\n");

//       //   map.addMarker({
//       //     'position': location.latLng,
//       //     'title': msg
//       //   }, function(marker) {
//       //     marker.showInfoWindow();
//       //   });
//       // }

      
//       // navigator.geolocation.getCurrentPosition(onSuccess, app.onError);

//       // map.getMyLocation(onSuccess, app.onError);
//     }


// };

// /////////////////
// //this is window
// /////////////////
// app.initialize();


