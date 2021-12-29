<template>
  <div class="login">
    <div class="l-img">
      <!-- <img :src="swipe[0].img" alt=""> -->
    </div>
    <div class="l-box">
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          placeholder="请输入账号"
        
        />
        <van-field
          v-model="password"
          type="password"
          placeholder="请输入密码"
         
        />
      </van-form>
      <div class="l-agree">
        <van-checkbox v-model="checked"
          >已阅读同意<span>《用户协议》</span></van-checkbox
        >
      </div>
      <div class="l-btn" @click="onSubmit">登录</div>
    </div>
  </div>
</template>
<script lang='ts'>
import { defineComponent, ref, getCurrentInstance, reactive } from "vue";
export default defineComponent({
  name: "",
  setup() {
    const proxy = getCurrentInstance();
    console.log(proxy)
    const username = ref("");
    const password = ref("");
    const checked = ref(false);
    const swipe = reactive([
      {
        img: "	http://www.dingdongdr.com/dingdong/file/banner/banner3.png",
        url: "",
      },
    ]);
    function onSubmit(values:any) {
      console.log("submit", values);
     /*  $router.replace('/') */

    }
    return { onSubmit, swipe, username, password, checked };
  },
});
</script>
<style  lang='scss' scoped>
.login {
  height: 617px;
  font-size: 18px;
  overflow: auto;
/*   display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  align-content:center; */
  & > .l-img {
    width: 100px;
    height: 100px;
      margin: 60px auto 0;
  
    img{
      width: 100%;
      height: 100%;
    }
  }
  & > .l-box {
    width: 355px;
    padding: 20px;
      margin: 60px auto 0;
    border-radius: 6px;
    box-sizing: border-box;
    background: $color-bg-white;
    .van-cell {
      border-bottom: 1px solid $color-border;
    }
    .l-agree {
      padding: 20px 10px;
      font-size: 12px;
      color: $color-text-grey;
      .van-checkbox__icon {
        font-size: 12px;
      }
    }
    .l-btn {
      padding: 10px;
      border-radius: 4px;
      text-align: center;
      color: $color-text-white;
      background: $color-btn;
    }
  }
}
</style>