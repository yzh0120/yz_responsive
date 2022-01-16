<template>
  <div>
		<!-- 轮播图 -->
		<swiper :options="swiperOption" ref="mySwiper" >
			<swiper-slide>
				<div :style="{width:innerWidth,height:innerHeight}" class="bannerItem1">
					<img :src="require('@/assets/imgs/people-in-couch-1024248.jpg')" alt="" 
					:style="{width:innerWidth,height:innerHeight}"class="bannerImg">
					
					<div class="bannerOver1 bannerOver" :style="{width:innerWidth,height:innerHeight}">
						<div class="title1">用创新点缀人生，让科技融入理想。</div>
						<div class="content1">创新科技大平台，智慧生活新引擎。依靠科技进步推动经济跨越式发展。用创新点缀人生，让科技融入理想</div>
						<div class="bannerBtn1">探索更多</div>
						
						
					</div>
				</div>
			</swiper-slide>
			<swiper-slide>
				<div :style="{width:innerWidth,height:innerHeight}" class="bannerItem1">
					<img :src="require('@/assets/imgs/无标题.png')" alt="" 
					:style="{width:innerWidth,height:innerHeight}" class="bannerImg">
					
					<div class="bannerOver1 bannerOver"  :style="{width:innerWidth,height:innerHeight}">
						<div class="title2">科技改变世界。</div>
						<div class="content2">立足科学发展，着力自主创新。加速科技进步，为全市经济社会发展提供有力支撑。凝聚科技创意，成就创新梦想</div>
						<div class="bannerBtn2">探索更多</div>
					</div>
				</div>
			</swiper-slide>
		</swiper>
		

  </div>
</template>

<script>
	import 'swiper/dist/css/swiper.css'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import anime from 'animejs/lib/anime.es.js';
export default {
	components:{
		swiper,
		swiperSlide
	},
	computed:{
		innerWidth(){
			return this.$store.state.setup.window_innerWidth + `px`
		},
		innerHeight(){
			return this.$store.state.setup.window_innerHeight + `px`
		},
	},
	data(){
		return {
			swiperOption: {
				slidesPerView: "1",//默认1, 同时显示的slides数量,auto 代表根据轮播图的宽度排列
				spaceBetween: 0, //轮播图之间的间距ssss
				centeredSlides: true,//当前图片居中
				loop: true,//循环
				autoplay: true,   //自动播放
				// speed:2000,
				on: {//内置事件
					slideChangeTransitionEnd: function(){
					   let bannerOver = this.el.querySelectorAll(".bannerOver1")
					   let xxx = bannerOver[this.activeIndex]
					   anime({
						   targets:xxx.children,
						   opacity:[0,1],
						   duration:400,
						   easing:"linear",
						   delay:anime.stagger(400,{start:300}),
						   translateY:[anime.stagger([40,10]),0]
					   })
					},
					slideChangeTransitionStart:function(){
						this.el.querySelectorAll(".bannerOver1 > *").forEach(el => {
							el.style.opacity = 0
						})
					},
				},
				//分页器设置    
				pagination: {
					el: ".swiper-pagination",
					clickable: true //允许分页点击跳转
				},
				// 左右点击
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev"
				}
			}
		}
	},
	methods: {
	      onSwiper(swiper) {
	        console.log(swiper);
	      },
	      onSlideChange() {
	        console.log('slide change');
	      },
	    },
};
</script>

<style lang="scss" scoped>
		.bannerItem1{
			overflow: hidden;
			position: relative;
			.bannerImg{
				object-fit: cover;
			}
			.bannerOver1{
				position: absolute;
				top:0px;
				left: 1;
				background-color: red;
				z-index: 9;
				background:  rgba(0,0,0,.5);
				.title1{
					width: 100%;
					font-size: 46px;
					color: white;
					position: absolute;
					top: 35%;
					// transform: translateY(-200%) ;
					display: flex;
					justify-content: center;
				}
				.content1{
					font-size: 24px;
					width: 100%;
					color: white;
					position: absolute;
					top: 50%;
					text-align: center;
					// background-color: red;
				}
				.bannerBtn1{
					width: 100px;
					height: 40px;
					border-radius: 6px;
					background-color: rgb(255,66,63);
					display: flex;
					justify-content: center;
					align-items: center;
					color: white;
					cursor: pointer;

					position: absolute;
					top: 65%;
					left: 50%;
					margin-left: -50px;
					// transform: translateX(-50%)   !important;
					
				}
				
				.title2{
					width: 100%;
					font-size: 46px;
					color: white;
					position: absolute;
					top: 35%;
					left: 10%;
				}
				.content2{
					font-size: 24px;
					color: white;
					position: absolute;
					top: 50%;
					left: 10%;
				}
				.bannerBtn2{
					width: 100px;
					height: 40px;
					border-radius: 6px;
					background-color: rgb(255,66,63);
					display: flex;
					justify-content: center;
					align-items: center;
					color: white;
					cursor: pointer;
				
					position: absolute;
					top: 65%;
					left: 10%;
					
				}
			}

		}



</style>

<style lang="scss" scoped>
	::v-deep{
		.swiper-slide{
			overflow: hidden;
		}
	}
</style>