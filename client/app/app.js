angular.module("weather", [
  'weather.services',
  'weather.main',
  'ngRoute'
  ])
.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl : 'app/main/main.html',
      controller: 'MainController'
    })
    // .when('/forecast', {
    //   template: 'app/forecast/forecast.html',
    //   controller: 'app/forecast/ForecastController'
    // })
    .otherwise({
      redirectTo: '/'
    });
});
