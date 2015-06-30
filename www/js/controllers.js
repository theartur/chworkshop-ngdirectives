angular.module('taskManager.controllers', [])

.controller('DashCtrl', function($scope, $firebaseArray) {
	var data = $scope.data = {
		inputTask: ""
	};

	$scope.taskList = $firebaseArray(new Firebase("http://jazzcript-workshop.firebaseio-demo.com"));


	var taskIndex = 0;


	$scope.addTask = function () {
		console.log("addTask()", data.inputTask);

		taskIndex++;

		localStorage.taskIndex = taskIndex;
		
		$scope.taskList.$add({
			taskIndex: taskIndex,
			taskDescription: data.inputTask
		});

		data.inputTask = "";
	};
})

.controller('ChatsCtrl', function($scope, Chats) {
	// With the new view caching in Ionic, Controllers are only called
	// when they are recreated or on app start, instead of every page change.
	// To listen for when this page is active (for example, to refresh data),
	// listen for the $ionicView.enter event:
	//
	//$scope.$on('$ionicView.enter', function(e) {
	//});
	
	$scope.chats = Chats.all();
	$scope.remove = function(chat) {
		Chats.remove(chat);
	}
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
	$scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
	$scope.settings = {
		enableFriends: true
	};
});
