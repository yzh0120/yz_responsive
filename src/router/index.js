
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '@/router/routes.js'
import store from '@/vuex/store' //vuex
import api from "@/axios/index"

Vue.use(VueRouter)


const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}



const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})


export default router
