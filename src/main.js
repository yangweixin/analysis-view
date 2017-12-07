// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//引用VUE
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import api from './config/api'
Vue.protoType.$api = api
//引用入口文件
import App from './App'
//引用路由配置文件
import routes from './config/routes'
//引用api文件
import api from './config/api'
//将API方法绑定到全局
Vue.prototype.$api = api
//使用配置文件规则
const router = new VueRouter({
	routes
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render:(h)=>h(App)
})
