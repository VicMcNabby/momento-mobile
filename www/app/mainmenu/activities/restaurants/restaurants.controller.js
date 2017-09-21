(function() {
  angular
    .module('momento')
    .controller('RestaurantsController', RestaurantsController)

  function RestaurantsController($http) {
    const vm = this

    const restaurantsUrl = "https://partner-api.groupon.com/deals.json?tsToken=US_AFF_0_201236_212556_0&query=kids+restaurants&locale=en_US&offset=0&limit=10"

    vm.$onInit = function() {
      $http.get(restaurantsUrl)
        .then(result => {
          console.log("result");
          vm.restaurants = result.data.deals
        })
      vm.restaurants = []
    }
  }
}());
