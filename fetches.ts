import axios from 'axios';
import { joinerParameters, joinerValues, parameter } from './utils';

export const fetchWeather = async ({
  lat,
  lon,
  apiKey,
  units,
  lang,
}: {
  lat: number;
  lon: number;
  apiKey: string;
  units: string;
  lang: string;
}) => {
  const url = `https://api.openweathermap.org/data/3.0/onecall?${joinerParameters([
    parameter('lat', lat),
    parameter('lon', lon),
    parameter('lang', lang),
    parameter('units', units),
    parameter('appid', apiKey),
  ])}`;
  return axios.get(url).then((response: any) => response.data);
};

export const fetchCityData = async ({
  cityName,
  stateCode,
  countryCode,
  limit,
  apiKey,
}: {
  cityName: string;
  stateCode: string;
  countryCode: string;
  limit: number;
  apiKey: string;
}) => {
  const url = `http://api.openweathermap.org/geo/1.0/direct?${joinerParameters([
    parameter('q', joinerValues([cityName, stateCode, countryCode])),
    parameter('limit', limit),
    parameter('appid', apiKey),
  ])}`;

  return axios.get(url).then((response: any) => response.data);
};
