import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import UUID from 'vue-uuid'
import moment from 'moment'
import './registerServiceWorker'

 
// Vue.use(UUID, moment, VueAxios, axios);
Vue.use(UUID);
Vue.use(moment);


Vue.config.productionTip = false

Vue.filter('fromNow', function(timestamp){
    if (!timestamp) return '';
    return moment(timestamp).fromNow();
});

Vue.filter('dateTimeFormat', function(timestamp){
    if (!timestamp) return '';
    return moment(timestamp).format("dddd, MMMM Do YYYY, h:mm:ss a");
});

Vue.filter('toCurrency', function (value) {
    if (typeof value !== "number") {
        return value;
    }
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    });
    return formatter.format(value);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
