<script lang="ts" setup>
import { Button } from '@progress/kendo-vue-buttons';
import { useUserInfo } from '@/stores/userInfo';

const { login } = useAuth();
const userInfo = useUserInfo();
const loginForm = reactive({
  username: "kminchelle",
  password: "0lelplR",
})

const onLoginClick = async() => {
  try {
    const data: UserInfoInf = await login(loginForm.username, loginForm.password);
    userInfo.setUserInfo(data);
    if(data.isLogin){
      return navigateTo('/')
    }
  }
  catch (error: any) {
    console.error(error)
  }
}


</script>

<template>
  <div class="main-container">
    <div class="main-wrap">
      <header>
        <div class="logo-wrap">
          <img src="@/assets/images/github-icon.svg">
        </div>
      </header>
      <section class="login-input-section-wrap">
        <CommonInput
          placeholder="Username"
          v-model="loginForm.username"
        />
        <div class="login-input-wrap password-wrap">
          <CommonInput
            placeholder="PassWord"
            v-model="loginForm.password"
          />
        </div>
        <div class="login-button-wrap">
          <Button
            @click="onLoginClick"
          >Sign in</Button>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.main-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 21px;
  background: rgb(35, 219, 142);
}

.main-container .main-wrap {
  width: 768px;

}

.main-container .main-wrap .sel-lang-wrap .lang-select {
  width: 96px;
  height: 30px;
  color: var(--font-color);
  border: solid 1px var(--border-gray-color);
}

.main-container .main-wrap .logo-wrap {
  padding-top: 55px;
  color: rgb(0, 0, 0);
}

.main-container .main-wrap .logo-wrap img {
  width: 231px;
  height: 44px;
}

.main-container .main-wrap header .sel-lang-wrap {
  display: flex;
  justify-content: flex-end;
}

.main-container .main-wrap header .logo-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login-input-section-wrap {
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.k-form-field-wrap  {
  width: 465px;
  height: 48px;
  border: solid 1px var(--border-gray-color);
  background: white;
}

.k-textbox {
  width: 465px;
  height: 48px;
  border: solid 1px var(--border-gray-color);
  background: white;
}
.password-wrap {
  margin-top: 13px;
}

/* .login-input-wrap input {
  border: none;
  width: 430px;
  margin-top: 10px;
  font-size: 14px;
  margin-left: 10px;
  height: 30px;
} */
k-form-field-wrap
.login-button-wrap {
  padding-top: 13px;
}

.login-button-wrap button {
  width: 465px;
  height: 48px;
  font-size: 18px;
  background: var(--naver-green-color);
  color: rgb(0, 0, 0);
  border: solid 1px var(--naver-green-border-color);
}

.login-stay-sign-in {
  width: 465px;
  height: 52px;

  display: flex;
  font-size: 15px;
  color: #4e4e4e;
  align-items: center;
  justify-content: flex-start;
  border-bottom: solid 1px var(--border-gray-color);
}

.login-stay-sign-in i {
  font-size: 25px;
  color: #9ba1a3;
}

.login-stay-sign-in span {
  padding-left: 5px;
  line-height: 25px;
}

.Easy-sgin-in-wrap {

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;

}

.Easy-sgin-in-wrap h2 {
  font-size: 20px;
}

.Easy-sgin-in-wrap .sign-button-list {
  padding-top: 25px;
  list-style: none;
  width: 465px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.Easy-sgin-in-wrap .sign-button-list li {
  padding-bottom: 10px;
}

.Easy-sgin-in-wrap .sign-button-list li button {
  width: 465px;
  height: 56px;
  border: solid 1px var(--border-gray-color);
  text-align: left;
  color: rgb(0, 0, 0);
}

.Easy-sgin-in-wrap .sign-button-list li button i {
  padding-left: 15px;
  font-size: 20px;
}

.fa-qrcode {
  color: var(--naver-green-color);
}

.fa-line {
  color: var(--naver-green-color);
}

.fa-facebook-square {
  color: #4064ac;
}

.Easy-sgin-in-wrap .sign-button-list li button span {
  padding-left: 20px;
  font-size: 18px;
}

.Easy-sgin-in-wrap .forget-msg {
  color: var(--font-color);
  font-size: 14px;
  padding-top: 10px;

}

footer {

  padding-top: 95px;
  padding-bottom: 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 768px;



}

.copyright-wrap {

  display: flex;
  flex-direction: column;
  align-items: center;
  height: 15px;


}

footer .copyright-wrap span img {
  width: 59px;

  height: 11px;
}

footer .copyright-wrap span {
  font-size: 13px;
  line-height: 15px;
}</style>
