import Vue from 'vue'
import App from './App.vue'
import VueMqtt from 'vue-mqtt'

Vue.use(VueMqtt,'ws://iot.eclipse.org:80/ws',{clientId: 'WebClient-' + parseInt(Math.random() * 100000)})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
