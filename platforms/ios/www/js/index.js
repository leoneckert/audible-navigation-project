var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },


    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },


    onDeviceReady: function() {
        var b = document.getElementById('button');
        var o = document.getElementById('output');
       
        b.onclick = function() {
            navigator.geolocation.getCurrentPosition(onSuccess, onError);

            o.innerHTML = "i registered the click but navigator doesnt seems to work";
        };
        
    },

    var onSuccess = function(position) {
        alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');
    }






};

app.initialize();



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