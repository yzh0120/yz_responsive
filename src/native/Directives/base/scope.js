
// 按钮权限  include  exclude 参数
import store from '@/vuex/store';//vuex
export default{
	 bind: function (el, binding, vnode) {
		el.style.display = 'none'
		for(let role of Object.keys(binding.modifiers)){
			if(store.state.user.info.roleArr.includes(role)){
				console.log(store.state.user.info.roleArr,role)
				el.style.display = 'block'
			}
		}
	 }
}

// <input type="text" v-scope.system v-model="va"> 