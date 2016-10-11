angular.module("weather.services", [])
.factory('WeatherService', function ($http) {
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
      appid: window.WEATHER_API_KEY
    };
    return $http({
      method: 'GET',
      url: 'http://api.openweathermap.org/data/2.5/weather?',
      params: options
    }).then(function (res) {
      return mapWeatherResults(res.data);
    });
  };

  var getIconUrl = function (iconCode) {
    return 'http://openweathermap.org/img/w/' + iconCode + '.png';
  }

  var mapWeatherResults = function (weatherObj) {
    return {
      current: {
        temp: weatherObj.main.temp,
        description: weatherObj.weather.description,
        icon: getIconUrl(weatherObj.weather.icon)
      },
      day: {
        highTemp: weatherObj.main.temp_max,
        lowTemp: weatherObj.main.temp_min,
        sunrise: weatherObj.sys.sunrise,
        sunset: weatherObj.sys.sunset
      }
    }
  };

  return {
    getLocation: getLocation,
    getLocalWeather: getLocalWeather
  };
});
