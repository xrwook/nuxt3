import { defineStore } from 'pinia'

export interface CounterState {
  count: number
}

export const useCounter = defineStore('counter', {
  state: (): CounterState => ({
    count: 0,
  }),
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
    reset() {
      this.count = 0
    },
    increment2x() {
      this.count *= 2
    },
  },
})
