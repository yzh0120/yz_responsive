<template>
  <div id="app"  >
		<router-view />
  </div>
</template>

<script>
export default {
  watch: {


  },
  methods: {
    clientXY() {
      this.$store.commit("setup/windowResize");
    },
	mousewheel_fn(e) {
      this.$store.commit("setup/mousewheel_fn",e);
    },
	scroll_fn(e) {
      this.$store.commit("setup/scroll_fn",e);
    },
	handleClose(){
		this.$store.commit("setup/drawer_fn",false)
	},
  },
  sockets: {
    //内置事件
	//1 连接成功
    connect() {
      console.log("连接成功", this.$socket);
    },
    //2 断开连接
    disconnect(data) {
      console.log("连接断开", this.$socket);
    },
    //3 重连中...... 服务器端断开,客户端自动执行
    reconnecting() {
      console.log("重连中......");
    },
    //4 重连成功 // 服务器端断开重连成功,客户端自动执行
    reconnect() {
      console.log("重连成功");
    },

    //自定义///////////////////////////////////////////////
    /* 有新消息*/
    newInfo(data) {
      // console.log(data, "newInfo");
	  this.$message.success(data)
    },
    /* 非法链接断开*/
    illegal(data) {
      /* this.$socket.disconnect(); //中断socket连接
      this.$socket.connect(); //重新socket连接 */
    },
  },
  mounted() {
    this.$store.commit("setup/windowResize");
    window.addEventListener("resize", this.clientXY);
	
	window.addEventListener('mousewheel', this.mousewheel_fn);
	
	window.addEventListener('scroll', this.scroll_fn);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.clientXY);
	window.removeEventListener('mousewheel', this.mousewheel_fn);
	window.removeEventListener('scroll', this.scroll_fn);
  },
};
</script>


<style>
	html,
	body,
	#app,
	.el-container,
	.el-main{
	  height: 100% !important;
	  padding:0 !important;
	  margin:0 !important;
	}
	
	body::-webkit-scrollbar {
	    display: none;
	}
</style>
