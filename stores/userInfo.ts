import { defineStore } from 'pinia'

export interface UserInfo {
  name: string;
  auth: string;
  userId: string;
}

export const useUserInfo = defineStore('identity', {
  state: (): UserInfo => ({
    name: '',
    auth: '',
    userId: '',
  }),
  actions: {
    setUserInfo(user: UserInfo){
      this.name = user.name
      this.auth = user.auth
      this.userId = user.userId
    }
  },
  getters: {
    getUserInfo(): string {
      return `userInfo ==> ${this.name} ${this.auth} ${this.userId}`
    },
  },
})
