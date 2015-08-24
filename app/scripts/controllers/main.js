angular.module('movietimeplusApp')
  .controller('MainCtrl', ['$scope', 'TimeService', 'ShareDataService', '$activityIndicator', '$timeout', '$location', '$log', '$modal',
    function($scope, TimeService, ShareDataService, $activityIndicator, $timeout, $location, $log, $modal) {
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
        $scope.selectedWorkItem = {};
        ShareDataService.clearData();

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
          console.log($scope.message);
          ShareDataService.addData({
            email: $scope.email + '@gener8.com',
            timeLogged: $scope.displayDateTime.display,
            message: $scope.message,
            workType: $scope.selectedWorkItem
          });

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

      $scope.openCustomWorkTypeModal = function() {
        var modalInstance = $modal.open({
          animation: true,
          templateUrl: 'addCustomWorkType.html',
          controller: 'CustomWorkTypeCtrl',
          size: 'lg',
          resolve: {
            items: function() {
              return $scope.workItems;
            },
            selectedId: function() {
              return $scope.selectedId;
            },
            selectWorkType: function() {
              return $scope.selectWorkType;
            }
          }
        });
      };

      $scope.selectWorkType = function(item) {
        $scope.selectedId = item.$$hashKey;
        $scope.selectedWorkItem = {
          workType: item.workType,
          workItem: item.workItem
        };
        if ($scope.selectedWorkItem.workType.toLowerCase().indexOf('other') !== -1) {
          $scope.openCustomWorkTypeModal();
        }
      };
    }
  ]);

angular.module('movietimeplusApp').controller('CustomWorkTypeCtrl', function($scope, $modalInstance, items, selectedId, selectWorkType) {
  $scope.customWorkType = '';
  $scope.customWorkItem = '';

  function functiontofindIndexByKeyValue(arraytosearch, key, valuetosearch) {
    for (var i = 0; i < arraytosearch.length; i++) {
      if (arraytosearch[i][key] == valuetosearch) {
        return i;
      }
    }
    return null;
  }

  $scope.ok = function() {
    var index = functiontofindIndexByKeyValue(items, "$$hashKey", selectedId);
    if (index > -1) {
      items.splice(index, 1);
    }

    items.push({
      workType: $scope.customWorkType,
      workItem: $scope.customWorkItem,
      $$hashKey: selectedId
    });

    selectWorkType({
      workType: $scope.customWorkType,
      workItem: $scope.customWorkItem,
      $$hashKey: selectedId
    });

    $modalInstance.close();
  };

  $scope.cancel = function() {
    $modalInstance.dismiss('cancel');
  };
});
