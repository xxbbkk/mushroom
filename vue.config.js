module.exports = {
    //配置代理
    devServer: {
      open: 'true',
      proxy: {
        '/todos': {
          target: 'http://www.xiongmaoyouxuan.com',
          ws: true,
          changeOrigin: true
        }
      }
    }
  }