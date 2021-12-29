<template>
  <div class="home-card">
    <div class="nav-item">医护上门</div>
    <div class="nav-item">叮咚租机</div>
    <div class="nav-item">医护上门</div>
  </div>
  <div class="home-card"></div>
  <div class="home-card"></div>
  <div class="home-card">
    <div>
      <div>医疗机构</div>
      <div>医疗机构</div>
    </div>
  </div>

</template>
<script lang='ts'>
import { defineComponent, ref, getCurrentInstance } from "vue";
export default defineComponent({
  name: "home",
  setup() {
    const { proxy }:any = getCurrentInstance();
    return {};
  },
});
</script>
<style  lang='scss' scoped>
.home-card {
  width: 355px;
  padding: 10px;
  margin: 10px auto 0;
  border-radius: 6px;
  display: flex;
  font-size: 16px;
  box-sizing: border-box;
  background: $color-bg-white;
  .nav-item {
    width: calc(100% / 3);
    text-align: center;
  }
}
</style>