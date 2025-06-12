<script lang="ts" setup>
import svgIconComponent from '@/components/svgIconComponent.vue'
import { mdiMapMarkerOutline } from '@mdi/js'
import { useForecastStore } from '@/stores/forecastStore'
const forecastStore = useForecastStore()
</script>
<template>
  <div class="flex items-center gap-2">
    <svgIconComponent :name="mdiMapMarkerOutline" />
    <div v-if="forecastStore.selectedCityData?.admin1">
      {{ forecastStore.selectedCityData?.admin1 }},
      {{ forecastStore.selectedCityData?.country }}
    </div>
  </div>
</template>
<style scoped></style>
