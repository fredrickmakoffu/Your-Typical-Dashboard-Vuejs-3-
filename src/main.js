import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


// Axios defaults
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.baseURL = 'http://3.6.89.254:990/';
// axios.defaults.baseURL = 'https://www.mpost-app.com/api';

createApp(App)
    .use(router)
    .use(VueAxios, axios)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
