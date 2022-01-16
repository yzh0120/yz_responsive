/* 
el.value = "nihao "
el.dispatchEvent(new Event("input"))

这15个Vue自定义指令，让你的项目开发爽到爆
 https://zhuanlan.zhihu.com/p/108308393
 */

// import * as reg from "@/tools/reg/index.js"

export default{
	 bind: function (el, binding, vnode) {
		el.value = "nihao "
		el.dispatchEvent(new Event("input"))  //调用input事件使vue v-model绑定更新
	 },
	 update(el, binding){
		 console.log("-----------------")

	 }
}
// <input type="text" v-demo:va.va.va="va" v-model="va"> 

/* 
一个自定义指令 除了 value，其他的都是字符串而已
参数只能是一个，修饰符可以多个，但是修饰符是收纳在一个对象中
binding.value 只是 值的深拷贝 ，修改 binding.value 不会影响指令绑定的值，所以另辟蹊径 
 
 
 // 生命周期
 bind: 只调用一次，指令第一次绑定到元素时调用，用这个钩子函数可以定义一个在绑定时执行一次的初始化动作。
 
 inserted: 被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于 document 中）。
 
 update: 被绑定元素所在的模板更新时调用，而不论绑定值是否变化。通过比较更新前后的绑定值，可以忽略不必要的模板更新（详细的钩子函数参数见下）。
 
 componentUpdated: 被绑定元素所在模板完成一次更新周期时调用。
 
 unbind: 只调用一次， 指令与元素解绑时调用。
 
 //生命周期的参数
 el: 指令所绑定的元素，可以用来直接操作 DOM 。
 binding: 一个对象，包含以下属性：
	 name: 指令名，不包括 v- 前缀。
	 value: 指令的绑定值， 例如： v-my-directive="1 + 1", value 的值是 2。
	 oldValue: 指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。
	 expression: 绑定值的表达式或变量名。 例如 v-my-directive="1 + 1" ， expression 的值是 "1 + 1"。
	 arg: 传给指令的参数。例如 v-my-directive:foo， arg 的值是 "foo"。
	 modifiers: 一个包含修饰符的对象。 例如： v-my-directive.foo.bar, 修饰符对象 modifiers 的值是 { foo: true, bar: true }。
 vnode: Vue 编译生成的虚拟节点。
 oldVnode: 上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。
 
 */