// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//引用VUE
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//引用入口文件
import App from './App'
//引用路由配置文件
import routes from './config/routes'
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
