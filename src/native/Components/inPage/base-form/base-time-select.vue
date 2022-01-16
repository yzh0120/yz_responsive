
<!-- 时间选择器
 type:'time '                               控件类型
 field:xxx                                  控件对应的字段      
 title: '账号',                             控件描述
 rules:[],                                  控件校验规则
 
 opt                                    时间选项 看文档
 -->

<template>
  <el-time-picker style="width: 100%;" v-model="data[item.field]" :picker-options="opt" :value-format="valueFormat" clearable 
		:placeholder="_getPlaceholder(item)" :disabled="item.disabled" @change="change">
  </el-time-picker>
</template>

<script>
export default {
  props: ["data", "item"],
  data() {
    return {};
  },
  computed: {
    opt() {
      if (this.item.opt) {
        return this.item.opt;
      } else {
        return {
          selectableRange: "00:00:00 - 23:59:59",
        };
      }
    },
	valueFormat() {
	  if (this.item.valueFormat) {
	    return this.item.valueFormat;
	  } else {
	    return "HH:mm";
	  }
	},
  },
  methods: {
    change(nowValue) {//无效
      this.$emit("baseFormEvent", {
        event: "time",
        value: nowValue,
      });
    },
    
  },
};
</script>

<style lang="scss" scoped>
</style>
