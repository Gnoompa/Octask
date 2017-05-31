import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Login from './Login.vue'

Vue.use(VueRouter)

var router = new VueRouter(
	{		
		routes: [
			{
				path: '/test',			
				component: {
						template: '<div>tset2</div>'
				}
			},
			{	
				path: '/dashboard',
				component: {
					template: `<div>test</div>`
				}
			}
		]
	}	
)

new Vue({
  el: '#app',
  router,
  template: '<div>test<router-link to="/test">to</router-link><router-view></router-view></div>'
})
