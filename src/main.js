import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueBMap from 'vue-bmap-gl';
import 'vue-bmap-gl/dist/style.css'
import VueMapvgl from 'vue-mapvgl';

import '@/assets/font/iconfont.css'
import '@/assets/css/global.less'

axios.defaults.baseURL = ' https://easy-mock.bookset.io/mock/6046d99c7c69d161fa5096f5/oxVersion'
Vue.prototype.$http = axios

Vue.use(VueBMap);
Vue.use(VueMapvgl);

VueBMap.initBMapApiLoader({
  ak: 'EGn9jFZP3OprtlX1TqIWn5diFvqFLTX7',
  // 默认百度 sdk 版本为 1.0
  v: '1.0'
});

import echarts from 'echarts'
Vue.prototype.$echarts = echarts

import dataV from '@jiaminghi/data-view';
Vue.use(dataV);

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.use(Antd)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  ak: 'EGn9jFZP3OprtlX1TqIWn5diFvqFLTX7'
})

import Storage from 'vue-ls'

// vue-ls 的配置
const storageOptions = {
  namespace: 'pro_',   // key 键的前缀（随便起）
  name: 'ls',          // 变量名称（随便起） 使用方式：Vue.变量名称 或 this.$变量名称
  storage: 'local'     // 作用范围：local、session、memory
}

Vue.use(Storage, storageOptions)
