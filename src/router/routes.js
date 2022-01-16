
const routes = [
{
			path: '/',
			name: 'base',
			component: () => import( /* webpackChunkName: "base" */ "@/views/base.vue"),
			meta: {
				title: '首页',
				// hidden:true,
				icon: 'shouye',
				fixed: true//"/base"//fullPath
			}
		}

	

]

export default routes
