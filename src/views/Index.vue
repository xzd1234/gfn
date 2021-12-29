
<template>
  <div class="d-box">
    <!-- 搜索区 -->
    <div class="d-card d-sesrch">
      <van-search
        v-model="state.value"
        shape="round"
        placeholder="请输入搜索关键词"
      /><span class="d-address" @click="addRess"
        ><van-icon name="location-o" />{{ address }}</span
      >
    </div>
    <!-- 快捷区 -->
    <div class="d-card d-flex d-card-color">
      <div
        class="d-flex-item"
        v-for="(item, i) of list"
        :key="i"
        @click="goto(item.url,'1')"
      >
        <van-icon :name="ImgUrl + item.icon" color="#fff" size="1.08rem" />
        <p>{{ item.title }}</p>
      </div>
    </div>

    <!-- 主功能区 -->
    <div class="d-card d-flex">
      <div
        class="d-flex-item"
        v-for="(item, i) of lists"
        :key="i"
        @click="goto(item.url, item.title)"
      >
        <van-icon :name="ImgUrl + item.icon" color="#000" size="1.08rem" />
        <p>{{ item.title }}</p>
      </div>
    </div>
    <div class="d-card d-card-img" @click="goto('1','2')">
      <img src="https://img.xiezhendong.cn/dingdong/hyzp.jpg" alt="" />
    </div>
    <div class="d-card">
      <div class="d-card-title">
        <span>商城列表</span><van-icon name="arrow" />
      </div>
      <div class="d-card-item" v-for="(item, i) of mall" :key="i">
        <div class="d-item-img">
          <img v-lazy="ImgUrl + item.img" alt="" />
        </div>
        <div class="d-item-details">
          <div class="d-item-title">{{ item.title }}</div>
          <div class="d-item-price">&yen;{{ item.price }}</div>
        </div>
      </div>
    </div>
    <div class="d-card">
      <div class="d-card-title">
        <span>医护列表</span><van-icon name="arrow" />
      </div>

      <div class="d-card-item" v-for="(item, i) of mall" :key="i">
        <div class="d-item-img">
          <img v-lazy="ImgUrl + item.img" alt="" />
        </div>
        <div class="d-item-details">
          <div class="d-item-title">{{ item.title }}</div>
          <div class="d-item-price">&yen;{{ item.price }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { defineComponent, ref, getCurrentInstance, reactive } from "vue";
export default defineComponent({
  name: "index",
  setup() {
    const {
      proxy: {
        $router,
        $toast,
        ImgUrl,
        $getSubStringSum,
        $loadAmap,
        $getLocalCity,
        $geGeolocation,
        $Api: { European, Europeans },
      },
    }: any = getCurrentInstance();
    const state = reactive({
      value: "",
    });

    const address = ref("广州市");
    async function addRess() {
      const res = await $getLocalCity();
      console.log("res", res);
      address.value = res.city;
      const res1 = await $geGeolocation();
      console.log("res1", res1);
    }
    addRess();
    function onSearch() {}
    const list = reactive([
      {
        title: "约医护",
        icon: "icon_yyh.png",
        url: "/projectlist",
      },
      {
        title: "问医护",
        icon: "icon_wys.png",
        url: "",
      },
      {
        title: "测健康",
        icon: "icon_wys.png",
        url: "",
      },
      {
        title: "买药械",
        icon: "icon_myp.png",
        url: "",
      },
    ]);
    const lists = reactive([
      {
        title: "营养讲堂",
        icon: "icon_yykt.png",
        url: "",
      },
      {
        title: "创面课程",
        icon: "icon_yhjt.png",
        url: "",
      },
      {
        title: "基金会",
        icon: "icon_ddys.png",
        url: "",
      },
      {
        title: "慈善救助",
        icon: "icon_csjz.png",
        url: "",
      },
      {
        title: "名医直播",
        icon: "icon_myzb.png",
        url: "",
      },
      {
        title: "关于我们",
        icon: "icon_addsc.png",
        url: "",
      },
      {
        title: "服务商",
        icon: "icon_gys.png",
        url: "",
      },
      {
        title: "签到有礼",
        icon: "icon_call.png",
        url: "",
      },
      {
        title: "领券中心",
        icon: "icon_csjz.png",
        url: "",
      },
      {
        title: "更多",
        icon: "icon_more.png",
        url: "",
      },
    ]);
    const notices = reactive([
      {
        not: "工作日8:00 ~ 10:00可预约上门服务",
        msg: "工作日12:00 ~ 14:00可预约上门服务",
      },
      {
        not: "工作日17:00 ~ 18:00可预约上门服务",
        msg: "工作日8:00 ~ 10:00可预约上门服务",
      },
    ]);
    function goto(val: any, data: any) {
      console.log(data);
      if (val == "") {
        $toast({ message: "开发中,敬请期待。。。", position: "top" });
        return;
      } else {
        $router.push("projectlist");
      }
      console.log(val == "");
    }
    const mall = reactive([
      {
        img: "Rietvlei.jpg",
        title: "爱可欣1",
        price: "105",
        fraction: 6,
        name: "孙红玲",
        rank: "副主任护师",
      },
      {
        img: "Rietvlei.jpg",
        title: "爱可欣1",
        price: "105",
        fraction: 6,
        name: "孙红玲",
        rank: "副主任护师",
      },
      {
        img: "Rietvlei.jpg",
        title: "爱可欣1",
        price: "105",
        fraction: 6,
        name: "孙红玲",
        rank: "副主任护师",
      },
      {
        img: "Rietvlei.jpg",
        title: "爱可欣1",
        price: "105",
        fraction: 6,
        name: "孙红玲",
        rank: "副主任护师",
      },
      {
        img: "Rietvlei.jpg",
        title: "爱可欣1",
        price: "105",
        fraction: 6,
        name: "孙红玲",
        rank: "副主任护师",
      },
      /*  {
        img: "Rietvlei.jpg",
        title: "爱可欣1",
        price: "105",
        fraction: 6,
        name: "孙红玲",
        rank: "副主任护师",
      }, */
    ]);
    European({ isShow: 1, start: 0, length: 15 }).then((res: any) => {
      console.log("res", res);
    });
    Europeans({ isShow: 1, start: 0, length: 5 }).then((res: any) => {
      console.log("res", res);
    });

    const swipe = reactive([
      {
        img: "	banner3.png",
        url: "",
      },
      {
        img: "	banner4.png",
        url: "",
      },
      {
        img: "banner1.png",
        url: "",
      },
      {
        img: "banner2.png",
        url: "",
      },
    ]);
    return {
      state,
      swipe,
      notices,
      goto,
      lists,
      list,
      mall,
      ImgUrl,
      onSearch,
      address,
      addRess,
    };
  },
});
</script>
<style  lang='scss' scoped>
.d-box {
  padding-bottom: 10px;
  .d-card {
    padding: 10px 0 10px 10px;
    .d-card-title {
      font-size: 16px;
      padding-bottom: 6px;
      margin-right: 10px;
      display: flex;
      justify-content: space-between;
      position: relative;
      &::after {
        content: "";
        width: 335px;
        height: 1px;
        background: #ccc;
        margin-right: 10px;
        transform: scaleY(0.5);
        position: absolute;
        bottom: 0;
      }
    }
    .d-card-item {
      position: relative;
      padding-bottom: 4px;
      margin: 10px 10px 0 0;
      display: flex;
      justify-content: space-between;
      .d-item-img {
        width: 60px;
        height: 60px;
        border-radius: 8px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .d-item-details {
        width: 265px;
        height: 60px;
        padding-top: 8px;
        box-sizing: border-box;
        .d-item-title {
          font-weight: 600;
          margin-bottom: 10px;
        }
      }
      &::after {
        content: "";
        width: 335px;
        height: 1px;
        background: #ccc;
        margin-right: 10px;
        transform: scaleY(0.5);
        position: absolute;
        bottom: 0;
      }
    }
  }

  .d-sesrch {
    display: flex;
    padding: 0;
    overflow: hidden;

    &:deep(.van-search) {
      width: 288px;
    }
    .d-address {
      display: flex;
      align-items: center;
    }
  }
  .d-flex {
    display: flex;
    flex-wrap: wrap;
    .d-flex-item {
      width: 76px;
      height: 76px;
      margin: 0 10px 10px 0;
      padding-top: 8px;
      text-align: center;
      box-sizing: border-box;
      p {
        margin-top: 6px;
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
  .d-card-img {
    padding: 0;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .d-card-color {
    color: $color10;
    background: $background-bg1;
  }
}
</style>
