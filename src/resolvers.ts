import { fetchWeather, fetchCityData } from './fetches';

export const resolvers = {
  Query: {
    getWeather: async (_: any, { lat, lon, apiKey, units, lang = 'ru' }: any) => {
      const weather = await fetchWeather({
        lat,
        lon,
        apiKey,
        units,
        lang,
      });

      return { ...weather };
    },
    getCityData: async (_: any, { cityName, stateCode, countryCode, apiKey, limit = 5 }: any) => {
      const cityData = await fetchCityData({
        cityName,
        stateCode,
        countryCode,
        limit,
        apiKey,
      });

      return cityData;
    },
  },
};
