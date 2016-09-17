(function() {
	angular.module('app')
	.service("GitHubCommunication", GitHubCommunication);

	GitHubCommunication.$inject = [ '$http', '$q', 'userDetailsUrl' ];

	function GitHubCommunication ( $http, $q, userDetailsUrl ) {

		return {
			getUserDetails: getUserDetails,
			getUserRepoList: getUserRepoList
		}

		// get user details and and how many repo user has
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


		// get user repos list with pagination (10 per page)
		function getUserRepoList(userName, page) {
			var deferred = $q.defer();
			$http({
				method: 'GET',
				url: 'https://api.github.com/users/'+userName+'/repos?page='+page+'&per_page=10' 
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



