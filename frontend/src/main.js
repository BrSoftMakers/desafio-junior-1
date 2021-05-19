import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './config/msgs'
import store from './store'
import vuetify from './plugins/vuetify'
import VueTheMask from 'vue-the-mask'

Vue.config.productionTip = false

Vue.use(VueTheMask)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
