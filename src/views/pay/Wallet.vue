<template>
  <div class="d-wallet">
    <div class="d-card d-card-color">
      <p class="d-price d-center" v-if="wallet.show">{{ wallet.price }}</p>
      <!--    <p class="center  price" v-if="!wallet.show">{{wallet.priceS}}</p> -->
      <p class="d-text d-center">
        总金额(元)
        <!-- <van-icon name="eye-o" v-if="wallet.show" @click="priceShow" /><van-icon name="eye" v-if="!wallet.show" @click="priceShow" /> -->
      </p>
      <div class="d-subPrice">
        <p class="d-center">
          <span>冻结押金 <van-icon @click="msg" name="info-o" /></span
          ><br /><span>200.00</span>
        </p>
        <p class="d-center"><span>可用金额</span><br /><span>500.00</span></p>
      </div>
    </div>
    <div class="d-card">
      <p class="d-text">充值协议</p>
      <p class="d-text">1充值协议</p>
      <p class="d-text">2充值协议</p>
      <p class="d-text">3充值协议</p>
      <p class="d-text">4充值协议</p>
    </div>
    <div class="d-btn">充 值</div>
  </div>
</template>
<script lang='ts'>
import { defineComponent, ref, getCurrentInstance, reactive } from "vue";
export default defineComponent({
  name: "",
  setup() {
    const {
      proxy: { $dialog },
    } :any= getCurrentInstance();
    const wallet = reactive({
      price: "10000.00",
      show: true,
      priceS: "",
    });
    function priceShow() {
      wallet.priceS = "";
      let price = wallet.price.toString();
      for (let i = 0; i < price.length; i++) {
        wallet.priceS += " *";
      }
      wallet.show = !wallet.show;
    }
    function msg() {
      $dialog({ message: "账户押金" });
    }
    return { wallet, priceShow, msg };
  },
});
</script>
<style  lang='scss' scoped>
.d-wallet {
  min-height: 600px;
  position: relative;
  box-sizing: border-box;
  .d-card {
    width: 355px;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    margin: 10px auto 0;
    font-size: 12px;
    background: #fff;
    box-sizing: border-box;
    border-radius: 4px;
    .d-price {
      font-size: 18px;
      padding: 8px 0 4px;
      width: 100%;
    }
    .d-text {
      width: 100%;
      line-height: 20px;
    }
    .d-subPrice {
      width: 100%;
      display: flex;
      justify-content: center;
      padding: 15px 0 6px;

      p {
        width: 49%;
        font-size: 12px;
        span {
          display: inline-block;
          padding-top: 4px;
        }
      }
    }
  }
  .d-card-color {
    color: #fff;
    background-color: #0a5cdd;
  }
  .d-center {
    text-align: center;
  }
  .d-btn {
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
    position: absolute;
    bottom: 10px;
    left: 10px;
  }
  .d-btn:active {
    background: rgba(10, 92, 221, 0.8);
  }
}
</style>