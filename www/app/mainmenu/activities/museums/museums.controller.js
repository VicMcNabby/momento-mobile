(function() {
  angular
    .module('momento')
    .controller('MuseumsController', MuseumsController)

  function MuseumsController($http) {
    const vm = this

    const museumsUrl = 'https://partner-api.groupon.com/deals.json?tsToken=US_AFF_0_201236_212556_0&query=museums&locale=en_US&offset=0&limit=10'

    vm.$onInit = function() {
      $http.get(museumsUrl)
        .then(results => {
          console.log(results);
          vm.museums = results.data.deals
        })
      vm.museums = []
    }
  }
}());
