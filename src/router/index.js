import Vue from 'vue'
import Router from 'vue-router'
const login = resolve => require(['../page/login/login.vue'], resolve); //登陆
const HelloWorld = resolve => require(['../components/HelloWorld.vue'], resolve); //登陆
const list = resolve => require(['../components/list.vue'], resolve); //登陆


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'list',
      component: list
    }
  ]
})
