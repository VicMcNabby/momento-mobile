(function() {

  angular
    .module('momento')
    .config(config)

  function config($stateProvider, $locationProvider, $urlServiceProvider, $httpProvider) {
    $locationProvider.html5Mode(true)

    $stateProvider
      .state('mainmenu', {
        url: '/',
        component: 'mainmenu'
      }).state('activities', {
        url: '/activities',
        component: 'activities'
      }).state('login', {
        url: '/login',
        component: 'login'
      }).state('signup', {
        url: '/signup',
        component: 'signup'
      }).state('restaurants', {
        url: '/restaurants',
        component: 'restaurants'
      }).state('profile', {
        url: '/profile',
        component: 'profile'
      }).state('coupons', {
        url: '/coupons',
        component: 'coupons'
      }).state('advice', {
        url: '/advice',
        component: 'advice'
      }).state('profileform', {
        url: '/profileform',
        component: 'profileform'
      }).state('posts', {
        url: '/posts',
        component: 'posts'
      }).state('myprofile', {
        url: '/myprofile',
        component: 'myprofile'
      }).state('museums', {
        url: '/museums',
        component: 'museums'
      }).state('parks', {
        url: '/parks',
        component: 'parks'
      })

    $urlServiceProvider.rules.otherwise({
      state: 'mainmenu'
    })
  }

}());
