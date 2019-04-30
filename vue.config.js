module.exports = {
    //配置代理
    devServer: {
      proxy: {
        '/todos': {
          target: 'http://jsonplaceholder.typicode.com',
          ws: true,
          changeOrigin: true
        }
      }
    }
  }