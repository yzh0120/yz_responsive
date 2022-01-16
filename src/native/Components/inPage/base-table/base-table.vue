<!-- 
   data:{
	   *
	   head:[
		   { 
			 field: "id",                        字段     必填
		     label: "ID",                        字段说明 必填
		     format:(row)=>{                     字段格式化
		     	return row.account.slice(0,2)
		     }
			 hover:"字段"                        悬浮提示
		     width: 260,                         某一列的宽度
             fixed :"right"                      固定
			   tip                                 show-overflow-tooltip
			   sort                                排序
         
		   },
		   {
			 slot: "status",                     对应好上面的状态的slot名字  #status
		     label: "状态",                      表头说明
		     width: 260,                         某一列的宽度
		   },
		   {
		   	label: "多级表头1",                   多级表头
		   	children:[
		   		{
					field: "id",
		   		    label: "ID",
		   		    
		   		},
		   		{
					field: "account",
		   		    label: "账号",
		   		},
		   	]
		   },
	   ]
	   data:[{},{}],                                      数组里面的每一个对象 对应表头所有的字段
	   ！*
	   height："600px"                                     表格高度
	   align：false                                        表格内容是否剧中
	   selection：false                                     是否多选
	   showIndex：                                          是否显示index，  如果传入了 pager则会   
	   loading                                              加载动画
	   size:'mini'
       sum                                                  合计
	   sumfn
	   defaultSort                                            {}
	   tip                                                    true
	   dom:
	   rowKey;                                                  tree table 渲染主键
	   treeProps:{children: 'children', hasChildren: 'hasChildren'},            hasChildren  只在load模式有用
	   treeLoad:
   }
-->

<template>
	<el-table ref="table" v-loading="loading" :data="tableData" border style="width: 100%" :size="size" stripe
		:height="height" highlight-current-row @select="select_fn" @select-all="select_fn" @current-change="selectRowChange"
		:show-summary="sum" :summary-method="sumfn" :default-sort="defaultSort" :header-cell-style="headerCellStyle"
		:row-key="rowKey" :tree-props="treeProps" :lazy="lazy" :load="treeLoad" @expand-change="expandEvent">
		<!-- 多选框 -->
		<el-table-column v-if="selection" type="selection" width="55" :align="align"></el-table-column>

		<!-- 是否显示索引 -->
		<el-table-column label="序号" type="index" width="50" align="center" v-if="showIndex">
			<template slot-scope="scope" v-if="pager">
				<span>{{(pager.pageNo - 1) * pager.pageSize + scope.$index + 1}}</span>
			</template>
		</el-table-column>

		<!-- 展开行 -->
		<el-table-column type="expand" v-if="expand">
			<template slot-scope="scope" >
				<slot name="expand" :scope="scope" />
			</template>
		</el-table-column>

		<!-- 表头渲染 -->
		<template v-for="(item,index) in head">
			<base-item :item="item" :data="data" :key="index">
				<!-- 跨组件传插槽 -->
				<template v-slot:[item.slot]="{scope}">
					<slot :name="item.slot" :scope="scope"></slot>
				</template>
			</base-item>
		</template>

	</el-table>
</template>

<script>
	import baseItem from "./BaseItem.vue"
	export default {
		name: "e-table",
		components: {
			baseItem
		},
		props: {
			data: {
				default: () => {},
			},
			pager: {
				default: false,
			},
		},
		data() {
			return {};
		},
		created() {},
		mounted() {
			this.back(); // 将table实例返回到父级
		},
		updated(){
			this.$nextTick(() => {
			   this.$refs.table.doLayout();//为了显示合计
			}) 
		},
		methods: {
			headerCellStyle(){
				// return 'background:red'
				return {background:"#FAFAFA",fontWeight:"700 !important",color:"#606266 "}
			},
			back() {
				this.data.dom = this.$refs.table; // 将form实例返回到父级
			},
			// 多选
			select_fn(selection) {
				if (selection) {
					let obj = {
						event: "checkbox",
						value: selection,
					};
					this.$emit("event", obj);
				}
			},
			// 单选
			selectRowChange(currentRow, oldCurrentRow) {
				let obj = {
					event: "radio",
					value:currentRow,
					oldValue:oldCurrentRow
				};
				this.$emit("event", obj);
			},
			//用于可展开表格
			expandEvent(row,expanded){
				let obj = {
					event: "expand",
					value:row,
					flag:expanded
				};
				this.$emit("event", obj);
			}
		},
		computed: {
			lazy(){
				if(this.data.treeLoad){
					return true
				}
			},
			treeLoad(){
				return this.data.treeLoad
			},
			treeProps(){
				return this.data.treeProps
			},
			rowKey(){
				return this.data.rowKey
			},
			defaultSort() {
				return this.data.defaultSort;
			},
			tableData() {
				return this.data.data;
			},
			head() {
				return this.data.head;
			},
			selection() {
				return this.data.selection;
			},
			height() {
				return this.data.height ? this.data.height : "600px";
			},
			align() {
				return this.data.align;
			},
			showIndex() {
				return this.data.index;
			},
			expand() {
				return this.data.expand;
			},
			loading() {
				return this.data.loading;
			},
			sum() {
				return this.data.sum;
			},
			sumfn() {
				return this.data.sumfn;
			},
			size() {
				if (this.data.size) {
					return this.data.size
				} else {
					return "small"
				}
			},
		},
	};
</script>

