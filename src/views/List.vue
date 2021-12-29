<template>
  <div class="d-box">
    <div class="d-card" v-for="(item, i) of state.list" :key="i">
        <div class="d-title" v-if="item.title!==''">{{item.title}} <span>{{item.subTitle}}</span></div>
       <van-field v-show="obj1.mold=='input'"  v-for="(obj1,j) of item.children" :key="j"   v-model="obj1.value" :label="obj1.label" label-width="1.6rem"  :required="obj1.required" :readonly ="obj1.readonly" :is-link="obj1.link"  :placeholder="obj1.holder" clearable  />
     <van-field
       v-show="obj2.mold=='textarea'"
       v-for="(obj2,k) of item.children" :key="k"
    v-model="obj2.value"
    rows="2"
    autosize
   :label="obj2.label"
    type="textarea"
    maxlength="300"
    :border="false"
    :placeholder="obj2.holder"
    show-word-limit
  /> 
 <van-radio-group  v-show="obj3.mold=='radio'"  v-for="(obj3,l) of item.children" :key="l" v-model="obj3.value">
  <van-radio  v-for="(bar1,ii) of obj3.children" :key="ii"  :name="bar1.id" >{{bar1.text}}</van-radio>
</van-radio-group>

<van-checkbox-group v-show="obj4.mold=='checkbox'" v-for="(obj4,m) of item.children" :key="m"  v-model="obj4.result">
  <van-checkbox v-for="(bar2,jj) of obj4.children"  :key="jj" :name="bar2.id" shape="square">{{bar2.text}}</van-checkbox>
</van-checkbox-group> 
 <uploadImg v-show="obj5.mold=='upload'"  v-for="(obj5,n) of item.children" :key="n" ></uploadImg>
    </div>
  </div>
</template>
<script lang='ts'>
import { defineComponent, ref,getCurrentInstance, reactive} from 'vue';
export default defineComponent({
name: '',
setup() {
  const { proxy:{$GoTo} }:any = getCurrentInstance();
  const state:any=reactive({
      list:[
      {title:"输入框",subTitle:'备注' ,children:[  {label:'患者信息',mold:'input',value:'',holder:'点击跳转',icon:'',required:false,readonly :true,link:false},
      {label:'姓名',mold:'input',value:'',holder:'请输入姓名',icon:'',required:true,readonly :false,link:false},
      {label:'手机号',mold:'input',value:'',holder:'请输入手机号码',icon:'',required:true,readonly :false,link:false},]},
      {title:"文本域",subTitle:'备注' ,children:[ {label:'',mold:'textarea',value:'',holder:'请输入服务需求',icon:'',required:true,readonly :false,link:false},  ]}, 
    //  {title:"单选框" ,subTitle:'备注',children:[ {label:'单选框问题',mold:'radio',value:'',icon:'',required:true,children:[{id:'1',text:'单选1'},{id:'2',text:'单选2'},{id:'3',text:'单选3'}]},  ]},
     // {title:"复选框" ,subTitle:'备注',children:[ {label:'复选框问题',mold:'checkbox',value:'',icon:'',required:true,children:[{id:'1',text:'复选1'},{id:'2',text:'复选2'},{id:'3',text:'复选3'}]},  ]},
      {title:"图片上传",subTitle:'备注',children:[{label:'图片上传',mold:'upload',value:[]}]},
      //{title:"图片上传",subTitle:'备注',children:[{label:'图片上传',mold:'upload',value:[]}]},
      {title:"文本域" ,subTitle:'备注',children:[ {label:'',mold:'textarea',value:'',holder:'请输入服务需求',icon:'',required:true,readonly :false,link:false},  ]}, 
     //   {title:"" ,children:[  {label:'患者信息',mold:'input',value:'',holder:'请输入患者信息',icon:'',required:false,readonly :false,link:false},]},
     ]
  })

 return {state};
},
});
</script>
<style  lang='scss' scoped>
.d-box{
    .d-card{
      padding: 10px ;
      box-sizing: border-box;
      overflow: hidden;
        .d-title{
          
          margin-bottom: 6px;
            font-size: 16px;
            &>span{
              font-size: 12px;
              color:#ccc
            }
        }
        &:deep(.van-cell){
           background: #f5f5f5;
           margin: 3px 0;
        }
        &:deep(.van-radio){
          padding:4px 10px 0;
        }
        &:deep(.van-radio__icon .van-icon){
          background: #f5f5f5;
        }
        &:deep(.van-radio__icon--checked .van-icon){
          background: #1989fa;
        }
        &:deep(.van-checkbox){
          padding:4px 10px 0;
        }
        &:deep(.van-checkbox__icon){
          background: #f5f5f5;
        }
    }
}
</style>