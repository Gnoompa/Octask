import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './Login.vue'
import Dashboard from './Dashboard.vue'

Vue.use(VueRouter)

var router = new VueRouter(
	{		
		routes: [
			{
				path: '/login',			
				alias: '/',
				components: {
					login: Login
				}
			},
			{	
				path: '/',
				components: {
					dashboard: Dashboard
				}
			}
		]
	}	
)

new Vue({
	el: '#app',
	router,
	render: (c) => c(Dashboard)
})
