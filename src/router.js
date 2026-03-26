// 正确导入
import { createRouter, createWebHistory } from "vue-router"
import Home from './components/Home.vue'
import List from './components/List.vue'
import Detail from './components/Detail.vue'

const routes = [
	{ path: '/', component: Home, meta: { title: '首页' } },
	{ path: '/list', component: List, meta: { title: '列表页' } },
	{ path: '/detail/:id', component: Detail, meta: { title: '详情页' } },
]

// 2. 创建路由实例
const router = createRouter({
	history: createWebHistory(),
	routes  // 这里对应上面的 routes 数组
})

// 路由守卫：修改页面标题
router.beforeEach((to, from, next) => {
	document.title = to.meta.title
	next()
})

export default router