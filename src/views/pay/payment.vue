<template>
  <div class="d-box">
    <div class="d-card">
      <div class="d-title">费用信息</div>
      <p class="d-details"><span>上门服务费</span><span>&yen;{{$CNY(100)}}</span></p>
      <p class="d-details"><span>专家咨询费</span><span>&yen;{{$CNY(100)}}</span></p>
      <p class="d-details"><span>治疗材料费</span><span>&yen;{{$CNY(100)}}</span></p>
      <p class="d-details"><span>打车费</span><span>&yen;{{$CNY(100)}}</span></p>
      <p class="d-details"><span>优惠券</span><span>- &yen;{{$CNY(100)}}</span></p>
      <p class="d-details"><span>合计</span><span class="d-total">&yen; {{$CNY(500)}}</span></p>
    </div>
    <div class="d-card">
      <div class="d-title">支付方式</div>
  <van-radio-group v-model="radio">
    <van-cell size="large" :icon="ImgUrl+'weixin.png'"  :border="false" title="微信支付"  @click="radio = '1'">
      <template #right-icon>
        <van-radio name="1" />
      </template>
    </van-cell>
    <van-cell size="large" :icon="ImgUrl+'alipay.png'"  :border="false" title="支付宝支付"  @click="radio = '2'">
      <template #right-icon>
        <van-radio name="2" />
      </template>
    </van-cell>
</van-radio-group>
   </div>
   <btn title="立即支付"></btn>
  </div>
</template>
<script lang='ts'>
import { defineComponent, ref, getCurrentInstance } from "vue";
export default defineComponent({
  name: "payment",
  setup() {
    const { proxy:{ImgUrl} }:any = getCurrentInstance();
    const radio=ref('')
    return {radio,ImgUrl};
  },
});
</script>
<style  lang='scss' scoped>

.d-box {
  overflow: hidden;
  .d-card {
   
    padding: 10px;
  

    .d-title{
        padding: 6px 0;
        font-weight: 600;

    }
    .d-details{
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 4px 0;
        span{
           display: flex;
            align-items: center; 
        }
         .d-total{
             font-size: 16px ;
        color:#ff822c ;
    }
    }
   &:deep(.van-cell--large){
        padding: 6px;
        line-height: 40px;
        .van-cell__title{
        font-size: 14px;}
   .van-cell__left-icon{
        font-size: 36px;
        margin-right: 10px;
    }
    }
  }

}
</style>