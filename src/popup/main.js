import Vue from 'vue'
import App from './App.vue'
import router from '../router'
import store from '../store'
import Helloworld from "@/components/HelloWorld.vue";
import Form from "@/components/Form.vue";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  Form,
  Helloworld,
  
  render: h => h(App)
}).$mount('#app')
