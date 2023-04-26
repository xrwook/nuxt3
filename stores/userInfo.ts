import { defineStore } from "pinia";

export const useUserInfo = defineStore("userInfo", {
  state: (): UserInfoInf => ({
    id: 0,
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    gender: "",
    isLogin: false,
  }),
  actions: {
    setUserInfo(user: UserInfoInf) {
      this.id = user.id;
      this.username = user.username;
      this.email = user.email;
      this.firstName = user.firstName;
      this.lastName = user.lastName;
      this.gender = user.gender;
      this.isLogin = user.isLogin;
    },
  },
  getters: {
    getUserInfo(): string {
      return `userInfo ==>  ${this.id}  `;
    },
  },
});
