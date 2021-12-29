<template>
  <div id="inquiry">
    <div class="eq-bg-head">
      <img :src="img" alt="" srcset="" />
      <div class="eq-card"></div>
    </div>
  </div>
</template>
<script lang='ts'>
import { defineComponent, ref, getCurrentInstance } from "vue";
export default defineComponent({
  name: "",
  setup() {
  /*   const { proxy } = getCurrentInstance(); */
    const img = ref(
      "https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3880341262,3308316348&fm=26&gp=0.jpg"
    );
    return { img };
  },
});
</script>
<style  lang='scss' scoped>
#inquiry {
  position: relative;
  .eq-bg-head {
    min-height: 230px;
    img {
      width: 100%;
      height: 100px;
    }
    .eq-card {
      width: 355px;
      padding: 10px;
      display: flex;
      box-sizing: border-box;
      margin: auto;
      background: #000;
    }
  }
}
</style>