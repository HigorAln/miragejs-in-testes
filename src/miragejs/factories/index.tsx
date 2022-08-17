import { Factory } from 'miragejs'

export default {
  product: Factory.extend({
    title(i: number) {
      return `Product ${i + 1}`
    },
    price(){
      return Math.round(Math.random()* 100)
    },
    userId: 1
  })
}