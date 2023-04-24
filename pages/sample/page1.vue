<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { Button } from '@progress/kendo-vue-buttons';
import { Card, CardBody } from "@progress/kendo-vue-layout";
import { useCounter } from '@/stores/counter';
import { Input } from '@progress/kendo-vue-inputs';

const emit = defineEmits(['numResult'])

definePageMeta({
  layout: "layout-type2"
})

const count = useCounter();
const result = ref(0);
const inputData = ref("inputData");
const routePath = ref("default");
const router = useRouter();

//state
onMounted(async () => {
  inputData.value = "onMounted"
});
const computedExample = computed(() => {
  return ` computed ${result.value}`
});

watch(inputData, (newVal, oldVal) => {
  console.log(`newVal => ${newVal}`)
  console.log(`oldVal => ${oldVal}`)
});

//method
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

const inputChange = (e: any): string => {
  return e.value;
}

const dynamicRouteParams = (param: any) => {
  routePath.value = param?.value;
}

const dynamicRouteMove = () => {
  router.push({ path: `/sample/${routePath.value}` });
}

</script>

<template>
  <div>
    <Card>
      <CardBody>
        <Button :theme-color="'primary'" @click="plusEvent(1)">++</Button>
        <Button :theme-color="'primary'" @click="minusEvent(1)">--</Button>
      </CardBody>
    </Card>
  </div>

  <Card>
    <CardBody>
      <div>reslut: {{ result }}</div>
      <div>{{ computedExample }}</div>
    </CardBody>
  </Card>

  <Card>
    <CardBody>
      <div>
        watch example
        <Input v-model="inputData" @change="inputChange"></Input>
      </div>
    </CardBody>
  </Card>

  <Card>
    <CardBody>
      <div>
        dynamic route
        <Input v-model="routePath" @change="dynamicRouteParams"></Input>
        <Button :theme-color="'primary'" @click="dynamicRouteMove">dynamic route move</Button>
      </div>
    </CardBody>
  </Card>



</template>

<style lang="scss" scoped></style>
