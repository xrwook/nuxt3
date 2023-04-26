<script setup lang="ts">
import { Checkbox } from '@progress/kendo-vue-inputs';

interface CheckboxProps {
  modelValue: boolean;
  label?: string;
  disabled?: boolean;
}

const props = withDefaults(defineProps<CheckboxProps>(), {
  disabled: false
});

const emit = defineEmits(["update:modelValue", "checkBoxChange"])
const change = (e: any) => {
  emit("update:modelValue", e.value)
  emit("checkBoxChange", e)
}
</script>

<template>
  <div>
    <Checkbox
      :value="modelValue"
      :disabled="disabled"
      :label="label"
      @change="change"
    />
  </div>
</template>

<style scoped>

</style>
