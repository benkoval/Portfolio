import Vue from 'vue'
import App from './App.vue'
import './styles.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueScrollProgress from 'vue-scroll-progress'

Vue.config.productionTip = false
Vue.use(VueScrollProgress)

new Vue({
  created () {
    AOS.init()
  },
  render: h => h(App),
}).$mount('#app')
