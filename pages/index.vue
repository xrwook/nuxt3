<script setup lang="ts">
import { Card, CardBody, CardTitle, CardActions, } from "@progress/kendo-vue-layout";
import { DropDownList } from '@progress/kendo-vue-dropdowns';
import { Button } from '@progress/kendo-vue-buttons';

interface CardContent {
  title: string;
  subtitle: string;
  content: string;
  btn1: string;
  btn2: string;
}

interface UserInfo {
  userId: number;
  id: number;
  title: string;
  completed: false;
}

definePageMeta({
  layout: "layout-type1"
})

const config = useRuntimeConfig();

let currentLayout = ref("k-card-deck");
const layoutList: (string | number)[] = ["k-card-list", "k-card-group", "k-card-deck"];

const handleChange = (event: any) => {
  currentLayout.value = event.value
}

const cardList: Array<CardContent> = [...Array(6)].map((x, idx) => {
  return {
    title: `title ${idx}`,
    subtitle: `subtitle ${idx}`,
    content: `card example content ${idx}card example content ${idx}card example content ${idx}card example content ${idx}card example content ${idx}card example content ${idx}`,
    btn1: `btn1 ${idx}`,
    btn2: `btn2 ${idx}`,
  }
});

onMounted( async () => {
  const {data, error} = await useFetchApi(
    "/authenticate",
    {
      method: 'post',
      body: {
        password: "admin",
        userId: "admin",
      },
    }
  );
  
  console.log(data)
});

</script>


<template>
  <div class="example-config">
    <h6>Change taps position: {{ currentLayout }}</h6>
    <DropDownList :style="{ width: '230px' }" :data-items='layoutList' :default-value="'k-card-deck'" @change="handleChange"/>
  </div>
  <hr />
  <div :class="currentLayout">
    <Card style="width: 200px" v-for="(item, idx) in cardList" :key="idx">
      <CardBody>
        <CardTitle>{{ item.title }}</CardTitle>
        <CardTitle>{{ item.subtitle }}</CardTitle>
        <p>{{ item.content }}</p>
      </CardBody>
      <CardActions>
        <Button :fill-mode="'flat'" :theme-color="'primary'">{{ item.btn1 }}</Button>
        <Button :fill-mode="'flat'" :theme-color="'primary'">{{ item.btn2 }}</Button>
      </CardActions>
    </Card>
  </div>

</template>

<style scoped></style>