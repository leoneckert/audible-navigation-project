var app = {
    
    // Application Constructor
    initialize: function() {
        this.bindEvents();
        /////////////////
        //this is APP
        /////////////////
    },
    watchId: null,

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
      
      function success(position) {
        /////////////////
        //this is window
        /////////////////
        output.innerHTML = position.coords.latitude;
      }
      app.watchId = navigator.geolocation.watchPosition(success, this.onError, options);
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
      alert("You clicked me");
      function onSuccess(position) {
        /////////////////
        //this is Window
        /////////////////
        output2.innerHTML = position.coords.latitude;
      }
      
      navigator.geolocation.getCurrentPosition(onSuccess, this.onError);
    }


};

/////////////////
//this is window
/////////////////
app.initialize();