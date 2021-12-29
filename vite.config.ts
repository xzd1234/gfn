import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0", //ip地址
    port: 3000, //端口号
    // open: true, //启动打开浏览器
    https: false, // 是否开启 https
     proxy: {
      /*  '/api': {
         target: 'http://apis.juhe.cn', //代理地址
         changeOrigin: true,
        rewrite: (path) => path.replace("/^\/api/", "")
       }, */
       '/dingdong': {
        target: 'http://www.dingdongdrtest.cn', //代理地址
         //target: 'http://www.xiezhendong.cn', //代理地址
         changeOrigin: true,
        rewrite: (path) => path.replace("/^\/dingdong/", "/")
       },
       '/api': {
         target: 'http://1.15.63.177:3000', //代理地址
         changeOrigin: true,
        rewrite: (path) => path.replace("/^\/api/", "/")
       }
     }
  },
  css: {//css预处理器
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/scss/variable.scss";`
      },
      pxtorem: {
        rootValue: 37.5,
        propList: ['*']
      },
    },
  },
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: 'vant',
          esModule: true,
          resolveStyle: (name) => `vant/es/${name}/style`,
        },
      ],
    }),
  // removeConsole
  ]
})


