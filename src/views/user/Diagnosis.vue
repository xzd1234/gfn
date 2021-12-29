<template>

</template>
<script lang='ts'>
import { defineComponent, ref,getCurrentInstance, reactive, computed} from 'vue';
export default defineComponent({
name: '',
setup() {
  //const { proxy } = getCurrentInstance();

  const state=reactive({
    text:'#0ff00f'
  })
 return {state};
},
});
</script>
<style  lang='scss' scoped>

</style>