import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible/index.js'
import 'normalize.css/normalize.css'
//工具函数
import Tools from './util/Tool'
//请求api
import request from './util/Api';
import loadAmap from './util/LoadaMap';
//import VConsole from 'vconsole';
import './assets/iconfont/iconfont.js'

import {ImgUrl} from './util/config'
import moment from "moment";
import SvgIcon from './components/SvgIcon.vue'
import buttons from './components/buttons.vue'
import uploadImg from './components/UploadImg.vue'

import { Button, Field, Circle, Icon, Tabbar, TabbarItem, NoticeBar, Swipe, SwipeItem, Toast, Lazyload, Search, Radio, Checkbox, CheckboxGroup, Form,PullRefresh,List ,Cell,CellGroup ,Tabs,Tab,Dialog,RadioGroup,DatetimePicker,Popup,Uploader ,Divider,ActionSheet,Col,Row,ImagePreview} from 'vant';
const vants = [Button, Field, Circle, Icon, Tabbar, TabbarItem, NoticeBar, Swipe, SwipeItem, Toast, Lazyload, Search, Radio, Checkbox, CheckboxGroup, Form,PullRefresh,List,Cell,CellGroup ,Tabs,Tab,Dialog,RadioGroup,DatetimePicker,Popup,Uploader,Divider,ActionSheet,Col,Row];

//const isDebug=  import.meta.env.MODE

// 本地开发调试注入vConsole
/* if (isDebug) {
    new VConsole();
} */
console.log(import.meta.env);

const app = createApp(App);
vants.forEach(item => {
    app.use(item)
});
app.component('btn', buttons) 
app.component('SvgIcon', SvgIcon) 
app.component('uploadImg', uploadImg) 
app.config.globalProperties.ImgUrl=ImgUrl
app.config.globalProperties.$moment=moment
app.config.globalProperties.$ImagePreview=ImagePreview

console.log(app.config.globalProperties)
app.use(Tools).use(loadAmap).use(request).use(store).use(router).mount('#app');
