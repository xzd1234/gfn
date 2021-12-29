<template>
  <div class="list-box" @click="goTo(0,data)">
        <p class="p-box">
          <span class="project">{{data.project}}</span>
          <span class="status">已完成</span>
        </p>
        <p class="p-box"><span>预约人</span><span>{{data.name}}</span></p>
        <p class="p-box"><span>预约时间</span><span>{{data.time}}</span></p>
        <p class="p-box"><span>创建时间</span><span>{{data.createTime}}</span></p>
        <p class="p-box"><span>实付金额</span><span class="price">&yen;{{data.price}}</span></p>
        <p class="p-box-btn">
         <span v-if="data.status!==1" @click.stop="goTo(1,data)">服务评价1</span>
         <span v-if="data.status!==2" @click.stop="goTo(2,data)">服务评价2</span>
         <span v-if="data.status!==3" @click.stop="goTo(3,data)">服务评价3</span>
        </p>
      </div>
</template>
<script lang='ts'>
import { defineComponent, ref,getCurrentInstance} from 'vue';
export default defineComponent({
//props:['data']
  props:{
    data:{
      type:Object,
     default:{project:'****',name:'***',time:'**********',createTime:'*************',price:'*****'}
    }
  }
,
setup(props,context) {
  //const { proxy } = getCurrentInstance();
  function goTo(data:any,val:any){
context.emit('clickTo',data,val)
  }
 return {goTo};
},
});
</script>
<style  lang='scss' scoped>
.list-box {
  width: 355px;
  height: 175px;
  padding: 10px;
  font-size: 14px;
  margin: 12px auto 0;
  border-radius: 8px;
  box-sizing: border-box;
    background: #ffffff;
  .p-box {
    display: flex;
    justify-content: space-between;
    padding: 3px;
    .project {
      font-size: 16px;
       font-weight: 600;
    }
    .status {
      color: #f44;
    }
    .price {
      font-size: 16px;
      font-weight: 600;
    }
  }
  .p-box-btn{
     display: flex;
    justify-content: flex-end;
    padding-top: 7px;
    span{
      display: inline-block;
      padding:6px 10px ;
      margin-left: 10px;
      border-radius:20px;
      text-align: center;
      color: #ffffff;
      box-sizing: border-box;
      background-color: #449bff;
    }
    span:active{
      background-color: #449bbb;
    }
  }
}
</style>