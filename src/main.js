import Vue from 'vue'
import App from './App.vue'

// import User from './components/User.vue'

// Vue.component('user',User)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
