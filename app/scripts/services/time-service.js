angular.module('movietimeplusApp')
  .service('TimeService', function() {
    this.timeDiff = function(startTime, finishTime) {
      if (startTime & finishTime) {
        var diff = finishTime.getTime() - startTime.getTime();
        var hours = Math.floor(diff / 1000 / 60 / 60);
        var days = Math.floor(hours / 24);
        diff -= hours * 1000 * 60 * 60;
        hours -= days * 24;
        var minutes = Math.floor(diff / 1000 / 60);

        return hours + ' hours ' + minutes + ' minutes';
      }
    };
  });
