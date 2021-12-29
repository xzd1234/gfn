<template>
  <div class="d-imgBox">
    <div class="upload-row">
      <div v-for="(item,i) in state.fileList" :key="i" >
        <div class="upload-box" @click="bigImg(i)">
          <div class="upload-x" @click.stop="removeImage(i)">x</div>
          <div class="upload-title">{{ item.text }}</div>
          <img :src="item" />
        </div>
      </div>
      <div class="upload-box" @click="onClickUpload">
        <van-icon size="0.8rem" color="#ccc" name="photograph" />
        <div class="upload-title">{{ state.text }}</div>
      </div>
    </div>
  
    <van-action-sheet
      v-model:show="state.show"
      cancel-text="取消"
      :closeable="false"
    >
      <van-uploader
        :preview-image="false"
        v-model="state.fileList"
        :before-read="beforeRead"
        :after-read="afterRead"
        capture="camera"
      >
        <div class="d-btn">相机</div>
      </van-uploader>
      <br />
      <van-uploader
        :preview-image="false"
        multiple
        v-model="state.fileList"
        :before-read="beforeRead"
        :after-read="afterRead"
      >
        <div class="d-btn">相册</div>
      </van-uploader>
    </van-action-sheet>
  </div>
</template>
<script lang='ts'>
import { defineComponent, ref, getCurrentInstance, reactive, watch } from "vue";
export default defineComponent({
  name: "",
  setup() {
    const {
      proxy: { $ImagePreview,$Api:{ImgUpload} },
    }:any= getCurrentInstance();

    const state:any = reactive({ fileList:[], show: false, text: "出院小结" });
    const afterRead =async (file:any) => {
      // 此时可以自行将文件上传至服务器
     console.log("afterRead", file);
     

    };
    const beforeRead = (file: any) => {
      console.log("beforeRead", file);
   /*    if (file.length == undefined) {
        switch (state.fileList.length) {
          case 0:
            file.text = "出院小结";
            break;
          case 1:
            file.text = "护理部位";
            break;
          default:
            file.text = "其他";
        }
        state.fileList.push(file);
      } else {
        for (let i = 0; i < file.length; i++) {
          switch (state.fileList.length) {
            case 0:
              file[i].text = "出院小结";
              break;
            case 1:
              file[i].text = "护理部位";
              break;
            default:
              file[i].text = "其他";
          }
          state.fileList.push(file[i]);
        }
      } */
   state.show = false;
    let param = new FormData();
      if (file.length == undefined) {
        param.append("file", file, file.name);
      } else {
        for (let i = 0; i < file.length; i++) {
          param.append("file", file[i], file[i].name); //通过append向form对象添加数据
        }
      }
      console.log(param)
 ImgUpload({data:param,headers:{'Content-Type':'multipart/form-data'}
        }).then((res)=>{
       state.fileList.push(res.Location)
      })
    };
    
    const removeImage = (index: any) => {
      state.fileList.splice(index, 1);
    };
    const onClickUpload = () => {
      state.show = true;
    };
    const bigImg = (val: any) => {
      console.log(val);
      $ImagePreview({
        images: [
         ...state.fileList
        ],
        startPosition: val,
      });
    };
    watch(state.fileList, (fileList, pfileList) => {
      switch (fileList.length) {
        case 0:
          state.text = "出院小结";
          break;
        case 1:
          state.text = "护理部位";
          break;
        default:
          state.text = "其他";
      }
    });

    return {
      state,
      afterRead,
      beforeRead,
      removeImage,
      bigImg,
      onClickUpload,
    };
  },
});
</script>
<style  lang='scss' scoped>
.d-imgBox {
  width: 100%;
  .upload-row {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding: 4px;
    box-sizing: border-box;
    background: #f5f5f5;
    &>div{
      margin:4.51px;
    }
    .upload-box {
      width: 100px;
      height: 100px;
      text-align: center;
      background: #ffffff;
      font-size: 40px;
      color: #000;
      position: relative;
      overflow: hidden;
      .upload-x {
        width: 12px;
        height: 16px;
        line-height: 9px;
        color: #fff;
        font-size: 12px;
        text-align: right;
        padding-right: 3px;
        background: rgba(0, 0, 0, 0.3);
        border-bottom-left-radius: 20px;
        position: absolute;
        right: 0;
        top: 0;
      }

      .upload-title {
        width: 100%;
        height: 20px;
        line-height: 20px;
        font-size: 12px;
        color: #a5a5a5;
        text-align: center;
        position: absolute;
        bottom: 4px;
        left: 0;
      }
      img {
        width: 100%;
        height: auto;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
      }
      .van-icon {
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }

  .d-btn {
    width: 375px;
    height: 44px;
    line-height: 44px;
    text-align: center;
    font-size: 16px;
    position: relative;
    &::after {
      content: "";
      width: 375px;
      height: 1px;
      background-color: #f7f8fa;
      position: absolute;
      left: 0;
      bottom: 0;
      // transform: scaleY(.25);
    }
  }
}
</style>