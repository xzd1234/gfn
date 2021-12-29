import request from "./request"
import qs from 'qs'
export default function (Vue: any) {
    Vue.config.globalProperties.$Api = Api
}
const Api: object = {
    European: function (params: object) {
        return request.get(`/dingdong/project/select_pagination?${qs.stringify(params)}`)
    },
    Europeans: function (params: object) {
     //   console.log('params',  qs.stringify(params))
        return request.get(`/dingdong/project/select_pagination?${qs.stringify(params)}`)
    },
    ProjectList: function (params: object) {
        return request.get(`/dingdong/project/select_pagination?${qs.stringify(params)}`)
    }, 
    ProjectIntro: function (params: object) {

        return request.get(`/dingdong/project/detail?${qs.stringify(params)}`)
    },
    ImgUpload: function (params: any) {
        return request.post(`/api/cos/file`,params.data,{headers:params.headers})
    }
}


