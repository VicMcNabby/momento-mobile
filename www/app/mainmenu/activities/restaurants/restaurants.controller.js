(function() {
  angular
    .module('momento')
    .controller('RestaurantsController', RestaurantsController)

  function RestaurantsController($http) {
    const vm = this

    const restaurantsUrl = "https://api.yelp.com/v3/businesses/search?location=80020&term=kids+menu"

    var headers = {
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization": "Bearer B2XcGqVxSNOqENXbqcuPn2yB7qmfdd1kROC9KmOaWHJH4GKUcU8nzebJk-8t5nfGJuKnQPYIUOrydv66NX4mcOZurNWk5WQ_jNNWibgokz0HN2_jS8MJexauYXe0WXYx"
    }

    return $http({
      method: "GET",
      headers: headers,
      url: restaurantsUrl
    }).success(result => {
      console.log(result);
    })

  }
}());
