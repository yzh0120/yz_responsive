<!-- 下拉框
 type:'treeselect'                               控件类型
 field:xxx                                  控件对应的字段      
 title: '账号',                             控件描述
 rules:[],                                  控件校验规则
 
 opt : [id:'唯一id',label:'描述',children:[子节点]]         控件下拉选项
 create :     true              多选
 props :(node) =>{
      return {
        id: node.key,
        label: node.name,
        children: node.subOptions,
      }
    },
	
// 处理父节点的数据，以满足treeselect插件的要求
    getTreeSelectList(data) {
      var arr = [];
      data.filter((item) => {
        var obj = {};
        obj.id = item.id;
        obj.label = item.text;
        if (item.childNodes && item.childNodes.length) {
          obj.children = this.getTreeSelectList(item.childNodes);
        }
        arr.push(obj);
        return true;
      });
      return arr;
    },
 -->

<template>
    <treeselect style="height: 30px;"
	:class="[bossData.inline?'inline':'',`xxx`]"
	 v-model="xxx"  :multiple="item.create" :options="options"  @select="change" @input="input"
    append-to-body  zIndex="9999999" :placeholder="_getPlaceholder(item)" noResultsText="无数据" :disabled="dis || item.disabled"
	 :defaultExpandLevel="Infinity" />
</template>

<script>
import Treeselect from '@riophae/vue-treeselect'
import '@riophae/vue-treeselect/dist/vue-treeselect.css'
export default{
    components: { Treeselect },
    props: ["data", "item","dis","bossData"],
	mounted() {
		console.log(this.data,"123123")
	},
	methods:{
		input(nowValue) {
			if(this.item.create){//[]
				if(nowValue.length == 0){
					this.$emit("baseFormEvent", {
					  event: "clear",
					  value: nowValue
					});
				}
			}else{//""
				if(!nowValue){//因为一开始  赋值 null,所以一开始会执行一次
					this.$emit("baseFormEvent", {
					  event: "clear",
					  value: nowValue
					});
				}
			}
			
		  // this.$emit("baseFormEvent", {
		  //   event: "clear",
		  //   value: nowValue
		  // });
		},
		change(nowValue) {
			console.log(this.xxx)
		  this.$emit("baseFormEvent", {
		    event: "change",
		    value: nowValue
		  });
		},
		getTreeSelectList(data){
			var arr = [];
			  data.filter((item) => {
				var obj = {};
				obj.id = this.item.id ? item[this.item.id] : item.id;
				obj.label = this.item.label ? item[this.item.label] : item.label;
				if (this.item.children && item[this.item.children] && item[this.item.children].length) {
				  obj.children = this.getTreeSelectList(item[this.item.children]);
				}
				arr.push(obj);
				return true;
			  });
			  return arr;
		}
	},
	computed:{
		xxx:{
			get(){
				
				
				if(this.item.create){
					if( this.$fn.type(this.data[this.item.field]) != "arr"){
						this.data[this.item.field] = []
					}
				}else{
					if( this.data[this.item.field] == ""){//只是为了防止 值是""时  treeselect识别为null
						
						this.data[this.item.field] = null
						
					}
				}
				return this.data[this.item.field]
			},
			set(val){
				this.data[this.item.field] = val
			}
		},
		options(){
			// console.log(this.getTreeSelectList(this.item.opt),"this.getTreeSelectList(this.item.opt)")
			return this.getTreeSelectList(this.item.opt)
		}
	}
}
</script>

<style lang="scss" scoped>
    .inline{
		width: 200px;
	}
</style>
<style lang="scss" >
 //    .xxx{
	// 	.vue-treeselect__control{
	// 		height: 26px !important;
	// 		.vue-treeselect__value-container{
	// 			height: 26px !important;
	// 			.vue-treeselect__input-container{
	// 				height: 26px !important;
	// 				input{
	// 					height: 26px !important;
	// 				}
	// 			}
	// 		}
	// 	}
	// }
</style>
