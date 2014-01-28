'use strict';

angular.module('artistSearch').controller('MainCtrl', function($scope, ngDialog) {

	$scope.openTemplate = function() {
		ngDialog.open({
			template : 'views/artistList.html',
			className : 'ngdialog-theme-plain',
			scope : $scope
		});
	}

});


angular.module('artistSearch').controller('ArtistCtrl', function($scope, $http, ngDialog, MessageCtrl) {

    MessageCtrl.init($scope);

	$scope.searchArtist = function() {
	   	$scope.alerts = [];
    	if(!$scope.queryArtistName) {
    		$scope.alert('required', 'pbf.required', '[Artist Name]');
    		return;
    	}
    	if(!$scope.queryArtistName) {
    		$scope.alert('required', 'pbf.fixed', '[jack]');
    		return;
    	}

		if(!$scope.queryFetchCnt) {
			alert('FetchCnt is required.')
    		$scope.alert('required', 'pbf.required', '[Fetch Cnt]');
    		return;
		}
		if($scope.queryFetchCnt != 4) {
			alert('FetchCnt must be 4.')
    		$scope.alert('info', 'pbf.fixed', '[4]');
    		return;
		}
		
    	$scope.alerts = [];
    	//var url = "http://itunes.apple.com/search?term="+$scope.queryArtistName+"artistName''&limit="+$scope.queryFetchCnt;
    	var url = "http://itunes.apple.com/search?term=artistName&limit=1";

    	$http({method: 'JSONP', url: url}).
	      success(function(data, status) {
	      	debugger
	        $scope.status = status;
	        $scope.artists = data;
	      }).
	      error(function(data, status) {
	      	debugger
	        $scope.data = data || "Request failed";
	        $scope.artists = status;
	    });
	}

});