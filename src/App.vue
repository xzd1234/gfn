<template>
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition || 'fade'">
      <keep-alive v-if="route.meta.keepAlive">
        <component :is="Component" />
      </keep-alive>
      <component :is="Component" v-else />
    </transition>
  </router-view>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, reactive } from "vue";
export default defineComponent({
  name: "App",
  components: {},
  setup() {
    const {
      proxy: { $route ,$isWeiXin},
    }: any = getCurrentInstance();
    const route: any = $route;

    /* const redirect_url = 'http://xiezhnedong.cn'
const state=1
const appid='wxad245a5d46dc8d21'
   const authUrl = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${encodeURIComponent(redirect_url)}&response_type=code&scope=snsapi_userinfo&state=${state}#wechat_redirect`;
  window.location.href = authUrl; */

    return { route };
  },
});
</script>
<style lang="scss">
html,
body,
#app {
  width: 100%;
  height: 100%;
  font-size: 14px;
  box-sizing: border-box;
  background-color: $color-global-bg;
  -webkit-overflow-scrolling: touch;
  font-family: "Microsoft YaHei", "微软雅黑", "MicrosoftJhengHei", "华文细黑",
    "STHeiti", "MingLiu";
}
[v-cloak]{
  display: none;
}
</style>
