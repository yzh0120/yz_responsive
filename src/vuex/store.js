
import Vue from 'vue'
import Vuex from 'vuex'
/*引入 模块化文件*/
Vue.use(Vuex)

const modulesFiles = require.context('./modules', true, /\.js$/)

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
	// set './app.js' => 'app'
	const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
	const value = modulesFiles(modulePath)
	modules[moduleName] = value.default
	return modules
}, {})

// const state = {

// }
// const mutations = {

// }
// const actions = {

// }
// const getters = {

// }
export default new Vuex.Store({
	//  state,
	// mutations,
	// actions,
	// getters,
	//注册vuex模块
	modules
})
