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

    // Bind Event Listeners
    // any listeners created in here will be constantly listening. 
    bindEvents: function() {
        /////////////////
        //this is APP
        /////////////////
        document.addEventListener('deviceready', this.onDeviceReady, false);
        button.addEventListener('click', this.handleClick, false);
    },
    
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
        output.innerHTML =  "Latitude: " + position.coords.latitude + 
                            "<br>Longitude: " + position.coords.longitude +
                            "<br>Altitude: " + position.coords.altitude +
                            "<br>Accuracy: " + position.coords.accuracy +
                            "<br>Altitude Accuracy: " + position.coords.altitudeAccuracy +
                            "<br>Heading: " + position.coords.heading +
                            "<br>Speed: " + position.coords.speed +
                            "<br>Timestamp: " + position.timestamp;
      }

      function sucessOrientation(heading) { 
        // output2.innerHTML = "nothing";
        output2.innerHTML = heading.magneticHeading;
      }

      app.watchId = navigator.geolocation.watchPosition(success, app.onError, options);
      app.watchIdOrientation = navigator.compass.watchHeading(sucessOrientation, app.onError, optionsOrientation);
    },


    onError: function(err) {
      alert('you FAILED! DIE!' + err);
    },


    handleClick: function() {
      /////////////////
      //this is Button
      /////////////////
      app.readLocation();
    },


    readLocation: function() {
      /////////////////
      //this is APP
      /////////////////
      function onSuccess(position) {
        /////////////////
        //this is Window
        /////////////////
        output.innerHTML = position.coords.latitude;
      }
      function sucessOrientation(heading) { 
        // output2.innerHTML = "nothing";
        output2.innerHTML = heading.magneticHeading;
      }
      
      navigator.geolocation.getCurrentPosition(onSuccess, app.onError);
      navigator.compass.getCurrentHeading(sucessOrientation, app.onError);
    }


};

/////////////////
//this is window
/////////////////
app.initialize();