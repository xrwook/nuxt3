<script setup lang="ts">
import { Menu } from "@progress/kendo-vue-layout";
const router = useRouter();

interface MenuObj {
  text: string
  cssStyle: {
    paddingBottom: string;
    paddingTop: string;
    paddingLeft: string;
  },
  icon: string;
  data: {
    path: string;
  },
  id: number;
}

const menuItems: Array<MenuObj> = [...Array(10)].map((_x, idx) => {
  return {
    text: `SampleLayout${idx}Page`,
    cssStyle: {
      paddingBottom: "10px",
      paddingTop: "10px",
      paddingLeft: "5px",
    },
    icon: "k-icon k-i-grid",
    data: {
      path: "",
    },
    id: idx,
  }
});
const onSelect = ({ item }:any) => {
  router.push({ path: `/${item.data.path}` });
}

menuItems
</script>

<template>
  <div>
    <Menu :items="menuItems" @select="onSelect" :vertical="true" />
  </div>
</template>

<style scoped></style>