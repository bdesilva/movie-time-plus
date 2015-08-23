angular.module('movietimeplusApp')
  .controller('MainCtrl', ['$scope', function($scope) {
    $scope.email = '';
    $scope.timeHourMin = '';
    $scope.message ='';
    $scope.workItems = [
      {workType: 'Feature Item', workItem: 'Time working on visual effects for movie'},
      {workType: 'Review Task', workItem: 'Time spent on reviewing the work of a junior artist'},
      {workType: 'Other', workItem: ' Please state work item...'}
    ];
  }]);
