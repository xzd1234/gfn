<template>
  <svg :style="{'width':width+'rem','height':height+'rem'}" class="icon"  aria-hidden="true">
    <use :xlink:href="name"></use>
  </svg>
</template>

<script>
import { defineComponent, reactive,ref } from "vue";
export default defineComponent({
  props: {
    name: { type: String, required: true },
    width: { type:[String, Number], default: 1 },
    height: { type: [String, Number], default: 1 },
  },
  setup(props){
const obj=reactive({width:'1rem',height:'1rem'})
console.log(obj)

return{}
  }
});
</script>

<style lang="scss" scoped>
.icon {
  vertical-align: -0.1rem;
  fill: currentColor;
  overflow: hidden;
}
</style>