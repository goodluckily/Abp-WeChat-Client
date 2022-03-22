//在src文件夹下，新建setupProxy.js
const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = function (app) {
    app.use(
        createProxyMiddleware("/api1", {
            target: "http://192.168.6.124:5050",//配置你要请求的服务器地址
            changeOrigin: true,//控制服务器收到请求中的Host的值 true:转换后服务器地址端口 false:转换前的服务器地址端口
            pathRewrite: {
                "^/api1": '' //路径重写
            }
        })
        ,
        //配置多个跨域
        createProxyMiddleware("/api2", {
            target: "http://192.168.6.124:5050",
            changeOrigin: true,
            pathRewrite: {
                "^/api2": ''
            }
        })
    )
}
