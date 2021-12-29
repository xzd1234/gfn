<template>
<div class="d-box">
    <div class="d-card">
       <div class="d-title">基本信息</div>
        <van-field
        v-model="state.value"
        label="姓名"
        clickable
        placeholder="点击选择患者信息"
      />
        <van-field
        v-model="state.userCard"
        label="身份证号"
        clickable
        placeholder="请输入身份证号码"
      />
        <van-field
        v-model="state.sex"
        label="性别"
        readonly     
      />
        <van-field
        v-model="state.birth"
        label="出生日期"
        readonly    
      />
    </div>
    <div class="d-card">
       <div class="d-title">联系信息</div>
         <van-field
        v-model="state.value"
        label="联系电话"
        type="tel"
         placeholder="请输入联系电话"   
      />
         <van-field
        v-model="state.value"
        label="紧急联系电话"
        type="tel"
         placeholder="请输入紧急联系电话"
      />
         <van-field
        v-model="state.value"
        label="居住地址"
        readonly
        clickable
        @click="onMap"
         placeholder="请选择居住地址"
      />
         <van-field
        v-model="state.value"
        label="详细地址"
        readonly
        clickable
         placeholder="请输入小区及门牌号"
      />
    </div>
    <div class="d-card">
       <div class="d-title">诊疗信息</div>
      <div class="d-imgbox">
            <van-uploader class="d-img1" name="file" preview-size="101px" v-model="state.fileList" :after-read="afterRead"  multiple :max-count="1"/>
      </div>
    </div>
    <btn  @click="GoTo(12)" title="保存"></btn>
</div>
</template>
<script lang='ts'>
import { defineComponent, ref,getCurrentInstance, reactive,watch} from 'vue';
import api from '../util/get'
export default defineComponent({
name: '',
setup() {
  const { proxy:{$router,$Api:{ImgUpload}} }:any= getCurrentInstance();
  const state:any=reactive({
      value:'',userCard:'', sex:'',birth:''
  })
     const afterRead =async (file:any) => {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    const res:any= await ImgUpload(file)
    console.log(res)
    }
    watch(()=>state.userCard,(userCard,prevPid)=>{
      if(userCard.length<14){
        
        state.birth='' 
      }else if(userCard.length<16){
        state.sex=''
      }
      //获取出生日期
      if (userCard.length >= 14) {
        state.birth = userCard.substring(6, 10) + "-" + userCard.substring(10, 12) + "-" + userCard.substring(12, 14);
        }
    //获取性别
    if (userCard.length >= 16) {
      console.log(userCard.substr(16, 1))
        if (parseInt(userCard.substr(16, 1)) % 2 == 1) {
            state.sex= "男";
        } else {
            state.sex= "女";
        }
    }
    })
  const GoTo=async (val:any)=>{
     if(val=='12'){
const res=await api({api:'/dingdong/project/select_pagination?isShow=1&start=0&length=20',data:'123'})
  console.log(res)
  }
      console.log('GoTo')
    }
    const onMap=()=>{
      $router.push('/map')
   //   window.location.href=`//m.amap.com/picker/?keywords=&zoom=15&center=&radius=1000&total=20&key=9caaa0fcd0c9dc1e6cfe42de987d117e`
    
    }

 return {GoTo,state,afterRead,onMap};
},
});
</script>
<style  lang='scss' scoped>
.d-box{
    .d-card{ 
        padding: 10px 0;
        .d-title{
            font-weight: 600;
            padding-left: 16px;
        }
        .d-imgbox{
            width: 327px;
            margin: 0 auto;
            display: flex;
            padding-top: 16px;
        }
    }
 
}
</style>