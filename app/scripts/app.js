angular
  .module('movietimeplusApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .controller('MainCtrl', ['$scope', '$location', function($scope, $location) {
    //TODO: Inject $location.path(url) to route instead of ng-router
    $location.path('views/main.html');
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
  // .config(['$routeProvider', function ($routeProvider) {
  //   $routeProvider
  //     .when('/', {
  //       templateUrl: 'views/main.html',
  //       controller: 'MainCtrl'
  //     })
  //     .when('/about', {
  //       templateUrl: 'views/submitted.html',
  //       controller: 'AboutCtrl'
  //     })
  //     .otherwise({
  //       redirectTo: '/'
  //     });
  // }]);
