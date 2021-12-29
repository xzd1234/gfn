
export default [
    {
        path: '/user',
        name: 'user',
        component: () => import('../views/user/User.vue'),
        redirect:'/user/home',
        children: [
            {
                path: 'home',
                name: 'home',
                component: () => import('../views/user/Home.vue'),
                meta: {
                    transition: 'slide-right',
                    title: '首页',
                    keepAlive: false
                }
            },
            {
                path: 'mine',
                name: 'mine',
                component: () => import('../views/user/Mine.vue'),
                meta: {
                    transition: 'slide-right',
                    title: '我的',
                    keepAlive: false
                }
            },
            {
                path: 'order',
                name: 'order',
                component: () => import('../views/user/Order.vue'),
                meta: {
                    transition: 'slide-left',
                    title: '订单'
                }
            }, {
                path: 'orderlist',
                name: 'orderlist',
                component: () => import('../views/order/OrderList.vue'),
                meta: {
                    transition: 'slide-left',
                    title: '订单详情'
                }
            },
            
        ]
    },


]