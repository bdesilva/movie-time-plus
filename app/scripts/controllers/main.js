angular.module('movietimeplusApp')
  .controller('MainCtrl', ['$scope', 'TimeService', 'ShareDataService', '$activityIndicator', '$timeout', '$location', '$log',
    function($scope, TimeService, ShareDataService, $activityIndicator, $timeout, $location, $log) {
      //Variables and Initialization
      var clearForm = function() {
        $scope.email = '';
        $scope.message = '';
        $scope.hStartstep = 1;
        $scope.mStartstep = 15;
        $scope.hFinishstep = 1;
        $scope.mFinishstep = 15;
        $scope.timeInitalValCheck = false
        $scope.selectedId = null;

        $scope.startTime = new Date();
        $scope.finishTime = new Date();
        $scope.validateTime = new Date();

        $scope.timeVal = {
          hour: 0,
          minute: 0
        };

        $scope.displayDateTime = {
          display: '0 hours 0 minutes',
          validate: {
            hours: 0,
            minutes: 0
          }
        };

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

      //Functions
      $scope.resetForm = function() {
        clearForm();
      };

      $scope.submitForm = function() {
        if ($scope.timeSheetForm.$valid) {
          ShareDataService.addData({email: $scope.email + '@gener8.com', timeLogged: $scope.displayDateTime.display, message: $scope.message});

          $activityIndicator.startAnimating();
          $timeout(function() {
            $activityIndicator.stopAnimating();
          }, 1000);

          $location.path('/submitted');
        }
      };

      $scope.timeChanged = function() {
        TimeService.timeDiff($scope.startTime, $scope.finishTime)
          .then(function(result) {
            $scope.displayDateTime = result;
            $scope.validateTime = $scope.displayDateTime.validate;
            $scope.timeInitalValCheck = true;
          })
          .catch(function(error) {
            $log.error(error);
          });
      };

      $scope.selectWorkType = function(item) {
        $scope.selectedId = item.$$hashKey;
      };
    }
  ]);
