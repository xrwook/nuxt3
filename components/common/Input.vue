<script setup lang="ts">
import { Input } from "@progress/kendo-vue-inputs";
// const props =
interface InputProps{
  placeholder: string;
  disabled: boolean;
  modelValue: string;
}
const props = withDefaults(defineProps<InputProps>(), {
  disabled: false,
})
const emit = defineEmits(["update:modelValue","focus", "blur"]);

const change = (e: any) => {
  emit("update:modelValue",e.value)
}
const focus = (e: any) => {
  emit("focus", e);
}
const blur = (e: any) => {
  emit("blur", e);
}
</script>

<template>
  <div class="k-form-field-wrap">
    <Input
      :value="modelValue"
      :disabled="disabled"
      :placeholder="placeholder"
      @input="change"
      @blur="focus"
      @focus="blur"
    />
  </div>
</template>


<style scoped></style>
