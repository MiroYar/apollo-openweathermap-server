# apollo-openweathermap-server
Легкий [Apollo](https://www.apollographql.com/docs/apollo-server/) сервер для получения данных с сайта погоды [openweathermap.org](openweathermap.org) при рахработке приложений с системой запрсов данных на основе [Apollo](https://www.apollographql.com/docs/react/) клиент.

## Использование
Скачать, пройти в командной строке в дирректорию сервера и набрать команду для установки всех зависимостей:
```
npm install
```
Для запуска проекта набрать команду:
```
npm start
```
Точка подключения после запуска сервера:
```
http://localhost:4000
```
По умолчанию порт ``4000``. Чтобы сменить номер порта откройте файл ``server.js`` в корне проекта, и замените на нужный номер значение следующей переменной:
```js
const PORT = 4000;
```

## Query запросы
```js
getWeather(cityName: String, countryCode: String) {}
```

## Схема тела запроса
В комментариях ожидаемый тип ответа
```js
getWeather(cityName: String, countryCode: String) {
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
