//import { createApp } from 'vue'
//import App from './App.vue'
// import Axios from 'axios';

//const app = createApp(App);
//const axiosInstance = Axios.create({
   // withCredentials: true
//})
// 在 Vue 3 中，可以使用 provide 来提供属性
//app.provide('axios', axiosInstance); // 在这里提供 axios 实例

//app.mount('#app');
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);
app.mount('#app');
