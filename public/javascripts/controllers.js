angular.module('chatApp', [])
.controller('ChatCtrl',function($scope,socket){
		$scope.messages = [];
		socket.on('messages.read', function (messages) {
			//console.log(messages);
			$scope.messages = messages
		})
		socket.on('messages.add', function (message) {
			console.log(message);
			$scope.messages.push(message)
		})
		socket.emit('messages.read')
	})
.controller('ChatSendCtrl',function($scope,socket){
		$scope.createMessage = function () {
			socket.emit('messages.create', $scope.newMessage);
			$scope.newMessage = ''
		}
		$scope.sendMsg = function(){
			socket.emit('messages.create', $scope.newMessage);
			$scope.newMessage = ''
		}
	})






;