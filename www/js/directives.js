angular.module('taskManager.directives', [])

.directive('taskList', function() {
  return {
    restrict: "E",
    scope: {
      taskList: "=list"
    },
    templateUrl: 'templates/task-list-item.html',
    link: function (scope, element, attributes, controller) {
      // render stuff
    },
    controller: function ($scope, $firebaseArray) {
      console.log("taskList", $scope.taskList);

      $scope.taskList = $firebaseArray(new Firebase("http://jazzcript-workshop.firebaseio-demo.com"));
    }
  }
});
