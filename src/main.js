import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify'
import VueTypedJs from 'vue-typed-js'

Vue.config.productionTip = false

Vue.use(VueTypedJs)
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
