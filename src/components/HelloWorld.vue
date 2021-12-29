
<template>
  <div id="DarkModelPage">
    <div>
      <h1 class="title">天小天个人网</h1>
      <a class="btn" @click="modelBrn">模式切换</a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, getCurrentInstance, onMounted } from "vue";
export default defineComponent({
    name: "HelloWorld",
    setup(){
 
       window.document.documentElement.setAttribute( "data-theme", 'light' );
 
     function modelBrn(){
       console.log('sadfa')
            dark.value = !dark.value;
            if(dark.value){
                window.document.documentElement.setAttribute( "data-theme", 'dark' );
            }else{
                 window.document.documentElement.setAttribute( "data-theme", 'light' );
            }
        }

    const  dark=ref(false)
    return{dark,modelBrn}
    }
})
</script>

<style scoped lang="scss">
@import "../assets/scss/variable";

#DarkModelPage {
  //在此使用了背景颜色变量
  @include background_color("background_color");
  //再次使用了文字颜色变量
  @include font_color("text-color");

  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 1s, color 0.6s;
  .title {
    margin-bottom: 20px;
  }
  .btn {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 40px;
    margin: 0 auto;
  }
}
</style>