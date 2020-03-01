// import axios from 'axios';
const axios = require('axios');
const API_KEY = 'fc9e50ba954c37424ef33df15255ca1f';

const fetchWeather = async ({ cityName, countryCode }) => {
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(
        cityName
    )},${encodeURIComponent(countryCode)}&appid=${API_KEY}`;
    return axios.get(url).then(response => response.data);
};
const avg = (obj, total) => obj.reduce((a, b) => a + b, 0) / total;
const toFarenheit = temp => ((temp * 9) / 5 - 459.67).toFixed(2);
const toCelsius = temp => (temp - 273.15).toFixed(2);
const toKelvin = temp => temp.toFixed(2);

module.exports = { fetchWeather, avg, toFarenheit, toCelsius, toKelvin };
