<script lang="ts" setup>
import overviewCard from '@/components/overviewCard.vue'
import { useForecastStore } from '@/stores/forecastStore'
const forecastStore = useForecastStore()
</script>
<template>
  <overviewCard
    title="Humidity"
    :description="`The dew point is ${forecastStore.currentForecastData.current.dew_point_2m}${forecastStore.currentForecastData.current_units.dew_point_2m} right now`"
    description-icon="dew-point.svg"
    icon="humidity-icon.svg"
    :value="`${forecastStore.currentForecastData.current.relative_humidity_2m}${forecastStore.currentForecastData.current_units.relative_humidity_2m}`"
  />
</template>
<style scoped></style>
