(function() {
  angular
    .module('momento')
    .controller('SignUpController', SignUpController)

  function SignUpController($cordovaGeolocation) {
    const vm = this

    vm.getLocation = function() {
      var posOptions = {
        timeout: 10000,
        enableHighAccuracy: false
      };
      $cordovaGeolocation
        .getCurrentPosition(posOptions)
        .then(function(position) {
          console.log(position);
          var lat = position.coords.latitude
          var long = position.coords.longitude
        }, function(err) {
          // error
          console.log(err);
        });

    }
  }
}());
