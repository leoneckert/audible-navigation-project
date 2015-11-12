var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    watchId: null,

    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        button.addEventListener('click', this.handleClick, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
      var options = { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true };
        function success(position) {
          output.innerHTML = position.coords.latitude;
        }

         app.watchId = navigator.geolocation.watchPosition(success,
                                                  this.onError,
                                                  options);
    },

     onError: function(err) {
      alert('you FAILED! DIE!' + err);
    },

    handleClick: function() {
      alert("You clicked me");
      app.readLocation();
    },

    readLocation: function() {
      function onSuccess(position) {
        output.innerHTML = position.coords.latitude;
      }

      navigator.geolocation.getCurrentPosition(onSuccess, this.onError);
    }
};

app.initialize();