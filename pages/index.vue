<script setup lang="ts">
import { DropDownList } from '@progress/kendo-vue-dropdowns';
import { Button } from '@progress/kendo-vue-buttons';

interface CardContent {
  title: string;
  subtitle: string;
  content: string;
  btn1: string;
  btn2: string;
}

// compiler macro
definePageMeta({
  layout: "layout-type1",
})

// const
let currentLayout = ref("k-card-deck");
const layoutList: (string | number)[] = ["k-card-list", "k-card-group", "k-card-deck"];
const btnClickString = ref("")
const comboValue = ref("");
const comboItems: {}[] = [{id:"1", text:"1"},{id:"2", text:"2"},{id:"3", text:"3"}];
const checkValue = ref(false)

const cardList: Array<CardContent> = [...Array(6)].map((x, idx) => {
  return {
    title: `title ${idx}`,
    subtitle: `subtitle ${idx}`,
    content: `card example content ${idx} card example content ${idx} card example content ${idx} card example content ${idx} card example content ${idx} card example content ${idx} card example content ${idx}`,
    btn1: `btn1 ${idx}`,
    btn2: `btn2 ${idx}`,
  }
});

const globalinf : GlobalInf = {a: "1", b:"2"}

//method
const handleChange = (event: any) => {
  currentLayout.value = event.value
}

const bntClick = (str: string) => {
  btnClickString.value = str;
}

const apiTest = async () => {
  const { data, error } = await useFetchApi(
    "/authenticate",
    {
      method: 'post',
      body: {
        password: "admin",
        username: "admin",
      },
    }
  );
  console.log(data)
}

const comboChange = (e: any) => {

}
</script>


<template>
  <div class="example-config">
    <h6>Change taps position: {{ currentLayout }}</h6>
    <NuxtLink to="/sample/page1">Home</NuxtLink>
    <DropDownList
      :style="{ width: '230px' }"
      :data-items='layoutList'
      :default-value="'k-card-deck'"
      @change="handleChange"
    />
  </div>
  <hr />
  <div></div>

  <v-row>
    <v-col>
      <Button theme-color="primary" @click="apiTest">
        api call test2
      </Button>
    </v-col>
  </v-row>

  <v-row>
    <v-col>
      comboValue : {{ comboValue }}
      <CommonCombo
        v-model="comboValue"
        :items="comboItems"
        @comboChange="comboChange"
      />
    </v-col>
  </v-row>

  <v-row>
    <v-col>
      checkBox : {{ checkValue }}
      <CommonCheckBox
        v-model="checkValue"
        label="checkbox"

      />
    </v-col>
  </v-row>

  <v-row>
    <v-col>
      {{ btnClickString }}
    </v-col>
  </v-row>
  <div :class="currentLayout">
    <div v-for="(item, idx) in cardList" :key="idx">
      <CommonCard
        :title="item.title"
        :subtitle="item.subtitle"
        :content="item.content"
        :btn1="item.btn1"
        :btn2="item.btn2"
        @bntClick="bntClick"
      />
    </div>
  </div>
</template>

<style scoped></style>


