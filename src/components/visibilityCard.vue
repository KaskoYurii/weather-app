<script lang="ts" setup>
import overviewCard from '@/components/overviewCard.vue'
import { useForecastStore } from '@/stores/forecastStore'
const forecastStore = useForecastStore()
</script>
<template>
  <overviewCard
    title="Visibility"
    description="Haze is affecting visibility"
    description-icon="haze-icon.svg"
    icon="visibility-icon.svg"
    :value="`${forecastStore.currentForecastData.current.visibility}${forecastStore.currentForecastData.current_units.visibility}`"
  />
</template>
<style scoped></style>
