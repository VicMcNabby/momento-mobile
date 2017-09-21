(function() {
  angular
    .module('momento')
    .controller('ParksController', ParksController)

  function ParksController($http) {
    const vm = this

    const parksUrl = "https://partner-api.groupon.com/deals.json?tsToken=US_AFF_0_201236_212556_0&query=parks&locale=en_US&offset=0&limit=10"

    vm.$onInit = function() {
      $http.get(parksUrl)
        .then(result => {
          console.log("result");
          vm.parks = result.data.deals
        })
      vm.parks = []
    }
  }
}());
