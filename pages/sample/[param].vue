<script setup lang="ts">
  const router = useRoute().params
</script>

<template>
  <div>
    <h1>{{ router.param }}</h1>
  </div>
</template>

<style scoped>

</style>
