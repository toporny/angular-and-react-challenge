(function() {
angular.module('app', [
    'react',
    'ngAnimate',
    'ngSanitize',
    'ui.bootstrap'
  ])

  angular.module('app')
    .constant('userDetailsUrl', 'https://api.github.com/users/')
    .constant('userReoposUrl', '/repos?page=2&per_page=2');

})();
