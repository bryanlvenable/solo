var module = angular.module('resTracker', [
  'ngRoute',
  'resTracker.application',
  'resTracker.welcome'
  ]);
module.config(['$routeProvider',
function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'app/welcome/welcome.html'
    // redirectTo: 'app/welcome/welcome.html'
  })
  .when('/application', {
    templateUrl: 'app/application/application.html'
    // redirectTo: 'app/application/application.html'

  })
  .otherwise({
    redirectTo: 'app/welcome/welcome.html'

  })
}])
module.controller("RouteController", function($scope, $routeParams){
$scope.param = $routeParams.param;
});
