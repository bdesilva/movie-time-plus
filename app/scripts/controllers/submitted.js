angular.module('movietimeplusApp')
  .controller('SubmittedCtrl', ['$scope', 'ShareDataService', '$activityIndicator', '$log',
    function($scope, ShareDataService, $activityIndicator, $log) {
      $scope.thankyouMessage = '';
      $scope.timeLoggedMessage = '';

      ShareDataService.getData()
        .then(function(result) {
          $scope.thankyouMessage = result.email;
          $scope.timeLoggedMessage = 'You have logged ' + result.timeLogged + ' of work today.';
        })
        .catch(function(error) {
          $log.error(error);
        });
    }
  ]);
