(function() {
  angular.module('app')
  .service("GitHubCommunication", GitHubCommunication);

  GitHubCommunication.$inject = [ '$http', '$q', 'userDetailsUrl', 'userReoposUrl' ];

  function GitHubCommunication ( $http, $q, userDetailsUrl, userReoposUrl ) {

    return {
      getUserDetails: getUserDetails,
      getUserRepoList: getUserRepoList,
    }

    function getUserDetails(userName) {
 		var deferred = $q.defer();
		$http({
			method: 'GET',
//			url: userDetailsUrl+userName
			url:'user_toporny.json'
		}).then(function successCallback(response) {
			deferred.resolve(response);
		}, function errorCallback(response) {
			console.warn('connection error or github user not exists');
			deferred.reject('connection error or github user not exists.');
		});
	    return deferred.promise;
    }



    function getUserRepoList(userName, page) {
 		var deferred = $q.defer();
		$http({
			method: 'GET',
			url: 'json.json'
			//url: 'https://api.github.com/users/'+userName+'/repos?page='+page+'&per_page=3' 
		}).then(function successCallback(response) {
			deferred.resolve(response);
		}, function errorCallback(response) {
			console.warn('problem with getting repos');
			deferred.reject('problem with getting repos.');
		});
	    return deferred.promise;

    }

  };
})();



