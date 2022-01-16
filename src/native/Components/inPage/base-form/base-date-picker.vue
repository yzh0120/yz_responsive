
<!-- 日期选择器
 type:'date '                               控件类型
 field:xxx                                  控件对应的字段      
 title: '账号',                             控件描述
 rules:[],                                  控件校验规则
 
 valueFormat                                日期值的格式化规则 
 opt                                    控件选项  见文档
 
 年     月(包括年) 日期    多个日期   星期几   日期时间   日期时间范围    日期范围      月份范围(包括年)
 year  /month     /date   /dates   / week  /  datetime  /datetimerange/ daterange  /  monthrange
 -->
<template>
	<el-date-picker style="width: 100%;" v-model="data[item.field]" :type="item.type" :value-format="valueFormat" 
  :picker-opt="item.opt" clearable :disabled="item.disabled" :placeholder="_getPlaceholder(item)" @change="change" 
   start-placeholder="开始日期" range-separator="至" end-placeholder="结束日期"/>
	<!-- <div>
		<template v-if="item.type!='daterange'">
			<el-date-picker style="width: 100%;" v-model="data[item.field]" :type="item.type" :value-format="valueFormat"
				:picker-opt="item.opt" clearable :disabled="item.disabled" :placeholder="_getPlaceholder(item)"
				@change="change" />
		</template>
		<template v-else-if="item.type=='daterange'">
			<el-date-picker v-model="data[item.field]" type="daterange" range-separator="至" start-placeholder="开始日期"
				end-placeholder="结束日期" :value-format="valueFormat" :picker-opt="item.opt" :disabled="item.disabled"
				:placeholder="_getPlaceholder(item)" @change="change">
			</el-date-picker>
		</template>
	</div> -->
</template>

<script>
	export default {
		props: ["data", "item"],
		data() {
			return {};
		},

		methods: {
			change(nowValue) {
				this.$emit("baseFormEvent", {
					event: "date",
					value: nowValue
				});
			},
		},
		computed: {
			valueFormat() {
				if (this.item.valueFormat) {
					return this.item.valueFormat
				} else {
					if (this.item.type == "datetime") {
						return "yyyy-MM-dd HH:mm:ss"
					} else {
						return "yyyy-MM-dd"
					}
				}
			},
		},
	};
</script>

<style lang="scss" scoped>
</style>
