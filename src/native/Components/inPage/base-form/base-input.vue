
<!-- 输入框
 type:'input '                              控件类型
 field:xxx                                  控件对应的字段      
 title: '账号',                             控件描述
 rules:[],                                  控件校验规则
 btn:true
 prepend:str
 append:str
 -->
 <!--  -->
<template>

  <el-input v-model="data[item.field]" :type="item.type" :disabled="item.disabled" :placeholder="_getPlaceholder(item)"  @clear="setValueNull"
   @blur="blur(data[item.field])" @focus="focus(data[item.field])" clearable  :class="[item.btn?'self_btn':'']"
  :maxlength="item.max">
    <template slot="prepend" v-if="item.prepend">{{item.prepend}}</template>
    <template slot="append" v-if="item.append">{{item.append}}</template>
<!-- style="background:#409EFF;color:#fff;" -->
	<el-button @click="search"  slot="append" v-if="item.btn">{{item.btn}}</el-button>
  </el-input>
<!--  -->
</template>

<script>

export default {
  props: ["data", "item"],
  data() {
    return {};
  },
  methods: {
	blur(value){
		this.$emit("baseFormEvent", {
			event: "blur",
			value: value
		}); 
	},
	focus(value) {
		this.$emit("baseFormEvent", {
		  event: "focus",
		  value: value
		}); 
	},
    search(){
      this.$emit("baseFormEvent", {
        event: "btn",
        value: null
      });
    },
	setValueNull(nowValue) {
	  this.$emit("baseFormEvent", {
	    event: "clear",
	    value: nowValue
	  });
	},
  },
  computed: {
  },
};
</script>

<style lang="scss">
// .btn .el-input-group__append{
//   background-color: #409eff;
//   color: white;
//   border-radius: 0px;
// }
// .self_btn .el-input-group__append {
//         // background: #409EFF;
//         border: 1px solid #409EFF;
//         border-left: 0;
//     }
</style>
