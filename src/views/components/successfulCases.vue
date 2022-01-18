<template>
	<div :style="{width:innerWidth,height:innerHeight}" class="box">
		<div class="title">
			成功案例
		</div>
		
		<div class="successfulCases">
			<div class="top">
				<div  :class="[`item`,active === index?`active`:``]" v-for="(item , index) in arr" :key="index+`arr`" @click="click(index)">{{item}}</div>
			</div>
			
			<div class="showArr">
				<transition-group name="breadcrumb" >
					<img :src="require(`@/assets/imgs/${item}.jpg`)" alt=""  
					v-for="(item, index) in showArr" :key="index + `showArr`" >
				</transition-group>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		components:{
		},
		data(){
			return {
				arr:["全部","WEB","移动","科研"],
				showArr:['1','2','3','4',"5","6","7","8"],
				active:0,
			}
		},
		methods:{
			click(index){
				this.active = index
				
				if(index == 0){
					this.showArr = ['1','2','3','4',"5","6","7","8"]
				}else if(index == 1){
					this.showArr = ['1','2','3','4',"5"]
				}else if(index == 2){
					this.showArr = ['4',"5","7","8"]
				}else if(index == 3){
					this.showArr = ["7","8"]
				}
			},
		},
		computed:{
			innerWidth(){
				return this.$store.state.setup.window_innerWidth + `px`
			},
			innerHeight(){
				// return this.$store.state.setup.window_innerHeight + `px`
			},
		},
	}
</script>

<style lang="scss" scoped>
	$bgc:rgb(226,226,226);
	.box{
		margin-bottom:100px;
		background-color: white;
		.title{
			text-align: center;
			font-size: 36px;
			font-weight: bold;
			color: black;
			position: relative;
			margin-bottom: 50px;
			&::after{
				content: "";
				display: block;
				margin-top: 10px;
				height: 4px;
				width: 120px;
				background-color: red;
				position: absolute;
				left: 50%;
				transform: translateX(-50%);
			}
		}
		.successfulCases{
			.top{
				width: 500px;
				margin: 0 auto;
				display: flex;
				justify-content: space-between;
				.item{
					background-color: $bgc;
					width: 80px;
					height: 40px;
					border-radius: 6px;
					display: flex;
					justify-content: center;
					align-items: center;
					color: black;
					cursor: pointer;
					&.active{
						background-color: rgb(255,85,83);
						color: white;
					}
				}
			}
			.showArr{
				margin-top: 50px;
				img{
					object-fit: cover;
					width: 25%;
					height: 300px;
				}
			}
		}
	}
</style>
