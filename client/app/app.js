angular.module("weather", [
  'weather.services',
  'ngRoute'
  ])
.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl : 'app/main/main.html',
      controller: 'app/main/MainController'
    })
    .when('/forecast', {
      template: 'app/forecast/forecast.html',
      controller: 'app/forecast/ForecastController'
    })
    .otherwise({
      redirectTo: '/'
    });
});