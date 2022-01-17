<template>
	<div :style="{width:innerWidth,height:innerHeight}" class="box">
		<div class="title">
			关于我们
		</div>
		
		<div class="titleDes">
			网络公司不仅仅是提供域名注册，空间租用，网站开发，网站建设与网站营销活动策划相关的企业组织。
		</div>
		
		<div class="des">
			<div class="item">
				<svgIcon icon="bulb-fill" className="icon" class="left"></svgIcon>
				<div class="right">品牌创意</div>
				<div class="bottom">为企业设计独特的并能完美呈现企业价值观的视觉</div>
			</div>
			<div class="item">
				<svgIcon icon="tubiao-zhexiantu" className="icon" class="left"></svgIcon>
				<div class="right">整合营销</div>
				<div class="bottom">通过市场深入分析，制定网络营销战略，网络营销实施</div>
			</div>
			<div class="item">
				<svgIcon icon="gouwucheman" className="icon" class="left"></svgIcon>
				<div class="right">电子商务</div>
				<div class="bottom">根据企业需求，开设不同的营销渠道，通过网上直销</div>
			</div>
			<div class="item">
				<svgIcon icon="lcd" className="icon" class="left"></svgIcon>
				<div class="right">网页设计</div>
				<div class="bottom">通过网站建设，智能建站，域名主机，企业邮箱</div>
			</div>
			<div class="item">
				<svgIcon icon="dashboard" className="icon" class="left"></svgIcon>
				<div class="right">网站优化</div>
				<div class="bottom">网站推广是指将网站推广到国内各大知名网站和搜索引擎</div>
			</div>
			<div class="item">
				<svgIcon icon="caidan" className="icon" class="left"></svgIcon>
				<div class="right">网站架设</div>
				<div class="bottom">通过绑定域名和服务器，把网站展现给全世界</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		computed:{
			innerWidth(){
				return this.$store.state.setup.window_innerWidth + `px`
			},
			innerHeight(){
				return this.$store.state.setup.window_innerHeight + `px`
			},
		},
	}
</script>

<style lang="scss" scoped>
	$color : rgb(162,162,162);
	$bgc:rgb(226,226,226);
	// rgb(226,226,226)
	.box{
		margin-top:100px;
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
				margin-bottom: 20px;
				
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
