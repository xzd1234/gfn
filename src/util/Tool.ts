import { toRefs, reactive, onUnmounted, onMounted } from 'vue';
import router from '../router';
export default function (Vue: any) {
    const App = Vue.config.globalProperties

    const Rexp = {
        url: /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/,
        yuan: /(\.)/
    }
    //人民币格式
    App.$CNY = function (data: any) {
        if (Rexp.yuan.test(data)) {
            return data.split('.')[0]+'.00'
        } else {
            return data + '.00'
        }

    }

    //跳转
    App.$GoTo = function (data: any) {
        if (Rexp.url.test(data.path || data)) {
            location.href = data.path || data
        } else if (Rexp.url.test(data.path) && data.type == "replace") {
            location.replace = data.path
        } else {
            router.push({ path: data.path || data, query: data.query })
        }
    }

    //判断微信环境
    App.$isWeiXin = function () {
        return /MicroMessenger/i.test(window.navigator.userAgent);
    }
    //获取鼠标位置
    App.$useMouse = function () {
        const state = reactive({ x: 0, y: 0 });
        const update = (e: any) => {
            state.x = e.pageX;
            state.y = e.pageY;
        }
        onMounted(() => {
            window.addEventListener('mousemove', update);
        })
        onUnmounted(() => {
            window.addEventListener('mousemove', update);
        })
        return toRefs(state)
    }
    //防抖  在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时
    //按钮提交：防止多次提交，只执行最后一次
    //搜索框联想：防止请求发送多次，只发送最后一次输入
    App.$debounce = function (func: Function, wait: number = 500, immediate: boolean = false) {
        let timeout: any;
        return () => {
            const context = this;
            const args = arguments;
            if (timeout) clearTimeout(timeout);
            if (immediate) {
                const callNow = !timeout;
                timeout = setTimeout(function () {
                    timeout = null;
                }, wait);
                if (callNow) func.apply(context, args);
            } else {
                timeout = setTimeout(function () {
                    func.apply(context, args);
                }, wait);
            }
        }
    }
    //节流 规定在一个单位时间内，只能触发一次函数。如果在这个单位时间内触发了多次函数，那么只有一次会生效
    //拖拽：固定时间内只执行一次，防止超高频次触发位置变动   
    //缩放：监控浏览器resize事件
    App.$throttle = function (func: Function, wait: number = 500) {
        let timeout: any;
        return () => {
            const context = this;
            const args = arguments;
            if (!timeout) {
                timeout = setTimeout(() => {
                    timeout = null;
                    func().apply(context, args);
                }, wait)

            };
        }
    }
    //获取url传参的参数名、参数值
    /*   App.$GetRequest = function (str: string) {
          let url: string, strs: string, arr: any, obj: any
          if (typeof str == "undefined") {
              url = decodeURI(location.search); //获取url中"?"符后的字符串
          } else {
              url = "?" + str.split("?")[1];
          }
          obj = new Object();
          if (url.indexOf("?") != -1) {
              strs = url.substr(1);
              arr = strs.split("&");
              for (let i = 0; i < arr.length; i++) {
                  obj[arr[i].split("=")[0]] = decodeURI(arr[i].split("=")[1]);
              }
          }
          return obj;
      } */
    // 指定字符串 溢出显示省略号
    App.$getSubString = function (str: string, num: number = 1) {
        let newStr: string;
        if (str) {
            str = str + '';
            if (str.trim().length > num) {
                newStr = str.trim().substring(0, num) + "...";
            } else {
                newStr = str.trim();
            }
        } else {
            newStr = ''
        }
        return newStr;
    }
}