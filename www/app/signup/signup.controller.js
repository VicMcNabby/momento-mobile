(function() {
  angular
    .module('momento')
    .controller('SignUpController', SignUpController)

  function SignUpController($cordovaGeolocation, $http, $ionicLoading) {
    const vm = this

    vm.signUp = function() {
      $ionicLoading.show({
        template: "Loading...",
        noBackdrop: true
      });
      const posOptions = {
        timeout: 10000,
        enableHighAccuracy: false
      };
      $cordovaGeolocation
        .getCurrentPosition(posOptions)
        .then(function(position) {
          const lat = position.coords.latitude
          const long = position.coords.longitude
          // change migration to accept lat and long
          const localAPI = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=AIzaSyDIWoS_XxOXXfilJdu1gwuD3c6P4nOd-0Y`
          $http.get(localAPI)
            .then(result => {
              console.log(result);
            })
          console.log("lat: ", lat);
          console.log("long: ", long);
          $ionicLoading.hide()
        }, function(err) {
          // error
          console.log(err);
          $ionicLoading.hide()
        });
      ////////////// Relocate //////////////
    }

  }
}());
