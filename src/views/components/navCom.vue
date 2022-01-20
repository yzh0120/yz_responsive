<template>
	<div :class="[`box`,navColor]" v-show="show">
		<div  class="left">
			峰华科技
		</div>
		
		<div  class="right">
			<div class="item">首页</div>
			<div class="item">关于我们</div>
			<div class="item">成功案例</div>
			<div class="item">服务流程</div>
			<div class="item">团队情况</div>
			<div class="item">公司动态</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				show:true,
				navColor:""
			}
		},
		computed:{
			scrollTop(){
				return this.$store.state.setup.scrollTop
			},
			innerHeight(){
				return this.$store.state.setup.window_innerHeight
			},
		},
		watch:{
			scrollTop:{
				handler(newValew){
					if(newValew > 100 && newValew < this.innerHeight){
						this.show = false
					}else{
						this.show = true
					}
					
					if(newValew >= this.innerHeight){
						this.navColor="bgc"
					}else{
						this.navColor=""
					}
				}
			}
		}
	}
</script>

<style lang="scss" scoped>

	.box{
		position: fixed;
		top: 0;
		left: 0;
		height: 70px;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: transparent;
		z-index: 9999;
		padding: 0 60px;
		
		.left{
			font-size: 28px;
			color: white;
			cursor: pointer;
			font-weight: bold;
		}
		.right{
			width: 600px;
			display: flex;
			justify-content: space-between;
			color: white;
			cursor: pointer;
			.item{
				// margin: 0 ;
			}
		}
	}
	
	.bgc{
		background-color: white;
		box-shadow: 0px 0 10px #5e5e5e;
		.left{
			color: black;
		}
		.right{
			color: black;
		}
	}
</style>
