<template>
  <div id="tab-img">
    <p>叮咚依生</p>
    <p>{{x}},{{y}}</p>
  </div>
</template>
<script lang='ts'>
import { defineComponent, ref, getCurrentInstance } from "vue";
export default defineComponent({
  name: "",
 /*  props: {
    Width: {
      type: [String],
      default: "80px",
    },
    Height: {
      type: [String],
      default: "80",
    },
  }, */
  setup(ctx,ct) {
    //  const { proxy: { $useMouse } }: any = getCurrentInstance();
  const { proxy }: any = getCurrentInstance();
  console.log(proxy)
    const {x,y}=proxy.$useMouse()
   

    return {x,y};
  },
});
</script>
<style  lang='scss' scoped>
#tab-img {
  border: 1px solid #fff;
  width: var(--Width);
  color: #fff;
}
</style>