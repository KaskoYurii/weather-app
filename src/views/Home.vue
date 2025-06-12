<script setup lang="ts">
import { ref, watch } from 'vue'
import headerComponent from '@/components/headerComponent.vue'
import tabs from '@/components/tabs.vue'
import forecastCard from '@/components/forecastCard.vue'
import { useForecastStore } from '@/stores/forecastStore'
import type { ForecastRange } from '@/stores/forecastStore'
import humidityCard from '@/components/humidityCard.vue'
import visibilityCard from '@/components/visibilityCard.vue'
const forecastStore = useForecastStore()
const tabsList: ForecastRange[] = ['Today', 'Tomorrow', 'Next 7 Days']
let activeCard = ref(0)
const mediaQuery = window.matchMedia('(max-width: 768px)') // Tailwind `md`
</script>

<template>
  <div class="@container">
    <headerComponent class="mb-6" />
    <tabs
      :tabs="tabsList"
      @select-tab="forecastStore.selectTab"
      :active-tab="forecastStore.selectedRange"
      class="mb-6"
    />
    <template v-if="forecastStore.selectedRange === 'Today'">
      <forecastCard
        :card-data="forecastStore.currentForecastData.current"
        :card-units="forecastStore.currentForecastData.current_units"
        expanded
      />
    </template>
    <template v-else-if="forecastStore.selectedRange === 'Tomorrow'">
      <forecastCard
        :card-data="forecastStore.currentForecastData.daily[1]"
        :card-units="forecastStore.currentForecastData.current_units"
        expanded
      />
    </template>
    <template v-else-if="forecastStore.selectedRange === 'Next 7 Days'">
      <div class="flex justify-between flex-wrap gap-2">
        <forecastCard
          v-for="(day, idx) in forecastStore.currentForecastData.daily.slice(1, 8)"
          :card-data="day"
          :card-units="forecastStore.currentForecastData.current_units"
          :expanded="mediaQuery.matches ? mediaQuery.matches : activeCard === idx"
          @click="activeCard = idx"
        />
      </div>
    </template>
    <h2 class="mt-6 text-medium text-xl text-white">Today's Overview</h2>
    <div class="flex flex-wrap gap-5 mt-6">
      <humidityCard />
      <visibilityCard />
    </div>
  </div>
</template>

<style scoped>
.home {
  text-align: center;
}
</style>
