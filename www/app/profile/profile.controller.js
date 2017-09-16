(function() {
  angular
    .module('momento')
    .controller('ProfileController', ProfileController)

  function ProfileController($http) {
    const vm = this

    const momsURL = 'http://localhost:3000/api/v1/moms'

    vm.$onInit = function() {
      $http.get(momsURL)
        .then(results => {
          console.log(results);
          vm.moms = results.data

        })
      vm.moms = [];
    };

    vm.getID = function(mom) {
      console.log(mom);
      console.log('yoooo');
    }

  }
}());
