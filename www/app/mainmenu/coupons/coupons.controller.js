(function() {
  angular
    .module('momento')
    .controller('CouponsController', CouponsController)

  function CouponsController($http) {
    const vm = this

    const couponsUrl = 'https://partner-api.groupon.com/deals.json?tsToken=US_AFF_0_201236_212556_0&query=kids&locale=en_US&offset=0&limit=10'

    vm.$onInit = function() {
      $http.get(couponsUrl)
        .then(results => {
          console.log(results);
          vm.coupons = results.data.deals
        })
      vm.coupons = []
    }
  }
}());
