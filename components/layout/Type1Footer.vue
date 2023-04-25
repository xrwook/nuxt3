<script lang="ts" setup>
import { AppConfigInput } from '@nuxt/schema'
import p from '../../package.json'
import { AppBar, AppBarSection, AppBarSpacer } from "@progress/kendo-vue-layout";
// Type Assertion
const app = useAppConfig() as AppConfigInput
const icons: string[] = [
  'mdi-facebook',
  'mdi-twitter',
  'mdi-linkedin',
  'mdi-instagram'
]
</script>

<template>
  <AppBar :theme-color="'dark'">
    <AppBarSpacer :width="150" />
    <AppBarSection>
      <ul>
        <li>
          <span>1. {{ app.name }}</span>
        </li>
        <li>
          <span>2. {{ app.author.name }}</span>
        </li>
        <li>
          <span>nuxt version {{ p.devDependencies.nuxt }}</span>
        </li>
        <li>
          <span>test</span>
        </li>
        <li>
          <span>test2</span>
        </li>
      </ul>
    </AppBarSection>

    <AppBarSpacer :width="100" />
  </AppBar>
</template>

<style scoped>
.title {
  font-size: 18px;
  margin: 0;
}

ul {
  font-size: 14px;
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
}

li {
  margin: 0 10px;
}

li:hover {
  cursor: pointer;
  color: #84cef1;
}

.k-button k-button-md k-rounded-md k-button-solid k-button-solid-base {
  padding: 0;
}

.k-badge-container {
  margin-right: 8px;
}
</style>
