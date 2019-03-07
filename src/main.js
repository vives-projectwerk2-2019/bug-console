import Vue from 'vue'
import App from './App.vue'
import VueMqtt from 'vue-mqtt'
import dotenv from 'dotenv'
dotenv.config()

Vue.use(VueMqtt, 'mqtt://'+ process.env.VUE_APP_BROKER_HOST ,{clientId: 'WebClient-' + parseInt(Math.random() * 100000)})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
