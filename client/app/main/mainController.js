angular.module('weather.main', [])
.controller('MainController', function($scope, WeatherService) {
  $scope.greeting = "Barf Barf";
  $scope.currentWeather = {};
  $scope.currentLocation = {};
  $scope.getLocation = function () {
    WeatherService.getLocation()
      .then(function (res) {
        $scope.currentLocation = {
          city: res.city,
          state: res.region,
          loc: res.loc.split(',')
        };
        console.log($scope.currentLocation);
      });
  };

  $scope.getLocalWeather = function () {
    WeatherService.getLocalWeather($scope.currentLocation.city)
      .then(function (res) {
        console.log(JSON.stringify(res, null, 2));
      });
  };

  $scope.getLocation();
});
