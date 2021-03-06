// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'

Vue.config.productionTip = false

Vue.use(VueResource)

//自定义指令
Vue.directive('rainbow',{
  bind(el,binding,vnode){
    el.style.color = "#" + Math.random().toString(16).slice(2,8)
  }
})

Vue.directive('theme',{
  bind(el,binding,vnode){
    if(binding.value == 'wide'){
      el.style.maxWidth = '1260px';
    }
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
