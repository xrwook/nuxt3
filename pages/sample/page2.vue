<script lang="ts" setup>
import { Card, CardBody } from "@progress/kendo-vue-layout";
import { useCounter } from '@/stores/counter';
import { useUserInfo } from '@/stores/userInfo';

definePageMeta({
  layout: "layout-type2"
})

const counter = useCounter();
const userInfo = useUserInfo();


</script>

<template>
  <div>
    <Card>
      <CardBody>
        <h1>store Data</h1>
        <div>{{ userInfo.getUserInfo }}</div>
        <div>{{ counter.getCount }}</div>
      </CardBody>
    </Card>
  </div>


</template>

<style lang="scss" scoped></style>
