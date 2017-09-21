(function() {
  angular
    .module('momento')
    .controller('ProfileFormController', ProfileFormController)

  function ProfileFormController($http) {
    const vm = this

    let myprofileUrl = "http://localhost:3000/api/v1/moms";
    let momId = localStorage.user_id;

    vm.$onInit = function() {
      $http.get(`${myprofileUrl}/${momId}`)
        .then(result => {
          console.log(result);
          vm.mom = result.data
        })
      vm.mom = []
    }


  }
}());
