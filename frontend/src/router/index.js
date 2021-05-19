import Vue from 'vue'
import VueRouter from 'vue-router'
import Animais from '../views/Animais.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Animais',
    component: Animais
  },

]

const router = new VueRouter({
  routes
})

export default router
