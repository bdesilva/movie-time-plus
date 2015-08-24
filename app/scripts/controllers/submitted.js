angular.module('movietimeplusApp')
  .controller('SubmittedCtrl', ['$scope', 'ShareDataService', '$activityIndicator', '$log', '$location',
    function($scope, ShareDataService, $activityIndicator, $log, $location) {
      //Variables and Initialization
      $scope.thankyouMessage = '';
      $scope.timeLoggedMessage = '';
      $scope.message = '';
      $scope.workType = 'Unassigned Item';
      $scope.workItem = 'Unassigned Task';
      $scope.showOptions = false;

      ShareDataService.getData()
        .then(function(result) {
          $scope.thankyouMessage = result.email;
          $scope.timeLoggedMessage = 'You have logged ' + result.timeLogged + ' of work today.';
          if (result.message) {
            $scope.showOptions = true;
            $scope.message = result.message;
          }
          if (result.workType) {
            $scope.workType = result.workType.workType;
            $scope.workItem = result.workType.workItem;
          }
        })
        .catch(function(error) {
          $log.error(error);
        });

      //Functions
      $scope.startAgain = function() {
        $location.path('/');
      };
    }
  ]);
