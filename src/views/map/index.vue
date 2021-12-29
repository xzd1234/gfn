<template>
  <div id="container">
      <iframe id="test" src="https://m.amap.com/picker/?keywords=&zoom=16&center=&radius=200&total=20&key=9caaa0fcd0c9dc1e6cfe42de987d117e"></iframe>
  </div>
</template>
<script lang='ts'>
import { defineComponent, ref, getCurrentInstance, onMounted, reactive ,nextTick} from "vue";
export default defineComponent({
  name: "",
  setup() {
   nextTick(function(){
     const doct:any=document.getElementById('test')
  const iframe =doct.contentWindow;
    doct.onload = function(){
     // iframe.document.getElementById('.back').style.display= "none"
      iframe.postMessage('hello','https://m.amap.com/picker/');
    };
    window.addEventListener("message", function(e){
      console.log(e.data)
    //  alert('您选择了:' + e.data.name + ',' + e.data.location)
    }, false);
   })
    return {};
  },
});
</script>
<style  lang='scss' scoped>
#container {
 height: 666px;
  overflow: hidden;
  #test{
 width: 100%;
  height:665px;
  }
}
.amap-logo{
    display: none !important;
}
.amap-copyright {
    opacity:0;
}

</style>

