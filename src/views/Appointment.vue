<template>
  <div class="d-box">
    <div class="d-card">
      <div class="d-title">预约信息</div>
      
      <van-field
        v-model="state.value"
        label="患者信息"
        readonly
        clickable
        placeholder="点击选择患者信息"
        @click="GoTo(1)"
      />
      <van-field
        v-model="state.value"
        label="医护人员"
        readonly
        clickable
        placeholder="点击选择医护人员"
        @click="GoTo(2)"
      />
      <van-field
        readonly
        clickable
        border
        name="datetimePicker"
        v-model="state.value"
        label="预约时间"
        placeholder="点击选择时间"
        @click="state.showPicker = true"
      />
     
    </div>
 <van-popup v-model:show="state.showPicker" position="bottom">
        <van-datetime-picker
          @confirm="onConfirm"
          :formatter="formatter"
          :min-date="state.currentDate"
          @cancel="state.showPicker = false"
        />
      </van-popup>
    <div class="d-card">
      <div class="d-title">咨询专家</div>
      <van-field
        v-model="state.value"
        label="专家姓名"
        readonly
        clickable
        placeholder="点击选择专家"
      />
    </div>
    <div class="d-card">
      <div class="d-title">上传图片</div>
     <uploadImg></uploadImg>
    </div>
    <div class="d-card">
      <div class="d-title">病情信息</div>
      <van-field
        v-model="state.value"
        rows="2"
        autosize
        type="textarea"
        maxlength="200"
        placeholder="请输入用户名"
        show-word-limit
      />
    </div>
    <div class="d-card">
      <div class="d-title">护理需求</div>
      <van-field
        v-model="state.value"
        rows="2"
        autosize
        type="textarea"
        maxlength="200"
        placeholder="请输入用户名"
        show-word-limit
      />
    </div>
    <btn @click="GoTo(10)" title="提交订单"></btn>
  </div>
</template>
<script lang='ts'>
import { defineComponent, ref, getCurrentInstance, reactive } from "vue";
export default defineComponent({
  name: "",
  setup() {
    const { proxy:{$router,$moment,$GoTo,$CNY} }:any = getCurrentInstance();
    const state = reactive({
      currentDate: new Date(),
      showPicker: false,
      value: "",
      fileList:[],
      fileList1:[],
      fileList2:[],
    });
    const onConfirm = (value:any) => {
      state.value =$moment(value).format("YYYY-MM-DD HH:mm") ;
      state.showPicker = false;
    };
    const formatter = (type:any, val:any) => {
      let data: any;
      switch (type) {
        case "year":
          data = val + "年";
          break;
        case "month":
          data = val + "月";
          break;
        case "day":
          data = val + "日";
          break;
        case "hour":
          data = val + "时";
          break;
        case "minute":
          data = val + "分";
        default:
          "";
      }
      return data;
    }
     const afterRead = (file:any) => {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    }
    const GoTo=(index:number,val:any)=>{
           switch (index) {
        case 0:
          $GoTo({ path: "/payment" });
          break;
        case 1:
          $GoTo({ path: "/patientlist" });
          break;
        case 2:
          $GoTo({ path: "/payment" });
          break;
        case 3:
          $GoTo({ path: "/payment" });
          break;
        case 4:
          $GoTo({ path: "/payment" });
          break;
        case 5:
          $GoTo({ path: "/payment" });
          break;
        case 6:
          $GoTo({ path: "/payment" });
          break;
        case 7:
          $GoTo({ path: "/payment" });
          break;
        case 8:
          $GoTo({ path: "/payment" });
          break;
        case 9:
          $GoTo({ path: "/payment" });
          break;
        case 10:
          $GoTo({ path: "/payment" });
          break;
        default:
          "";
      }
    
    }
  console.log($CNY('100.0'))
    return {  state, onConfirm, formatter,afterRead,GoTo };
  },
});
</script>
<style  lang='scss' scoped>
.d-box {
  .d-card {
    padding: 10px  10px;
    overflow: hidden;

/* &:deep(.van-field::after) {
    position: absolute;
    box-sizing: border-box;
    content: ' ';
    pointer-events: none;
    right: var(--van-padding-md);
    bottom: 0;
    left: var(--van-padding-md);
    border-bottom: 0.02667rem solid var(--van-cell-border-color);
    transform: scaleY(.5);
} */
 
    .d-title {
      //padding-left: 16px;
      font-weight: 600;
      font-size: 16px;
    }
    .d-img-box{
      width: 327px;
      margin: 0 auto ;

      padding:16px 0 0 6px;
      display: flex;
      flex-wrap: wrap;
    
    }
 
  }
  
}
</style>