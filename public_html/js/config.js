(function() {
angular.module('app', [
    'react',
    'ngAnimate',
    'ngSanitize',
    'ui.bootstrap'
  ])

  angular.module('app').constant('userDetailsUrl', 'https://api.github.com/users/');

})();
