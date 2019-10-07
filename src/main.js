import Vue from 'vue'
import App from './App.vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './lib/css/mui.min.css'

Vue.use(MintUI)


new Vue({
  el: '#app',
  render: h => h(App)
})
