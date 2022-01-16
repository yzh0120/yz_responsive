<template>
  <div>
	
	<div v-for="(item,index) in uploadList" :key="index">
		
		
		<el-upload :disabled="btnDisabled" class="i-upload" :action="uploaduUrl" :show-file-list="false" multiple :on-success="upLoadSuccess" 
		:before-upload="(file)=>{return beforeUpload(file,item)}" :on-change="handleChange" :headers="uploadHeaders">
		  <el-button :disabled="btnDisabled" size="mini" type="primary" v-on:click="setUploaduUrl(item.taskName)">上传资料</el-button>
		</el-upload>
		
		<file-List :arr="item.detail" :del="true"/>
	</div>
	
  </div>
</template>

<script>
import * as fileApi from "@/axios/api/file";
import * as Cookie from "@/tools/cookjs.js";
export default {
  props: {
    projectId: {
      type: String,
      default: "",
    },
    uploadList: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      // uploadList: [
      //   {
      //     name: "1.开立保函委托合同或开立保函确认书（额度项下）",
      //     taskName: "开立保函委托合同或开立保函确认书",
      //     detail: [],
      //   },
      //   {
      //     name: "2.保证反担保合同（非必传）",
      //     taskName: "保证反担保合同",
      //     detail: [],
      //   },
      //   {
      //     name: "3.其他法律文件（非必传）",
      //     taskName: "其他法律文件",
      //     detail: [],
      //   },
      // ],
      uploaduUrl: process.env.VUE_APP_down_API + "/v1/base/file/upload", //上传地址
      btnDisabled: false,
      uploadHeaders: {
        //上传头
        // Authorization: Cookie.get("token")
		"Authorization": process.env.VUE_APP_down_token_API
      },
      taskName: "",
    };
  },
  created() {
    this.getFiles(); //获取历史文件
  },
  methods: {
	 //获取文件
    getFiles() {
      this.uploadList.forEach((item) => {
        // if (item.taskName == this.taskName) {
        fileApi
          .getFileListByFolderId({
            folderId: this.projectId,
            taskName: item.taskName,
          })
          .then((result) => {
            if (result.code == 200) {
              item.detail = result.data;
            } else {
              this.$message.error(res.info);
            }
          });
        // }
      });
    },
    // 0 设置路由
    setUploaduUrl(taskName) {
      this.taskName = taskName;
      this.uploaduUrl =
        process.env.VUE_APP_down_API +
        "/v1/base/file/upload" + "?folderId=" + this.projectId + "&taskName=" + taskName;
    },
    // 1 上传图片之前
    beforeUpload(file, item) {
      let activeFileType = file.name.split(".").pop();
      // return new Promise((resolve, reject) => {
      if (item.num && (item.detail.length >= item.num)) {
        this.btnDisabled = !this.btnDisabled;
        this.$message.error(`只能上传${item.num}个`);
        // reject();
		return false;
      } else
      if (item.type && item.type.length && !item.type.includes(activeFileType)) {
        this.$message.error(`请上传正确的文件类型`);
        this.btnDisabled = !this.btnDisabled;
        // reject();
        return false;
      } else {
        // resolve();
        return true;
      }
      // });
    },
    //2 点击上传文件时的改变事件
    handleChange() {
      this.btnDisabled = !this.btnDisabled;
    },
    //3 文件上传成功
    upLoadSuccess(res) {
      if (res.code == 200) {
        this.$message.success(res.data.fileName + "上传成功！");
        this.uploadList.forEach((item) => {
          if (item.taskName == this.taskName) {
            fileApi
              .getFileListByFolderId({
                folderId: this.projectId,
                taskName: this.taskName,
              })
              .then((result) => {
                if (result.code == 200) {
                  item.detail = result.data;
                } else {
                  this.$message.error(res.info);
                }
              });
          }
        });
      } else {
        this.$message.error(res.info);
      }
    },
    //4 删除文件
    deleteFile(item) {
      // console.log(item, "item");
      fileApi.del([item.id]).then((res) => {
        if (res.code == 200) {
          this.$message.success("删除成功");
          this.getFiles(); //获取历史文件
        } else {
          this.$message.error(res.info);
        }
      });
    },
    //5 如何下载
    downloadFile(item) {
      //window.open("http://openlaw.cn/search/judgement/default?keyword=" + companyname, '_blank');
      fileApi.download({ fileUrl: item.fileUrl + item.filePath });
    },
  },
};
</script>

<style style="scss" scoped>
.downloadFile {
  cursor: pointer;
}
</style>

<!-- 
 必填校验
 	 let checkOK = true
 	         try {
 	             vm.$refs.form.uploadList.forEach((item) => {
 	                 if (item.required) {
 	                     if (!item.detail[0]) {
 	                         vm.$message.error(`请上传${item.name}`);
 	                         checkOK = false
 	                         throw new Error("EndIterative");
 	                     }
 	                 }
 	             })
 	         } catch (e) {
 	             if (e.message != "EndIterative") throw e;
 	         }
 	         if (!checkOK) return;
 -->


