<template>
<div>
 <router-view v-slot="{ Component }">
        <component :is="Component" />
  </router-view>
  <van-tabbar route>
    <van-tabbar-item
      v-for="(item, i) in tabList"
      :key="i"
      replace
      :to="item.path"
      :icon="item.icon"
      >{{ item.name }}</van-tabbar-item
    >
  </van-tabbar>
</div>
 
</template>
<script lang='ts'>
import { defineComponent, reactive,getCurrentInstance } from "vue";
export default defineComponent({
  name: "",
  setup() {
  
    const tabList = reactive([
      { name: "首页", icon: "home-o", path: "/user/home" },
      { name: "订单", icon: "orders-o", path: "/user/order" },
      { name: "个人中心", icon: "friends-o", path: "/user/mine" },
    ]);
    /* const redirect_url = 'http://xiezhnedong.cn'
const state=1
const appid='wxad245a5d46dc8d21'
   const authUrl = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${encodeURIComponent(redirect_url)}&response_type=code&scope=snsapi_userinfo&state=${state}#wechat_redirect`;
  window.location.href = authUrl; */

    return { tabList };
  },
});
</script>
