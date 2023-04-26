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
      <ul class="ul-class">
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
</style>
