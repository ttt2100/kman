// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
//功能:引入第三方组件库mint-ui
// 1:完整引入mint-ui组件库中所有组件
import MintUI from "mint-ui"
//2:单引入mint-ui库中样式文件
import "mint-ui/lib/style.css"
//3:将mint-ui注册Vue示例
Vue.use(MintUI)
// 引入axios
import axios from "axios"
// 配置服务器基础路径
axios.defaults.baseURL="http://127.0.0.1:5050/";
// 配置保存session信息
axios.defaults.withCredentials=true;
Vue.prototype.axios=axios;
// 9.引入vuex模块
import Vuex from "vuex"
// 10.注册vuex
Vue.use(Vuex)
// 11.创建存储对象
var store = new Vuex.Store({
  state:{//共享数据
    
  },
  mutations:{ //修改共享数据
    
  },
  getters:{//获取共享数据
   
  },
  actions:{//异步修改数据
  
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
