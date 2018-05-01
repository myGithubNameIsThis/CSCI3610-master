// for admin to update menu web page

var app=angular.module("menuApp",[]);
app.controller('menuCtrl', function($scope,$http,$window){
	// Q1 add 2 or more pizza objects
	$http({
		method: 'GET',
		url: '/menu'
		//menu is the get the data from the DB collection menu
	}).then(function successCallBack(response) {
		$scope.menu=response.data
	}, function errorCallBack(response) {
		$scope.menu=[]
	});

$scope.msg="Menu"



//whenever the page is loaded it will pull the data from the menu in DB server


//second one: update menu
$scope.updateMenu=function(item){
	$http({
		method: 'POST',
		url: '/updateMenu',
		data:item
	}).then(function successCallBack(response) {
		$scope.msg="Updated!"
	}, function errorCallBack(response) {
		$scope.msg="Server problem, try again later"
	});
}

})
//end of controller