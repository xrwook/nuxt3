<script setup lang="ts">
import { Input } from "@progress/kendo-vue-inputs";
defineProps({
  placeholder: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false
  },
  modelValue: {
    type: String,
    default: ''
  }
});
const emit = defineEmits(["update:modelValue","focus", "blur"]);

const change = (e: any) => {
  // console.log(e.value)
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
