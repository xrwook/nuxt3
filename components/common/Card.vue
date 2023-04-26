<script setup lang="ts">
import { Card, CardBody, CardTitle, CardActions, } from "@progress/kendo-vue-layout";
import { Button } from '@progress/kendo-vue-buttons';

interface CardProps {
  title: string;
  subtitle: string;
  content: string;
  btn1: string;
  btn2: string;
}
const props = defineProps<CardProps>();
const emit = defineEmits(['bntClick'])
const bntClick = (type: string) => {
  emit("bntClick", type);
}
</script>

<template>
  <div>
    <Card style="width: 230px">
      <CardBody>
        <CardTitle>{{ title }}</CardTitle>
        <CardTitle>{{ subtitle }}</CardTitle>
        <p>{{ content }}</p>
      </CardBody>
      <CardActions>
        <Button
          fill-mode="flat"
          theme-color="primary"
          @click="bntClick(`btn1 ${title}`)"
        >
          {{ btn1 }}
        </Button>
        <Button
          fill-mode="flat"
          theme-color="primary"
          @click="bntClick(`btn2 ${subtitle}`)"
        >
          {{ btn2 }}
        </Button>
      </CardActions>
    </Card>
  </div>
</template>

<style scoped></style>
