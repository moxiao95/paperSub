import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
// 登录
import Login from '../views/Login.vue';
// 首页
import First from '../views/First.vue';
// 通告
import Announcement from '../views/Announcement.vue';
// 数据
import Data from '../views/Data.vue';
// 帮助
import Help from '../views/Help.vue';

// 确定选题页面
import Topic from '../views/info/Topic.vue';
// 初稿页面
import FirstPaper from '../views/info/FirstPaper.vue';
// 终稿页面
import LastPaper from '../views/info/LastPaper.vue';
// 查重页面
import Repeat from '../views/info/Repeat.vue';
// 答辩页面
import Defence from '../views/info/Defence.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '',
		name: 'Home',
		component: Home,
		children: [
			// 首页
			{
				path: '',
				name: '',
				component: First,
			},
			// 公告
			{
				path: 'announcement',
				name: 'announcement',
				component: Announcement,
			},
			// 数据
			{
				path: 'data',
				name: 'data',
				component: Data,
			},
			// 帮助
			{
				path: 'help',
				name: 'help',
				component: Help,
			},
			// 选题页面
			{
				path: '/topic',
				name: 'Topic',
				component: Topic,
			},
			// 初稿
			{
				path: '/fpaper',
				name: 'FirstPaper',
				component: FirstPaper,
			},
			// 终稿
			{
				path: '/lpaper',
				name: 'LastPaper',
				component: LastPaper,
			},
			// 查重
			{
				path: '/repeat',
				name: 'Repeat',
				component: Repeat,
			},
			// 答辩
			{
				path: '/defence',
				name: 'Defence',
				component: Defence,
			},
		],
	},
	// 关于
	{
		path: '/about',
		name: 'About',
		component: About,
	},
	// 登录
	{
		path: '/login',
		name: 'Login',
		component: Login,
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

router.beforeEach((to, from, next) => {
	let dc = localStorage.getItem('cookies');
	if (dc == null && to.name !== 'Login') {
		next('/login');
	} else {
		next();
	}
});

export default router;
