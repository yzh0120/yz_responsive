<template>
  <div class="body">
	 <navCom></navCom>
	  
	<banner></banner>
	
	<aboutMe></aboutMe>
	
	<successfulCases></successfulCases>
		
	
  </div>
</template>

<script>
	import navCom from '@/views/components/navCom.vue';
	import banner from '@/views/components/banner.vue';
	import aboutMe from '@/views/components/aboutMe.vue';
	import successfulCases from '@/views/components/successfulCases.vue';
	export default {
		data(){
			return {

			}
		},
		methods(){
			console.log(process.env.VUE_APP_demo,"process.env.VUE_APP_demo")
		},
		methods:{
		},
		components:{
			navCom,
			banner,
			aboutMe,
			successfulCases,
		},
		computed:{
			innerWidth(){
				return this.$store.state.setup.window_innerWidth + `px`
			},
			innerHeight(){
				return this.$store.state.setup.window_innerHeight + `px`
			},
		},

	};
</script>

<style lang="scss" scoped>
	
	.body{
		position: relative;
		width: 100%;
	}
	


</style>