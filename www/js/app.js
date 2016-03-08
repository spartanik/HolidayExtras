// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('holidayextras', ['ionic','ngSanitize'])

.run(function($ionicPlatform,$rootScope) {
  $ionicPlatform.ready(function() {

    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.config(function($ionicConfigProvider){
  $ionicConfigProvider.scrolling.jsScrolling(false);
})

app.controller('flickr', function($scope,$http,photoData) {
	$scope.photoData=photoData;
	
	$scope.toLinkedin = function(){
    	window.location.href= "https://www.linkedin.com/in/spartanik";
    }
    
    $scope.doRefresh=function(){
    	$("#scriptspace").html('<script src="https://api.flickr.com/services/feeds/photos_public.gne?format=json"></script>');
    	$scope.$broadcast('scroll.refreshComplete');
    }
    
    $scope.jsonFlickrFeed = function(data){
    	$scope.photoData=data;
    	$scope.$apply();
    };
    jsonFlickrFeed = $scope.jsonFlickrFeed;
    $scope.doRefresh();
});

app.value('photoData',{});
jsonFlickrFeed = function(){};