<template>
  <div class="d-details">
    <div class="d-card">
      <p class="d-details"><span>订单编号</span><span>100</span></p>
      <p class="d-details"><span>下单时间</span><span>100</span></p>
      <p class="d-details"><span>支付方式</span><span>100</span></p>
    </div>
    <div class="d-card">
      <p class="d-details">
        <span class="d-subTitle">收货人</span><span>方**</span>
      </p>
      <p class="d-details">
        <span class="d-subTitle">联系电话</span><span>13297712345</span>
      </p>
      <p class="d-details">
        <span class="d-subTitle">所在地区</span
        ><span>浙江省杭，州市江干区浙江省杭州市江干区浙江省杭州市江干区</span>
      </p>
      <p class="d-details">
        <span class="d-subTitle">详细地址</span><span>红街公寓7幢1单元</span>
      </p>
    </div>
    <div class="d-card">
      <p class="d-details"><span>上门服务费</span><span>&yen;100</span></p>
      <p class="d-details"><span>专家咨询费</span><span>&yen;100</span></p>
      <p class="d-details"><span>治疗材料费</span><span>&yen;100</span></p>
      <p class="d-details"><span>打车费</span><span>&yen;100</span></p>
      <p class="d-details"><span>优惠券</span><span>- &yen;100</span></p>
      <p class="d-details">
        <span>合计</span><span class="d-total">&yen; 500</span>
      </p>
    </div>
    <div class="d-card d-btn-box">
      <span @click="GoTo(1)">联系客服</span>
      <span @click="GoTo(2)">去支付</span>
    </div>
  </div>
</template>
<script lang='ts'>
import { defineComponent, ref, getCurrentInstance } from "vue";
export default defineComponent({
  name: "payment",
  setup() {
    const {
      proxy: { $router },
    }:any = getCurrentInstance();
    const GoTo = (val:any) => {
      let path: any;
      switch (val) {
        case 1:
          path = "./";
          break;
        case 2:
          path = "/payment";
          break;
        default:
          "";
      }
      $router.push(path);
    };
    return { GoTo };
  },
});
</script>
<style  lang='scss' scoped>
.d-details {
  height: 100%;
  overflow: auto;
  .d-card {
    width: 355px;
    padding: 10px;
    margin: 10px auto;
    background: #fff;
    border-radius: 10px;
    box-sizing: border-box;

    .d-title {
      padding: 6px 0;
      font-weight: 600;
    }
    .d-details {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 4px 0;
      span {
        max-width: 51%;
        display: flex;
        flex-wrap: wrap;
      }
      .d-subTitle {
        width: 48%;
      }
      .d-total {
        font-size: 16px;
        color: #ff822c;
      }
    }
  }
  .d-btn-box {
    position: absolute;
    bottom: 0;
    left: 10px;
    display: flex;
    justify-content: space-between;
    // padding-top: 7px;
    span {
      display: inline-block;
      width: 76px;
      padding: 6px 0;
      border-radius: 20px;
      text-align: center;
      color: #ffffff;
      box-sizing: border-box;
      background-color: #449bff;
    }
    span:active {
      background-color: #449bbb;
    }
  }

  /* .d-btn {
    width: 355px;
    font-size: 18px;
    margin: 20px auto 0;
    padding: 12px;
    min-height: 10px;
    text-align: center;
    border-radius: 6px;
    box-sizing: border-box;
    color: $color-text-white;
    background: #0a5cdd;
  
  }
  .d-btn:active {
    background: rgba(10, 92, 221, 0.8);
  } */
}
</style>