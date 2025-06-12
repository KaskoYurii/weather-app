<script setup lang="ts">
import citySearch from '@/components/citySearch.vue'
import selectedLocation from '@/components/selectedLocation.vue'
</script>
<template>
  <div class="flex items-center flex-wrap gap-2 justify-between">
    <selectedLocation />
    <citySearch />
  </div>
</template>

<style scoped></style>
