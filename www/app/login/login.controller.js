(function() {
  angular
    .module('momento')
    .controller('LogInController', LogInController)

  function LogInController($http) {
    const vm = this

    const loginUrl = "http://localhost:3000/api/v1/auth/login"

    vm.loginUser = function() {

      let data = {
        "email": vm.login.email,
        "password": vm.login.password
      }

      console.log("data: ", data);

      $http.post(loginUrl, data)
        .then(result => {
          localStorage.token = result.token;
          localStorage.user_id = result.id;
          console.log("it worked ", result);
        }).catch(err => {
          console.log('error ', err);
        })

      // vm.login = {
      //   email: '',
      //   password: ''
      // }
    }
  }
}());
