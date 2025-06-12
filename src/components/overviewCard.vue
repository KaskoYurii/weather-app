<script lang="ts" setup>
type Props = {
  icon: string
  title: string
  value: string
  description?: string
  descriptionIcon: string
}
defineProps<Props>()
const getIconURL = (icon: string): string => {
  return new URL(`../assets/icons/${icon}`, import.meta.url).href
}
</script>
<template>
  <div class="overview-card-wrapper p-6 flex flex-col justify-between">
    <div class="card-title text-white text-base">{{ title }}</div>
    <div class="card-icon flex justify-center"><img :src="getIconURL(icon)" /></div>
    <div class="card-data flex align-center justify-between gap-10">
      <div class="value text-white font-semibold text-xl">{{ value }}</div>
      <div class="description font-medium text-sm flex gap-1">
        <img :src="getIconURL(descriptionIcon)" />
        <div class="text">{{ description }}</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.overview-card-wrapper {
  width: 350px;
  height: 245px;
  border-radius: 15px;
  background-color: #1b1b1d;
  .description {
    color: #818085;
    & > img {
      height: 24px;
      width: 24px;
    }
  }
}
@media screen and (max-width: 768px) {
  .overview-card-wrapper {
    width: 100%;
  }
}
</style>
