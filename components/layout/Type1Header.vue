<script lang="ts" setup>
import { AppBar, AppBarSection, AppBarSpacer, Avatar, } from "@progress/kendo-vue-layout";
import { Button } from "@progress/kendo-vue-buttons";
import { BadgeContainer } from "@progress/kendo-vue-indicators";
let kendokaAvatar = "https://www.telerik.com/kendo-react-ui-develop/components/images/kendoka-react.png";
import { useUserInfo } from '@/stores/userInfo';

const userInfo = useUserInfo();
const { logout } = useAuth();

</script>

<template>
  <AppBar>
    <AppBarSection>
      <Button :icon="'menu'" :fill-mode="'flat'" />
    </AppBarSection>

    <AppBarSpacer :width="4" />

    <AppBarSection>
      <h1 class="title">layout-type1 Header</h1>
    </AppBarSection>

    <AppBarSpacer :width="32" />

    <AppBarSection>
      <ul class="ul-class">
        <li>
          <CommonPageLink to="/sample/page1">samplePage1</CommonPageLink>
        </li>
        <li>
          <CommonPageLink to="/sample/page2">samplePage2 auth</CommonPageLink>
        </li>
        <li>
          <CommonPageLink to="/">samplePage3</CommonPageLink>
        </li>
        <li v-if="!userInfo.isLogin">
          <CommonPageLink to="/Login">Login</CommonPageLink>
        </li>
        <li v-if="userInfo.isLogin">
          <Button @click="logout" >logout</Button>
        </li>
      </ul>
    </AppBarSection>

    <AppBarSpacer />

    <AppBarSection class="actions">
      <button class="k-button k-button-md k-rounded-md k-button-flat k-button-flat-base">
        <BadgeContainer :shape="'dot'" :themeColor="'info'" :size="'small'" :position="'inside'">
          <span class="k-icon k-i-bell" />
        </BadgeContainer>
      </button>
    </AppBarSection>

    <AppBarSection>
      <span class="k-appbar-separator" />
    </AppBarSection>

    <AppBarSection>
      <Avatar type="image">
        <img :src="kendokaAvatar" />
      </Avatar>
    </AppBarSection>
  </AppBar>
</template>

<style scoped>
</style>
