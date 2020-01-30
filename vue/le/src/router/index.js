import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '新型肺炎实时数据',
      component: index
    }
  ]
})
