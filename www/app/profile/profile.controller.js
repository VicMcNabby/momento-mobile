(function() {
  angular
    .module('momento')
    .controller('ProfileController', ProfileController)

  function ProfileController($http, $ionicLoading) {
    const vm = this

    const momsURL = 'http://localhost:3000/api/v1/mom'
    const momId = localStorage.user_id

    vm.$onInit = function() {
      $ionicLoading.show({
        template: "Finding Moms in your area...",
        noBackdrop: true
      });
      $http.get(`${momsURL}/${momId}`)
        .then(results => {
          console.log(results);
          vm.moms = results.data
          $ionicLoading.hide()
        })
      vm.moms = [];
    };

    vm.sayHi = function(mom) {
      console.log(mom);
      $ionicLoading.show({
        template: "Message Sent!",
        noBackdrop: true,
        duration: 2000
      });
    }

  }
}());
