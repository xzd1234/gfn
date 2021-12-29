<template>
  <div id="Citys">
    <div class="title">定位城市</div>
    <div class="city">杭州</div>
    <div class="title">城市列表</div>
    <div class="city" v-for="(item,i) of 3" :key="i" @click="goto(item)">杭州{{item}}</div>
  </div>
</template>
<script lang='ts'>
import { defineComponent, ref, getCurrentInstance } from "vue";
export default defineComponent({
  name: "",
  setup() {
   // const { proxy } = getCurrentInstance();
   function goto(val:any) {
       console.log(val)
       
   }
    return {goto};
  },
});
</script>
<style  lang='scss' scoped>
#Citys {
  font-size: 14px;
  width: 355px;
  margin: 0 auto;
  .title {
    font-weight: 600;
    padding: 8px 0;
  }
  .city{
      padding: 12px 0;
      border-bottom: 1px solid $color-border;

  }
}
</style>