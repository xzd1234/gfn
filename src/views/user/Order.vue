<template>
<van-tabs v-model="state.active" swipeable animated title-active-color="#449bff" sticky  color="#449bff">
  <van-tab title="医护上门">
      <van-pull-refresh v-model="state.refreshing" @refresh="onRefresh">
    <van-list
      v-model="state.loading"
      :finished="state.finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
    <orderList v-for="(item, i) in state.list" :key="i" :data="item" @clickTo="Goto"></orderList>
    </van-list>
  </van-pull-refresh>
  </van-tab>
  <van-tab title="器械租赁">
    
      <van-pull-refresh v-model="state.refreshing" @refresh="onRefresh">
    <van-list
      v-model="state.loading"
      :finished="state.finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <orderList v-for="(item, i) in state.list" :key="i" :data="item" @clickTo="Goto"></orderList>
    </van-list>
  </van-pull-refresh>
  </van-tab>
</van-tabs>
</template>
<script lang='ts'>
import orderList from "../../components/orderItem.vue"
import { defineComponent, ref, getCurrentInstance, reactive } from "vue";
export default defineComponent({
  name: "order",
  components:{orderList},
  setup() {
    //const { proxy } = getCurrentInstance();
    const state = reactive({
      list: [{project:'医护上门',name:'王**',time:'2020-11-12 12:10:01',createTime:'2020-11-12 12:10:01',price:'200.00',status:1},
      {project:'医护上门2',name:'李**',time:'2020-11-12 12:10:01',createTime:'2020-11-12 12:10:01',price:'20.00',status:2},
     {project:'医护上门2',name:'赵**',time:'2020-11-12 12:10:01',createTime:'2020-11-12 12:10:01',price:'20.00',status:3},
     //{project:'医护上门2',name:'李**',time:'2020-11-12 12:10:01',createTime:'2020-11-12 12:10:01',price:'20.00',status:3},
     //{project:'医护上门2',name:'李**',time:'2020-11-12 12:10:01',createTime:'2020-11-12 12:10:01',price:'20.00',status:3},
      ],
      loading: false,
      finished: false,
      refreshing: false,
      active:0,
      count:0
    });

     const onLoad = () => {
   
    };
      const onRefresh = () => {
        setTimeout(() => {
        onLoad()
      //  Toast('刷新成功');
        state.loading = false;
        state.count++;
      }, 1000);
    };
function Goto(data:any,val:any){
console.log('order',data,val)
}
    return { state, onLoad, onRefresh,Goto };
  },
});
</script>
<style  lang='scss' scoped>
.van-pull-refresh {
  min-height: 500px;
  padding-bottom: 12px;
}

</style>