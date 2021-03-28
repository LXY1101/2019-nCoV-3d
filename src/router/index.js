import Vue from 'vue'
import Router from 'vue-router'
import Flatmap from '@/pages/Flatmap'
import Heatmap from '@/pages/Heatmap'
import Beammap from "@/pages/Beammap"
import Zhanyi from '@/pages/Zhanyi'
import Universal from '@/pages/Universal'
import Trend from '@/pages/Trend'
import Infomation from '@/pages/infomation'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: 'flatmap/:area',
      name: 'flatmap',
      component: Flatmap
    },
    {
      path: 'heatmap',
      name: 'heatmap',
      component: Heatmap
    },
    {
      path: 'beammap/:area',
      name: 'beammap',
      component: Beammap
    },
    {
      path: 'zhanyi',
      name: 'zhanyi',
      component: Zhanyi
    },
    {
      path: '/universal',
      name: 'universal',
      component: Universal
    },
    {
      path: '/infomation',
      name: 'infomation',
      component: Infomation
    },{
      path: '/trend',
      name: 'trend',
      component: Trend
    },
  ]
})
