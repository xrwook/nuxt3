<script lang="ts" setup>
let message = "layout-type2";
let teamMessage = "LayoutType2Header"

const router = useRouter();

const routeEvnt = (path: string) => {
  router.push({ path: `/${path}` });
}

</script>

<template>
  <div class="header header-bg">
    <div class="nav-container">
      <div class="title">
        <h1 @click="routeEvnt('')">{{ message }}</h1>
        <span class="vl"></span>
        <h2>{{ teamMessage }}</h2>
      </div>
      <!-- <Avatar :rounded="'full'" :type="'image'" :style="{ width: '40px', height: '40px', 'flex-basis': '40px' }">
        <img src="https://www.telerik.com/kendo-react-ui-develop/components/images/kendoka-react.png" />
      </Avatar> -->
    </div>
  </div>
</template>
<style scoped>
</style>