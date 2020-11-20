import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Login from '../views/Login.vue';
import First from '../views/First.vue';
import Announcement from '../views/Announcement.vue';
import Data from '../views/Data.vue';
import Help from '../views/Help.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		children: [
			{
				path: '',
				component: First,
			},
			{
				path: 'announcement',
				component: Announcement,
			},
			{
				path: 'data',
				component: Data,
			},
			{
				path: 'help',
				component: Help,
			},
		],
	},
	{
		path: '/about',
		name: 'About',
		component: About,
	},
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
