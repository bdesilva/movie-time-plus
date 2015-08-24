angular.module('movietimeplusApp')
  .service('ShareDataService', ['$q', function($q) {
    var deferred = $q.defer();
    var dataObject = {};

    var addData = function(newData) {
      dataObject = newData;
    }

    var getData = function() {
      if (dataObject.email || dataObject.timeLogged || dataObject.message) {
        deferred.resolve(dataObject);
      } else {
        deferred.reject({
          error: 'dataList is empty, submitted view should not be engaged'
        });
      }
      return deferred.promise;
    }

    return {
      addData: addData,
      getData: getData
    };
  }]);
