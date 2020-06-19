// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App'
import Routes from './routes'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(VueRouter)

//全局 自定义指令 Vue.directive 博客标题颜色随机
Vue.directive('rainbow',{
  bind(el,binding,vnode){
    el.style.color = "#" + Math.random().toString(16).slice(2,8)
  }
})
//全局 自定义指令 Vue.directive 指定页面最大宽度
Vue.directive('theme',{
  bind(el,binding,vnode){
    console.log(binding.value)
    if(binding.value == 'wide'){
      el.style.maxWidth = '1260px';
    } else if(binding.value == 'narrow'){
      el.style.maxWidth = '560px';
    }
    //指定页面背景色和padding
    if(binding.arg == 'column'){
      el.style.background = "#6677cc";
      el.style.padding = '20px';
    }
  }
})

//全局 自定义过滤器 Vue.filter 博客标题字母大写
Vue.filter("to-uppercase",function(value){
  return value.toUpperCase();
})
//全局 自定义过滤器 Vue.filter 缩短博客内容长度
Vue.filter("snippet",function(value){
  return value.slice(0,100) + "...";
})

//创建路由
const router =new VueRouter({
  routes: Routes,
  mode: "history"
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router: router
})
