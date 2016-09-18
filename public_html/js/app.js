(function() {
  angular.module('app')
    .controller('mainCtrl', mainCtrl);

  mainCtrl.$inject = ['$scope', '$http', 'GitHubCommunication'];

  function mainCtrl($scope, $http, GitHubCommunication) {
    $scope.array = [];
    $scope.totalItems = 0;
    $scope.gitUserName = 'toporny';  // default github user


    $scope.refreshUser = function() {
      refreshEverything();
    };


    $scope.setPage = function(pageNo) {
      $scope.currentPage = pageNo;
      GitHubCommunication.getUserRepoList($scope.gitUserName, $scope.currentPage)
        .then(function(result) {
          $scope.array = result.data;
        }, function(result) {
          console.log('Failed: ', result);
          $scope.totalItems = 0;
          $scope.array = [];
        });
    };

    refreshEverything();

    function refreshEverything() {
      $scope.currentPage = 1;
      console.log('$scope.gitUserName', $scope.gitUserName);
      GitHubCommunication.getUserDetails($scope.gitUserName)
        .then(function(result) {
          $scope.totalItems = result.data.public_repos;
          $scope.name = result.data.name;
        }, function(result) {
          $scope.name = '';
          $scope.totalItems = 0;
        }).then(function() {
          GitHubCommunication.getUserRepoList($scope.gitUserName, $scope.currentPage)
            .then(function(result) {
              $scope.array = result.data;
            }, function(result) {
              $scope.totalItems = 0;
              $scope.array = [];
            })
        });
    }
  };
})();
