<script lang="ts" setup>
import svgIconComponent from '@/components/svgIconComponent.vue'
import { mdiMagnify } from '@mdi/js'
import { ref } from 'vue'
import { useForecastStore } from '@/stores/forecastStore'
const cityName = ref('')
const forecastStore = useForecastStore()
const inputRef = ref<HTMLInputElement | null>(null)

const submitCityName = () => {
  inputRef.value?.blur()
  forecastStore.submitCityName(cityName.value)
}
</script>
<template>
  <div
    class="search-city-wrapper"
    :class="{
      centered: !forecastStore.selectedCityData.name,
    }"
  >
    <div class="relative text-white">
      <input
        v-model="cityName"
        type="text"
        ref="inputRef"
        placeholder="Search City"
        @keydown.enter="submitCityName"
        @keypress="forecastStore.resetError()"
        class="text-base"
      />
      <svgIconComponent :name="mdiMagnify" class="absolute left-3 top-1/2 -translate-y-1/2" />
      <div
        class="text-sm text-red-600 animate-pulse absolute left-3"
        v-if="forecastStore.cityError"
      >
        Wrong city name, please try again :)
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.search-city-wrapper {
  &.centered {
    backdrop-filter: blur(10px); /* this is the key */
    -webkit-backdrop-filter: blur(10px); /* Safari support */
    padding: 20px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    & > .relative {
      position: absolute;
      top: 50%;
      right: 50%;
      transform: translate(50%, -50%);
      animation: moveToCenter 0.4s linear;

      & > input {
        border: 2px solid #ff0080; /* starting border color */
        border-radius: 5px;
        outline: none;
        animation: borderPulse 2s infinite;
      }
    }
  }
}
input {
  border-radius: 10px;
  padding: 0.5rem 40px;
  width: 492px;
  height: 46px;
  background-color: #1e1e1e;
  &:focus-visible {
    border: none;
    outline: none;
  }
}
@keyframes borderPulse {
  0% {
    border-color: #ff0080;
  }
  50% {
    border-color: #00ffff;
  }
  100% {
    border-color: #ff0080;
  }
}
@keyframes moveToCenter {
  0% {
    transform: translate(0, 0);
    top: 0;
    right: 0;
  }
  50% {
    transform: translate(25%, -25%);
    top: 25%;
    right: 25%;
  }
  100% {
    transform: translate(50%, -50%);
    top: 50%;
    right: 50%;
  }
}
@media screen and (max-width: 768px) {
  .search-city-wrapper {
    width: 100%;
    & > .relative {
      min-width: 80%;
    }
  }
  input {
    width: 100%;
  }
}
</style>
