(function() {
  angular
    .module('momento')
    .controller('PostsController', PostsController)

  function PostsController($http) {
    const vm = this

    const postsURL = 'http://localhost:3000/api/v1/posts'

    vm.$onInit = function() {
      $http.get(postsURL)
        .then(results => {
          console.log(results);
          vm.posts = results.data

        })
      vm.posts = [];
    };

    // vm.getID = function(post) {
    //   post.show = true;
    //   post.hide = true;
    //   // console.log('post id', post.id);
    //   let postID = post.id
    //   // $http.get(`${postsURL}/${postID}`)
    //   //   .then(result => {
    //   //     console.log(result);
    //   //   })
    //   const commentURL = 'http://localhost:3000/api/v1/comments'
    //   $http.get(`${commentURL}/${postID}`)
    //     .then(result => {
    //       console.log(result.data);
    //       vm.comments = result.data
    //     })
    // }

  }
}());
