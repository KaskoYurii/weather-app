<script setup lang="ts">
import type { ForecastRange } from '@/stores/forecastStore'
type props = {
  tabs: ForecastRange[]
  activeTab?: ForecastRange
}
const props = defineProps<props>()
defineEmits<{
  (e: 'selectTab', tab: ForecastRange): void
}>()
</script>

<template>
  <div class="tabs-wrapper">
    <div class="tabs-controls flex gap-2">
      <button
        v-for="tab in props.tabs"
        :key="tab"
        class="tab-button cursor-pointer transition-all duration-200 text-xl font-medium"
        :class="{ active: tab === props.activeTab }"
        @click="$emit('selectTab', tab)"
      >
        {{ tab }}
      </button>
    </div>
  </div>
</template>
<style scoped>
button {
  color: #818085;
  &.active {
    color: #ffffff;
    animation: bounce 0.3s ease-in-out;
  }
}
@keyframes bounce {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.9);
  }
}
</style>
