(function() {
  angular
    .module('momento')
    .controller('LogInController', LogInController)

  function LogInController($http, $ionicLoading) {
    const vm = this

    const loginUrl = "http://localhost:3000/api/v1/auth/login"

    vm.$onInit = function() {

    }

    vm.loginUser = function() {

      let data = {
        "email": vm.login.email,
        "password": vm.login.password
      }

      console.log("data: ", data);

      $http.post(loginUrl, data, {
          headers: {
            "content-type": "application/json"
          }
        })
        .then(result => {
          localStorage.token = result.data.token;
          localStorage.user_id = result.data.id;
          console.log("it worked ", result);
          ///////////////////////////////////
          $ionicLoading.show({
            template: 'Logged In!',
            noBackdrop: true,
            duration: 2000
          });
          window.location.href = '/';
        }).catch(err => {
          console.log('error ', err);
          ////////////////////////////////////////
          $ionicLoading.show({
            template: 'Error!',
            noBackdrop: true,
            duration: 2000
          });
        })



      // vm.login = {
      //   email: '',
      //   password: ''
      // }
    }
  }
}());
