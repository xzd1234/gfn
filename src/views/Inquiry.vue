<template>
  <div id="container"></div>
</template>
<script lang='ts'>
import { defineComponent, ref, getCurrentInstance, onMounted, reactive } from "vue";
export default defineComponent({
  name: "",
  setup() {
/* const {proxy:{$loadAmap}}=getCurrentInstance()
      $loadAmap().then((AMap) => {

         var map = new AMap.Map("container", {
          resizeEnable: true, //中心点坐标
          viewMode: "2D", //使用3D视图
        }); */

  /*      var path = [];
       for (let i=0;i<arr.length;i++){
     path.push(arr[i])
       }

        map.plugin("AMap.DragRoute", function () {
          let routesa = new AMap.DragRoute(
            map,
            path,
            AMap.DrivingPolicy.LEAST_FEE,{showTraffic:false, }
          ); //构造拖拽导航类
          routesa.search(); //查询导航路径并开启拖拽导航
        }) */

  

  /* 
map.plugin('AMap.CitySearch', function () {
  var citySearch = new AMap.CitySearch()
  citySearch.getLocalCity(function (status, result) {
    if (status === 'complete' && result.info === 'OK') {
      // 查询成功，result即为当前所在城市信息
      console.log(result)
    }
  })
})

 

      })
      .catch((e) => {
        console.log(e);
      }); */
      const arr=reactive([
        [120.17702, 30.253635],
        [120.17701, 30.25363],
        [120.177574, 30.25357],
        [120.17693, 30.25367],
        [120.177605, 30.253595],
        [120.1776, 30.253613],
        [120.178535, 30.252844],
        [120.178535, 30.252844],
        [120.17857, 30.252922],
        [120.21362, 30.25165],
        [120.21364, 30.251638],
        [120.21362, 30.251581],
        [120.215355, 30.252909],
        [120.21656, 30.252497],
        [120.21654, 30.252853],
        [120.21656, 30.252499],
        [120.216545, 30.252472],
        [120.21655, 30.252478],
        [120.21655, 30.252478],
        [120.21658, 30.252506],
        [120.21658, 30.252506],
        [120.21658, 30.252516],
        [120.21677, 30.252775],
        [120.216515, 30.253056],
        [120.216515, 30.253056],
        [120.21645, 30.253016],
        [120.21645, 30.253016],
        [120.2164, 30.253065],
        [120.2175, 30.250101],
        [120.216446, 30.253012],
        [120.216446, 30.253012],
        [120.21642, 30.253035],
        [120.216446, 30.253033],
        [120.21645, 30.253006],
        [120.21654, 30.253065],
        [120.21653, 30.253063],
        [120.21588, 30.25259],
        [120.21642, 30.253036],
        [120.216515, 30.253073],
      ])
    return {};
  },
});
</script>
<style  lang='scss' scoped>
#container {
  width: 100%;
  height:100%;
  overflow: auto;
}

</style>
<style>
  .amap-logo{
    display: none !important;
}
 .amap-copyright {
    opacity:0;
}
/* .amap-icon{
  display: none;
} */
</style>