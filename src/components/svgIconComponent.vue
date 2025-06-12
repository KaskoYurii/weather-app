<script lang="ts" setup>
import SvgIcon from '@jamescoyle/vue-icon'
defineProps({
  name: {
    type: String,
    required: true,
  },
})
</script>
<template>
  <svg-icon type="mdi" :path="name" :size="24"></svg-icon>
</template>
<style scoped></style>
