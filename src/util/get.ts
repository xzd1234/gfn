import request from "./request"
 
export default function api(data: any) {
    console.log(data)
 return  new Promise((resolve, reject) => {
     if(data.met){
         request.get(data.api, {data:data.data}).then((res) => {
             resolve(res)
         })
     }
    })
 

}