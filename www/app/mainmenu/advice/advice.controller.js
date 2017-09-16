(function() {
  angular
    .module('momento')
    .controller('AdviceController', AdviceController)

  function AdviceController($http) {
    const vm = this

    const postURL = 'http://localhost:3000/api/v1/posts'

    vm.addPost = function() {
      let post = {
        "post": vm.newPost.post
      }

      $http.post(postURL, post)
        .then(result => {})

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
