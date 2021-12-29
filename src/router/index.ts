import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Index from '../views/Index.vue'
import user from './user'
const routes: Array<RouteRecordRaw> = [
  {
    path:'/hello',
    name:'hello',
    component:()=>import('../components/HelloWorld.vue')
  },
  {
    path: '/',
    name: 'index',
    component: Index,
    meta: {
      transition: 'slide-left',
      title: '导航',
      keepAlive: true
    },

  },
  ...user,
  {
    path: '/payment'
    , name: 'payment',
    component: () => import('../views/pay/payment.vue'),
    meta: {
      transition: 'slide-left',
      title: '支付',
      keepAlive: true
    },
  },
  {
    path: '/list'
    , name: 'list',
    component: () => import('../views/List.vue'),
    meta: {
      transition: 'slide-left',
      title: '医护上门',
      keepAlive: true
    },
  }, {
    path: '/orderlist',
    name: 'orderlist',
    component: () => import('../views/order/OrderList.vue'),
    meta: {
      transition: 'slide-left',
      title: '订单详情'
    }
  },
  {
    path: '/projectlist',
    name: 'projectlist',
    component: () => import('../views/project/ProjectList.vue'),
    meta: {
      transition: 'slide-left',
      title: '项目列表'
    }
  },
  {
    path: '/projectintro',
    name: 'projectintro',
    component: () => import('../views/project/ProjectIntro.vue'),
    meta: {
      transition: 'slide-left',
      title: '项目介绍'
    }
  },
  {
    path: '/appointment',
    name: 'appointment',
    component: () => import('../views/Appointment.vue'),
    meta: {
      transition: 'slide-left',
      title: '项目介绍'
    }
  },
  {
    path: '/patientlist',
    name: 'patientlist',
    component: () => import('../views/PatientList.vue'),
    meta: {
      transition: 'slide-left',
      title: '就诊人列表'
    }
  },
  {
    path: '/patient',
    name: 'patient',
    component: () => import('../views/Patient.vue'),
    meta: {
      transition: 'slide-left',
      title: '就诊人'
    }
  },
  {
    path: '/map',
    name: 'map',
    component: () => import('../views/map/index.vue'),
    meta: {
      transition: 'slide-left',
      title: '高德地图'
    }
  },
  /* 
  {
    path: '/inquiry',
    name: 'inquiry',
    component: () => import('../views/Inquiry.vue'),
    meta: {
      transition: 'slide-right',
      title: '问诊'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
    meta: {
      transition: 'slide-right',
      title:'登录'
    }
  },
  {
    path: '/city',
    name: 'city',
    component: () => import('../views/City.vue'),
    meta: {
      transition: 'slide-right',
      title:'定位'
    }
  },*/
  {
    path: '/wallet',
    name: 'wallet',
    component: () => import('../views/pay/Wallet.vue'),
    meta: {
      transition: 'slide-right',
      title: '钱包'
    }
    ,
  },
  {
    path: '/diagnosis',
    name: 'diagnosis',
    component: () => import('../views/user/Diagnosis.vue'),
    meta: {
      transition: 'slide-right',
      title: '诊疗记录'
    }
    ,
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return { top: 0 }
  }
})

router.beforeEach((to: any, from) => {
 // console.log(to, from)
  document.title = to.meta.title

})
export default router
