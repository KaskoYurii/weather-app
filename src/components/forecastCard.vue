<script lang="ts" setup>
import moment from 'moment'
import { WMO_CODES } from '@/utils/wmoCodes'
import type { CardData, CardUnits } from '@/stores/forecastStore'

// Define props with TypeScript for type safety
type Props = {
  cardData: CardData
  cardUnits: CardUnits
  expanded?: boolean
}
const props = defineProps<Props>()

// Formats the day based on the collapsed state
const getDayFormat = (day?: string) => {
  if (!props.expanded) {
    return moment(day).format('ddd').toUpperCase()
  } else {
    return moment(day).format('dddd')
  }
}

// Formats the time string into a readable format
const getTimeFormat = (time?: string) => {
  return moment(time).format('h:mm A')
}

// Generates the URL for the weather icon based on the weather code
const getIconURL = () => {
  const iconFile = WMO_CODES[props.cardData?.weather_code]?.icon
  return iconFile ? new URL(`../assets/icons/${iconFile}`, import.meta.url).href : ''
}
</script>
<template>
  <div
    class="forecast-card-wrapper p-4 transition-width duration-100 ease-in-out"
    :class="{ collapsed: !expanded, 'cursor-pointer': !expanded }"
  >
    <div class="card-header flex justify-between pb-4 font-semibold text-base">
      <span class="header-day">{{ getDayFormat(cardData.time) }}</span>
      <span class="header-time"> {{ getTimeFormat(cardData.time) }}</span>
    </div>
    <div class="card-body mt-3">
      <div class="body-content flex items-center justify-between font-semibold">
        <div class="temperature text-4xl">
          {{ cardData?.temperature_2m }} {{ cardUnits?.temperature_2m }}
        </div>
        <img :src="getIconURL()" :alt="WMO_CODES[cardData?.weather_code]?.name" />
      </div>
      <div class="body-details grid grid-cols-[auto_auto] mt-2.5 gap-1 text-xs">
        <div class="feels">
          Real Feel
          <span class="font-semibold">
            {{ cardData?.apparent_temperature }}
            {{ cardUnits?.apparent_temperature }}</span
          >
        </div>
        <div class="wind">
          Wind
          <span class="font-semibold">
            {{ cardData?.wind_speed_10m }}
            {{ cardUnits?.wind_speed_10m }}</span
          >
        </div>
        <div class="pressure">
          Pressure
          <span class="font-semibold">
            {{ cardData?.surface_pressure }}
            {{ cardUnits?.surface_pressure }}</span
          >
        </div>
        <div class="humidity">
          Humidity
          <span class="font-semibold">
            {{ cardData?.relative_humidity_2m }}
            {{ cardUnits?.relative_humidity_2m }}</span
          >
        </div>
        <div class="sunrise">
          Sunrise <span class="font-semibold">{{ getTimeFormat(cardData?.sunrise) }}</span>
        </div>
        <div class="sunset">
          Sunset <span class="font-semibold">{{ getTimeFormat(cardData?.sunset) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.forecast-card-wrapper {
  max-width: 257px;
  background-color: #bbd7ec;
  border-radius: 25px;
  color: #0f0f11;
  height: 226px;
  & > .card-header {
    position: relative;
    z-index: 0;
    &::after {
      z-index: -1;
      content: '';
      position: absolute;
      top: calc(var(--spacing) * -4);
      left: calc(var(--spacing) * -4);
      right: calc(var(--spacing) * -4);
      bottom: 0;
      border-radius: 25px 25px 0 0;
      background-color: #aecadf;
    }
  }
  & > .card-body {
    & > .body-details {
      animation: showContent 0.3s ease-in-out;
      color: #4f5658;
      span {
        color: #0f0f11;
      }
    }
  }
  &.collapsed {
    background-color: #1b1b1d;
    color: #fdfdfd;
    max-width: 96px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & > .card-header {
      &::after {
        display: none;
      }
      border-bottom: 1px solid #39393a;
      display: block;
      & > .header-time {
        display: none;
      }
    }
    & > .card-body {
      height: 100%;
      & > .body-content {
        flex-direction: column-reverse;
        justify-content: space-around;
        height: 100%;
      }
      & > .body-details {
        display: none;
      }
    }
  }
}
@keyframes showContent {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@media screen and (max-width: 768px) {
  .forecast-card-wrapper {
    max-width: 100%;
    width: 100%;
  }
}
</style>
