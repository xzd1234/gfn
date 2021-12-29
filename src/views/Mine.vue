<template>
  <div>
    <div class="m-head">
      <div class="head-box">
        <div class="head-img">
          <img
            src="http://www.dingdongdrtest.cn/dingdong/static/images/coupon/icon_yykt.png"
            alt=""
          />
        </div>
        <div class="head-name">
          <p class="name">孙晓晓</p>
          <p>卡号：121354</p>
        </div>
        <div class="head-btn">切换就诊人</div>
      </div>
    </div>
    <div class="m-list m-item"></div>

    <div class="m-list" v-for="(item, i) of list" :key="i">
      <van-icon size="0.7rem" :name="item.icon" />&nbsp;&nbsp;&nbsp;{{
        item.title
      }}
    </div>
    <div class="m-btn">退出登录</div>
  </div>
</template>
<script lang='ts'>
import { defineComponent, ref, getCurrentInstance, reactive } from "vue";
export default defineComponent({
  
  name: "",
  setup() {
    const { proxy: { $store },  }: any = getCurrentInstance();
    $store.commit('ADD_BOOK','abcdefg')

      console.log($store.state.bookList)
    const list = reactive([
      {
        icon: "http://www.dingdongdrtest.cn/dingdong/static/images/center/icon_nav_deposit.png",
        title: "我的押金",
      },
      {
        icon: "http://www.dingdongdrtest.cn/dingdong/static/images/center/icon_nav_protocol.png",
        title: "我的订单",
      },
      {
        icon: "	http://www.dingdongdrtest.cn/dingdong/static/images/center/icon_nav_patient.png",
        title: "就诊人管理",
      },
      {
        icon: "	http://www.dingdongdrtest.cn/dingdong/static/images/center/icon_nav_record.png",
        title: "诊疗记录",
      },

      {
        icon: "	http://www.dingdongdrtest.cn/dingdong/static/images/center/icon_nav_contact.png",
        title: "联系客服",
      },
    ]);
    return { list };
  },
});
</script>
<style  lang='scss' scoped>
.m-head {
  height: 96px;
  display: flex;
  align-items: flex-end;
  background-image: linear-gradient(
    to left,
    $color-bg-wathet,
    $color-bg-skyblue
  );
  position: relative;
  font-size: 14px;
  color: $color-text-white;
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 40px;
    background-image: linear-gradient(
      to left,
      $color-bg-wathet,
      $color-bg-skyblue
    );
    position: absolute;
    bottom: -36px;
    border-radius: 0 0 1% 100%;
    border-bottom: 1px solid $color-bg-wathet;
  }
  & > .head-box {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .head-img {
      width: 60px;
      height: 60px;
      border-radius: 50% 50%;
      border: 1px solid $color-border-light;
      z-index: 1;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .head-name {
      width: 120px;
      z-index: 1;
      .name {
        font-size: 18px;
        font-weight: 500;
      }
      p {
        padding-top: 4px;
      }
    }
    .head-btn {
      width: 90px;
      height: 22px;
      line-height: 22px;
      text-align: center;
      border-radius: 12px;
      border: 1px solid $color-border-light;
      z-index: 1;
    }
  }
}
.m-list {
  width: 355px;
  margin: 12px auto 0;
  padding: 8px;
  min-height: 10px;
  background: $color-bg-white;
  box-sizing: border-box;
  font-size: 16px;
  border-radius: 6px;
  display: flex;
  align-items: center;
}
.m-item {
  margin: 0;
  width: 375px;
  height: 60px;
  border-radius: 0;
}
.m-btn {
  width: 355px;
  font-size: 18px;
  margin: 20px auto 0;
  padding: 12px;
  min-height: 10px;
  text-align: center;
  border-radius: 6px;
  box-sizing: border-box;
  color: $color-text-white;
  background: $color-btn;
}
</style>