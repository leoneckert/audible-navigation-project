var app = {
    
    // Application Constructor
    initialize: function() {
        this.bindEvents();
        console.log("in initialize this is ");
        console.log(this);
    },
    watchId: null,

    // Bind Event Listeners
    // any listeners created in here will be constantly listening. 
    bindEvents: function() {
        console.log("in bind events this is ");
        console.log(this);
        document.addEventListener('deviceready', this.onDeviceReady, false);
        button.addEventListener('click', this.handleClick, false);
    },
    
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
      console.log("in onDeviceReady this is ");
      console.log(this);
      var options = { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true };
      
      function success(position) {
        //this is window
        output.innerHTML = position.coords.latitude;
      }
      app.watchId = navigator.geolocation.watchPosition(success, this.onError, options);
    },


    onError: function(err) {
      console.log("in onError this is ");
      console.log(this);
      alert('you FAILED! DIE!' + err);
    },


    handleClick: function() {
      //would "this" refer to button here?
      console.log("in handleClick this is ");
      console.log(this);
      app.readLocation();
    },


    readLocation: function() {
      console.log("in readLocation this is ");
      console.log(this);
      alert("You clicked me");
      function onSuccess(position) {
        console.log("in readLocation>onSuccess this is ");
        console.log(this);
        output2.innerHTML = position.coords.latitude;
      }
      
      navigator.geolocation.getCurrentPosition(onSuccess, this.onError);
    }


};

console.log("outside this is ");
console.log(this);
app.initialize();