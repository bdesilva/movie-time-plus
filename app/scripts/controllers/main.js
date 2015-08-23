angular.module('movietimeplusApp')
  .controller('MainCtrl', ['$scope', 'TimeService', '$activityIndicator', '$timeout', function($scope, TimeService, $activityIndicator, $timeout) {
    //Variables and Initialization
    var clearForm = function() {
      $scope.startTime = new Date();
      $scope.finishTime = new Date();
      $scope.email = '';
      $scope.hStartstep = 1;
      $scope.mStartstep = 15;
      $scope.hFinishstep = 1;
      $scope.mFinishstep = 15;
      $scope.message = '';
      $scope.displayDateTime = '0 hours 0 minutes';
      $scope.workItems = [{
        workType: 'Feature Item',
        workItem: 'Time working on visual effects for movie'
      }, {
        workType: 'Review Task',
        workItem: 'Time spent on reviewing the work of a junior artist'
      }, {
        workType: 'Other',
        workItem: ' Please state work item...'
      }];
    };

    clearForm();

    $activityIndicator.startAnimating();
		$timeout(function () {
			$activityIndicator.stopAnimating();
		}, 3000);

    //Functions
    $scope.resetForm = function() {
      clearForm();
    };

    $scope.startTimeChanged = function() {
      $scope.displayDateTime = TimeService.timeDiff($scope.startTime, $scope.finishTime);
    };

    $scope.finishTimeChanged = function() {
      $scope.displayDateTime = TimeService.timeDiff($scope.startTime, $scope.finishTime);
    };
  }]);
