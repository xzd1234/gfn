<template>
  <div class="d-btn-box">
    <span>{{ title }}</span>
  </div>
</template>
<script lang='ts'>
import { defineComponent, ref, getCurrentInstance, reactive } from "vue";
export default defineComponent({
  props: ['title']
});
</script>
<style  lang='scss' scoped>
.d-btn-box {
  width: 375px;
  height: 56px;
  padding-top: 10px;
  position: fixed;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  text-align: center;
  background-color: $color-global-bg;
 span {
    display: inline-block;
    width: 340px;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    border-radius: 20px;
    text-align: center;
    color: #ffffff;
    font-weight: 500;
    // letter-spacing: 6px;
    background-color: #449bff;
    &:active {
    background-color: #449bbb;
  }
  }

}
</style>