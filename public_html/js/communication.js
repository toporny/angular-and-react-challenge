(function() {
	angular.module('app', ['react','ngAnimate','ngSanitize','ui.bootstrap']);
 	angular.module('app').constant('userDetailsUrl', 'https://api.github.com/users/');
	angular.module('app').service("GitHubCommunication", GitHubCommunication);

	GitHubCommunication.$inject = [ '$http', '$q', 'userDetailsUrl' ];

	function GitHubCommunication ( $http, $q, userDetailsUrl ) {

		return {
			getUserDetails: getUserDetails,
			getUserRepoList: getUserRepoList
		};

		// get user details (esspecialy and how many repos user has)
		function getUserDetails(userName) {
			var deferred = $q.defer();
			$http({
				method: 'GET',
				url: userDetailsUrl+userName
			}).then(function successCallback(response) {
				deferred.resolve(response);
			}, function errorCallback(response) {
				console.log('response',response);
				if (response.data.message.substr(0,23) == 'API rate limit exceeded') alert(response.data.message);
				deferred.reject('connection error or github user not exists.');
			});
		    return deferred.promise;
		}


		// get user repos list with pagination (20 per page)
		function getUserRepoList(userName, page) {
			var deferred = $q.defer();
			$http({
				method: 'GET',
				url: 'https://api.github.com/users/'+userName+'/repos?page='+page+'&per_page=20' 
			}).then(function successCallback(response) {
				deferred.resolve(response);
			}, function errorCallback(response) {
				console.log('response',response);
				if (response.data.message.substr(0,23) == 'API rate limit exceeded') alert(response.data.message);
				deferred.reject('problem with getting repos.');
			});
		    return deferred.promise;
		}

	};
})();
