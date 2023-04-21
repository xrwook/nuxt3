<script lang="ts" setup>
</script>

<template>
  <div>
    <slot name="header">
      <LayoutType1Header/>
    </slot>
  </div>
  <div>
    <slot />
  </div>
  <div>
    <slot name="footer">
      <LayoutType1Footer/>
    </slot>
  </div>

</template>
<style scoped>

</style>