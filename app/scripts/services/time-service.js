angular.module('movietimeplusApp')
  .service('TimeService', ['$q', function($q) {
    this.timeDiff = function(startTime, finishTime) {
      if (startTime & finishTime) {
        var deferred = $q.defer();
        var timeDiff = calculateTimeDiff(startTime, finishTime);

        if (timeDiff) {
          var validateTime = new Date();
          validateTime.setHours(timeDiff.hours);
          validateTime.setMinutes(timeDiff.minutes);

          deferred.resolve({
            display: timeDiff.hours + ' hours ' + timeDiff.minutes + ' minutes',
            validate: validateTime
          });
        } else {
          deferred.reject({
            error: 'calculateTimeDiff couldn\'t resolve'
          });
        }

        return deferred.promise;
      }
    };

    var calculateTimeDiff = function(startTime, finishTime) {
      var diff = finishTime.getTime() - startTime.getTime();
      var hours = Math.floor(diff / 1000 / 60 / 60);
      var days = Math.floor(hours / 24);

      diff -= hours * 1000 * 60 * 60;
      hours -= days * 24;
      var minutes = Math.floor(diff / 1000 / 60);

      return {
        hours: hours,
        minutes: minutes
      };
    };
  }]);
