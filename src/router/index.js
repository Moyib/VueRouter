import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import features from '@/components/features'
import contact from '@/components/contact'
import about from '@/components/about'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/features',
      name: 'features',
      component: features
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/about',
      name: 'about',
      component: about
    }
  ]
})
