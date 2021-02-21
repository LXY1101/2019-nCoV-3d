import Vue from 'vue'
import Router from 'vue-router'
import Flatmap from '@/pages/Flatmap' 
import Heatmap from '@/pages/Heatmap' 
import Zhibo from '@/pages/Zhibo' 
import Beammap from "@/pages/Beammap"
import Zhanyi from '@/pages/Zhanyi'
import Trend from '@/pages/Trend' 
import Infomation from '@/pages/infomation' 
import Home from '@/pages/Home'   
Vue.use(Router)

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
      path: 'zhibo',
      name: 'zhibo',
      component: Zhibo
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
      path: '/trend',
      name: 'trend',
      component: Trend
    },
    {
      path: '/infomation',
      name: 'infomation',
      component: Infomation
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        
      ]
    }
  ]
})
