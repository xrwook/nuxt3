<script setup lang="ts">
import { DropDownList } from '@progress/kendo-vue-dropdowns';

interface ComboProps {
  items: Array<any>;
  modelValue: string;
  disabled?: boolean;
  textFiled?: string;
  keyFiled?: string
}

const props = withDefaults(defineProps<ComboProps>(), {
  items: () => [],
  textFiled: "text",
  keyFiled: "id"
})

const value = ref({})
const emit = defineEmits(["update:modelValue"])
const change = (e: any) => {
  value.value = e.value;
  emit("update:modelValue", e.value[props.keyFiled])
}
</script>

<template>
  <div>
    <DropDownList
      :style="{ width: '230px' }"
      :data-items="items"
      :text-field="textFiled"
      :data-item-key="keyFiled"
      :disabled="disabled"
      :value="value"
      @change="change"
    />
  </div>
</template>

<style scoped></style>
