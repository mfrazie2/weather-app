angular.module("weather.services", [])
.factory('Weather', function ($http) {
  var getLocation = function () {
    return $http({
      method: 'GET',
      url: 'http://ipinfo.io/json'
    }).then(function (res) {
      return res.data;
    });
  };
  
  var getLocalWeather = function (city) {
    var options = {
      q: city,
      units: 'metric',
      appid: '061f24cf3cde2f60644a8240302983f2'
    };
    return $http({
      method: 'GET',
      url: 'http://api.openweathermap.org/data/2.5/weather?',
      params: options
    }).then(function (res) {
      return res.data;
    });
  };
  
  return {
    getLocation: getLocation,
    getLocalWeather: getLocalWeather
  };
});