<template>
  <div class="body">
	<!-- <banner></banner> -->
	
	<!-- <aboutMe></aboutMe> -->
		
		
	
  </div>
</template>

<script>

	import banner from '@/views/components/banner.vue';
	import aboutMe from '@/views/components/aboutMe.vue';
export default {
	components:{
		banner,
		aboutMe
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