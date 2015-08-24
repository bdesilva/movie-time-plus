angular.module('movietimeplusApp')
  .directive("timevalidate", function() {
    return {
      restrict: "A",
      require: "?ngModel",
      link: function(scope, element, attributes, ngModel) {
        ngModel.$validators.timevalidate = function(modelValue) {          
          var valDate = new Date();
          valDate.setHours(0);
          valDate.setMinutes(0);

          return !(modelValue.getHours() === valDate.getHours() && modelValue.getMinutes() === valDate.getMinutes());
        }
      }
    };
  });
