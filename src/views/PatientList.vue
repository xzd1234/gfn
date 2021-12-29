<template>
  <div class="d-box">
    <div
      class="d-card"
      @click="select(item)"
      v-for="(item, i) of state.list"
      :key="i"
    >
      <div class="d-left-box">
        <p class="d-title">
          <span>{{ item.name }}</span
          ><span>女</span><span>{{ item.tel }}</span
          ><span class="d-default">默认</span>
        </p>
        <p class="d-address">{{ item.address }}</p>
      </div>
      <div class="d-right-box" @click.stop="onEdit(item)">编辑</div>
    </div>
    <btn @click="onAdd" title="新增就诊人信息"></btn>
  </div>
</template>
<script lang='ts'>
import { defineComponent, ref, getCurrentInstance, reactive } from "vue";
export default defineComponent({
  name: "",
  setup() {
    const {
      proxy: { $toast, $router },
    }:any= getCurrentInstance();
    const state = reactive({
      chosenAddressId: "1",
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",
          isDefault: true,
        },
        {
          id: "2",
          name: "李四",
          tel: "1310000000",
          address: "浙江省杭州市拱墅区莫干山路 50 号",
        },
      ],
      disabledList: [
        {
          id: "3",
          name: "王五",
          tel: "1320000000",
          address: "浙江省杭州市滨江区江南大道 15 号",
        },
      ],
    });
    const onAdd = () => {
      $router.push("/patient");
    };
    const onEdit = (item:any) => {
      $router.push({path:'/patient',query:item})

    };
    const select = (item:any) => {
      $toast("选择地址:" );
    };

    return { onAdd, onEdit, select, state };
  },
});
</script>
<style  lang='scss' scoped>
.d-box {
  .d-card {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .d-left-box {
      font-size: 12px;
      .d-title {
        font-size: 16px;
        font-weight: 600;
        padding-bottom: 10px;
        span {
          display: inline-block;
          margin-right: 8px;
        }
        .d-default {
          width: 34px;
          height: 16px;
          line-height: 16px;
          font-weight: 500;
          font-size: 12px;
          color: #fff;
          text-align: center;
          background: #f00;
          border-radius: 10px;
        }
      }
      width: 290px;
    }
    .d-right-box {
      width: 30px;
      color: #f00;
    }
  }
}
</style>