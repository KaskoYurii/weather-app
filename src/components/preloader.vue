<script lang="ts" setup>
import { useForecastStore } from '@/stores/forecastStore'
const forecastStore = useForecastStore()
</script>
<template>
  <div class="preloader-wrapper" v-if="forecastStore.preloaderState">
    <div class="flex items-center justify-center gap-2">
      <svg
        class="mr-3 -ml-1 size-5 animate-spin text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
      <div class="text-white">Loading...</div>
    </div>
  </div>
</template>
<style scoped>
.preloader-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px); /* Apply blur effect */
  -webkit-backdrop-filter: blur(10px); /* Safari support */
  z-index: 1000; /* Ensure it is above other content */
  & > svg {
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    animation: moveToCenter 0.4s linear;
  }
}
</style>
