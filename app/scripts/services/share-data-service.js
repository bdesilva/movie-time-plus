angular.module('movietimeplusApp')
  .service('ShareDataService', ['$q', function($q) {
    var dataObject = {};

    var addData = function(newData) {
      dataObject = newData;
    };

    var getData = function() {
      var deferred = $q.defer();
      if (dataObject.email || dataObject.timeLogged) {
        deferred.resolve(dataObject);
      } else {
        deferred.reject({
          error: 'dataList is empty, submitted view should not be engaged'
        });
      }
      return deferred.promise;
    };

    var clearData = function() {
      dataObject = {};
    };

    return {
      addData: addData,
      getData: getData,
      clearData: clearData
    };
  }]);
