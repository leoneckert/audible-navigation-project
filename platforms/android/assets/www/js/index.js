// var app = {
//     // Application Constructor
//     initialize: function() {
//         this.bindEvents();
//     },


//     bindEvents: function() {
//         document.addEventListener('deviceready', this.onDeviceReady, false);
//         var b = document.getElementById('button');
//         b.addEventListener("click", this.getLocation, false)
//     },

    

//     onDeviceReady: function() {
//         var b = document.getElementById('button');
//         var o = document.getElementById('output');
       
//         b.onclick = function() {
//             navigator.geolocation.getCurrentPosition(this.onSuccess, this.onError);
//             o.innerHTML = "i registered the click but navigator doesnt seems to work";
//         };
        
//     },

//     var onSuccess = function(position) {
//         alert('Latitude: '          + position.coords.latitude          + '\n' +
//               'Longitude: '         + position.coords.longitude         + '\n' +
//               'Altitude: '          + position.coords.altitude          + '\n' +
//               'Accuracy: '          + position.coords.accuracy          + '\n' +
//               'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
//               'Heading: '           + position.coords.heading           + '\n' +
//               'Speed: '             + position.coords.speed             + '\n' +
//               'Timestamp: '         + position.timestamp                + '\n');
//     },

//     function onError(error) {
//         alert('code: '    + error.code    + '\n' +
//               'message: ' + error.message + '\n');
//     }



// };

// app.initialize();



// // onSuccess Callback
// // This method accepts a Position object, which contains the
// // current GPS coordinates
// //
// // var onSuccess = function(position) {
// //     alert('Latitude: '          + position.coords.latitude          + '\n' +
// //           'Longitude: '         + position.coords.longitude         + '\n' +
// //           'Altitude: '          + position.coords.altitude          + '\n' +
// //           'Accuracy: '          + position.coords.accuracy          + '\n' +
// //           'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
// //           'Heading: '           + position.coords.heading           + '\n' +
// //           'Speed: '             + position.coords.speed             + '\n' +
// //           'Timestamp: '         + position.timestamp                + '\n');
// // };

// // // onError Callback receives a PositionError object
// // //
// // function onError(error) {
// //     alert('code: '    + error.code    + '\n' +
// //           'message: ' + error.message + '\n');
// // }

// // navigator.geolocation.getCurrentPosition(onSuccess, onError);



// // var el = document.getElementById('module');

// // el.onclick = function() {
// //     console.log('Click just happened');
// // };


// // function onSuccess(position) {
// //     var element = document.getElementById('geolocation');
// //     element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
// //                         'Longitude: ' + position.coords.longitude     + '<br />' +
// //                         '<hr />'      + element.innerHTML;
// // }

// // // onError Callback receives a PositionError object
// // //
// // function onError(error) {
// //     alert('code: '    + error.code    + '\n' +
// //           'message: ' + error.message + '\n');
// // }

// // // Options: throw an error if no update is received every 30 seconds.
// // //
// // var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { timeout: 30000 });

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