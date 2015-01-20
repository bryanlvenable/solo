var module = angular.module('restracker', [
  'ngRoute',
  'restracker.application',
  'restracker.welcome'
  ]);
module.config(['$routeProvider',
function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'app/welcome/welcome.html',
    controller: 'RouteController'
    // redirectTo: 'app/welcome/welcome.html'
  })
  .when('/application', {
    templateUrl: 'app/application/application.html',
    controller: 'RouteController'
    // redirectTo: 'app/application/application.html'

  })
  .otherwise({
    redirectTo: 'app/welcome/welcome.html'

  })
}])
module.controller("RouteController", function($scope, $routeParams){
$scope.param = $routeParams.param;
});
