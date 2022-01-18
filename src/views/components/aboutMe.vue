<template>
	<div :style="{width:innerWidth,height:innerHeight}" class="box">
		<div class="title">
			关于我们
		</div>
		
		<div class="titleDes">
			网络公司不仅仅是提供域名注册，空间租用，网站开发，网站建设与网站营销活动策划相关的企业组织。
		</div>
		
		<div class="des">
			<div class="item reveal-400" >
				<svgIcon icon="bulb-fill" className="icon" class="left"></svgIcon>
				<div class="right">品牌创意</div>
				<div class="bottom">为企业设计独特的并能完美呈现企业价值观的视觉</div>
			</div>
			<div class="item reveal-600">
				<svgIcon icon="tubiao-zhexiantu" className="icon" class="left"></svgIcon>
				<div class="right">整合营销</div>
				<div class="bottom">通过市场深入分析，制定网络营销战略，网络营销实施</div>
			</div>
			<div class="item reveal-800">
				<svgIcon icon="gouwucheman" className="icon" class="left"></svgIcon>
				<div class="right">电子商务</div>
				<div class="bottom">根据企业需求，开设不同的营销渠道，通过网上直销</div>
			</div>
			<div class="item reveal-1000">
				<svgIcon icon="lcd" className="icon" class="left"></svgIcon>
				<div class="right">网页设计</div>
				<div class="bottom">通过网站建设，智能建站，域名主机，企业邮箱</div>
			</div>
			<div class="item reveal-1200">
				<svgIcon icon="dashboard" className="icon" class="left"></svgIcon>
				<div class="right">网站优化</div>
				<div class="bottom">网站推广是指将网站推广到国内各大知名网站和搜索引擎</div>
			</div>
			<div class="item reveal-1400">
				<svgIcon icon="caidan" className="icon" class="left"></svgIcon>
				<div class="right">网站架设</div>
				<div class="bottom">通过绑定域名和服务器，把网站展现给全世界</div>
			</div>
		</div>
	</div>
</template>

<script>
	import scrollReveal from "scrollreveal";
	export default{
		//在data中注册
		data () {
		  return {
		    scrollReveal: scrollReveal()
		  }
		},
		computed:{
			innerWidth(){
				return this.$store.state.setup.window_innerWidth + `px`
			},
			innerHeight(){
				// return this.$store.state.setup.window_innerHeight + `px`
			},
		},
		mounted() {
			this.revealFn(400)
			this.revealFn(600)
			this.revealFn(800)
			this.revealFn(1000)
			this.revealFn(1200)
			this.revealFn(1400)
		  
		},
		methods:{
			revealFn(delay){
				this.scrollReveal.reveal(`.reveal-${delay}`, {
				     // 动画的时长
				      duration: 500,
				      // 延迟时间
				      delay: delay,
				      // 动画开始的位置，'bottom', 'left', 'top', 'right'
				      origin: 'bottom',
				      // 回滚的时候是否再次触发动画
				      reset: false,
				      // 在移动端是否使用动画
				      mobile: true,
				      // 滚动的距离，单位可以用%，rem等
				      distance: '100px',
				      // 其他可用的动画效果
				      opacity: 0.001,
				      easing: 'linear',
				      scale: 0.9,
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	$color : rgb(162,162,162);
	$bgc:rgb(226,226,226);
	// rgb(226,226,226)
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
		.titleDes{
			text-align: center;
			color: $color;
		}
		.des{
			width: 70%;
			margin: 50px auto 0;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			.item{
				width: 30%;
				height: 100px;
				// background-color: green;
				margin-bottom: 50px;
				
				display: grid;
				grid-template-columns: 20% 80%;
				grid-template-rows: 40% 60%;
				grid-template-areas:'left right '
									'left bottom ';
				&{
					.icon{
						font-size: 40px;
						color: red;
					}
					.left{
						grid-area: left;
					}
					.right{
						color: black;
						grid-area: right;
						font-size: 20px;
						font-weight: bold;
					}
					.bottom{
						color: $color;
						grid-area: bottom;
						font-size: 16px;
					}
				}
			}
		}
		
	}
</style>
