import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/store'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  created() {
    // Check whether there is user data in local storage upon user reload
    const userString = localStorage.getItem('user')
    // If there is data in local storage then to reload it into VUEX
    if (userString) {
      const userData = JSON.parse(userString)
      this.$store.commit('SET_USER_DATA', userData)
    }

    // TODO need to review doesn't seem to work as when put in fake user id
    axios.interceptors.response.use(
      response => response,
      error => {
        if (error.response.status === 401) {
          this.$store.dispatch('logout')
        }
        return Promise.reject(error)
      }
    )
  },
  render: h => h(App)
}).$mount('#app')
