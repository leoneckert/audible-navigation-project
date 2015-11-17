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


    // Bind Event Listeners
    // any listeners created in here will be constantly listening. 
    bindEvents: function() {
        /////////////////
        //this is APP
        /////////////////
        document.addEventListener('deviceready', this.onDeviceReady, false);
        button.addEventListener('click', this.handleClick, false);
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
                            // "<br>Altitude: " + position.coords.altitude +
                            // "<br>Accuracy: " + position.coords.accuracy +
                            // "<br>Altitude Accuracy: " + position.coords.altitudeAccuracy +
                            // "<br>Heading: " + position.coords.heading +
                            // "<br>Speed: " + position.coords.speed +
                            // "<br>Timestamp: " + position.timestamp;
        //in relation to ITP:
        //north: 40.741564, -73.993177
        //east: 40.729109, -73.973264
        //south: 40.717466, -73.994421
        // between itp and union: 40.732378, -73.991332
        output1.innerHTML = String(app.getBearing(position.coords.latitude, position.coords.longitude, 40.732378, -73.991332));
        app.gpsAngle = app.getBearing(position.coords.latitude, position.coords.longitude, 40.732378, -73.991332);
      }

      function sucessOrientation(heading) { 
        // output2.innerHTML = "nothing";
        output2.innerHTML = "<b>Compass:</b> " + heading.magneticHeading;
        app.compassAngle = heading.magneticHeading;
        // output3.innerHTML = app.angle;

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
//       function onSuccess(location) {
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

      
//       navigator.geolocation.getCurrentPosition(onSuccess, app.onError);

//       map.getMyLocation(onSuccess, app.onError);
//     }


// };

// /////////////////
// //this is window
// /////////////////
// app.initialize();


