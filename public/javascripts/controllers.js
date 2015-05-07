angular.module('chatApp')
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
.controller('LoginCtrl',function($scope,$location,$http,socket){
		$scope.user = {
			name:'',
			password:''
		};
		$scope.login = function(user){
			$http({
				url:'/api/login',
				method:'POST',
				data:{
					name:user.name
				}
			}).success(function (user) {
				alert('登录成功');
				$scope.$emit('login',user);
				$location.path('/home');
			}).error(function (err) {
				alert('登录失败！');
			});
			/*if(!user.name&&!user.password){
				alert('用户名或密码不能为空！')
			}else{
				if(user.name=='kezhi'&&user.password=='111111'){
					$location.path('home');
				}else {
					alert('用户名或密码错误！');
					user.name='';
					user.password='';
				}
			}*/

		}
	})






;