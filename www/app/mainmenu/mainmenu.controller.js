(function() {
  angular
    .module('momento')
    .controller('MainMenuController', MainMenuController)

  function MainMenuController($cordovaSms) {
    const vm = this






    document.addEventListener("deviceready", function() {

      var options = {
        replaceLineBreaks: false, // true to replace \n by a new line, false by default
        android: {
          intent: '' // send SMS with the native android SMS messaging
          //intent: '' // send SMS without open any other app
          //intent: 'INTENT' // send SMS inside a default SMS app
        }
      };

      vm.sendText = function() {

        $cordovaSms
          .send('7035173476', 'SMS content', options)
          .then(function() {
            alert('success')
            // Success! SMS was sent
          }, function(error) {
            alert('error');
            // An error occurred
          });
      }
    });



  }
}());
