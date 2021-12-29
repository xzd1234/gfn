<template>
  <van-pull-refresh v-model="state.refreshing" @refresh="onRefresh">
    <van-list
      v-model="state.loading"
      :finished="state.finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <div
        class="d-list"
        @click="GoTo(item)"
        v-for="(item,i) in state.list"
        :key="i "  >
        <div class="d-icon">
          <van-icon size="5em" :name="item.projectIcon" />
        </div>
        <div class="d-details">
          <p class="d-title">{{ item.projectName }}</p>
          <p class="d-subTitle">{{ item.projectIntro }}</p>
        </div>
      </div>
    </van-list>
  </van-pull-refresh>
</template>
<script lang='ts'>
import { defineComponent, ref, getCurrentInstance, reactive } from "vue";
export default defineComponent({
  name: "order",
  components: {},
  setup() {
    const {
      proxy: {
        $router,
        $toast,
        $Api: { ProjectList },
      },
    }:any = getCurrentInstance();
    const state:any = reactive({
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
      isShow:1,
      start:0,
      length:7
    });

    const onLoad = () => {
       state.loading = true;
      ProjectList({ isShow:state.isShow, start:  state.start, length: state.length }).then((res:any) => {
          if (state.refreshing) {
          state.list = [];
          state.refreshing = false;
        }
          state.loading = false; //加载状态结束
          let data=res.dataList||[];
        if (state.length > data.length) {
          state.finished = true;
        }
        //  console.log(state.length ,data.length);
        state.list =state.start==0?data:state.list.concat(data)
  
        state.start+=state.length
      });
    
    };
    const onRefresh = () => {
     /*   state.finished = false;
      state.loading = true;
      onLoad(); */
    };

   onLoad();

    function GoTo(val:any) {
      console.log("order", val);
    //  $router.push({ path: "/projectintro", query: val });
    }
    return { state, onLoad, onRefresh, GoTo };
  },
});
</script>
<style  lang='scss' scoped>
.van-pull-refresh {
  min-height: 660px;
  padding-bottom: 10px;
}
.d-list {
  width: 355px;
  padding: 10px;
  height: 112px;
  margin: 10px auto 0;
  display: flex;
  justify-content: space-between;
  background: #fff;
  box-sizing: border-box;
  border-radius: 10px;
  .d-icon {
    width: 70px;
  }
  .d-details {
    width: 255px;
    .d-title {
      font-size: 16px;
      padding-bottom: 6px;
    }
    .d-subTitle {
      font-size: 12px;
      line-height: 16px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
      overflow: hidden;
    }
  }
}
</style>