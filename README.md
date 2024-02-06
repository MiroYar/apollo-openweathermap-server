# apollo-openweathermap-server

Легкий [Apollo](https://www.apollographql.com/docs/apollo-server/) сервер для получения данных с сайта погоды [openweathermap.org](https://openweathermap.org/) при разработке приложений с системой запрсов данных на основе [Apollo](https://www.apollographql.com/docs/react/) клиент.

## Использование

### Локально

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

По умолчанию порт `4000`. Чтобы сменить номер порта откройте файл `server.js` в корне проекта, и замените на нужный номер значение следующей переменной:

```js
const PORT = 4000;
```

### Сервер онлайн

Также можно использовать развернутый онлайн сервер на [Codesandbox.io](https://codesandbox.io/p/github/MiroYar/apollo-openweathermap-server/draft/dark-wildflower?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clsa18rle00073v6niareo1ig%2522%252C%2522sizes%2522%253A%255B70%252C30%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clsa18rld00023v6nltbgui7x%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clsa18rle00043v6nfeqh90ca%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clsa18rle00063v6n7qgacy5z%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clsa18rld00023v6nltbgui7x%2522%253A%257B%2522id%2522%253A%2522clsa18rld00023v6nltbgui7x%2522%252C%2522tabs%2522%253A%255B%255D%257D%252C%2522clsa18rle00063v6n7qgacy5z%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clsa18rle00053v6nclldafp2%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TASK_PORT%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522port%2522%253A4000%252C%2522path%2522%253A%2522%252F%2522%257D%255D%252C%2522id%2522%253A%2522clsa18rle00063v6n7qgacy5z%2522%252C%2522activeTabId%2522%253A%2522clsa18rle00053v6nclldafp2%2522%257D%252C%2522clsa18rle00043v6nfeqh90ca%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clsa18rle00033v6np2tkb0ef%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522start%2522%257D%255D%252C%2522id%2522%253A%2522clsa18rle00043v6nfeqh90ca%2522%252C%2522activeTabId%2522%253A%2522clsa18rle00033v6np2tkb0ef%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D). Пройдя по ссылке можно найти эндпоинт для формирования запросов.

## Схема запроса

В комментариях ожидаемый тип ответа.

```js
getWeather(cityName: String, countryCode: String) { // ForecastWeather
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
            h1 // Float
            h3 // Float
        }
        snow { // Snow
            h1 // Float
            h3 // Float
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
