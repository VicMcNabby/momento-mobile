(function() {
  angular
    .module('momento')
    .controller('AdviceController', AdviceController)


  function AdviceController($http) {
    const vm = this

    const postURL = 'http://localhost:3000/api/v1/posts'

    vm.addPost = function() {

      let info = {
        "post": vm.newPost.post
      }

      console.log(info);

      $http.post(postURL, info, {
          headers: {
            "content-type": "application/json"
          }
        })
        .then(result => {
          console.log('posted');
        })

      vm.newPost = {
        post: ''
      }
    }

    vm.clearPost = function() {
      vm.newPost = {
        post: ''
      }
    }


  }
}());
