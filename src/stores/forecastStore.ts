import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getCityForecast, getCityGeo } from '@/api/api.ts'
import { dataNormalizer } from '@/utils/forecastDataNormilizer.ts'
export type SelectedCity = {
  latitude: number
  longitude: number
  name: string
  country: string
  admin1: string
}
export type CardData = {
  temperature_2m: number
  apparent_temperature: number
  wind_speed_10m: number
  surface_pressure: number
  relative_humidity_2m: number
  weather_code: number
  time: string
  sunset: string
  sunrise: string
  dew_point_2m: number
  uv_index: number
  visibility: number
}
export type CardUnits = {
  temperature_2m: string
  apparent_temperature: string
  wind_speed_10m: string
  surface_pressure: string
  relative_humidity_2m: string
  dew_point_2m: string
  visibility: string
}
export type ForecastItem = {
  current: CardData
  current_units: CardUnits
  daily: CardData[]
}
export type ForecastRange = 'Today' | 'Tomorrow' | 'Next 7 Days'
export const useForecastStore = defineStore('forecastStore', () => {
  const selectedCityData = ref<SelectedCity>({
    latitude: 0,
    longitude: 0,
    name: '',
    country: '',
    admin1: '',
  })
  const currentForecastData = ref<ForecastItem>({
    current: {
      time: '',
      sunset: '',
      sunrise: '',
      temperature_2m: 0,
      apparent_temperature: 0,
      wind_speed_10m: 0,
      surface_pressure: 0,
      relative_humidity_2m: 0,
      weather_code: 0,
      dew_point_2m: 0,
      uv_index: 0,
      visibility: 0,
    },
    current_units: {
      temperature_2m: '',
      apparent_temperature: '',
      wind_speed_10m: '',
      surface_pressure: '',
      relative_humidity_2m: '',
      dew_point_2m: '',
      visibility: '',
    },
    daily: [],
  })
  let selectedRange = ref<ForecastRange>('Today')
  let preloaderState = ref(false)
  let cityError = ref(false)

  const setCityData = (data: SelectedCity) => {
    selectedCityData.value = data
  }
  const getForecastData = async (): Promise<void> => {
    try {
      const response = await getCityForecast(
        selectedCityData.value?.latitude,
        selectedCityData.value?.longitude,
      )
      currentForecastData.value = dataNormalizer(response.data)
    } catch (error) {
      console.error('Error fetching forecast data:', error)
    }
  }
  const selectTab = (range: ForecastRange): void => {
    if (selectedRange.value === range) return
    selectedRange.value = range
  }
  const submitCityName = async (cityName: string): Promise<void> => {
    try {
      preloaderState.value = true
      const response = await getCityGeo(cityName)
      if (!response.data.results) {
        cityError.value = true
        throw new Error('City not found')
      }
      const data = response.data.results[0]
      setCityData(data)
      await getForecastData()
    } catch (error) {
      console.error('Error fetching city data:', error)
    } finally {
      preloaderState.value = false
    }
  }
  const resetError = (): void => {
    cityError.value = false
  }

  return {
    selectedCityData,
    setCityData,
    getForecastData,
    currentForecastData,
    selectedRange,
    selectTab,
    preloaderState,
    submitCityName,
    cityError,
    resetError,
  }
})
