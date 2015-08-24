angular
  .module('movietimeplusApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ngActivityIndicator'
  ])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/main.html',
        controller: 'MainCtrl'
      })
      .when('/submitted', {
        templateUrl: '/submitted.html',
        controller: 'SubmittedCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
