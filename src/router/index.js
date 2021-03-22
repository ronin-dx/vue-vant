import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'Index',
		component: () => import("@/views/index/index"),
		meta: {
			title: '首页',
			keepAlive: true
		}
	},
	{
		path: '/my',
		name: 'My',
		component: () => import("@/views/my/index"),
		meta: {
			title: '我的',
			keepAlive: true
		}
	},
	{
		path: '/login',
		component: () => import("@/views/login/index"),
		meta: {
			title: '登陆',
			keepAlive: true
		}
	},
	{
		path: '/404',
		component: () => import("@/views/404"),
		meta: {
			title: '页面错误'
		}
	},
	{
		path: '*',
		redirect: '/404'
	}
]



const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

router.beforeEach((to, from, next) => {
	if (to.meta.title) {
		document.title = to.meta.title
	}
	next()
})

export default router
