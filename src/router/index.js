import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import NewArrivals from '@/components/NewArrivals'
import RegisterAccount from '@/components/RegisterAccount'
import Example from '@/components/Example'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/new-arrivals',
      name: 'NewArrivals',
      component: NewArrivals
    },
    {
      path: '/register-account',
      name: 'RegisterAccount',
      component: RegisterAccount
    },
    {
      path: '/example',
      name: 'Example',
      component: Example
    }
  ]
})
