import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/edit',
		name: 'Create',
		props: { id: undefined },
		component: () => import(/* webpackChunkName: "edit" */ '../views/Edit.vue'),
	},
	{
		path: '/edit/:id',
		name: 'Edit',
		props(route) {
			return {
				id: parseInt(route.params.id),
			};
		},
		component: () => import(/* webpackChunkName: "edit" */ '../views/Edit.vue'),
	},
	{
		path: '/about',
		name: 'About',
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
