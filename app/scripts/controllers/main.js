angular.module('movietimeplusApp')
  .controller('MainCtrl', ['$scope', function($scope) {
    //TODO: Inject $location.path(url) to route instead of ng-router
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
