import axios from 'axios'
import type { AxiosResponse } from 'axios'
import type { ForecastItem, SelectedCity } from '@/stores/forecastStore.ts'
interface ForecastParams {
  latitude: number
  longitude: number
  daily: string[]
  current: string[]
  forecast_days: number
  timezone: string
}
interface GeoData {
  results: SelectedCity[]
}

/**
 * Fetches geographical information for a city based on its name.
 */
export const getCityGeo = (name: string): Promise<AxiosResponse<GeoData>> => {
  return axios.get(
    `https://geocoding-api.open-meteo.com/v1/search?name=${name}&count=1&language=en&format=json`,
  )
}

/**
 * Fetches weather forecast data for a specific location based on latitude and longitude.
 */
export const getCityForecast = async (
  latitude: number,
  longitude: number,
): Promise<AxiosResponse<ForecastItem>> => {
  const params: ForecastParams = {
    latitude,
    longitude,
    daily: [
      'sunset',
      'sunrise',
      'weather_code',
      'temperature_2m_max',
      'apparent_temperature_max',
      'wind_speed_10m_max',
      'relative_humidity_2m_max',
      'surface_pressure_max',
      'visibility_max',
      'dew_point_2m_max',
      'uv_index_max',
    ],
    current: [
      'temperature_2m',
      'weather_code',
      'wind_speed_10m',
      'surface_pressure',
      'relative_humidity_2m',
      'apparent_temperature',
      'rain',
      'uv_index',
      'visibility',
      'dew_point_2m',
    ],
    forecast_days: 8,
    timezone: 'auto',
  }
  return axios.get('https://api.open-meteo.com/v1/forecast', { params: params })
}
