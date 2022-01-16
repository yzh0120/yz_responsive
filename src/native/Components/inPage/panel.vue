<template>
  <div>
    <div class="panel" :class="addType">
      <div class="panel-heading" @click="bodyHandle">
        <slot name="head"></slot>
      </div>
      <div class="panel-body" :style="{display:showBody==true?'block':'none'}">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
    <!-- 
	default 
	primary
	success
	info
	warning
	danger
	 -->
<script>
export default {
  props: {
    head: String,
    type: {
      type: String,
      default: "primary"
    },
    close:{
      default: false
    }
  },
  computed:{
	  addType(){
		  return "panel-" + this.type
	  },
  },
  data() {
    return {
      showBody: true
    };
  },
  mounted(){
    if(this.close){
      this.showBody = false
    }
  },
  methods: {
    bodyHandle() {
      this.showBody = !this.showBody;
    }
  }
};
</script>
    
<style scoped lang="scss">
	$fanwei:5px;
.panel {
  margin-bottom: 20px;
  background-color: #fff;
  border: 1px solid transparent;
  border-radius: 4px;
  // -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  //   box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  

  &.panel-default {
    border-color: #ddd;
	// box-shadow: #ddd 0px 0px $fanwei;
    >.panel-heading {
      color: #333;
      background-color: #f5f5f5;
      border-color: #ddd;
    }
  }
  &.panel-primary {
    border-color: #337ab7;
	// box-shadow: #337ab7 0px 0px $fanwei;
    >.panel-heading {
      color: #fff;
      background-color: #337ab7;
      border-color: #337ab7;
    }
  }

  &.panel-success {
    border-color: #d6e9c6;
	// box-shadow: #d6e9c6 0px 0px $fanwei;
    >.panel-heading {
      color: #3c763d;
      background-color: #dff0d8;
      border-color: #d6e9c6;
    }
  }

  &.panel-info {
    border-color: #bce8f1;
	// box-shadow: #bce8f1 0px 0px $fanwei;
    >.panel-heading {
      color: #31708f;
      background-color: #d9edf7;
      border-color: #bce8f1;
    }
  }

  &.panel-warning {
    border-color: #faebcc;
	// box-shadow: #faebcc 0px 0px $fanwei;
    >.panel-heading {
      color: #8a6d3b;
      background-color: #fcf8e3;
      border-color: #faebcc;
    }
  }

  &.panel-danger {
    border-color: #ebccd1;
	// box-shadow: #ebccd1 0px 0px $fanwei;
    >.panel-heading {
      color: #a94442;
      background-color: #f2dede;
      border-color: #ebccd1;
    }
  }
  
  
  
  .panel-heading {
    padding: 10px 15px;
    border-bottom: 1px solid transparent;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
	
	// display: flex;
	// justify-content: space-between;
  }
  .panel-body {
    padding: 15px;
  }
}
</style>