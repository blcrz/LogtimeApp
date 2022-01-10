import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VuetifyDialog from 'vuetify-dialog'
import 'vuetify-dialog/dist/vuetify-dialog.css'

//axios
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
//axios
Vue.use(VueAxios, axios)
Vue.use(VuetifyDialog, {
  context: {
    vuetify
  }
})

axios.defaults.baseURL = "http://localhost:3001"
// "https://topi-logtime.herokuapp.com"

new Vue({
  router,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
