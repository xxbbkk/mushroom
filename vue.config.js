module.exports = {
    //配置代理
    devServer: {
      open: 'true',
      proxy: {
        '/api': {
          target: 'http://www.xiongmaoyouxuan.com',
          ws: true,
          changeOrigin: true
        }
      }
    }
  }