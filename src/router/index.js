import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Politicos from '@/components/Politicos'
import PoliticoPage from '@/components/PoliticoPage'
import Perfil from '@/components/Perfil'
import Sobre from '@/components/Sobre'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/politicos',
      name: 'politicos',
      component: Politicos
    },
    {
      path: '/politico/bla',
      name: 'politico-page',
      component: PoliticoPage
    },
    {
      path: '/sobre',
      name: 'sobre',
      component: Sobre
    },
    {
      path: '/politico',
      name: 'perfil',
      component: Perfil
    }
  ]
})
