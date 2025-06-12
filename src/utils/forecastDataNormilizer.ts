import type { ForecastItem } from '@/stores/forecastStore'
export const dataNormalizer = (data: any) => {
  const normalizedData: ForecastItem = {
    current: {
      time: data.current.time,
      sunset: data.daily.sunset[0],
      sunrise: data.daily.sunrise[0],
      temperature_2m: data.current.temperature_2m,
      apparent_temperature: data.current.apparent_temperature,
      wind_speed_10m: data.current.wind_speed_10m,
      surface_pressure: data.current.surface_pressure,
      relative_humidity_2m: data.current.relative_humidity_2m,
      weather_code: data.current.weather_code,
      dew_point_2m: data.current.dew_point_2m,
      uv_index: data.current.uv_index,
      visibility: data.current.visibility,
    },
    current_units: {
      temperature_2m: data.current_units.temperature_2m,
      apparent_temperature: data.current_units.apparent_temperature,
      wind_speed_10m: data.current_units.wind_speed_10m,
      surface_pressure: data.current_units.surface_pressure,
      relative_humidity_2m: data.current_units.relative_humidity_2m,
      dew_point_2m: data.current_units.dew_point_2m,
      visibility: data.current_units.visibility,
    },
    daily: [],
  }
  const length = data.daily.time.length

  normalizedData.daily = Array.from({ length }, (_, i) => ({
    time: data.daily.time[i],
    sunset: data.daily.sunset[i],
    sunrise: data.daily.sunrise[i],
    weather_code: data.daily.weather_code[i],
    temperature_2m: data.daily.temperature_2m_max[i],
    apparent_temperature: data.daily.apparent_temperature_max[i],
    wind_speed_10m: data.daily.wind_speed_10m_max[i],
    relative_humidity_2m: data.daily.relative_humidity_2m_max[i],
    surface_pressure: data.daily.surface_pressure_max[i],
    dew_point_2m: data.daily.dew_point_2m_max[i],
    uv_index: data.daily.uv_index_max[i],
    visibility: data.daily.visibility_max[i],
  }))

  return normalizedData
}
