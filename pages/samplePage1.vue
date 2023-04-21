<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { Button } from '@progress/kendo-vue-buttons';
import { Card, CardBody } from "@progress/kendo-vue-layout";
import { useCounter } from '@/stores/counter';

const emit = defineEmits(['numResult'])

definePageMeta({
  layout: "layout-type2"
})
const count = useCounter();
const result = ref(0)
const plusEvent = (num: number) => {
  result.value = result.value + num;
  count.increment();
  emit("numResult", result);
}
const minusEvent = (num: number) => {
  result.value = result.value - num;
  count.decrement();
  emit("numResult", result);
}


</script>

<template>
  <div>
    <v-row>
      <v-col :cols="6">
        <Card>
          <CardBody>
            <Button
              :theme-color="'primary'"
              @click="plusEvent(1)"
            >++</Button>
            <Button
              :theme-color="'primary'"
              @click="minusEvent(1)"
            >--</Button>
          </CardBody>
        </Card>
      </v-col>
    </v-row>
  </div>
  
  <div>reslut: {{ result }}</div>
</template>

<style lang="scss" scoped></style>
