# apollo-openweathermap-server
Легкий [Apollo](https://www.apollographql.com/) сервер для получения данных с сайта погоды [openweathermap.org](openweathermap.org).

## Query запрос
```
getWeather(cityName: String, countryCode: String)
```

## Схема тела запроса
```
{
  cod // String
  message // Float
  cnt // Int
  list { // [List]
    dt // Int
    main { // Main
      temp // Float
      feels_like // Float
      temp_min // Float
      temp_max // Float
      temp_kf // Float
      temp_f // Float
      temp_c // Float
      pressure // Float
      sea_level // Float
      grnd_level // Float
      humidity // Int
    }
    weather { // [Weather]
      id // ID
      main // String
      description // String
      icon // String
    }
    clouds { // Clouds
      all // Int
    }
    wind { // Wind
      speed // Float
      deg // Float
    }
    rain { // Rain
      h // Float
    }
    sys { // Sys
      pod // String
    }
    dt_txt// String
  }
  city { // City
    id // ID
    name // String
    country // String
    coord { // Coord
      lat // Float
      lon // Float
    }
    population // Int
    timezone // Int
    sunrise // Int
    sunset // Int
  }
  fahrenheit_avg // Float
  celcius_avg // Float
  kelvin_avg // Float
  fahrenheit_max_avg // Float
  celcius_max_avg // Float
  kelvin_max_avg // Float
  pressure_avg // Float
  humidity_avg // Float
  sea_level_avg // Float
  pressure // [Float]
  humidity // [Float]
  temp_farenheit // [Float]
  temp_celcius // [Float]
  temp_kelvin // [Float]
  sea_level // [Float]
}
```
