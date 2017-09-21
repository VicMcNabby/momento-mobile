(function() {
  angular
    .module('momento')
    .controller('PostsController', PostsController)

  function PostsController($http) {
    const vm = this

    const postsURL = 'http://localhost:3000/api/v1/posts'
    const commentURL = 'http://localhost:3000/api/v1/comments'

    vm.$onInit = function() {
      $http.get(postsURL)
        .then(results => {
          console.log(results);
          vm.posts = results.data

        })
      vm.posts = [];
    };

    vm.getID = function(post) {

      // console.log('post id', post.id);
      let postID = post.id

      $http.get(`${commentURL}/${postID}`)
        .then(result => {
          // console.log(result.data);
          vm.comments = result.data
        })
      vm.comments = []
    }

    vm.postComment = function(post) {

      let data = {
        "comment": vm.newComment.comment,
        "posts_id": post.id
      }

      vm.comments.push({
        comment: vm.newComment.comment
      })
      console.log(data);
      $http.post(commentURL, data, {
          headers: {
            "content-type": "application/json"
          }
        })
        .then(result => {
          console.log("sent");
        })

      // console.log(data, post.id);
      vm.newComment = {
        comment: ''
      }
    }

  }
})();
