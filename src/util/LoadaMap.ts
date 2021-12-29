import AMapLoader from "@amap/amap-jsapi-loader";

function $loadAmap() {
  return AMapLoader.load({
    key: '9caaa0fcd0c9dc1e6cfe42de987d117e', // 首次调用 load 时必填
    version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: ['AMap.Geocoder', 'AMap.CitySearch', 'AMap.Marker', ' AMap.Polygon', 'AMap.Driving', 'AMap.GraspRoad', 'AMap.Geolocation','ui/misc/PositionPicker'], // 加载地图插件
    AMapUI: { // 是否需要去加载 AMapUI，缺省则不加载
      version: '1.1', // AMapUI 缺省 1.1
      plugins: [] // 需要加载的 AMapUI ui插件
    }
    /* Loca: { // 是否加载 Loca， 缺省不加载
        version: '1.3.2' // Loca 版本，缺省 1.3.2
      } */
  })
}
export default function (Vue: any) {
  let App = Vue.config.globalProperties;
  App.$loadAmap = $loadAmap


  //根据IP，获取当前城市
  App.$getLocalCity = function () {
    return new Promise((resolve, reject) => {
      $loadAmap().then((AMap) => {
        let citysearch = new AMap.CitySearch();
        citysearch.getLocalCity(function (status: string, result: { info: string; city: any; bounds: any; }) {
          if (status === 'complete' && result.info === 'OK') {
            if (result && result.city && result.bounds) {
              resolve(result)
            }

          }else{
            reject(result)
          }
        })
      })
    })
  }
  //获取经纬度信息
  App.$geGeolocation = function () {
    return new Promise((resolve, reject) => {
      $loadAmap().then((AMap) => {
        AMap.plugin('AMap.Geolocation', function () {
          var geolocation = new AMap.Geolocation({
            // 是否使用高精度定位，默认：true
            enableHighAccuracy: true,
            // 设置定位超时时间，默认：无穷大
            timeout: 3500,
            //是否使用坐标偏移，取值true:为高德地图坐标，取值false:为浏览器定位坐标
            convert: true,
          })
          geolocation.getCurrentPosition(function (status: string, result: any) {
            if (status == 'complete') {
              resolve(result)
            } else {
              reject(result)
            }
          });

        })
      })
    })
  }



}
