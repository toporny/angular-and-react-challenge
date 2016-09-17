(function() {
  angular.module('app')
    .controller( 'mainCtrl', mainCtrl);

  mainCtrl.$inject = [ '$scope', '$http', 'GitHubCommunication'];

  function mainCtrl ( $scope, $http, GitHubCommunication ) {
      $scope.array = [];
      
      $scope.totalItems = 107;
      $scope.currentPage = 1;
      $scope.gitUserName = 'toporny';

      $scope.refreshUser = function () {

        console.log('refreshEverything',$scope.gitUserName);
        refreshEverything();
      };

      $scope.setPage = function (pageNo) {
        console.log(pageNo);
        $scope.currentPage = pageNo;

          // GitHubCommunication.getUserRepoList($scope.gitUserName, $scope.currentPage)
          // .then(function(result) {
          //   $scope.array = result.data;
          //    console.log('OK: ' , result);
          // }, function(result) {
          //   console.log('Failed: ' , result);
          //   $scope.totalItems = 0;
          //   $scope.array = [];
          // })    

      };

      $scope.pageChanged = function() {
        console.log('Page changed to: ' + $scope.currentPage);
      };

      refreshEverything();


      function refreshEverything() {
      //https://api.github.com/users/defunkt
      console.log('$scope.gitUserName', $scope.gitUserName);
        GitHubCommunication.getUserDetails($scope.gitUserName)
         .then(function(result) {
          console.log(result);
          //$scope.totalItems = result.data.public_repos;
          $scope.name = result.data.name;
        }, function(result) {
          $scope.name = '';
          //$scope.totalItems = 0;
        }).then(function(){
          GitHubCommunication.getUserRepoList($scope.gitUserName, $scope.currentPage)
          .then(function(result) {
            $scope.array = result.data;
             console.log('OK: ' , result);
          }, function(result) {
            console.log('Failed: ' , result);
            //$scope.totalItems = 0;
            $scope.array = [];
          })      
        });
      }
  };
})();




(function() {
var myReactDirective = React.createClass({
  propTypes: {
    tablica: React.PropTypes.array.isRequired 
  },
  render: function(){
    var tabs = [];
    for (var i = 0; i < this.props.tablica.length; i++) {
      var tab = React.DOM.a({
        key: i+'a',
        className: 'repo_link',
        href: "#"
      }, this.props.tablica[i].name);
      tabs.push( React.DOM.div( {key:i}, tab, ' ', this.props.tablica[i].description) );
    }
    return React.DOM.div({className:"list"}, tabs);
  }
});

angular.module('app').value( "myReactDirective", myReactDirective );
angular.module('app').directive( 'myReactDirective', function( reactDirective ) {
  return reactDirective( myReactDirective );
} );


})();