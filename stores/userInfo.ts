import { defineStore } from 'pinia'

export interface UserInfo {
  userId: number;
  id: number;
  title: string;
  completed?: boolean;
}

export const useUserInfo = defineStore('userInfo', {
  state: (): UserInfo => ({
    userId: 0,
    id: 0,
    title: "",
    completed: false,
  }),
  actions: {
    setUserInfo(user: UserInfo){
      this.userId = user.userId;
      this.id = user.id;
      this.title = user.title;
      this.completed = user.completed;
    }
  },
  getters: {
    getUserInfo(): string {
      return `userInfo ==> ${this.userId} ${this.id}  title: ${this.title}`
    },
  },
})
