<template>
  <div class="d-box" v-cloak>
    <div class="d-card d-card-img">
      <img src="https://img.xiezhendong.cn/dingdong/hyzp.jpg" alt="" />
    </div>
    <div class="d-card">
      <div class="d-title">护理项目介绍</div>
      <div class="d-details">
        <div class="d-icon">
          <van-icon size="4.3em" :name="status.pList.projectIcon" />
        </div>
        <div class="d-right-box">
          <div class="d-title">{{ status.pList.projectName }}</div>
          <div class="d-subTitle">{{ status.pList.projectIntro }}</div>
        </div>
      </div>
    </div>
    <div class="d-card">
      <div class="d-title">适宜人群</div>
      <p class="d-infor">{{ status.pList.forTheCrowd }}</p>
    </div>
    <div class="d-card">
      <div class="d-title">服务提示</div>
      <div class="d-service d-infor">
        <p v-for="(item, i) in status.pList.serviceTips" :key="i">{{ item }}</p>
      </div>
    </div>
    <div class="d-card">
      <div class="d-algin">服务须知</div>
      <div class="d-infor">
        <p>1、用户需自备药物和部分耗材，需上传正规医院开具的医嘱、处方等文件</p>
        <p>
          2、为保障医患双方安全和服务质量，具有攻击性、易产生过激反应的患者不在服务范围内
        </p>
        <p>
          3、请如实填写联系方式和预约地址，预约成功后，医护人员会尽快联系用户，请保持电话畅通
        </p>
        <p>
          4、上门服务费仅为医护人员本次上门服务过程中产生的交通费等费用，不包括治疗费和材料费
        </p>
        <p>
          5、治疗材料费包含上门治疗过程中实际的治疗技术费和医护人员代买的相关耗材费用
        </p>
        <p>6、平台内所有费用不可医保支付，服务押金在服务结束后可退还</p>
        <p>
          7、每次服务时长在30分钟内，如超出服务时长、有疑难病症等情况，将收取特需差价服务费
        </p>
        <p>
          8、预约成功后由于用户个人原因取消订单将扣除部分上门服务费作为违约金
        </p>
      </div>
    </div>
    <div class="d-card">
      <div class="d-algin">服务标准</div>
      <div class="d-infor">
        <p>1、建立电子健康档案，记录服务信息，保障用户信息安全</p>
        <p>2、平台将为用户购买意外险等保险，全力保障用户的生命财产安全</p>
        <p>
          3、遵循国家相关管理规定和技术规范，制定严格的护理质量安全监督与培训体系
        </p>
        <p>4、所有护士持证上岗：《护士执业证书》、《护士资格证书》</p>
        <p>5、家庭护理用品专用箱，护理用品一营俱全</p>
        <p>
          6、护理过程带一次性医用手套，穿鞋套；备医疗废物锐器盒，带走医疗垃圾
        </p>
      </div>
    </div>
    <btn @click="GoTo" title="立即预约"></btn>
  </div>
</template>
<script lang='ts'>
import { defineComponent, ref, getCurrentInstance, reactive } from "vue";
export default defineComponent({
  name: "payment",
  setup() {
    const {
      proxy: {
        $router,
        $route,
        $Api: { ProjectIntro },
      },
    }: any = getCurrentInstance();
    const status: any = reactive({
      pList: [],
    });
    ProjectIntro({ projectId: $route.query.projectId }).then((res: any) => {
      let arr = res.data;
      arr.serviceTips = arr.serviceTips.split("；");
      status.pList = arr;
      console.log(status);
    });
    const GoTo = (val: any) => {
      $router.push("/appointment");
    };
    return { GoTo, status };
  },
});
</script>
<style  lang='scss' scoped>
.d-box {
  .d-card {
    padding: 14px;
    .d-title {
      padding-bottom: 10px;
      font-weight: 600;
    }
    .d-details {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 0 0 6px 0;
      .d-icon {
        width: 60px;
      }
      .d-right-box {
        width: 250px;
        .d-subTitle {
          line-height: 17px;
          font-size: 12px;
          color: #777;
        }
      }
    }
    .d-service {
      padding-left: 10px;
      line-height: 24px;
      & > p {
        position: relative;
        &::before {
          content: "*";
          font-size: 18px;
          position: absolute;
          top: 3px;
          left: -11px;
          color: #f66;
        }
      }
    }
    .d-algin {
      width: 80px;
      margin: 0 auto;
      color: #0e7eff;
      font-size: 16px;
      font-weight: 500;
      text-align: center;
      padding-bottom: 10px;
      position: relative;
      &::before {
        content: "";
        width: 50px;
        height: 1px;
        background: #0e7eff;
        position: absolute;
        left: -54px;
        top: 8px;
      }
      &::after {
        content: "";
        width: 50px;
        height: 1px;
        background: #0e7eff;
        position: absolute;
        right: -54px;
        top: 8px;
      }
    }
    .d-infor {
      line-height: 24px;
      color: #666;
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
}
</style>